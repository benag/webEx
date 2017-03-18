
'use strict';

var should    = require("chai").should;
var cloudantService  = require('../services/CloudantService.js');

//describe("Connect to cloudant database", function() {
//    describe("connect local", function() {
//        var db = new cloudantService();
//
//    });
//
//});
suite('Connect to cloudant database', function() {
    test('connect local', function() {
        var db = new cloudantService();
    });
});