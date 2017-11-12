
// Variables
var userName = "john";
var userNameLast = "Brow";
var age = "26";
var height = 178;

//type coercion
// Can convert the type and compare in Js
if(age === 26) {
	console.log("26 age");
}else {
	console.log("Else");
}

// Arrays
// creation
var students = [ 'John', 'gil', 'gaia'] ;
var ages=[10,20,30];
var years= new Array(1999, 2001, 2002);
// array functions


// Operators and Switch statement
// Functions - helps with DRY (Dont repeat yourself)
// This is a function statement : declare and define the function
/*
 Function Declarations feel like they were intended to mimic Java style method declarations but Java methods are very different animals. In JavaScript functions are living objects with values. Java methods are just metadata storage to larger extent. 
*/
function calculaterAge(yearOfBirth) {
	var age=2017-yearOfBirth
	return age;
}

// This is a function statement : declare and define the function
// This can be invoked before the function is defined due to Function hoisting
/*
HOISTING
Function declarations and function variables are always moved (‘hoisted’) to the top of their JavaScript scope by the JavaScript interpreter

*/
function yearsToRetire(name, yearOfBirth ){
	var age=calculaterAge(yearOfBirth);
	var yearsLeft=65-age;
	if(yearsLeft > 0) {
		return (name+' has '+ yearsLeft +' to retire');
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
*/
// NOTE:  Hoisting 



