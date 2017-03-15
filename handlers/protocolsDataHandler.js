
"use strict"

var fs = require('fs');

class protocolsDataHandler {

    constructor(){

    }
    getProtocols(){
        var obj = JSON.parse(fs.readFileSync('../files/ex_data.js', 'utf8'));
        return obj.times;
    }

}