//Project service used for projects REST endpoint
angular.module('webEx').factory("restClient", ['$http','$q',
    function ($http, $q) {

        var getDevices = function(){
          return $http.get('/devices')
        };

        var getProtocols = function(){
            return $http.get('/protocols')
        };

        var getTimes = function() {
            return $http.get('/times')
        };

        var getSelectedDevices = function(groups){
            var devices = [];
            for (var i = 0; i < groups.length; i++){
                var group = groups[i];
                for (var z = 0; z < group.devices.length; z++){
                    if (group.devices[z].selected) devices.push(group.devices[z].name);
                }
            }
            return devices;
        };

        var getSelectedProtocols = function(protocols){
            var selectedProtocols = [];
            for (var i = 0; i < protocols.length; i++){
                if (protocols[i].selected) selectedProtocols.push(protocols[i].name);
            }
            return selectedProtocols;
        };

        var getSelectedTimes = function(times){
            var selectedTimes = [];
            for (var i = 0; i < times.length; i++){
                if (times[i].selected) selectedTimes.push(times[i].name);
            }
            return selectedTimes;

        };

        var submitDevices = function(groups, protocols, times){

            return $http.post('/devices',{data:{devices:getSelectedDevices(groups),times: getSelectedTimes(times), protocols: getSelectedProtocols(protocols) }});
            //return $http.get('/devices' + '?' + )
        };


        return {
            getDevices: getDevices,
            getProtocols: getProtocols,
            getTimes: getTimes,
            submitDevices: submitDevices
        };
    }
]);