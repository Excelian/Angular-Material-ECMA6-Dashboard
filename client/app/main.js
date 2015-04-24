import angular from 'angular';
import 'angular-touch';
import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-i18n-en-gb';
import 'angular-material';

import {mainConfigModule} from 'app/config/main.config';
import {userModule} from 'app/services/user.service';
import {dashboardRouteModule} from 'app/routes/dashboard/dashboard.route';

export var mainModule = angular.module('mainModule', [
  // ngTouch has to be BEFORE ngAria, else ng-clicks happen twice
  'ngTouch',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial',
  userModule.name,
  mainConfigModule.name,
  dashboardRouteModule.name
]).run();
