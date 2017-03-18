
'use strict';

var should    = require("chai").should();
var protocolController  = require('../controllers/protocolsController.js');

describe("Connect to cloudant database", function() {
    describe("connect local", function() {
        console.log('testing controller');
        var controller  = new protocolController();
        should.exist(controller.getProtocols());

    });

});