export default class alertsController {
  constructor($scope,$interval,$filter) {

    $scope.displayControl = {filter:"",displayFrozen:false};
    $scope.alerts = [];

    $scope.alerts.push({type: 'error', ts: '2015-04-17 17:00:01', description: 'Trade Services connection lost.'});
    $scope.alerts.push({
      type: 'warning',
      ts: '2015-04-17 16:52:23',
      description: 'Auth Services response timeout, retrying.'
    });
    $scope.alerts.push({type: 'error', ts: '2015-04-17 16:00:01', description: 'Trade Services connection lost.'});
    $scope.alerts.push({
      type: 'warning',
      ts: '2015-04-17 15:52:23',
      description: 'Auth Services response timeout, retrying.'
    });
    $scope.alerts.push({
      type: 'warning',
      ts: '2015-04-17 15:42:23',
      description: 'Auth1 Services response timeout, retrying.'
    });
    $scope.alerts.push({type: 'error', ts: '2015-04-17 17:00:01', description: 'Trade Services connection lost.'});
    $scope.alerts.push({
      type: 'warning',
      ts: '2015-04-17 16:52:23',
      description: 'Auth Services response timeout, retrying.'
    });
    $scope.alerts.push({type: 'error', ts: '2015-04-17 16:00:01', description: 'Trade Services connection lost.'});
    $scope.alerts.push({
      type: 'warning',
      ts: '2015-04-17 15:52:23',
      description: 'Auth Services response timeout, retrying.'
    });
    $scope.alerts.push({
      type: 'warning',
      ts: '2015-04-17 15:42:23',
      description: 'Auth Services response timeout, retrying.'
    });
    $scope.alerts.push({
      type: 'warning',
      ts: '2015-04-17 15:42:23',
      description: 'Auth Services response timeout, retrying.'
    });

    $scope.alerts.push({
      type: 'warning',
      ts: '2015-04-17 15:42:23',
      description: 'Auth Services response timeout, retrying.'
    });

    // Periodically add a new event to the array
    function logTick() {

      if ($scope.displayControl.displayFrozen){
        return;
      }
      var t = $filter('date')(new Date(), 'yyyy-MM-dd hh:mm:ss');

      $scope.alerts.unshift({
        type: 'warning',
        ts: t,
        description: 'Another Service warning message.'
      });
    }

    var logTickTimer = $interval( logTick,5000 );

    $scope.$on('$destroy', function(){
      $interval.cancel(logTickTimer);
    })
  }
}
