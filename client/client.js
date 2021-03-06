/**
 * Created by lizwestberg on 1/16/16.
 */
var app = angular.module('clientApp', []);

app.controller('MainController', ['$scope', 'GitAPI', function($scope, GitAPI){

    $scope.gitData = GitAPI.data;

    GitAPI.fetch();
}]);

app.factory('GitAPI', ['$http', function($http){
    var data = [];

    gitNames = ["joeltmiller", "ewest081", "scottbromander", "rohran01", "the-amber-joy", "abrooksnagel", "CharlieGitDev", "cwgraff", "Dante0031", "EricWAnderson", "gwenpaul", "Hinges", "jeremycloutier", "jmanders85", "jrobby", "kenziebultema", "kyracrow", "mcreinders", "nataliekoch", "rimatla", "rothermal", "samantha212", "sjorgens", "sothep"];

    var fetchData = function(){
        for(i = 0; i < gitNames.length; i++) {
            $http.jsonp("https://api.github.com/users/" + gitNames[i] + "/events?callback=JSON_CALLBACK").then(function(response) {
                console.log("API call response:", response);
                data.push(response.data.data[0]);
            });
        }
    };

    return {
        fetch: fetchData,
        data: data
    }
}]);