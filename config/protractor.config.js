'use strict';

var options = {
  port: process.env.HTTP_PORT || '8000'
};

function disableNgAnimate() {
  angular.module('disableNgAnimate', []).run([
    '$animate',
    function($animate) {
      $animate.enabled(false);
    }
  ]);
}

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.

  specs: ['../client/app/sanity.e2e.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
