describe('Services sanity check', function() {

  function AlertsPage() {
    this.filterInut = element(by.model('alertsCtrl.displayControl.filter'));
    this.switchControl = element(by.model('alertsCtrl.displayControl.displayFrozen'));
    this.alertItems = element.all(by.repeater('alert in alertsCtrl.alerts'));

    this.get = function() {
      browser.get('http://localhost:8000/alerts');
      browser.waitForAngular();
    };
  }

  it('should be initialized with expected defaults', function(done) {
    var alertsPage = new AlertsPage();
    alertsPage.get();

    expect(alertsPage.switchControl.getText()).toEqual('Freeze Display');
    expect(alertsPage.filterInut.getText()).toEqual('');
    done();
  });

});
