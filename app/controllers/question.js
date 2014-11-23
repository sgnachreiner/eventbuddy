var questionApp = angular.module('questionApp', ['QuestionModel']);


// Index: http://localhost/views/recipe/index.html

questionApp.controller('IndexCtrl', function ($scope, QuestionRestangular) {

  // Helper function for opening new webviews
  $scope.open = function() {
    webView = new steroids.views.WebView("/views/movie/index.html");
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/recipe.js)
  QuestionRestangular.all('question').getList().then(function(questions){
    $scope.questions = questions;
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Question 1");

});


// Show: http://localhost/views/recipe/show.html?id=<id>

recipeApp.controller('ShowCtrl', function ($scope, $filter, RecipeRestangular) {

  // Fetch all objects from the local JSON (see app/models/recipe.js)
  RecipeRestangular.all('recipe').getList().then( function(recipes) {
    // Then select the one based on the view's id query parameter
    $scope.recipe = $filter('filter')(recipes, {recipe_id: steroids.view.params['id']})[0];
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Recipe " + steroids.view.params.id );

});
