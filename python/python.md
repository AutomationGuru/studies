* Install Python 3.X or 2.X on your machine 
 - for windows update the PATH with python folder, Library, DDL and scripts
 - for mac, python is shipped with mac, but you can install the latest paython 3.X
  	* Once we have two versions on python you can create virtual env and use the version of python you need 
  	* to install virtual env:
  	 - install pip install virtualenv
  	 - create a virtual env with the version of python interested in
  	 - sudo virtualenv -p python3 /Users/gkiran/virtualEnvPy
  	 - Enter the virtial env as
  	 source <target folder>/bin/activate
  	 - To get out of the virtual env use deactivate

* To Install third party Library/ Install packages - they are third part libraries
	- To downlonad and add it to the project and use it in the files with the import keyword
	- PIP Is the python package manager, 	Use PIP to install packages, pip3 with python 3 :  Many packages can be found in the Python Package Index.
	- https://pypi.python.org/pypi Python Package Index (PyPI) is where users can add new pakages to community can be used by all
	- pip install <package name>
	- pip list : lists allpackages
	- pip show <package name> : shows more detail of the package
	- pip uninstall <package name>
	- pip search <package name>

* IDE for python 
	- use command line or a text editor and save file with .py file 
	- Anaconda Python 
	OR
	- Pycharm - Python community version 
* IPython - more intreactive package

* Python Identifier
	A Python identifier is a name used to identify a variable, function, class, module or other object. 
	An identifier starts with a letter A to Z or a to z or an underscore (_) followed by zero or more letters, underscores and digits (0 to 9).
	Class names start with an uppercase letter. All other identifiers start with a lowercase letter.
	Starting an identifier with a single leading underscore indicates that the identifier is private.
	Starting an identifier with two leading underscores indicates a strongly private identifier.If the identifier also ends with two trailing underscores, the identifier is a language-defined special name.

* Lines and Indentation
	No braces to indicate the block of code but line indentations are used to enforce that
	line continuation character (\) to continue with a long line
* Python accepts single ('), double (") and triple (''' or """) quotes to denote string literals, as long as the same type of quote starts and ends the string.

* Comment:
	A hash sign (#) that is not inside a string literal begins a comment.		


* Variable 
	- x="text"
	  The text object has an object reference x
	- x=y=z=10
	OR
	  x,y,z=0
	- The variable with _ 
		_ : Convention that this is a variable which is private (not enforced by interpretor)
		__ : (__ dunner) this is to make sure that the variable is unique and the interpretor name magles it so that there is no collusion 
			example:
			a=10
			_a=10
			__a=10 // acts a private varoable and not accessiable directly from an object

		So the _ or __ variables are easily accessiable with in a class and tricky to use it on object and also make it hard to have name collusion

* Standard Data Types - the data stored in memory can be of many types 
	Python has 5 data types:
		1. NUMBERS
			python supports integer, float, long and complex number
				Number functions:
					- floor(x) lergest integer not greater than x, floor(110.25)=110
					- max(x,y,z..)
					- min(x,y,z..)
					- round(x,[n]) round(80.23456, 2) > 80.23
		2. STRINGS
			set of characters represented in the quotation marks
				str = 'Hello World!'
				print str          		# Prints complete string
				print str[0]       		# Prints first character of the string
				// String slicing in python uses the folliwng format
				x[startAt:endBefore:skip]				
				print str[2:5]     		# Prints characters starting from 3rd to 5th
				print str[2:]      		# Prints string starting from 3rd character
				print str[:2]      		# Prints string starting from 0 to 3rd character
				print str * 2      		# Prints string two times
				print str[:2] + "TEST" 	# Prints concatenated string : HelTEST
				print str[::2] 			# from begining and gets every 2nd element from 0 - HloWrd
				print str[1::3] 		# every third element starting from index 1
				// no reverse in python built in method
				print str[::-1] 		# This retruns a reverse string: !dlroW olleH
			 string format operator %
			 	print "My name is %s and weight is %d kg!" % ('Guru', 30)

			 	"This is a single\
 				string"				

 				"Another way to handle \"quotes\""		
 				"Need to use 'quotes' inside a string"
 			String functions
 				len(x)
 				upper(x)
 				lower(x)
 				join - joins a string into seq
 				replace(str, newStr)
 				strip('x')	removes all occurance of char x in the strings

		3. LISTS
			Similar to array and can cotaing data of any data type and its size can be changed or increased
				list = [ 'abcd', 786 , 2.23, 'john', 70.2 ]
				tinylist = [123, 'john']

				print list          	# Prints complete list
				print list[0]       	# Prints first element of the list
				print list[1:3]     	# Prints elements starting from 2nd till 3rd 
				print list[2:]      	# Prints elements starting from 3rd element
				print tinylist * 2  	# Prints list two times
				print list + tinylist 	# Prints concatenated lists
				del list1[2]			# Deletes the element
			List Functions
				pop - removes the last object from the list and returns it
				remove - remove the object from your list
				reverse
				sort
				count
				append - can add elements to list


		4.	TUPLES
				they are fixed set of lists and enclosed in () 
				It cannot be updated or changed
		5.	DICTIONARY

				They are just hash table with name value pair.

				dict = {}
				dict['one'] = "This is one"
				dict[2]     = "This is two"
				# Nester dictionary
				cars = {'bmw': {'model': '550i', 'year': 2016}, 'benz': {'model': 'E350', 'year': 2015}}
				// accessing that is easy:
				cars['bmw']['model'] # prints 550i

				tinydict = {'name': 'john','code':6734, 'dept': 'sales'}

				print dict['one']       # Prints value for 'one' key
				print dict[2]           # Prints value for 2 key
				print tinydict          # Prints complete dictionary
				print tinydict.keys()   # Prints all the keys
				print tinydict.values() # Prints all the values
* Operators
		- Arithmetic : +, -, * , / , % , ** (exponential), // Floor division 
		- Membership Operators : 
			This helps to assert the presence of character/element in a strings, list, tuples
				 in , not in
		- Identity Operators: asserts the objects
				 is, is not
* Decision Making and Loop 
	A group of individual statements, which make a single code block are called suites
	Compound or complex statements, such as if, while, def, and class require a header line and a suite.
	
		if expression : 
		   suite
		elif expression : 
		   suite 
		else : 
		   suite

	If there exits no suite,then single statement it can be placed in one line
		if expression : print "Only one line if true"

		while expression:
	   		statement(s)

   	The else statement is executed when the while expression is false
	   	while expression:
	   		statement(s)
	   	else :
	   		statement
	For loops	   		
		for iterating_var in sequence:
   			statements(s)

   		Python allows to Itrate over two lists or more list but itrates only till the index of the smalles list of all
   		for x,y,z in (list1, list2, list3)	


   	Break	
   		Stops execution of loop completely
   	continue
   		skip the rest of the statements and re run with next condition
   	pass
   		nothing happens when it executes, it is place holder for stubs or code that is not written still

* FUNCTIONS
	reusable set of code, python provides you with built in functions while a user can create a user defined fucntions as well

	Defining funtions

		def functionname( parameters ):
   			"function_docstring" // first line is an optional documentation string
   			function_suite
   			return [expression]
		
		Anonymous functions/Lambda function: 
			this is different to regular functions in the way we define it with the def keyword instead use Lambda
			the functions have no name and it always needs an exprerssion

			lambda [arg1 [,arg2,.....argn]]:expression
			// example
			sum = lambda arg1, arg2: arg1 + arg2;
			sum(10,20)

   	Calling a function
   		- with required arguments 
   			print("This is required") // print method is called with the string
   		- with Keyword: given a method with two or more parameters, you can pass the arguments with the keyword/name, this way you can place the arguments out of order
   			def employee(name, age, detail):
   				print("Employee name is:"+name+ " details"+detail)
   				print(" age is", age )

   			employee(age=10,name='test',detail='ages in the company')

   		- Default arguments: can define a method with default value 
   			def employee(age, name, detail="Not applicable"):
				print("Employee name is:"+name+ " details"+detail)
   				print(" age is", age )

   			employee(age=10,name='test',detail='ages in the company')
   			employee(age=10,name='test')

   		- Variable-length arguments 
   			def functionname([formal_args,] *var_args_tuple ):
   				"function_docstring"
   				function_suite
   				return [expression]

   			Note if more than the expected arguments are passed they are passed to the tuple
   	Return statment: if not mentioned will return NONE

* VARIABLE SCOPE
	Given a variable is declared our side the method its accessiable through out the code while with in the function its not.
	To access a global variable with in a function use keyword global
		a="Before method"
		print a // Before method
		def printSimple()
			a = "in function"
			print a // in function
			global a
			print a
			a="finally updated"
			// Note above cannot access 	
		printSimple()	
		print a //finally updated

	Variables are names(object reference) that map to objects. A namespace is a dictionary of variable names (keys) and their corresponding objects (values). A Python statement can access variables in a local namespace and in the global namespace. If a local and a global variable have the same name, the local variable shadows the global variable.
	The statement global VarName tells Python that VarName is a global variable. Python stops searching the local namespace for the variable.

* MODULES
	Modules have related code 
		import module1[, module2[,... moduleN]
		module1.function()

	Use import keyword to import a module
	A module is loaded only once, regardless of the number of times it is imported. This prevents the module execution from happening over and over again
	from statement lets you import specific attributes from a module into the current namespace
		from modname import name1[, name2[, ... nameN]]
		name1 // can be used directlt with out the module reference 
	This helps to import specific methods from the module instead of loading all methods part of the module
	A module can be a packge/directory with many py files so this helps to get only specific file with the method of interests 

	interpreter encounters an import statement, it imports the module if the module is present in the search path.
		- The current directory.
		- Python then searches each directory in the shell variable PYTHONPATH (env variable consisting of a list of directories with module)
		- Python checks the default path. On UNIX, this default path is normally /usr/local/lib/python/.
	Python 3 module available:
		https://docs.python.org/3/library/

	Creating your own module
		There is no special keywords to create a new module, any Python file can be used as module. To do that when importing use the path of the file to access it
			for example if we have a new file in folder:
				customModule/fruit.py
			In a specific python file to use fruit module you can 
				import customModule.fruit as Fruit // and use Fruit to access methods or attributes of fruits
				OR
				from customModule import fruit
				OR
				from customModule.fruit import nutrition // nutrition is the method you intend to use 



* EXCEPTION HANDLING
	occurs during the execution of a program that disrupts the normal flow of the program's instructions
	when exception is raised it must either handle the exception immediately otherwise it terminates and quits.
	Use try except block to handle exception thrown by the code
			try:
			   You do your operations here;
			   ......................
			except ExceptionI:
			   If there is ExceptionI, then execute this block.
			except ExceptionII:
			   If there is ExceptionII, then execute this block.
			   ......................
			else:
			   If there is no exception then execute this block. 

	You can also use the same except statement to handle multiple exceptions a
			try:
			   You do your operations here;
			   ......................
			except(Exception1[, Exception2[,...ExceptionN]]]):
			   If there is any exception from the given exception list, 
			   then execute this block.
			   ......................
			else:
			   If there is no exception then execute this block. 

    try-finally Clause
    	The finally block is a place to put any code that must execute
    		try:
			   You do your operations here;
			   ......................
			   Due to any exception, this may be skipped.
			finally:
			   This would always be executed.
			   ......................

* FILE I/O
	Reading from keyboard
		You can use input or raw_input to read a line of text from standard input to do that
			a = raw_input("enter ur input: ")
			OR
			a= input("enter your input ")

	Reading and writing from Files
		The first step to read or write into a file is to open the file and using the pythons built in method open()
			file object = open(file_name [, access_mode][, buffering])

			file_name can be absoluet path or relateive to the file in the directory
			The access_mode determines the mode in which the file has to be opened, i.e., read, write, append
				r, r+(reading and writing), w,w+ (reading and writing),a (append), a+ (appending and reading)

			The close() method of a file object flushes any unwritten information and closes the file object, after which no more writing can be done.
			Make sure to use the close method at the end of the file io operations to write any data in the buffer
				# Open a file
				fo = open("foo.txt", "w")
				print "Name of the file: ", fo.name // prints the name of the open file

				# Close opend file
				fo.close()

			READ/WRITE with as
				Using with as keywords to write or read file with out really closing the files 

				with open("file", "w") as fileObjRef:
					fileObjRef.write("new text")

				with open("file", "w") as fileObjRef:
					print ("This is teh file",fileObjRef.read("new text"))




			read() and write() method of the file object allows to read and write to file
					#!/usr/bin/python

					# Open a file to read and write
					fo = open("foo.txt", "r+") // file object refence fo
					str = fo.read(10)  // read 10 bytes of the file 
					print "Read String is : ", str // print the read string

					# Check current position
					position = fo.tell() // indiates the location of pointer in the reading file
					print "Current file position : ", position

					# Reposition pointer at the beginning once again
					position = fo.seek(0, 0);
					str = fo.read(10); 
					print "Again read String is : ", str
					fo.write( "Python is a great language.\nYeah its great!!\n"); // writes this to the file
					# Close opend file
					fo.close()

		Directory Actions
			The OS module of python allows the 
				perform file-processing operations, such as renaming and deleting files.
				help you create, remove, and change directories.
						#!/usr/bin/python
						import os

						# Rename a file from test1.txt to test2.txt
						os.rename( "test1.txt", "test2.txt" )

						os.remove("text2.txt")

						os.mkdir("newdir")
						os.chdir("/home/newdir")
						os.getcwd()
						os.rmdir('dirname') // this only removes an empty directory make sure all contenets are removed before this command




* OOPS
	- CLASS
		class statement creates a new class definition.

			class ClassName:
			   'Optional class documentation string'
   				class_suite

   		The first method __init__(self) is a special method, which is called class constructor or initialization method that Python calls when you create a new instance of this class.

   		methods created with in the class are like normal functions with the exception that the first argument to each method is self

   		Attibutes can be created after object is created 
   		Python also has built in class attributes
   			__dict__ − Dictionary containing the class's namespace.
			__doc__ − Class documentation string or none, if undefined.	
			__name__ − Class name.
			__module__ − Module name in which the class is defined. This attribute is "__main__" in interactive mode.
			__bases__ − A possibly empty tuple containing the base classes, in the order of their occurrence in the base class list.

		Class Inhritance 
			Given a class its attribute and methods can be inherited and multiple classes
				class SubClassName (ParentClass1[, ParentClass2, ...]):
   					'Optional class documentation string'
   					class_suite

   			Overloading
   				Given inheritance the parent methods can be overloaded in child adding more suites

LOGGIN IN PYTHON
	Import logging module to log the various levels 
	The different levels 
		DEBUG
		INFO
		WARNING
		ERROR
		CRITICAL
	based on this the message is printed

	To define the logging level you can:
		* use the baseconfig updated with the level
		* create a config file with the details of the log file and the format

UNIT TESTING FRAMEWORK
	The Python unit testing framework, sometimes referred to as “PyUnit,” is a Python language version of JUnit
	The test case and test fixture concepts are supported through the TestCase and FunctionTestCase classes;
	When the test is run, the fixture initialization(setup) is run first; if it succeeds, the cleanup method is run after the test has been executed, regardless of the outcome of the test.
	Test suites are implemented by the TestSuite class
	A test runner is an object that provides a single method, run(). accepts a TestCase or TestSuite object as a parameter, and returns a result object.



	example1:

		import unittest
		import time
		import timeout_decorator


		class ourFirstTestExample(unittest.TestCase):

		    def setUp(self):
		        print("This is set up run before every method")

		    def tearDown(self):
		        print("Tear down run afetr every method")

		    @classmethod
		    def setUpClass(cls):
		        print("Run at class level and run once before all tests")

		    @classmethod
		    def tearDownClass(cls):
		        print("Runs at the class level and only once after the class ")

		    # Name of the test must start with Test
		    # Based on condition we can skip or just skip the method with
		    # @unittest.skip("demonstrating skipping")		
		    @unittest.skipIf(5>4, "Skip over this ")    
		    def test_firstTest(self):
		        print("My first tests")
		        # Boolean assertion where it assert the Boolean and can also take a message
		        self.assertEqual(4 + 5,9)
		        self.assertTrue(4 + 5 == 9,"The result is False")

		    # The time out Decorator helps to make sure that the test takes more time than the mentioned seconds an exception is thrown    
		    @timeout_decorator.timeout(5)
		    def test_secondTests(self):
		        print("Second Tests")
		        # comparative asserts computing the difference, rounding to the given number of decimal places (default 7),
		        self.assertAlmostEqual(22.0/7,3.14)

		    @unittest.expectedFailure # If the test fails will be marked as expected failure else adds as success
		    def test_thirdTests(self):
		        print("Third Tests")
		        # assert collection such as List, Tuple, Dictonary or set
		        self.assertListEqual([2,3,4], [1,2,3,4,5])		        

		if __name__ == '__main__':
		    unittest.main(verbosity=2)

	RUNNING the tests
		Once the test file is creted you can run the test in the following ways
			1. unittest.main()
				Running one test case with main, provides a command-line interface to the test script. To invoke the test just run python <test_name>
				there are other ways to run the tests with a finer level of control

			2. Creating a Suite and group the suites to run 
				Create the following a new python file, this is the test runner. This imports all the test cases

					suite1 = unittest.TestLoader().loadTestsFromTestCase(ourFirstTestExample)
					suite2 = unittest.TestLoader().loadTestsFromTestCase(ourSecondTestExample)
					allRegressionTests = unittest.TestSuite([suite1, suite2])
					unittest.TextTestRunner(verbosity=2).run(allRegressionTests)

				And on the terminal just invoke the suite file you have created and that will intern run all the test cases

	ASSERTION
		Python's built-in assert() function can be used
		If the assertion fails, an AssertionError will be raised. 
		Python allows three types assertions to be performed 
			- boolean (most popular), comparision and Collection 

	SKIPPING TESTS and EXPECTED failure
		You can skip a test that is not ready or obsolete by using a decorator or with in the method use skip privided by Unitest class
		Also we have tests that is expected to fail until the code is fixed this can be updated with the decorator to discount the test method
			@unittest.expectedFailure, when a method has this decorator and the test failes its udpated as expected failure only


PY TESTING FRAMEWORK











NOTE:
---------------------------------------------------------------------------------------------------------------------------------------------------------
When the Python interpreter reads a source file, it executes all of the code found in it.

Before executing the code, it will define a few special variables. For example, if the python interpreter is running that module (the source file) as the main program, it sets the special __name__ variable to have a value "__main__". If this file is being imported from another module, __name__ will be set to the module's name.

In the case of your script, let's assume that it's executing as the main function, e.g. you said something like

python threading_example.py
on the command line. After setting up the special variables, it will execute the import statement and load those modules. It will then evaluate the def block, creating a function object and creating a variable called myfunction that points to the function object. It will then read the if statement and see that __name__ does equal "__main__", so it will execute the block shown there.

One reason for doing this is that sometimes you write a module (a .py file) where it can be executed directly. Alternatively, it can also be imported and used in another module. By doing the main check, you can have that code only execute when you want to run the module as a program and not have it execute when someone just wants to import your module and call your functions themselves.


Every Python module has it's __name__ defined and if this is '__main__', it implies that the module is being run standalone by the user and we can do corresponding appropriate actions.
---------------------------------------------------------------------------------------------------------------------------------------------------------


SELENIUM WITH PYTHON

Install Selenium webdriver
	Adding selenium library to the project. In java we can update the maven file with the dependencies and that must be suffucient
	in Python you can use PIP to install the latest selenium version

	- pip3 install selenium // Installs the latest selenium module
	// From Selenium 3 and above we need a driver to interact with every browser
	// Gekodriver for FF
	// Chrome driver for Chrome
	ChromeDriver/GekoDriver is a separate executable that WebDriver uses to control Chrome/FF. These drivers are mainatined and creted by the Browser team and not part of selenium module
	Selenium project was responsible for providing the driver for each browser till Sel 3, but post that all the major browser vendors ship their own implementations




