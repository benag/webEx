
'use strict';

var should    = require("chai").should;
var expect    = require("chai").expect;
var redisService  = require('../services/redisService.js');

suite('Connect to redis database', function() {
    let db = {};
    test('connect local', function() {
        this.db = new redisService();
        expect(db.getDB()).to.not.be.undefined;

    });
    test('setting an object in redis', function() {
        //this.db =
        //expect(db.getDB()).to.not.be.undefined;

    });
    test('getting an object', function() {
        //var db = new redisService();
        //expect(db.getDB()).to.not.be.undefined;

    });
});