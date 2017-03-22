
"use strict"

var devicesController  = require('../controllers/devicesController');
var protocolsController  = require('../controllers/protocolsController');
var timeController  = require('../controllers/timeController');
var redisService = require('../services/redisService');

class routes {

  constructor(app){
    this.app = app;
    this.app.get('/devices', this.getDevices);
    this.app.get('/protocols', this.getProtocols);
    this.app.get('/times', this.getTimes);
    this.app.post('/devices', this.setDevices);
    this.app.post('/views', this.setViews);
  }

  getDevices(req, res) {
    var controller  =  new devicesController();
    controller.getDevices()
    .then(function (groups) {
      res.json(groups)
    })
    .catch(function (err) {
      // process via slack or 3rd party..
    })
  }
  getProtocols(req, res) {
    var controller  =  new protocolsController();
    controller.getProtocols()
    .then(function (protocols) {
      res.json(protocols)
    })
    .catch(function (err) {
      // process via slack or 3rd party..
    })
  }
  getTimes(req, res) {
    var controller  =  new timeController();
    controller.getTimes()
    .then(function (protocols) {
      res.json(protocols)
    })
    .catch(function (err) {
      // process via slack or 3rd party..
    })
  }
  setDevices(req, res) {
    var controller  =  new devicesController();
    controller.setDevices(req.body.data)
    .then(function () {
      res.json('OK')
    })
    .catch(function (err) {
      // process via slack or 3rd party..
    })
  }
  setViews(req, res){
    var redis  =  new redisService();
    redis.get('views')
    .then(function (result) {
      if (results != null){
        res.json(results);
      }else{
        redis.set('views','view',1);
      }
    })
    .catch(function (err) {
      // process via slack or 3rd party..
    })

  }

}

module.exports = routes;


