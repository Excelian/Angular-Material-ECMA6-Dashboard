/**
 * Created by tim.hughes on 17/04/2015.
 */
import 'angular-mock';
import FinancialsController from './financials.controller';

describe('Financials Controller', function() {
  var $timeout;

  beforeEach(inject(function() {
    $timeout = jasmine.createSpy();
  }));

  it('Should create a financials controller', function() {
    var fc = new FinancialsController($timeout);
    expect(fc).toBeDefined();
  });

  it('Should populate the markets array', function() {
    var fc = new FinancialsController($timeout);
    expect(fc.Markets.length).toEqual(2);
  });

  it('Should call $timeout for every stock in the markets array', function() {
    var fc = new FinancialsController($timeout);
    expect($timeout.calls.count()).toEqual(7);
  });
  it('Should call $timeout with matching element id and symbol parameters', function() {
    var fc = new FinancialsController($timeout);
    expect($timeout).toHaveBeenCalledWith(jasmine.any(Function), 0, true, 'd3chart_LSE_LLOY', 'LLOY');
  });
});
