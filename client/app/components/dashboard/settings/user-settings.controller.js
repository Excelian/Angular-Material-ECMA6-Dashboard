export default class UserSettingsController {
  constructor($scope, UserService) {
     UserService.getCurrentUsers().then(function(data){
       var users = [];
       for (var item of data){
         users.push(item.data.results[0].user);
       }
       $scope.currentUsers = users;
    });
  }
}
