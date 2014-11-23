var movieApp = angular.module('movieApp', ['MovieModel']);


// Index: http://localhost/views/recipe/index.html

movieApp.controller('IndexCtrl', function ($scope, MovieRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/recipe/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/recipe.js)
  RecipeRestangular.all('movie').getList().then(function(movies){
    $scope.movies = movies;
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Moviesss");

});


// Show: http://localhost/views/recipe/show.html?id=<id>

movieApp.controller('ShowCtrl', function ($scope, $filter, RecipeRestangular) {

  // Fetch all objects from the local JSON (see app/models/recipe.js)
  RecipeRestangular.all('movie').getList().then( function(movies) {
    // Then select the one based on the view's id query parameter
    $scope.recipe = $filter('filter')(recipes, {recipe_id: steroids.view.params['id']})[0];
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Movie " + steroids.view.params.id );

});