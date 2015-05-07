import angular from 'angular';
import 'angular-mock';
import UserSettingsController from './user-settings.controller';

describe('User Settings', function() {
  var UserService, $rootScope, mdToast;

  beforeEach(inject(function(_$rootScope_, $q) {
    mdToast = {
      show() {
      },
      simple() {
        return {
          content() {
            return {
              position() {
                return {
                  hideDelay() {
                  }
                }
              }
            }
          }
        }
      }
    };
    UserService = {
      getCurrentUsers() {
        return $q.when([]);
      },
      addNewUser() {
        return $q.when({});
      }
    };
    $rootScope = _$rootScope_;
    spyOn(UserService, 'addNewUser').and.callThrough();
    spyOn(mdToast, 'show').and.callThrough();
  }));

  it('Should create a user settings controller', function() {
    var userSettingsController = new UserSettingsController(UserService, mdToast);
    expect(userSettingsController).toBeDefined();
  });

  it('Should let us know when users are loaded', function() {
    var userSettingsController = new UserSettingsController(UserService, mdToast);
    $rootScope.$digest();
    expect(userSettingsController.loading).toEqual(false);
  });

  it('Should call the new user service on add', function() {
    var userSettingsController = new UserSettingsController(UserService, mdToast);
    userSettingsController.addNewUser();
    $rootScope.$digest();
    expect(UserService.addNewUser).toHaveBeenCalled();
  });

  it('Should create a toast on new user creation', function() {
    var userSettingsController = new UserSettingsController(UserService, mdToast);
    userSettingsController.addNewUser();
    $rootScope.$digest();
    expect(mdToast.show).toHaveBeenCalled();
  });
});
