/*
ES5 is supported on all browser 
ES6/ ES2015 - not yet supported by all browsers
ES2016 - not many different than ES2015
This study is on ES5/ES6
*/

/*
// *** Variables ***
// Variables declared with the var keyword can not have Block Scope.
// Variables declared with the let keyword can have Block Scope. - meaning Variables with let cannot be used outside
// Variables defined with let are not hoisted to the top.
*/
// ES5
var userName = "john";
var userNameLast = "Brow";
var age = "26";
var height = 178;
var isHuman = true;
var i = 5;
for (var i = 0; i < 10; i++) {
	// some statements
}// Here i is 10

// ES6
let userName2 = "john";
let userNameLast2 = "Brow";
let age2 = "26";
const height2 = 178;
let isHuman2 = true;
let i = 5;
for (let i = 0; i < 10; i++) {
	// some statements
} // Here i is 5


/*
// *** String functions ***
*/
var firstName = 'BlahBlahBalh';
var lastname = 'lololol';
console.log(firstName.length); // 12
console.log(firstName.concat(lastname)); //BlahBlahBalhlololol
console.log(firstName.indexOf('h')) // returns 3, also  Returns -1 if not found
console.log(firstName.indexOf('h', 5)) // Starts to look for h after 5 char
console.log(firstName.search('h')) // returns 3 but same as index of but cannot take in regex
console.log(firstName.slice(7, 9)); // Gets 7,8 char, also look for -9 to -7 will get the same results
console.log(firstName.slice(7)); // everything after 7
console.log(firstName.substring(10, 12)); // cannot accept negative indexes when using two parameter. except that same as slice
console.log(firstName.replace('a', 'n')); // Only replaces first instance
console.log(firstName.replace(/a/gi, 'n')); // Replaces all instances of a on the string and looks for case insensitive value
console.log(firstName.trim()); // removes white space at the end
console.log(firstName.split("")); // Splits the string into an array, var x = firstname.split("")

/*
// * Number methods/ Function 
*/

console.log(height.toString()); // returns value in string 
// Number() method always returns a number from its argument
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10 

/*
//  *** type coercion ***
// JavaScript is a weakly-typed language, values can also be converted between different types automatically
// It usually happens when you apply operators to values of different types - 2/’5'
// 	One operator that does not trigger implicit type coercion is ===, which is called the strict equality operator.
// The loose equality operator == on the other hand does both comparison and type coercion if needed.
// 
*/
// Example of implicit type coercion.
true + false; // returns 0+1 = 1
"number" + 15 + 3 // "number153"
15 + 3 + "number" // "18number"

// To avoild this always use strict equality operator
if (age === 26) { // Fails and else is executed 
	console.log("26 is a number");
} else {
	console.log("26 is a string"); // This is displayed
}

/*
* The Ternary Operator and Switch Statements
*/
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var job = 'instructor';
switch (job) {
	case 'teacher': // Have condition statement here and if success does the switch 
	case 'instructor':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver':
		console.log(firstName + ' drives an uber in London.');
		break;
	case 'designer':
		console.log(firstName + ' designs beautiful websites.');
		break;
	default:
		console.log(firstName + ' does something else.');
}


/*
* Truthy and Falsy values
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values 
*/

var height;
if (height) {
	console.log("Not defined")
} else {
	console.log("defined")
}


// Loops
// For loop
var ages = [10, 20, 30];

for (let i = 0; i < ages.length; i++) {
	console.log(ages[i]);
	if (i === 2) {
		break;
	} else {
		continue;
	}
}
for (let eachAge of ages) {
	console.log(eachAge)
}

//for...in - this is for Looping over objects and not arrays
// A for...in loop iterates over the properties of an object in an arbitrary order 
var finalValue = "";
var exampleObject = { a: 1, b: 2, c: 3 };

for (var property in exampleObject) {
	finalValue += exampleObject[property];
}
console.log(finalValue); // 123
// While loop
while (i < students.length) {
	i++
	console.log(i);
}

/*
// Arrays
// 
*/
var students = ['John', 'gil', 'gaia'];
var ages = [10, 20, 30];
var years = new Array(1999, 2001, 2002);
// array functions
// push, pop, shift, unshift, indexof
students.push('Gaida'); // adds a new element 
// or with the length of the array add a new element
students[students.length] = 'Gaida';
var poppedElement = students.pop();
students.shift(); // Removes the first element and returns that to a var
students.push('Gaida'); // adds a new element 
ages.join("");// returns a string 102030
students.sort(); // Sort it alphabetically for arrays of string
// to sort array of number/ Soting object arrays

// Itration of array
students.forEach((valueOfStudent) => {
	console.log(valueOfStudent)
}); // prints all students name
//In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes. Associate aray/ Hashes



/************************************** */
// Functions - helps with DRY (Dont repeat yourself)
// This is a function statement : declare and define the function
/*
 Function Declarations feel like they were intended to mimic Java style method declarations but Java methods are very different animals. In JavaScript functions are living objects with values. Java methods are just metadata storage to larger extent. 
*/
function calculaterAge(yearOfBirth) {
	var age = 2017 - yearOfBirth
	return age;
}

// This is a function statement : declare and define the function
// This can be invoked before the function is defined due to Function hoisting
/*
HOISTING
Function declarations and function variables are always moved (‘hoisted’) to the top of their JavaScript scope by the JavaScript interpreter
In JavaScript, a variable can be declared after it has been used.
	Example: x=6; var Sum =x+10; var x;
NOTE: Variables and constants declared with let or const are not hoisted!


*/
function yearsToRetire(name, yearOfBirth) {
	var age = calculaterAge(yearOfBirth);
	var yearsLeft = 65 - age;
	if (yearsLeft > 0) {
		return (name + ' has ' + yearsLeft + ' to retire');
	} else {
		return (name + " Has already retired");
	}

}
console.log(calculaterAge(1999));
console.log(yearsToRetire('Gil', 1980));


// Expressions any valid set of literals, variables, operators, and expressions that evaluates to a single value.
// The value may be a number, a string, or a logical value. Conceptually, 
// there are two types of expressions: 
// 1. those that assign a value to a variable 
// 2. those that simply have a value
/*
 1. var x=7
 2. 3+4 
*/
// Function Expression : A function expression can be stored in a variable:
// Declare define and save the value 
// IIFE - immediate Invoked Functional Expression 
/*
	Named Function Expression
		var foo = function bar(value1,value2) { ... }
	Anonymous Function Expression
		var foo = function(value1,value2) { ... }
		
	All other Function you declare and define to begin with are Function Declaration
*/

// Function expression example
var calculateAgeExpression = function (yearOfBirth) {
	var age = 2017 - yearOfBirth
	return age;
}

	// IIFE
	(function () {
		var score = Math.random() * 10;
		console.log(score);
	})();

/*
// SCOPING
		Global JavaScript Variables
			A variable declared outside a function, becomes GLOBAL.
		Variables declared within a JavaScript function, become LOCAL to the function.
*/


/*
	Using Stict mode:
		Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
		Helps to write cleaner code such that no undeclared variable
*/

/*
In JavaScript there are 5 different data types that can contain values:

string
number
boolean
object
function
There are 6 types of objects:

Object
Date
Array
String
Number
Boolean
And 2 data types that cannot contain values:

null
undefined
*/


// Objects N Properties 
// 1. Object literal : Object literals encapsulate data, enclosing it in a tidy package. Has name value pair.
// Creation
var george = {
	firstName: 'George',
	lastName: 'Goldman',
	age: 35,
	occupation: 'manager',
	isMarried: true
};
// Reading values part of the object
// 1. Dot Notation: Object.key
// 2. Square braces: object['key'] , key must be passed as string
console.log(george);
console.log(george.age);
console.log(george['isMarried']);
// Object values can be updated / Data Mutation
// 2 ways as we read data from it
george.lastName = 'miller';
george['occupation'] = 'CTO';
console.log(george);


// 2. Creating object with object keyword
var mitch = new Object();
mitch.firstName = 'Mitch';
mitch.lastName = 'Brand';
mitch['age'] = 65;
console.log(mitch);

// The data that the object holds can be anything, from numbers, string, array, functions and even objects
// Example of JS
var john = {
	firstName: 'John',
	lastName: 'Greg',
	yearOfBirth: 1980,
	occupation: 'developer',
	isMarried: true,
	familyMembers: ['gil', 'gid'],
	run: function () {
		console.log("JOHNS RUNNING");
	},
	calculateAge: function () {
		this.age = 2017 - this.yearOfBirth;
	}
};

john.calculateAge();
console.log(john)


/*
JS engine executes this JS code  in the browser
differnt engine such as: Google V8 used in chrome, Spider Monkey, JS core
Typically the engine does the following:
 script > is read by the parser (verifys the syntax) > converts to machine code > invokes the script
*/


/*
EXECUTION CONTEXT n EXECUTION STACK:
	1. Global Execution context :
	 	its location on stack where all the variables/variable initiations and function names/declarations are stores
		on browser window is the global object and all variables and Object created will be associated with the global object
		example:
		lastname === windows.lastname 
	2. Execution context 
		This is where the code is executed for example when a function is invoked its run in the execution context 
		
		
		HOW DOES THE EXECUTION CONTEXT GET CREATED - Each execution context has an Object which stores a lot of important data that a function will use when its run and this happens before the code is executed. 
			The execution context object has the following:
				- Variable Object : This contains all arguments passed to the function, function declaration and Variable declaration.
									As the variable object is created at the beginning has function declaration (complete function) and 
									Variable declarations although known to variable object its marked as undefined before the execution context.
									This is known as hoisting, where the function and the variables are known before the code is executed.
									*** Also note this work only on FUNCTION DECLARTION, while Function expression hoisting does nmot work as 
									the variables are undefined *****
			     - Scope chain : Where can a variable or fucntion can be accessed. Each function and variable has scope. 
				 					In JS scope is based on creating a function, each new function creates a scope or Lexical scoping.
									Lexical scoping is when function written with a function gets access to variable and function of parent function.
				 - this variable :
				 	Its associted with the execution context
					
			When a function is called its put on top of the execution stack, 
				1. Creation phase: create a variable object with scope and understand the this variable, Functions are defined and variable are set to undefiend
				2. Execution phase runs the function in global scope or the scope on which its declared
																						
*/

// HOISTING EXAMPLE
console.log(addition(2, 3)); // this will be run as the function is hoisted and the declartion are in global execution object
function addition(a, b) {
	return (a + b);
}

//console.log(sub(1,3)); // Uncaught TypeError: sub is not a function
var sub = function (a, b) {
	return (a - b);
}


//// SCOPING
//add(10,11);	
//function add(x,y) {	
//	var a = x;
//	var b = y;
//	sub();
//	function sub(){
//		console.log(x+y); // Accessing X and Y from global or parent function 
//	}
//}
//

/*
*
*	DOM MANIPULATION - document object model
			HTML webpage content is stored in the DOM which can be accessed and changed by JS
			HTML has elements and attributes like class, class can be used multiple times but ID are unique. The htmp page is divided into two parts
			Header and body: the body is the visible section of the page, while header has additional information like the fonts and css style sheets
			CSS file has presententaion /style the webpage, it has rules to do that. The CSS file is related to the html using the class name from the html in CSS to define the rule in CSS
			
*
*/
// Updates the text with html styling, sET HTML
document.querySelector("#name-0").innerHTML = '<em>' + "GURU" + '</em>';
// Updating the text on the html element, SET TEXT
document.querySelector("#score-0").textContent = 200;
// Getting value from DOM	
var name = document.querySelector("#name-0").textContent;
console.log(name);
// WE can also manipulate the CCS styling of the page
document.querySelector('#score-0').style.color = 'red';
