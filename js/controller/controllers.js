/**
 * Created by User on 10/19/14.
 */
app.controller('Homepage', ['$scope', function($scope) {
    $scope.homepage = "Homepage";
}]);

app.controller('About', ['$scope', function($scope) {
    $scope.about = "Lorem ipsum...";
}]);

app.controller('Date', ['$scope', function($scope) {
    $scope.now = new Date();
}]);

//==============================================
app.controller('Movie', ['$scope', function($scope) {
    $scope.movie = "Movie";
}]);
app.controller('TV_show', ['$scope', function($scope) {
    $scope.tv_show = "TV_show";
}]);