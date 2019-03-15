need nodejs
* npm install node
* brew tap wix/brew - 
* brew install applesimutils - required to connect to the simulator 

* npm -g install detox-cli

* react-native -v
	Else install
	npm install -g react-native-cli

	React Native is distributed as two npm packages, react-native-cli and react-native. The first one is a lightweight package that should be installed globally (npm install -g react-native-cli), while the second one contains the actual React Native framework code and is installed locally into your project when you run react-native init.

	Because react-native init calls npm install react-native, simply linking your local github clone into npm is not enough to test local changes.

* Create a react native project
	react-native init <project> OR
	react-native init detoxPlayGround

	add detox to it (-D is added a dev dependency)
		yarn add detox -D
		yarn add mocha -D

	detox init 
		This will create files and e2e folders
	Config detox
		Update package json with the detox object which indicates where to look for the app file before running etc
		to invoke the detox test run 
				detox build
				detox test
			Also:  xcrun simctl list  -will list the devices supported by detox





* Test env - verification test app
* Circle CI:
		TEST, MASTER, PRODUCTION
   - App center > saves all the builds succssfully build on Circle CI
   		- Push the build file to test flight for prod app to get the native changes, dont download it from the email as you will not receive the native app changes but only the code push changes
   		- Test flight > App ceter 

   - Build : Node env build + jest is clean > Code push (Only on prod/Test branch) - Once you merge code push happens  	
   	- and starts the native app build iOS and Android - Update the version of app you need this fixed on : 
   	- 


* Test flight - Download production apps
	- Access to all



- *.apk for android phones / *.ipa file on iOS download?

