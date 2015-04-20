/**
 * Created by tushara.fernando on 17/04/2015.
 */
import angular from 'angular';
import 'angular-mock';
import SideMenuController from 'app/components/side-menu/side-menu.controller'

describe('Side Menu', function(){
  var state, scope, mdSidenav;
  beforeEach(inject(function($injector) {
    mdSidenav = {
      close(){}
    };
    state ={
      get(){
        return [
          {
            title: 'title',
            url: 'url',
            icon: 'icon'
          }
        ]
      }
    };
    scope = $injector.get('$rootScope');
  }));

  it('Should create a side menu controller', function(){
    var sideMenuController = new SideMenuController(scope, mdSidenav, state);
    expect(sideMenuController).toBeDefined()
  });
  it('Should populate the side menu with an array of items with views with titles', function(){
    new SideMenuController(scope, mdSidenav, state);
    expect(scope.menuItems.length).toEqual(1);
  })
});
