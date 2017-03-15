
"use strict"

let devicesController = require('../controllers/devicesController');

class routes {

  constructor(app){
    this.app = app;
    this.app.get('/devices', routes.getDevices);
  }

  getDevices(req, res) {
    devicesController.getDevices()
    .then(function (groups) {
      res.json(groups)
    })
    .catch(function (err) {
      // process via slack or 3rd party..
    })
  }

}

module.exports = routes;


//exports.index = function(req, res){
//  res.render('index', { title: 'Express' })
//};
//
//exports.getDevices = function(req, res){
//  devicesController.getDevices()
//  .then(function(groups){ res.json(groups)})
//  .catch(function(err){
//    // process via slack or 3rd party..
//  })
//};