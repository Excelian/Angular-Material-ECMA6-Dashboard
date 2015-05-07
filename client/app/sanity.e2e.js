describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://localhost:8000');


    var title = element(by.binding('title'));
    expect(title.getText()).toEqual('SERVICES');
  });
});
