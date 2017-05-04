
const dbName = 'example';

module.exports = function () {
  var module = {};
  var myDb;
  var ObjectID = require("mongodb").ObjectID;
  var MongoClient = require("mongodb").MongoClient;

  module.init = function(appEnv)  {
    // Mongo instrumentation
    var mongoCredentials = appEnv.services['compose-for-mongodb'][0].credentials;
    var mongoCa = [new Buffer(mongoCredentials.ca_certificate_base64, "base64")];
    var mongoClientConfig = {
    	mongos: {
    		ssl: true,
    		sslValidate: true,
    		sslCA: mongoCa,
    		poolSize: 1,
    		reconnectTries: 1
    	}
    };
    MongoClient.connect(mongoCredentials.uri, mongoClientConfig, (err, db) => {
    	if(err) {
    		console.log(err);
      } else {
    		db.createCollection(dbName, (err, collection) => {
    			myDb = collection;
    			//console.log(myDb);
    			if (err) {
    				console.error('failed to connection to collection: ' + dbName);
    				console.error(err);
    			}
    		});
    		console.log("Connected to MongoDB!");
    	}
    });
  };

  module.getAllPromise = function getAllPromise() {
    return new Promise((resolve, reject) => {
      var documentsStream = myDb.find().stream();
    	var documents = [];
    	documentsStream.on("data", (item) => {
    		documents.push(item);
    	});
    	documentsStream.on("end", () => {
    		resolve(documents);
    	});
    });
  }

  module.getPromise = function getPromise(id) {
  	return new Promise((resolve, reject) => {
  		myDb.findOne({'_id': id}, (err, item) => {
  			if (err) {
  				console.log(err);
  				reject({'result': err});
  			}
  			resolve({'result': item});
  		});
  	});
  }

  module.insertPromise = function insertPromise(jsonData) {
  	return new Promise((resolve, reject) => {
  		myDb.insert(jsonData, {w:1}, function(err, result){
  			if (err) {
  				reject({'result': err});
  			}
  			resolve({'result': result});
  		});
  	});
  }

  module.checkIdPromise = function checkIdPromise(jsonData, id) {
  	if (!jsonData['_id']) {
  		jsonData['_id'] = formatId(id);
  	} else {
      jsonData['_id'] = formatId(jsonData['_id']);
    }
  	return module.insertPromise(jsonData);
  }

  module.deletePromise = function deletePromise(id) {
  	return new Promise((resolve, reject) => {
  		myDb.remove({'_id': formatId(id)}, {w:1}, (err, result) => {
  			if (err) {
          console.error(err);
  				reject({'result': err});
  			}
  			resolve({'result': result});
  		});
  	});
  }

  function formatId(id) {
    return id.length > 23 ? ObjectID(id) : id;
  }

  return module;
};
