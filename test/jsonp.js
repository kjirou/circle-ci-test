var assert = require('assert');
var webdriver = require('selenium-webdriver');


var BASE_URL = 'http://localhost:8080';


describe('jsonp', function() {

  var driver;

  beforeEach(function() {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build()
    ;
    // TODO: 何かのハック？
    // Ref) http://bites.goodeggs.com/posts/selenium-webdriver-nodejs-tutorial/
    //return driver.getWindowHandle();
  });

  afterEach(function() {
    return driver.quit();
  });

  it('should run emit-jsonp.html', function() {
    var pageUrl = BASE_URL + '/emit-jsonp.html';
    return driver
      .get(pageUrl)
      .then(function() {
        return driver.sleep(1000);
      })
      .then(function() {
        return driver.getCurrentUrl();
      })
      .then(function(url) {
        assert.strictEqual(url, pageUrl);
      })
      .then(function(url) {
        return driver.findElement(webdriver.By.id('debug'));
      })
      .then(function(el) {
        return el.getInnerHtml();
      })
      .then(function(src) {
        assert(/jsonpCallback success/.test(src));
      })
    ;
  });

  it('should run emit-jsonp-by-jsonp-module.html', function() {
    var pageUrl = BASE_URL + '/emit-jsonp-by-jsonp-module.html';
    return driver
      .get(pageUrl)
      .then(function() {
        return driver.sleep(1000);
      })
      .then(function() {
        return driver.getCurrentUrl();
      })
      .then(function(url) {
        assert.strictEqual(url, pageUrl);
      })
      .then(function(url) {
        return driver.findElement(webdriver.By.id('debug'));
      })
      .then(function(el) {
        return el.getInnerHtml();
      })
      .then(function(src) {
        assert(/jsonp1 success/.test(src));
      })
    ;
  });
});
