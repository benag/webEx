
"use strict"
var fs = require('fs');
var Path = require('path');
var cloudant = require('../services/cloudantService.js');

class deviceDataHandler {

    constructor(){

    }
    getDevices(){
        var cld = new cloudant();
        var db = cld.getDB().db.use("ex");
        return new Promise((resolve, reject) => {
            db.find( {selector:{type:'group'}},function(err, body) {
                if (!err) {
                    resolve(body.docs);
                }else{
                    reject(err);
                }
            });
        });
        //return new Promise((resolve, reject) => {
        //    var path = Path.resolve(__dirname, '..', 'files/ex_data.js');
        //    fs.readFile(path, 'utf8', function (err, data) {
        //        if (err) reject(err);
        //        resolve(JSON.parse(data).device_groups);
        //    });
        //});
    }

}
module.exports = deviceDataHandler;