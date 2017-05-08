const cfenv = require('cfenv');
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// AppMetrics monitoring instrumentation
require('appmetrics-dash').attach();

// Emulating VCAP_VARIABLES if running in local mode
var appEnv = cfenv.getAppEnv();
if (appEnv.isLocal) {
  console.log('Defaulting to local environment config.');
  localConfig = require('./vcap-local.js');
  appEnv = cfenv.getAppEnv();
}

var mongo = require('./mongo-utils.js')();
mongo.init(appEnv);

// Swagger instrumentation
app.use("/swagger/api", express.static("./public/swagger.yaml"));
app.use("/explorer", express.static("./public/swagger-ui"));

// Business logic
app.get("/products", (req, res, next) => {
	//Stream all my documents back to the client.
	mongo.getAllPromise()
	.then((result)=>{
		res.json(result);
	});
});

app.post("/products", (req, res, next) => {
	//Add a few documents to the collection.
	if (Object.prototype.toString.call(req.body) === '[object Array]') {
		//By default in the standard mongodb deployment, we can only
		//'batch' one at a time so must do it this way.
		var promises = [];
		for(item in req.body) {
			promises.push(mongo.insertPromise(req.body[item]));
		}
		Promise.all(promises).then((responses) => {
			res.json(responses);
		});
	} else {
		//Assuming that succeeds lets attempt an insert.
		mongo.insertPromise(req.body).
		then((result) => {
			res.json(result);
		})
		.catch((reason) => {
			console.error(reason);
			res.json(reason);
		});
	}
});

app.get("/product/:id", (req, res, next) => {
	mongo.getPromise(req.params.id)
	.then((result) => {
		res.json(result);
	})
	.catch((reason) => {
		console.error(reason);
		res.json(reason);
	});

});

//Add a new entry
app.put("/product/:id", (req, res, next) => {
	mongo.checkIdPromise(req.body, req.params.id)
	.then((result) => {
		res.json(result);
	})
	.catch((reason) => {
		res.json(reason);
	});
});

app.delete("/product/:id", (req, res, next) => {
	mongo.deletePromise(req.params.id)
	.then((result) => {
		res.json(result);
	})
	.catch((reason) => {
		console.error(reason);
		res.json(reason);
	});
});


// Starting the server
const port = 'PORT' in process.env ? process.env.PORT : 8080;
app.listen(port, function () {
	const address = (this.address().address === '::') ? 'localhost' : this.address().address;
	const port = this.address().port;
	console.log(`Example app listening on ${address}:${port}`)
	console.log(`OpenAPI (Swagger) spec is available at ${address}:${port}/swagger/api`)
	console.log(`Swagger UI is available at ${address}:${port}/explorer`)
});
