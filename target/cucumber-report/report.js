$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleAPIAddressCheck.feature");
formatter.feature({
  "line": 2,
  "name": "Google API Address Validation",
  "description": "",
  "id": "google-api-address-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@api"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Formatted Address",
  "description": "",
  "id": "google-api-address-validation;formatted-address",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I access the google geocode api",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I call the API with post code WD17 1JJ",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\u0027Clarendon Rd, Watford, Hertfordshire WD17 1JJ, UK\u0027 should be returned",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleAPIAddressCheckStepDefintions.scala:15"
});
formatter.result({
  "duration": 131910410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WD17 1JJ",
      "offset": 30
    }
  ],
  "location": "GoogleAPIAddressCheckStepDefintions.scala:22"
});
formatter.result({
  "duration": 1096847901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Clarendon Rd, Watford, Hertfordshire WD17 1JJ, UK",
      "offset": 1
    }
  ],
  "location": "GoogleAPIAddressCheckStepDefintions.scala:28"
});
formatter.result({
  "duration": 239883776,
  "status": "passed"
});
});