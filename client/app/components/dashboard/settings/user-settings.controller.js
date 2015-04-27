export default class UserSettingsController {
  constructor($scope, UserService) {
    $scope.loading = true;
    UserService.getCurrentUsers().then(function(data){
       var users = [];
       for (var item of data){
         users.push(item.data.results[0].user);
       }
      $scope.loading = false;
      $scope.currentUsers = users;
    });

    $scope.fruitNames = ['Apple', 'Banana', 'Orange'];
  }
}
