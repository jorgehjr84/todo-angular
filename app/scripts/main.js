var app = angular.module('ToDo',[]);


app.controller('todoController', ['$scope',function($scope){
  var self = this;

  self.todos = [
  {'title': 'Build a todo app', 'done': false}
];

  self.addTodo  = function(){

  self.todos.push({'title':self.newTodo, 'done':false})
  self.newTodo = '';
};


  self.clearCompleted = function(){
    self.todos = self.todos.filter(function(item){
    return !item.done;
  })
}



}]);


// Built with the help of tutorial on Youtube
// https://www.youtube.com/watch?v=FSOiVprDdj0
