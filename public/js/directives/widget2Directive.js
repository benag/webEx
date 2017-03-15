ex.directive('widget2', function (restClient, appGlobal, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/widget2.html',
        scope: {},
        link: function (scope, element, attrs) {
            restClient.getProtocols()
            .then(function(data){
                console.log(data.data);
                appGlobal.get.protocols = data.data;
                scope.protocols = appGlobal.get.protocols;
            })
            .catch(function(err){
                alert(err);
            });

            $rootScope.$on('clear', function(){
                for (var i = 0 ;i < scope.protocols.length; i++){
                    scope.protocols[i].selected = false;
                }
            });

            scope.selectProtocol = function(index){
                for (var i =0 ;i < scope.protocols.length; i++){
                    if (i != index) scope.protocols[i].selected = false;
                }
            }
        }
    };
});