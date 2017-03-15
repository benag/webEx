
"use strict"
var timeDataHandler = require('../handlers/timeDataHandler.js');

class timeController {
    constructor(){

    }
    getTimes(){
        var handler = new timeDataHandler();
        return handler.getTimes();
    }
}

module.exports = timeController;