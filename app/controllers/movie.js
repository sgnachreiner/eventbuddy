var movieApp = angular.module('movieApp', ['MovieModel']);


// Index: http://localhost/views/recipe/index.html

movieApp.controller('IndexCtrl', function ($scope, MovieRestangular) {

  // Helper function for opening new webviews
  $scope.open = function() {
    webView = new steroids.views.WebView("/views/question/index.html");
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/recipe.js)
MovieRestangular.all('movie').getList().then(function(movies){
    $scope.movies = movies;
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Moviesss");

});