[![Code Climate](https://codeclimate.com/github/Excelian/Angular-Material-ECMA6-Dashboard/badges/gpa.svg)](https://codeclimate.com/github/Excelian/Angular-Material-ECMA6-Dashboard)
[![Test Coverage](https://codeclimate.com/github/Excelian/Angular-Material-ECMA6-Dashboard/badges/coverage.svg)](https://codeclimate.com/github/Excelian/Angular-Material-ECMA6-Dashboard)
AngularJS Material Design ECMA6 Dashboard
===============

This is a starting point to create an Angular 1.3 Material Design application that is structured using ES6 modules in a component based way. It comes with karma/protractor testing, Traceuer transpitation and live reload out of the box.

- [ECMA6 new features](https://github.com/lukehoban/es6features/blob/master/README.md)
- [Angular Material](https://material.angularjs.org/#/demo/material.components.input)
- [Google Material Design Spec](http://www.google.com/design/spec/material-design/introduction.html)

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

```
DIST=./dist ./script/build
```

## Debugging Protractor (E2E) tests

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

- Build system/ES6 tooling: [Guy Bedford](https://github.com/guybedford)
- ECMA6 Angular Project by GoCardless
