
"use strict"
var fs = require('fs');

class deviceDataHandler {

    constructor(){

    }
    getDevices(){
        return new Promise((resolve, reject) => {
            fs.readFile('../files/ex_data.js', 'utf8', function (err, data) {
                if (err) reject(err);
                resolve(obj.device_groups); //Yay! Everything went well!
            });
        });

        //var obj = JSON.parse(fs.readFileSync('../files/ex_data.js', 'utf8'));
        //return obj.device_groups;
    }

}