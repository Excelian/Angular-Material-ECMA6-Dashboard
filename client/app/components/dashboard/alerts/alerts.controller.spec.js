/**
 * Created by tim.hughes on 17/04/2015.
 */
import 'angular-mock';
import AlertsController from './alerts.controller';

describe('Alerts Controller', function() {
  var $scope, $interval, $filter;

  beforeEach(inject(function($rootScope, _$interval_, _$filter_) {
    $scope = $rootScope.$new();
    $interval = _$interval_;
    $filter = _$filter_;
  }));

  it('Should create an alerts controller', function() {
    var ac = new AlertsController($scope, $interval, $filter);
    expect(ac).toBeDefined();
  });

  it('Should populate the alerts array', function() {
    var ac = new AlertsController($scope, $interval, $filter);
    expect(ac.alerts.length).toEqual(12);
  });

  it('Should not be frozen', function() {
    var ac = new AlertsController($scope, $interval, $filter);
    expect(ac.displayControl.displayFrozen).toEqual(false);
  });

  it('Should populate the alerts array if not frozen', function() {
    var ac = new AlertsController($scope, $interval, $filter);
    expect(ac.displayControl.displayFrozen).toEqual(false);

    $scope.$digest();
    expect(ac.alerts.length).toEqual(13);
  });

  it('Should not populate the alerts array if frozen', function() {
    var ac = new AlertsController($scope, $interval, $filter);
    expect(ac.displayControl.displayFrozen).toEqual(false);

    $scope.$digest();
    expect(ac.alerts.length).toEqual(13);

    ac.displayControl.displayFrozen = true;
    $scope.$digest();
    expect(ac.alerts.length).toEqual(13);
  });
});
