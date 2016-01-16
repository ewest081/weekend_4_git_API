/**
 * Created by lizwestberg on 1/16/16.
 */
var app = angular.module('clientApp', []);

app.controller('MainController', ['$scope', 'GitAPI', function($scope, GitAPI){

    $scope.message = "Script working!";

    $scope.data = GitAPI.data;

    console.log("controller data:", GitAPI.data);

    GitAPI.fetch();
}]);

app.factory('GitAPI', ['$http', function($http){
    var data = {};

    var fetchData = function(){

        $http.jsonp("https://api.github.com/users/" + "ewest081" + "/events?callback=JSON_CALLBACK").then(function(response) {
            console.log("API call response:", response);
            data.results = response;
        });

    };

    return {
        fetch: fetchData,
        data: data
    }
}]);

thetaNames = function(){
    return ["joeltmiller", "ewest081", "scottbromander", "rohran01", "the-amber-joy", "abrooksnagel", "CharlieGitDev", "cwgraff", "Dante0031", "EricWAnderson", "gwenpaul", "Hinges", "jeremycloutier", "jmanders85", "jrobby", "kenziebultema", "kyracrow", "mcreinders", "nataliekoch", "rimalta", "rothermal", "samantha212", "sjorgens", "sothep"];
};