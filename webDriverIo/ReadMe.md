

Getting started
    As all node project, do an npm init to create your package


selenium-webdriver - The official WebDriver JavaScript bindings from the Selenium project.
    WebDriverJs is the Official javascript implementation of selenium. It uses the Selenium's Json-wire-protocol to interact with browser as selenium java doesWebdriverjs is packaged as 'selenium-webdriver' under npm package which runs on nodejs.

WebdriverIO - better impliementation of WebDriver bindings with predefined 50+ actions.
    To begin with you can test it with a remote instance locally (This is not usual as we use the wdio tool and configure it)
    To do this create a remote browser capability and run test against it, prior to this start the stand alone selenium server to get the test to run remotly
    Core
        webdriver - A Node.js bindings implementation for the W3C WebDriver and Mobile JSONWire Protocol (Selenium webdriver binding)
        webdriverio - A next-gen WebDriver test automation framework for Node.js
                    browser.debug: Allows a user to debug on failure, browser.debug but make sure the time out is increaaed so that the test does not timeout itself
                    browser.getcssproperty : get the css property from an element identifier


        @wdio/cli - A WebdriverIO testrunner command line interface
                    This helps to select the test framework/base url, logging, Sync/Async running of test etc, and plug all together in a config file. This helps to integrate all dependency in one place
                    With WebdriverIO v5 and up, the testrunner has moved into the @wdio/cli NPM package. So you need to install that and then run it to set up the config
                        npm i --save-dev @wdio/cli 
                        ./node_modules/.bin/wdio config //Generate Configuration File
                        Once you answer the required you can see a wdio.conf.js created
                        Within your spec files or step definition you can access the webdriver instance using the global variable browser. You don't need to initiate or end the Selenium session. This is taken care of by the wdio testrunner.
                        Once you are happy with wdio config file, to invoke your tests, you can run ./node_modules/.bin/wdio and it must run the tests from your specificed location
                        If running with a local selenium server make sure you have the selenium server running when u run the tests by doing this:
                            npm install selenium-standalone
                            ./node_modules/selenium-standalone/bin/selenium-standalone install &&
                            ./node_modules/selenium-standalone/bin/selenium-standalone start
                        Post WebdriverIO V4 all tests are synchronous (you dont have to speciify that in the wdio.config file)
                        Wdio also supports hooks that allows to add the library in it and is applied to all tests or global setting that can be used by all tests, like viewports. Initialise that library in the before hook in your configuration file
                        Also can change the variables in wdio config file in the test as this.timeout(20000) will change the time out on the conifg for that test



                    To Start the selenium stand alone on its own
                        npm install --save-dev wdio-selenium-standalone-service
                        and add in the wdio.config file
                            services: ['selenium-standalone']

                    Env Variables
                        baseUrl in the wdio file can be accessed in the test and use / to navigate to the url
                            browser.url('/');
                        To over write this you can pass arguments during run time as follows:
                            ./node_modules/.bin/wdio  --baseUrl="https://www.google.com"
                            ./node_modules/.bin/wdio  --logLevel="debug" // will overwrite the loglevel in the file as well

                        OR if you have a script to invoke the tests(In package.json) by adding the test script _wdio test_
                            Then pass the arguments as
                            npm test -- --baseUrl="https://www.google.com"
                            npm test -- --logLevel="debug"


                TestFramework
                    Mocha
                        Test framework helping to organise our tests
                        Comes prebundled with it and describe keywords
                        describe groups all tests which is described by the test case using it
                        to run specific test
                            npm test -- --spec=test/<testname>.js
                            npm test // runs all test suite inside test folder
                        describe.only will only run that test, it.only will only run that test
                        decribe.skip  or it.skip will skip running the test
                        Mocha hooks are setup or teardown supported by Mochas to run before or after test/test suites. They need not be inside the suite/describe keywords


                    Assert tools
                        Nodejs assert library can be used https://nodejs.org/api/assert.html to verify the actual results with the expected

                        Chai is also another assertion library is more flexible as it has TDD/BDD style assertions
                        Has assert/should/expect keywords can be used based on the test framework 
                                npm install chai@latest --save-dev
                        Given the assertion fails the test will not continue
                        Wdio allows to centralise the assertions

                    POM
                        Abstract the Page object methods and properties in a new page class so that its abstract to the tests
                        Have selectors in Page class and abstract from tests making it simple 

                    REPORTING/SCREENSHOTS
                        NOTE: WebdriverIO allows the use of multiple reported together
                        This is updated on the reporter in Wdio config file

                        DOT
                            npm install @wdio/dot-reporter --save-dev
                            Add this in wdio file: reporters: ['dot']
                            This makes sure you see the summary of the test run and very simple console output     
                                Example for a filure test:
                                    "dot" Reporter:
                                    ...F                        
                        SPEC
                            A WebdriverIO plugin to report in spec style
                            npm install @wdio/spec-reporter --save-dev
                            reporters: ['dot', 'spec']
                            Shows the test runs in spec written in test helping to debug if any fails on console

                        CONCISE
                            npm install @wdio/concise-reporter --save-dev
                            reporters: ['dot', 'concise']
                            Shows a concise report
                        JUNIT
                            Reports in junit format in xml which can be used by CI system to display the results
                                npm install @wdio/junit-reporter --save-dev
                                To add this in Wdio config file make sure you can indicate the output folder for the Junit report 
                                To do this add an array Object with in the reporter section 

                        ALLURE REPORT
                            This is more graphical report
                                npm install @wdio/allure-reporter --save-dev
                                add in wdio config: 
                                    reporters: [['allure', {
                                        outputDir: 'allure-results',
                                        disableWebdriverStepsReporting: true,
                                        disableWebdriverScreenshotsReporting: true,
                                    }]]
                    Once the reports are generated you also need a way to remove them on every new run
                    you can use the beforeSession hook on wdio file to do that



                    CI/CD integration                        





Nightwatch - efficient and straightforward Javascript End-to-End tests.

NOTE: bindings are wrapper libraries that bridge two programming languages, so that a library written for one language can be used in another language
 binding from a programming language to a library or operating system service is an application programming interface (API) providing glue code to use that library or service in a given programming language.

