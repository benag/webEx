
"use strict"
var dataHandler = require('../handlers/devicesDataHandler.js');

class dataController {
    constructor(){

    }
    getDevices(){
        return dataHandler.getDevices();
    }
}