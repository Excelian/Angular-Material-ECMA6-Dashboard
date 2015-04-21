/**
 * Created by tim.hughes on 17/04/2015.
 */
import angular from 'angular';
import 'angular-mock';
import AlertsController from 'app/components/dashboard/alerts/alerts.controller';

describe('Side Menu', function(){
  var scope, interval, filter;
  beforeEach(inject(function($injector) {
    scope = $injector.get('$rootScope');
  }));

  it('Should create an alerts controller', function(){
    var sideMenuController = new AlertsController(scope, $interval, $filter);
    expect(sideMenuController).toBeDefined();
  });
  it('Should populate the side menu with an array of items with views with titles', function(){
    AlertsController(scope, $interval, $filter);
    expect(scope.menuItems.length).toEqual(1);
  })
});
