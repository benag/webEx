ex.directive('widget3', function (restClient,appGlobal,$rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/widget3.html',
        scope: {},
        link: function (scope, element, attrs) {
            restClient.getTimes()
            .then(function(data){
                appGlobal.get.times = data.data;
                scope.times = appGlobal.get.times;
            })
            .catch(function(err){
                alert(err);
            });

            $rootScope.$on('clear', function(){
                for (var i =0 ;i < scope.times.length; i++){
                    scope.times[i].selected = false;
                }
            });

            scope.selectTime = function(index){
                for (var i =0 ;i < scope.times.length; i++){
                    if (i != index) scope.times[i].selected = false;
                }
            }
        }
    };
});