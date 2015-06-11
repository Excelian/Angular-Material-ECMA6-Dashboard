import angular from 'angular';

class FinancialsService {

  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
  }

  transformQuandlResponseData(response) {
    var data = [];
    response.data.forEach(function (r) {
      data.push({date: new Date(r[0]), open: r[1], high: r[2], low: r[3], close: r[4], volume: r[5]});
    });
    return data;
  }

  getPriceData(symbol) {
    var deferred = this.$q.defer();
    this.$http.get('https://www.quandl.com/api/v1/datasets/WIKI/'+symbol+'.json?auth_token=c6s6hFRCRHcmN6jz4oKs&rows=60', {cache: true})
      .success((data) => {
        deferred.resolve(this.transformQuandlResponseData(data));
      });
    return deferred.promise;
  }

}

export var financialsModule = angular.module('financialsModule', [])
  .service('financialsService', FinancialsService);
