/**
 * Created by lizwestberg on 1/16/16.
 */
var app = angular.module('clientApp', []);

app.controller('MainController', ['$scope', 'GitAPI', function($scope, GitAPI){

    $scope.message = "Script working!";

    $scope.data = GitAPI.data;

    //console.log(GitAPI.data);

    GitAPI.fetch();
}]);

app.factory('GitAPI', ['$http', function($http){
    var data = [];

    fetchData = function(){

        //$http.get('/getGit').then(function(respon se){
        //    data.results = response.data
        //});

        thetaGit = thetaNames();

        for(i = 0; i < thetaGit.length; i++){

            pullUser = {};

            $http.jsonp('https://api.github.com/users/' + thetaGit[i] + '/events?callback=JSON_CALLBACK').then(function (response) {

                pullUser.userName = response.data.data;

                data.push(pullUser)
            });
        }
    };
    console.log(data);


    return {
        fetch: fetchData,
        data: data
    }
}]);

thetaNames = function(){
    return ["joeltmiller", "ewest081", "scottbromander", "rohran01", "the-amber-joy", "abrooksnagel", "CharlieGitDev", "cwgraff", "Dante0031", "EricWAnderson", "gwenpaul", "Hinges", "jeremycloutier", "jmanders85", "jrobby", "kenziebultema", "kyracrow", "mcreinders", "nataliekoch", "rimalta", "rothermal", "samantha212", "sjorgens", "sothep"];
};