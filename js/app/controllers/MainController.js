function MainController($scope) {
  $scope.name = "corey"
  $scope.email = "corey@corey.com"
  $scope.phone = "867-5309"
}

angular
  .module('app')
  .controller('MainController', MainController)