/**
 * Created by tushara.fernando on 17/04/2015.
 */
export default class SideMenuController{
  constructor($scope, $mdSidenav, $state) {
    $scope.close = function () {
      $mdSidenav('left').close();
    };
    $scope.menuItems = [];
    var menuItems = $state.get();
    menuItems.forEach(i => {
      if (i.hasOwnProperty('title')) {
        $scope.menuItems.push(
          {
            title: i.title,
            url: i.url,
            icon: i.icon
          }
        );
      }
    });
  }
}
