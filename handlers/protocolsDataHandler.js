
"use strict"

var fs = require('fs');
var Path = require('path');


class protocolsDataHandler {

    constructor(){

    }
    getProtocols(){
        return new Promise((resolve, reject) => {
            var path = Path.resolve(__dirname, '..', 'files/ex_data.js');
            fs.readFile(path, 'utf8', function (err, data) {
                if (err) reject(err);
                resolve(JSON.parse(data).protocols);
            });
        });
    }

}
module.exports = protocolsDataHandler;