describe('User settings sanity check', function() {

  function UserSettingsPage() {
    this.addUserButton = element(by.buttonText('+'));
    this.users = element.all(by.repeater('user in settingsCtrl.currentUsers'));

    this.get = function() {
      browser.get('http://localhost:8000/settings');
      browser.waitForAngular();
    };
  }

  it('should initialize with users on the page', function(done) {
    var userSettingsPage = new UserSettingsPage();
    userSettingsPage.get();
    userSettingsPage.users.then(function(items){
      expect(items.length).toEqual(2);
      done();
    });
  });

  it('+ button should add a user', function(done) {
    var userSettingsPage = new UserSettingsPage();
    userSettingsPage.get();
    userSettingsPage.addUserButton.click();
    userSettingsPage.users.then(function(items){
      expect(items.length).toEqual(3);
      done();
    });
  });

});
