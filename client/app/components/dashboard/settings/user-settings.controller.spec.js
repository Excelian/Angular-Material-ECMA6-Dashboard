import angular from 'angular';
import 'angular-mock';
import UserSettingsController from './user-settings.controller';

describe('User Settings', () => {
  var UserService, scope, mdToast;
  beforeEach(inject(function ($injector, $q) {
    var deferred = $q.defer();
    deferred.resolve();
    mdToast = {
      show() {
      },
      simple() {
      }
    };
    UserService = {
      promise: deferred.promise,
      getCurrentUsers() {
        var deferred = $q.defer();
        deferred.resolve([]);
        return deferred.promise;
      },
      addNewUser() {
        var deferred = $q.defer();
        deferred.resolve();
        return deferred.promise;
      }
    };
    scope = $injector.get('$rootScope');
    spyOn(UserService, 'addNewUser').and.callThrough();
  }));

  it('Should create a user settings controller', function (done) {
    var userSettingsController = new UserSettingsController(scope, UserService, mdToast);
    done();
    expect(userSettingsController).toBeDefined()
  });

  it('Should let us know when users are loaded', function (done) {
    var userSettingsController = new UserSettingsController(scope, UserService, mdToast);
    scope.$apply();
    expect(scope.loading).toEqual(false);
    done();
  });

  it('Should call the new user service on add', function (done) {
    var userSettingsController = new UserSettingsController(scope, UserService, mdToast);
    scope.addNewUser();
    done();
    expect(UserService.addNewUser).toHaveBeenCalled();
  });

});
