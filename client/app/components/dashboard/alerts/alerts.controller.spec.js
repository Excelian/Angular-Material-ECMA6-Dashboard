/**
 * Created by tim.hughes on 17/04/2015.
 */
import 'angular-mock';
import AlertsController from './alerts.controller';

describe('Alerts Controller', function(){
  var scope, interval, filter;
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
    interval = $injector.get('$interval');
    filter = $injector.get('$filter');
  }));

  it('Should create an alerts controller', function(){
    var ac = new AlertsController(scope, interval, filter);
    expect(ac).toBeDefined();
  });

  it('Should populate the alerts array', function(){
    var ac = new AlertsController(scope, interval, filter);
    expect(scope.alerts.length).toEqual(12);
  });
  it('Should not be frozen', function(){
    var ac = new AlertsController(scope, interval, filter);
    expect(scope.displayControl.displayFrozen).toEqual(false);
  });
});
