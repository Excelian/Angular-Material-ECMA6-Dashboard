/**
 * Created by tim.hughes on 17/04/2015.
 */
import 'angular-mock';
import FinancialsController from './financials.controller';

describe('Financials Controller', function() {
  var $timeout;
  var financialsService;

  beforeEach(inject(function($q) {
    $timeout = jasmine.createSpy();
    financialsService = {
      getPriceData() {
        return $q.when([]);
      }
    };
    spyOn(financialsService, 'getPriceData').and.callThrough();;
  }));

  it('Should create a financials controller', function() {
    var fc = new FinancialsController($timeout,financialsService);
    expect(fc).toBeDefined();
  });

  it('Should populate the markets array', function() {
    var fc = new FinancialsController($timeout,financialsService);
    expect(fc.Markets.length).toEqual(2);
  });

  it('Should call financialsService.getPriceData for every stock in the markets array', function() {
    var fc = new FinancialsController($timeout,financialsService);
    expect((financialsService.getPriceData).calls.count()).toEqual(7);
  });
  it('Should call financialsService.getPriceData with expected symbol parameters', function() {
    var fc = new FinancialsController($timeout,financialsService);
    expect(financialsService.getPriceData).toHaveBeenCalledWith('GOOG');
    expect(financialsService.getPriceData).toHaveBeenCalledWith('EBAY');
  });
});
