export default
class UserSettingsController {
  static $inject = ['UserService', '$mdToast'];

  constructor(userService, $mdToast) {
    this.userService = userService;
    this.$mdToast = $mdToast;

    this.loading = true;

    this.userService.getCurrentUsers().then((users) => {
      this.loading = false;
      this.currentUsers = users;
    });
  }

  addNewUser() {
    this.userService.addNewUser().then((user) => {
      this.currentUsers.push(user);
      this.$mdToast.show(this.$mdToast.simple()
        .content('User Added')
        .position('top right')
        .hideDelay(4000));
    });
  }
}
