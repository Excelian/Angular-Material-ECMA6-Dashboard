export var alertsController = angular.module('alertsController', [])
  .controller('alertsController', ['$scope', function ($scope) {
  $scope.alerts = [];

    $scope.alerts.push({type: 'error', ts: '2015-04-17 17:00:01', description: 'Trade Services connection lost'});
    $scope.alerts.push({type: 'warning', ts: '2015-04-17 16:52:23', description: 'Auth Services response timeout, retrying.'});
    $scope.alerts.push({type: 'error', ts: '2015-04-17 16:00:01', description: 'Trade Services connection lost'});
    $scope.alerts.push({type: 'warning', ts: '2015-04-17 15:52:23', description: 'Auth Services response timeout, retrying.'});
    $scope.alerts.push({type: 'warning', ts: '2015-04-17 15:42:23', description: 'Auth Services response timeout, retrying.'});
 }]);
