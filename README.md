[![Code Climate](https://codeclimate.com/github/Excelian/Angular-Material-ECMA6-Dashboard/badges/gpa.svg)](https://codeclimate.com/github/Excelian/Angular-Material-ECMA6-Dashboard)
[![Test Coverage](https://codeclimate.com/github/Excelian/Angular-Material-ECMA6-Dashboard/badges/coverage.svg)](https://codeclimate.com/github/Excelian/Angular-Material-ECMA6-Dashboard)
[![Build Status](https://travis-ci.org/Excelian/Angular-Material-ECMA6-Dashboard.svg?branch=master)](https://travis-ci.org/Excelian/Angular-Material-ECMA6-Dashboard)
[![Dependency Status](https://david-dm.org/Excelian/Angular-Material-ECMA6-Dashboard.svg)](https://david-dm.org/Excelian/Angular-Material-ECMA6-Dashboard)
[![devDependency Status](https://david-dm.org/Excelian/Angular-Material-ECMA6-Dashboard/dev-status.svg)](https://david-dm.org/Excelian/Angular-Material-ECMA6-Dashboard#info=devDependencies)


AngularJS Material Design ECMA6 Dashboard
===============

This is a starting point to create an Angular 1.4 Material Design application that is structured using ES6 modules in a component based way. It comes with karma/protractor testing, Traceur transpilation and live reload out of the box.

- [ECMA6 new features](https://github.com/lukehoban/es6features/blob/master/README.md)
- [Angular Material](https://material.angularjs.org/#/demo/material.components.input)
- [Google Material Design Spec](http://www.google.com/design/spec/material-design/introduction.html)

![Dashboard](https://cloud.githubusercontent.com/assets/6848978/7554734/d4c52884-f72b-11e4-87be-b47090fcfd4f.PNG)
![Financial Dashboard](https://cloud.githubusercontent.com/assets/7428561/8108646/97eae12e-1049-11e5-8ef5-e8d4a3dd1cd7.png)


## Prerequisites:
- node.js

## Application Dependencies

All the dependencies required for the build system, testing and so on are managed with npm and defined in `package.json`. They can be installed with:

```
npm install
bower install
```

## Running the Application

You can run `script/start` to fire up the application on `http://localhost:3010`.

(You may need to make each file in script folder and add execution permission to script/lib/css.js file.)


## Tests

You can use `npm test` to run JSHint, Karma Unit tests and our E2E tests.

To run just the Karma tests use:

```
karma start ./config/karma.config.js
```

Karma will automatically watch the files and rerun tests when files change.

## Live Reloading

Install the [fb-flo](https://chrome.google.com/webstore/detail/fb-flo/ahkfhobdidabddlalamkkiafpipdfchp?hl=en) chrome extension.

To enable live-reloading have the developer tools open and activate fb-flo.

## Build & Deployment

Create a production optimized build using [AssetGraph Builder](https://github.com/assetgraph/assetgraph-builder):
currently waiting for a fix https://github.com/assetgraph/assetgraph-builder/issues/162


## Debugging Protractor (E2E) tests

script/e2etest

### Running individual files

Serve `client/` on port `3010`

```
npm start
```

Run protractor with `--specs` option

```
HTTP_PORT=3010 ./node_modules/.bin/protractor --specs client/app/routes/mandates/show/mandates-show.e2e.js
```

### Pausing the browser
Add `browser.pause();` to your spec.`

## Credits

- ECMA6 Angular Project by GoCardless
- D3 Financial Components by Scott Logic
