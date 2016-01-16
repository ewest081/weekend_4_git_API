/**
 * Created by lizwestberg on 1/16/16.
 */
var app = angular.module('clientApp', []);

app.controller('MainController', ['$scope', 'GitAPI', function($scope, GitAPI){
    $scope.message = "Script working!";

    $scope.data = GitAPI.data;

    GitAPI.fetchData();
}]);

app.factory('GitAPI', ['$http', function($http){
    var data = {};

    var fetchData = function(){
        $http.get('/getGit').then(function(response){
            data.results = response.data
        })
    };

    return {
        fetchData: fetchData,
        data: data
    }
}]);