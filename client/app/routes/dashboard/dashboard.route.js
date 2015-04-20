import angular from 'angular';
import 'angular-ui-router';

import {appRouteModule} from 'app/routes/app.route';
import serviceOverviewTemplate from 'app/components/dashboard/service-overview/service-overview.html!text';
import settingsTemplate from 'app/components/dashboard/settings/settings.html!text';
import alertsTemplate from 'app/components/dashboard/alerts/alerts.html!text';
import alertsController from 'app/components/dashboard/alerts/alertsController';

export var dashboardRouteModule = angular.module('dashboardRouteModule', [
  'ui.router',
  appRouteModule.name
]).config([
  '$stateProvider',
  function dashboardRoute($stateProvider) {
    $stateProvider.state(
      'app.services', {
        url: '/',
        template: serviceOverviewTemplate,
        title:'Services',
        icon:'assets/img/icons/ic_trending_up_24px.svg'
      }
    )
    .state(
      'app.settings', {
        url: '/settings',
        template: settingsTemplate,
        title:'Settings',
        icon:'assets/img/icons/ic_settings_24px.svg'
      }
    )
      .state(
      'app.alerts', {
        url: '/alerts',
        template: alertsTemplate,
        title:'Alerts',
        icon:'assets/img/icons/ic_access_alarm_24px.svg',
        controller: alertsController
      }
    );
  }
]);
