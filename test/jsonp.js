var assert = require('assert');
var webdriver = require('selenium-webdriver');


var BASE_URL = 'http://localhost:8080';


describe('jsonp', function() {

  var driver;

  before(function() {
    this.pageUrl = BASE_URL + '/emit-jsonp.html';
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build()
    ;
    // TODO: 何かのハック？
    // Ref) http://bites.goodeggs.com/posts/selenium-webdriver-nodejs-tutorial/
    //return driver.getWindowHandle();
  });

  after(function() {
    return driver.quit();
  });

  it('should emit jsonp', function() {
    var self = this;
    return driver
      .get(this.pageUrl)
      .then(function() {
        return driver.getCurrentUrl();
      })
      .then(function(url) {
        assert.equal(url, self.pageUrl);
      })
    ;
  });
});
