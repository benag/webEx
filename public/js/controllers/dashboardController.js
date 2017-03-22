
angular.module('webEx').controller('dashboardController', ['$scope', '$location', '$http',
    function ($scope, $location, $http) {
        $http.post('/views')
        .then(function(res){
            if (res.data){
                $scope.views = res.data.views;
            }
        }).catch(function(err){
            alert('error saving to redis');
        })
    }
]);