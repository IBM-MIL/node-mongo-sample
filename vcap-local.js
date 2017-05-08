// This module helps to run the application in local development environment
// by faking CloudFoundry's VCAP_SERVICES environment variable
process.env.VCAP_SERVICES = process.env.VCAP_SERVICES || JSON.stringify({

	"cloudantNoSQLDB": [
		{
			label: "cloudantNoSQLDB",
			name: "App Insights Cloudant",
			credentials: {
				"password": "e34841bc7a9575435957b419cf6ab54e54f6850e79c5d649c6e157f119c15afa",
				"url": "https://6248d205-b6ec-4d1b-8aeb-3df9b0938389-bluemix:e34841bc7a9575435957b419cf6ab54e54f6850e79c5d649c6e157f119c15afa@6248d205-b6ec-4d1b-8aeb-3df9b0938389-bluemix.cloudant.com",
				"username": "6248d205-b6ec-4d1b-8aeb-3df9b0938389-bluemix"
			}
		}
	],
	"compose-for-mongodb": [
		{
			"credentials": {
				"db_type": "mongodb",
				"name": "bmix-dal-yp-604e042e-e124-4e98-abf3-95437742c8ce",
				"uri_cli": "mongo --ssl --sslAllowInvalidCertificates bluemix-sandbox-dal-9-portal.7.dblayer.com:26232/admin -u admin -p KXNQNPZCQPUFZCDK",
				"ca_certificate_base64": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURlekNDQW1PZ0F3SUJBZ0lFV1FuOE5EQU5CZ2txaGtpRzl3MEJBUTBGQURBL01UMHdPd1lEVlFRREREUnQKYVd4aWRXbHNaRUIxY3k1cFltMHVZMjl0TFRjM1kySTJOek0zWVRGaU4yUm1Nek15WkRJM1pXVXdObVJpWVdNMApaRGd6TUI0WERURTNNRFV3TXpFMU5UQXhNbG9YRFRNM01EVXdNekUxTURBd01Gb3dQekU5TURzR0ExVUVBd3cwCmJXbHNZblZwYkdSQWRYTXVhV0p0TG1OdmJTMDNOMk5pTmpjek4yRXhZamRrWmpNek1tUXlOMlZsTURaa1ltRmoKTkdRNE16Q0NBU0l3RFFZSktvWklodmNOQVFFQkJRQURnZ0VQQURDQ0FRb0NnZ0VCQUw1cS8vRWtOSC9NRm8rRwo1Rk1KQlFYVkZxc1FIRjdYcDAxOXU0ZzU1RStPMVovR2JXSlMrTm9YUklvUS9qeDFNMTVlOFBsMjVyNmZJZm9mCllsc3dLeDJ5K3o5dXVhZWNLVU00UlJ6dlJwQkFXY0JzSmVrdHBsRE9DemkycUh5NEpHMDFmdko2N3pZc3ZzaTYKdFc1Umt2R0czaUQzUTFTUzArQUdHUkdNbDQzemNVcWRiT0Faamg1ekg3aUdlK3FjQ2VSeXJmbUlHMDNwVlZNSQp0RlF3ek5iU1pGNmtxK1hVY3lKa05TaEFzQnl3eUxIOVF3ZHpXdzVpekhvNVM0a01yaHFoTlBqMmRPUjlKWTR3CjJWeUI2Mmt5NThYK3NmdHYxS3cvamJ1alloT05FWHRuM1dickxXaC84LzdrK2loS1U4Nm9GbWFBWEtZbFduTDIKdW05cjBva0NBd0VBQWFOL01IMHdIUVlEVlIwT0JCWUVGTUpXOFhYemJISENOWndicnIvc1pxNmxhNVNyTUE0RwpBMVVkRHdFQi93UUVBd0lDQkRBZEJnTlZIU1VFRmpBVUJnZ3JCZ0VGQlFjREFRWUlLd1lCQlFVSEF3SXdEQVlEClZSMFRCQVV3QXdFQi96QWZCZ05WSFNNRUdEQVdnQlRDVnZGMTgyeHh3aldjRzY2LzdHYXVwV3VVcXpBTkJna3EKaGtpRzl3MEJBUTBGQUFPQ0FRRUFPWll4citJLzFuS1R1cnBKOTBHb3AySmUySDFITVF0L2c5MGh2cDlQWFhyNgpwdmQveEJqemJtWlJCZlNwUlo5UWM0VGk2VzA1SGFiNG56K1NUekN4UjdtTWdUVU05MGh5U2lDaS9SMUwzNjU1Cmk2ZEZpemg0L2NpUStmY00xY2ZOQVFBdmYyZndRZWdMajc3eDFpOWFNL1c0V21TaEpHT0orOHpZWkROamNTRGgKNmxWdUJJZ1NTbXBtTFhJUWJ1RStmaWJXWTB6L3VmREs2Y3UyRmR1QkZHczZpYkJJcGoxWVd3RG9oVHN2eUpGTQowclRZKzZvTitsWDN1SG0vUDVTd0hnQ1hlZm9vMW4vZ05ISEt0aFJQQXlRMnpBbDF3dU9lUFR3UnBEVXFmWW5xCldQZVJacFpTUEMwMVZSbDB4MUdIMUhGRmR1L2MwVStMaHpXWjUxbCt4Zz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K",
				"deployment_id": "5909fc2efdcc9c0010000a6f",
				"uri": "mongodb://admin:KXNQNPZCQPUFZCDK@bluemix-sandbox-dal-9-portal.7.dblayer.com:26232,bluemix-sandbox-dal-9-portal.8.dblayer.com:26232/admin?ssl=true"
			},
			"syslog_drain_url": null,
			"label": "compose-for-mongodb",
			"provider": null,
			"plan": "Standard",
			"name": "Compose for MongoDB-am",
			"tags": [
				"big_data",
				"data_management",
				"ibm_created"
			]
		}
	]
});

/*
{
  "compose-for-mongodb": [
    {
      "credentials": {
        "db_type": "mongodb",
        "name": "bmix-dal-yp-604e042e-e124-4e98-abf3-95437742c8ce",
        "uri_cli": "mongo --ssl --sslAllowInvalidCertificates bluemix-sandbox-dal-9-portal.7.dblayer.com:26232/admin -u admin -p KXNQNPZCQPUFZCDK",
        "ca_certificate_base64": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURlekNDQW1PZ0F3SUJBZ0lFV1FuOE5EQU5CZ2txaGtpRzl3MEJBUTBGQURBL01UMHdPd1lEVlFRREREUnQKYVd4aWRXbHNaRUIxY3k1cFltMHVZMjl0TFRjM1kySTJOek0zWVRGaU4yUm1Nek15WkRJM1pXVXdObVJpWVdNMApaRGd6TUI0WERURTNNRFV3TXpFMU5UQXhNbG9YRFRNM01EVXdNekUxTURBd01Gb3dQekU5TURzR0ExVUVBd3cwCmJXbHNZblZwYkdSQWRYTXVhV0p0TG1OdmJTMDNOMk5pTmpjek4yRXhZamRrWmpNek1tUXlOMlZsTURaa1ltRmoKTkdRNE16Q0NBU0l3RFFZSktvWklodmNOQVFFQkJRQURnZ0VQQURDQ0FRb0NnZ0VCQUw1cS8vRWtOSC9NRm8rRwo1Rk1KQlFYVkZxc1FIRjdYcDAxOXU0ZzU1RStPMVovR2JXSlMrTm9YUklvUS9qeDFNMTVlOFBsMjVyNmZJZm9mCllsc3dLeDJ5K3o5dXVhZWNLVU00UlJ6dlJwQkFXY0JzSmVrdHBsRE9DemkycUh5NEpHMDFmdko2N3pZc3ZzaTYKdFc1Umt2R0czaUQzUTFTUzArQUdHUkdNbDQzemNVcWRiT0Faamg1ekg3aUdlK3FjQ2VSeXJmbUlHMDNwVlZNSQp0RlF3ek5iU1pGNmtxK1hVY3lKa05TaEFzQnl3eUxIOVF3ZHpXdzVpekhvNVM0a01yaHFoTlBqMmRPUjlKWTR3CjJWeUI2Mmt5NThYK3NmdHYxS3cvamJ1alloT05FWHRuM1dickxXaC84LzdrK2loS1U4Nm9GbWFBWEtZbFduTDIKdW05cjBva0NBd0VBQWFOL01IMHdIUVlEVlIwT0JCWUVGTUpXOFhYemJISENOWndicnIvc1pxNmxhNVNyTUE0RwpBMVVkRHdFQi93UUVBd0lDQkRBZEJnTlZIU1VFRmpBVUJnZ3JCZ0VGQlFjREFRWUlLd1lCQlFVSEF3SXdEQVlEClZSMFRCQVV3QXdFQi96QWZCZ05WSFNNRUdEQVdnQlRDVnZGMTgyeHh3aldjRzY2LzdHYXVwV3VVcXpBTkJna3EKaGtpRzl3MEJBUTBGQUFPQ0FRRUFPWll4citJLzFuS1R1cnBKOTBHb3AySmUySDFITVF0L2c5MGh2cDlQWFhyNgpwdmQveEJqemJtWlJCZlNwUlo5UWM0VGk2VzA1SGFiNG56K1NUekN4UjdtTWdUVU05MGh5U2lDaS9SMUwzNjU1Cmk2ZEZpemg0L2NpUStmY00xY2ZOQVFBdmYyZndRZWdMajc3eDFpOWFNL1c0V21TaEpHT0orOHpZWkROamNTRGgKNmxWdUJJZ1NTbXBtTFhJUWJ1RStmaWJXWTB6L3VmREs2Y3UyRmR1QkZHczZpYkJJcGoxWVd3RG9oVHN2eUpGTQowclRZKzZvTitsWDN1SG0vUDVTd0hnQ1hlZm9vMW4vZ05ISEt0aFJQQXlRMnpBbDF3dU9lUFR3UnBEVXFmWW5xCldQZVJacFpTUEMwMVZSbDB4MUdIMUhGRmR1L2MwVStMaHpXWjUxbCt4Zz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K",
        "deployment_id": "5909fc2efdcc9c0010000a6f",
        "uri": "mongodb://admin:KXNQNPZCQPUFZCDK@bluemix-sandbox-dal-9-portal.7.dblayer.com:26232,bluemix-sandbox-dal-9-portal.8.dblayer.com:26232/admin?ssl=true"
      },
      "syslog_drain_url": null,
      "label": "compose-for-mongodb",
      "provider": null,
      "plan": "Standard",
      "name": "Compose for MongoDB-am",
      "tags": [
        "big_data",
        "data_management",
        "ibm_created"
      ]
    }
  ]
}
*/
