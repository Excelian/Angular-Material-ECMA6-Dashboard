
describe('Services sanity check', function() {

  it('Should load the services page', function() {
    browser.get('http://localhost:8000');

    var title = element(by.binding('title'));
    expect(title.getText()).toEqual('SERVICES');
  });

  it('Should have a menu with services, alerts and settings', function() {
    element.all(by.repeater('menuItem in menuItems')).then(function(menuItems) {
      expect(menuItems[0].getText()).toEqual('SERVICES');
      expect(menuItems[1].getText()).toEqual('SETTINGS');
      expect(menuItems[2].getText()).toEqual('ALERTS');
    });
  });


});
