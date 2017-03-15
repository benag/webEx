
"use strict"

var protocolsDataHandler = require('../handlers/protocolsDataHandler.js');

class protocolController {
    constructor(){

    }
    getProtocols(){
        var handler = new protocolsDataHandler();
        return handler.getProtocols();
    }
}

module.exports = protocolController;