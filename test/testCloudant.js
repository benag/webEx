
'use strict';

var should    = require("chai").should;
var cloudantService  = require('../services/cloudantService.js');

suite('Connect to cloudant database', function() {
    test('connect local', function() {
        var db = new cloudantService();
    });
});