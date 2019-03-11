Selenium is an umbrella project for a range of tools and libraries that enable and support the automation of web browsers.

It provides extensions to emulate user interaction with browsers, 
a distribution server for scaling browser allocation, 
and the infrastructure for implementations of the W3C WebDriver specification that lets you write interchangeable code for all major web browsers.

At the core of Selenium is WebDriver, an interface to write instruction sets that can be run interchangeably in many browsers.

WEBDRIVER
        What is webDriver
            WebDriver is also known as Selenium 2. (Selenium 1.0 + WebDriver = Selenium 2.0)
            WebDriver uses browser automation APIs provided by browser vendors to control browser and run tests.
            WebDriver's aim is to emulate a real user's interaction with the browser as closely as possible 

        What is a Driver: 
            Responsible for controlling the actual browser. Most drivers are created by the browser vendors themselves. Drivers are generally executable modules that run on the system with the browser itself, not on the system executing the test suite. (Although those may be the same system.) NOTE: Some people refer to the drivers as proxies.
            The driver is specific to the browser, such as ChromeDriver for Google's Chrome/Chromium, GeckoDriver for Mozilla's Firefox, etc. The driver runs on the same system as the browser
            The driver implementations are provided by third parties, they are not included in the standard Selenium distribution.
            Driver instantiation, profile management, and various browser specific settings are examples of parameters that have different requirements depending on the browser and needs to be considered to set up the complete system
            Most drivers require an extra executable for Selenium Webdriver to communicate with the browser
            Example for different browser
                To drive Chrome or Chromium, you have to download chromedriver and put it in a folder that is on your system's path.
                Starting with Selenium 3, Mozilla has taken over implementation of Firefox Driver, with geckodriver
                and works with Firefox 48 and newer. Given you are using a new selenium you will need to use a GeckoDriver installed locally to interact with the FF
                Starting with Safari 10 on macOS El Capitan and Sierra, WebDriver support is included with each release of the browser. To enable support:
                        Enable the Developer menu from Safari preferences
                        Check the Allow Remote Automation option from with the Develop menu
                        Run
                        /usr/bin/safaridriver -p 1337


        what are Framework:
            An additional library used as a support for WebDriver suites. These frameworks may be test frameworks such as JUnit or NUnit. They may also be frameworks supporting natural language features such as Cucumber or Robotium. Frameworks may also be written and used for things such as manipulating or configuring the system under test, data creation, test oracles, etc.Frameworks include test runners and also some time better way to report 
        
        INTERACTION WITH BROWSER
            Typically WebDriver talks to a browser through a driver, the simple direct communication is two ways communication happening from webdriver (commands to run) >> driver >> Browser (results back in same route)
            The communication to the browser may also be remote communication through Selenium Server or  
            
            Remote communication can take place when webdriver communicates to a remote webdriver/selenium server
            The remote webdriver can be on the same host or on a different host which the webdriver interacts with
            
            TEST FRAMEWORK + WEBDRIVER (ON HOST1) >>> REMOTEWEBDRIVER/SELENIUM SERVER (HOST2) >>>>> Driver+Browser (on Host3)
        
        REMOTE WEBDRIVER
            You can use WebDriver remotely the same way you would use it locally. The primary difference is that a remote WebDriver needs to be configured so that it can run your tests on a separate machine. A remote WebDriver is composed of two pieces: a client and a server. 
            
            SELENIUM GRID









