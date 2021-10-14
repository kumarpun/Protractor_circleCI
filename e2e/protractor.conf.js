// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

var jasmineReporters = require('jasmine-reporters');
var htmlReporter = require('protractor-html-reporter-2');


/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome', // 'chrome',
    chromeOptions: {
      args: [ "--start-maximized", "--window-size=1630,963"],
      // binary: require('puppeteer').executablePath(),
    }
  },
  // directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'https://www.amazon.com/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 50000,
    print: function() {}
  },

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
  }));
},
  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
        platform = caps.get('platform');

        testConfig = {
            reportTitle: 'Protractor Test Execution Report',
            outputPath: './store_test_results',
            outputFilename: 'store_test_results',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: false,
            testPlatform: platform
        };
        new htmlReporter().from('./xmlresults.xml', testConfig);
    });
}
  }