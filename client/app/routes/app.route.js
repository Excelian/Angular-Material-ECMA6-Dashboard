import angular from 'angular';
import 'angular-ui-router';

import {topBarComponentModule} from 'app/components/top-bar/top-bar.directive';
import {sideMenuComponentModule} from 'app/components/side-menu/side-menu.directive';
export var appRouteModule = angular.module('appRouteModule', [
  'ui.router',
  topBarComponentModule.name,
  sideMenuComponentModule.name
]).config([
  '$stateProvider',
  function authRequiredRoute($stateProvider) {

    $stateProvider.state('app', {
      abstract: true,
      views: {
        '': {
          template: '<ui-view></ui-view>'
        },
        'top-bar': {
          template: '<top-bar></top-bar>'
        },
        'side-menu': {
          template: '<side-menu></side-menu>'
        }
      }
    });

  }
]);
