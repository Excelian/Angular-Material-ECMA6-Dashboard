import angular from 'angular';
import SideMenuController from 'app/components/side-menu/sideMenu.controller'

import template from './side-menu.template.html!text';
export var sideMenuComponentModule = angular.module('sideMenuComponentModule', []).directive('sideMenu', [
  function sideMenu() {
    return {
      restrict: 'E',
      template: template,
      controller: SideMenuController ,
      controllerAs: 'ctrl',
      bindToController: true,
      scope: {}
    };
  }
]);

