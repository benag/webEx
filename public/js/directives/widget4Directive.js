ex.directive('widget4', function (restClient, appGlobal,$rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/widget4.html',
        scope: {},
        link: function (scope, element, attrs) {
            scope.groups = appGlobal.get.devices;

            scope.clear = function(){
                $rootScope.$broadcast('clear');
            };
            scope.submit = function(){
                restClient.submitDevices(scope.groups,scope.protocols, scope.times )
                .then(function(data){
                    alert('Submitted');
                }).catch(function(err){
                    alert('There was a problem with your submission');
                })
            };
            scope.groups = appGlobal.get.devices;
            scope.protocols = appGlobal.get.protocols;
            scope.times = appGlobal.get.times;

            scope.timeSelected = function(){
                for (var i = 0 ; i <  scope.times.length; i++){
                    if (scope.times[i].selected) return true;
                }
                return false;
            };
            scope.$watch(function () { return appGlobal.get.devices }, function (newVal, oldVal) {
                if (typeof newVal !== 'undefined') {
                    scope.groups = appGlobal.get.devices;
                }
            }, true);
            scope.$watch(function () { return appGlobal.get.protocols }, function (newVal, oldVal) {
                if (typeof newVal !== 'undefined') {
                    scope.protocols = appGlobal.get.protocols;
                    //scope.box2 = false;
                    //for (var i = 0; i < scope.protocols.length; i++){
                    //    if (scope.protocols[i].selected) scope.box2 = true;
                    //}
                }
            }, true);
            scope.$watch(function () { return appGlobal.get.times }, function (newVal, oldVal) {
                if (typeof newVal !== 'undefined') {
                    scope.times = appGlobal.get.times;
                    //for (var z = 0; z < scope.times.length; z++){
                    //    if (scope.times[z].selected) scope.time = scope.times[z].name;
                    //}

                }
            }, true);
            scope.timeSelected = function(){
                for (var i = 0 ; i <  scope.times.length; i++){
                    if (scope.times[i].selected) return true;
                }
                return false;
            };
            scope.protocolSelected = function(){

                for (var i = 0 ; i <  scope.protocols.length; i++){
                    if (scope.protocols[i].selected) return true;
                }
                return false;
            };

        }
    };
});