

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
                    Assert tools
                        Nodejs assert library can be used https://nodejs.org/api/assert.html to verify the actual results with the expected
                        







Nightwatch - efficient and straightforward Javascript End-to-End tests.

NOTE: bindings are wrapper libraries that bridge two programming languages, so that a library written for one language can be used in another language
 binding from a programming language to a library or operating system service is an application programming interface (API) providing glue code to use that library or service in a given programming language.

