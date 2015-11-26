var assert = require('assert');
var webdriver = require('selenium-webdriver');


var BASE_URL = 'http://example.com';


describe('example.com', function() {

  var driver;

  beforeEach(function() {
    driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.chrome())
      .build()
    ;
  });

  afterEach(function() {
    return driver.quit();
  });

  it('should open example.com', function() {
    var pageUrl = BASE_URL;
    return driver
      .get(pageUrl)
      .then(function() {
        return driver.getPageSource();
      })
      .then(function(html) {
        return /Example Domain/.test(html);
      })
    ;
  });

  it('should click "More information..."', function() {
    var pageUrl = BASE_URL;
    return driver
      .get(pageUrl)
      .then(function() {
        return driver.findElement({ linkText: 'More information...' });
      })
      .then(function(el) {
        return el.click();
      })
      .then(function() {
        return driver.getPageSource();
      })
      .then(function(html) {
        return /IANA-managed Reserved Domains/.test(html);
      })
    ;
  });
});
