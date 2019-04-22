exports.config = {
    runner: 'local',
    specs: [
        './test/*'
    ],
    // Patterns to exclude.
    exclude: [
        './test/pageObject/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 2,
        browserName: 'chrome',
    }],
    sync: true,
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://www.google.co.uk/',
    waitforTimeout: 10000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['dot',
        'spec',
        'concise',
        ['junit', {
            outputDir: './junitReport',
            outputFileFormat: function (opts) { // optional
                return `results-${opts.cid}.${opts.capabilities}.xml`
            }
        }],
        ['allure', {
            outputDir: './allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: true,
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    // onPrepare: function (config, capabilities) {
    // },
    // beforeSession: function (config, capabilities, specs) {
    // },
    before: function (capabilities, specs) {
        var chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
        global.should = chai.should();
        global.assert = chai.assert;

        browser.setViewportSize({
            width: 1200,
            height: 800
        });
        var del = require('del');
        del(['./junitReport', './allure-result']);
    },
    // beforeCommand: function (commandName, args) {
    // },
    // beforeSuite: function (suite) {
    // },
    // beforeTest: function (test) {
    // },
    // beforeHook: function () {
    // },
    // afterHook: function () {
    // },
    // afterTest: function (test) {
    // },
    // afterSuite: function (suite) {
    // },
    // afterCommand: function (commandName, args, result, error) {
    // },
    // after: function (result, capabilities, specs) {
    // },
    // afterSession: function (config, capabilities, specs) {
    // },
    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
