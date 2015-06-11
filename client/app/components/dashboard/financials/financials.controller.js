export default class FinancialsController {
  constructor($timeout, financialsService) {

    this.financialsService = financialsService;
    this.Markets = [
      {
        name: 'NASDAQ',
        stocks: [
          {
            name: 'Google',
            symbol: 'GOOG',
            chart: this.createChartCandlestickAndBollinger
          }
          ,
          {
            name: 'Microsoft Corp.',
            symbol: 'MSFT',
            chart: this.createChartOHLC
          },
          {
            name: 'Amazon.com Inc.',
            symbol: 'AMZN',
            chart: this.createChartAreaHighLow
          }
        ]
      }
      ,
      {
        name: 'NYSE',
        stocks: [
          {
            name: 'Apple Inc.',
            symbol: 'AAPL',
            chart: this.createChartOHLC
          },
          {
            name: 'eBay',
            symbol: 'EBAY',
            chart: this.createChartOHLC
          },
          {
            name: 'Red Hat Inc.',
            symbol: 'RHT',
            chart: this.createChartOHLC
          },
          {
            name: 'Yahoo! Inc.',
            symbol: 'YHOO',
            chart: this.createChartOHLC
          }
        ]
      }
    ];

    this.Markets.forEach(function (market) {
      market.stocks.forEach(function (stock) {
        this.financialsService.getPriceData(stock.symbol).then((data) => {
          $timeout(stock.chart, 0, true, 'd3chart_' + market.name + '_' + stock.symbol, stock.symbol, data);
        });
      }, this);
    }, this);
  }

  createChartCandlestickAndBollinger(el, symbol, data) {

    var chart = fc.charts.linearTimeSeries()
      .xDomain(fc.utilities.extent(data, 'date'))
      .xTicks(5)
      .yDomain(fc.utilities.extent(data, ['high', 'low']))
      .yNice()
      .yTicks(5);

    var gridlines = fc.scale.gridlines();
    var candlestick = fc.series.candlestick();
    var bollingerAlgorithm = fc.indicators.algorithms.bollingerBands();
    bollingerAlgorithm(data);
    var bollinger = fc.indicators.renderers.bollingerBands();


    var multi = fc.series.multi()
      .series([gridlines, candlestick, bollinger]);
    chart.plotArea(multi);

    d3.select("#" + el)
      .append('svg')
      .style({
        width: '100%'
      })
      .datum(data)
      .call(chart);
  }

  createChartOHLC(el, symbol, data) {

    var chart = fc.charts.linearTimeSeries()
      .xDomain(fc.utilities.extent(data, 'date'))
      .xTicks(5)
      .yDomain(fc.utilities.extent(data, ['high', 'low']))
      .yNice()
      .yTicks(5);

    var gridlines = fc.scale.gridlines();
    var ohlc = fc.series.ohlc();


    var multi = fc.series.multi()
      .series([gridlines, ohlc]);
    chart.plotArea(multi);

    d3.select("#" + el)
      .append('svg')
      .style({
        width: '100%'
      })
      .datum(data)
      .call(chart);
  }

  createChartAreaHighLow(el, symbol, data) {

    var chart = fc.charts.linearTimeSeries()
      .xDomain(fc.utilities.extent(data, 'date'))
      .xTicks(5)
      .yDomain(fc.utilities.extent(data, ['high', 'low']))
      .yNice()
      .yTicks(5);

    var area = fc.series.area()
      .y1Value(function (d) {
        return d.high;
      })
      .y0Value(function (d) {
        return d.low;
      });

    var multi = fc.series.multi()
      .series([area]);
    chart.plotArea(multi);

    d3.select("#" + el)
      .append('svg')
      .style({
        width: '100%'
      })
      .datum(data)
      .call(chart);
  }


;
}
