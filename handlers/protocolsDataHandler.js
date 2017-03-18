
"use strict"

var fs = require('fs');
var Path = require('path');
var cloudant = require('../services/CloudantService.js');


class protocolsDataHandler {

    constructor(){

    }
    getProtocols(){
        var cld = new cloudant();
        var db = cld.getDB().db.use("ex");
        return new Promise((resolve, reject) => {
            db.find( {selector:{}},function(err, body) {
                if (!err) {
                    resolve(body.rows);
                }else{
                    reject(err);
                }
            });
        });
    }

}
module.exports = protocolsDataHandler;