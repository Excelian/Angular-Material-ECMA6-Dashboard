export default
class UserSettingsController {
  constructor($scope, UserService, $mdToast) {
    $scope.loading = true;
    UserService.getCurrentUsers().then(function (data) {
      var users = [];
      for (var item of data) {
        users.push(item.data.results[0].user);
      }
      $scope.loading = false;
      $scope.currentUsers = users;
    });

    $scope.addNewUser = function () {
      UserService.addNewUser().then(function (item) {
        $scope.currentUsers.push(item.data.results[0].user);
        $mdToast.show(
          $mdToast.simple()
            .content('User Added')
            .position('top right')
            .hideDelay(3000)
        );
      });
    }
  }
}
