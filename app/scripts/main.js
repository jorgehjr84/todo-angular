var app = angular.module('ToDo',[]);


app.controller('todoController', ['$scope',function($scope){
  $scope.todos = [
  {'title': 'Build a todo app', 'done': false}
];

$scope.addTodo  = function(){}
$scope.clearCompleted = function(){}



}]);
