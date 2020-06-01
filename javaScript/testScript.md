# JAVASCRIPT HELP DOCS 
Each browser has a JS engine which interprets the js and each browser has its own 
They all implement the ECMAScript standards and differes on anything that is not defined

- ECMAScript vs JS   
ECMAScript defines the standards of javacript language while JS is the implemetation of it
Every year new version of JS is released, so when we begin with what syntax to use?
This way we can transpile back to anyversion we need and eventually the systems will catch up with newer version 

ES5 is supported on all browser  
ES6/ ES2015 - not yet supported by all browsers  
ES2016 - not many different than ES2015  
This study is on ES5/ES6

## Variables
Variables declared with the var keyword can not have Block Scope.  
Variables declared with the let keyword can have Block Scope. - meaning Variables with let cannot be used outside
Variables defined with let and const are not hoisted to the top.

* ES5  Example:  
```var userName = "john";
var userNameLast = "Brow";
var age = "26";
var height = 178;
var isHuman = true;
var i = 5;
for (var i = 0; i < 10; i++) {
	// some statements
}// Here i is 10
```
* ES6 Example:
```let userName2 = "john";
let userNameLast2 = "Brow";
let age2 = "26";
const height2 = 178;
let isHuman2 = true;
let i = 5;
for (let i = 0; i < 10; i++) {
	// some statements
} // Here i is 5
username = 'GuruKiran' // Creates a variable globally
```

### String functions
```
var firstName = 'BlahBlahBalh';
var lastname = 'lololol';
console.log(firstName.length); // 12
console.log(firstName.concat(lastname)); // BlahBlahBalhlololol
console.log(firstName.indexOf('h')) // returns 3, also  Returns -1 if not found
console.log(firstName.indexOf('h', 5)) // Starts to look for h after 5 char
console.log(firstName.search('h')) // returns 3 but same as index of but cannot take in regex firstName.search(/h/gi)
console.log(firstName.slice(7, 9)); // Gets 7,8 char, also look for -9 to -7 will get the same results
console.log(firstName.slice(7)); // everything after 7
console.log(firstName.substring(10, 12)); // cannot accept negative indexes when using two parameter. except that same as slice
console.log(firstName.replace('a', 'n')); // Only replaces first instance
console.log(firstName.replace(/a/gi, 'n')); // Replaces all instances of a on the string and looks for case insensitive value
console.log(firstName.trim()); // removes white space at the end
console.log(firstName.split("")); // Splits the string into an array, var x = firstname.split("")
```

###  Number methods
```
console.log(height.toString()); // returns value in string 
// Number() method always returns a number from its argument
Number(true);          // returns 1
Number(false);         // returns 0
Number("10");          // returns 10 
```
### Math
The math object provides you properties and methods for mathematical constants and functions.   
the properties and methods of Math are static and can be called by using Math as an object without creating it.

```
	 // Math.abs(x) - returns absolute number
	 Math.abs(-1) // 1
	 Math.abs(null); // 0
	 Math.abs(20); // 20

	 // Math.random() Returns random number 
	 // between 0 (inclusive) and 1 (exclusive).
	 Math.random() //0.8503299768752814

	// Math.round(x) - round to the nearest integer
	Math.round( 0.4 ) // 0
	Math.round( 0.5 ) // 1
	Math.round( 20.7 ) // 21
	Math.round( -20.3 ) // -20

	// Math.floor(x)  - returns the largest integer 
	// less than or equal to a number x 
	Math.floor(20.7) // 20
	Math.floor(-2.2) // -3

	// Math.ceil( x ) returns the smallest integer
	// greater than or equal to a number.
	Math.ceil(20.7) // 21
	Math.ceil(-2.2) // -2

	// Math.max(value1, value2, ... valueN ) ;
	// returns the largest of zero or more numbers. 
	// If no arguments are given, the results is –Infinity.
	Math.max(10, 20, -1, 100); // 100
	Math.max(-1, -3, -40); // -1
	let ary = [2,6,100,200];
	Math.max(...ary) // 200

	// Math.min(value1, value2, ... valueN ) ;
	// returns the smallest of zero or more numbers. 
	// If no arguments are given, the results is –Infinity.
	Math.min(10, 20, -1, 100); // -1
	Math.min(-1, -3, -40); // -40
	let ary = [2,6,100,200];
	Math.min(...ary) // 2


	// Math.pow(base, exponent ) ;
	Math.pow(2,2) // 4
	

```

### type coercion
JavaScript is a weakly-typed language, values can also be converted between different types automatically  on explicityly
Two types of Coercion  
```
const x=42;
const explicitCoercion = x.toString(); // Explicit coercion where a user requests for the typecasting
const implicitCoercion = x+"";  // Implicit where JS converts it 
```
It usually happens when you apply operators to values of different types - 2/’5'  

One operator that does not trigger implicit type coercion is ===, which is called the strict equality operator.  
The loose equality operator == on the other hand does both comparison and type coercion if needed.  
Due to the implicit coercion always use === when comparing

* Example of implicit type coercion.
```
true + false; // returns 0+1 = 1
"number" + 15 + 3 // "number153"
15 + 3 + "number" // "18number"
```
To avoild this always use strict equality operator  
```
if (age === 26) { // Fails and else is executed 
	console.log("26 is a number");
} else {
	console.log("26 is a string"); // This is displayed
}
```


###  The Ternary Operator and Switch Statements  
```
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
```
* Switch statement
```
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
```

###  Truthy and Falsy values  
falsy values: undefined, null, 0, '', NaN  
truthy values: NOT falsy values   
```
var height;
if (height) {
	console.log("Not defined")
} else {
	console.log("defined")
}
```

###  Loops  
- For loop   
```
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
```
This is nice but now you have to worry about indices. 

- forEach()
If you have an array.You use forEach by specifying a function that takes a parameter. Everytime your function is called its being called with each item in the array.
This method only works for arrays

```
const newArr =  [ 12, 34, 56, 43 ]
newArr.forEach( (item) => {
  console.log(item)
});
// 12
// 34
// 56
// 43
```
Because the forEach() methods run callback functions, you would use return to skip the current item. There is no way to break the loop completely.


- for...in   
	Use a for…in loop to iterate over any object
	// A for...in loop iterates over the properties of an object in an arbitrary order   
	for…in loop over an object it will give you the value to each key in the object.
	```
	var finalValue = "";
	var exampleObject = { a: 1, b: 2, c: 3 };

	for (var property in exampleObject) {
		finalValue += exampleObject[property];
	}
	console.log(finalValue); // 123
	
	```
	For…in loops do not have a specific order for execution. Therefore you shouldn’t use it if you are expecting a specific order.
	Ideal for looping over objects


- for...of
	for…of to iterate over the values in an iterable,
	creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

	```
		// array
		const array1 = ['a', 'b', 'c'];

		for (const element of array1) {
			console.log(element);
		}

		// String
		const iterable = 'boo';

		for (const value of iterable) {
			console.log(value);
		}
		//Map
		const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

		for (const entry of iterable) {
			console.log(entry);
		}
		// ['a', 1]
		// ['b', 2]
		// ['c', 3]

		for (const [key, value] of iterable) {
			console.log(value);
		}
		// 1
		// 2
		// 3

		// set
		const iterable = new Set([1, 1, 2, 2, 3, 3]);

		for (const value of iterable) {
			console.log(value);
		}

	```
	In for...of loops, abrupt iteration termination can be caused by break, throw or return. In these cases, the iterator is closed.

	```
		for (const o of []) { 
			console.log(o); 
			break; // closes iterator, execution continues outside of the loop
		}
	```


- while loop
```
// While loop
	while (i < students.length) {
		i++
		console.log(i);
	}
```

### Arrays
``` 
var students = ['John', 'gil', 'gaia'];
var ages = [10, 20, 30];
var years = new Array(1999, 2001, 2002);

// array functions
// push, pop, shift, unshift, indexof
students.push('Gaida'); // adds a new element 
// or with the length of the array add a new element
students[students.length] = 'Gaida';
var poppedElement = students.pop(); //method removes the last element from an array and returns that element.


students.shift(); // Removes the first element and returns that to a var
// The unshift() method adds one or more elements to the beginning of an array and returns
console.log(array1.unshift(4, 5)); // add 4,5 to array1
students.push('Gaida'); // adds a new element  to the end of an array and returns the new length

ages.join("");// returns a string 102030

students.sort(); // Sort it alphabetically for arrays of string
// to sort array of number/ Soting object arrays
ages.sort((a,b)=>{return a-b});

// concat adds two arrays
const array3 = students.concat(ages); //['John', 'gil', 'gaia' , 10, 20, 30]
// same can be achieved with
const array3 = students[...ages]; //['John', 'gil', 'gaia' , 10, 20, 30]

// includes() method determines whether an array includes a certain value among its entries
students.includes('John')//true
age.includes(2) // false

// indexOf method returns the first index at which a given element can be found in the
ages.indexOf(20) //1 , if not found -1

// Join returns a string by concatinating the array elements with the delimiter shared
ages.join(); //10,20,30
ages.join(''); //102030

// The reverse() method reverses an array in place.
years.reverse() // [2002,2001,1999];

// The slice() returns part of the array from beg and end of the index provided
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));// expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5)); // expected output: Array ["bison", "camel", "duck", "elephant"]


// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at index 1
console.log(months); // expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');// replaces 1 element at index 4
console.log(months); // expected output: Array ["Jan", "Feb", "March", "April", "May"]
months.splice(4) // removes the element on index 4 and returns it while the array has one less element

The every() method tests whether all elements in the array pass the test implemented by the provided function.

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
let numbers = [1, 2, 3, 4]
let filteredNumbers = numbers.map(function(num, index) {
 console.log(index) // returns the index of the array being parsed
})

The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

// Itration of array
students.forEach((valueOfStudent) => {
	console.log(valueOfStudent)
}); // prints all students name
//In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes. Associate aray/ Hashes
```


ES6 introduces four new data structures
Map, Set, WeakSet, and WeakMap.

### Map
In ES5, JavaScript objects — which are just arbitrary collections of properties with keys and values — can simulate hashes, but :
* JavaScript object property keys must be strings,
* Objects weren’t designed to be used as collections, and as a result there’s no efficient way to determine how many properties an object has
* Objects have built-in methods like constructor, toString, and valueOf. If one of these was added as a property, it could cause collisions

While Map, are collections of keys and values of any type.
It’s easy to create new Maps, add/remove values, loop over keys/values and efficiently determine their size

```
let map = new Map(); // create a new map

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 3
map.delete('1'); // deletes the element with key '1'

// Iteration over Map
map.keys() – returns an iterable for keys returns itrator
// if the keys or values need to be of array
let arryKeys=Arry.from(map.keys) // converts it to an array
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  console.log(entry); // ["cucumber", 500] returns object Array
}

// Using foreach, the call back gets value first and then the key
recipeMap.forEach( (value,key)=>{ console.log(key,value)})   

```
### Set
Set are ordered lists of values that contain no duplicates.
Instead of being indexed like arrays are, sets are accessed using keys
```
let set = new Set();
OR
// let set = new Set(["oranges", "apples", "bananas"]);

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

set.has(john) // true
set.delete(pete)  // removes peter from set

// Iteration over Set
// for (let value of <setname>)
for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}


// Array duplicate removal
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
console.log([...new Set(numbers)]) 

// Given a string
let text = 'India'
let mySet = new Set(text) 
for (let elem of mySet) { console.log(elem)} // Will console log India as I!==i

```

Map and Set‘s references to objects are strongly held and will not allow for garbage collection. This can get expensive if maps/sets reference large objects that are no longer needed, such as DOM elements that have already been removed from the DOM.

To remedy this, ES6 also introduces two new weak collections called WeakMap and WeakSet. These ES6 collections are ‘weak’ because they allow for objects which are no longer needed to be cleared from memory.

### Regex
JavaScript RegExp class represents regular expressions, RegExp define methods that use regular expressions to perform powerful pattern-matching and search-and-replace functions on text.   

```
	var pattern = new RegExp(pattern, attributes);
	or
	var pattern = /pattern/attributes
	// pattern: Pattern to match 
	// Attributes : g,i, m - global/ignorecase/match multiple lines
	// m - Specifies that if the string has newline or carriage return
	// characters, the ^ and $ operators will now match against a 
	// newline boundary, instead of a string boundary
```
* PATTERNS
1.  Brackets: are used to find a range of characters.
	```
	// [...] - Any one characer 
	[AEIOU] - matches one vowel in uppercase 
	T[aeo]p - Match Tap/Tep/Top

	// [ - ] - Any one character from the range
	[0-9] - Any one digits between 0-9
	[a-z] - Any one alphabet a-z
	[A-Z] - Any one alphabet a-z
	[a-Z] - Any one char for a-z, A-Z


	// [^...] Not that one character
	[^x] - once character that is not x

	```
2. Quantifiers   
The frequency or position of bracketed character sequences and single characters can be denoted by a special character.The +, *, ?, and $ are used for that

	```
	// + One or more characters match
	a+ : matchs character with a or aaa

	// * : Zero or more instance
	a* - match a with any characters

	// ? : Once or none match
	a? - Matchs one instance of a or none

	// {n} : Exactly n times
	a{3} matchs a exact 3 time matches
	// {n,y} Match  n or y times
	a{3,5} should match a 3 or 5 times

	// $ match char/string ending with
	a$ - string ending with a

	// ^ match char/string begining with it
	^a - string starting with a

	// . match Any character except line break
	a.b will match acb
	.* will match anything

	```

3. Metacharacters : metacharacter is simply an alphabetical character preceded by a backslash that acts to give the combination a special meaning.
	```
	\s look for white space (includes tab/space/newline)
	\S non-whitespace character
	\d digits
	\D non digits
	\w match for words
	\W non word characters
	\t match for tab
	```

4.  Logical 
	```
		// | OR using to group characters
		A(nt|pple) - will match Ant and Apple
	```

5. Grouping: 
* parentheses () can be used for grouping, groups the character, p(hp)+ will look for p followed by one or more instance of hp
* Square brackets [] define a character class [0-9]  or a[bc]d matches one of the character in the square braces
* curly braces {} are used by a quantifier with specific limits.

6. **ESCAPING a special characters**
There are instances when we need to match regex patterns like * or .
To make sure its not interpreted as regex we escpae to search for that specific character
	```
		a\.c - escape . and matches 'a.c'
		\*\+\?\$\^ - matches string *+?$^
		\/\\ - /\ is matched
		\[\{\(\)\}\] is matched by [{()}]
	```
Using regex example:
- Create a regex object with the pattern to match
- uses the methods supported to query the pattern against a string

	```
		let stringCompare = "JavaScript is a scriptic lang, you can script to experience this";
		// look for script ignoring case across the string
		let regExample = new RegExp('script', 'gi');
		let matches = regExample.exec(stringCompare); // if string matches returns an array with the index of the first match, loop to find all matches and index
		matches.index will return the first match

	```

### Functions - helps with DRY (Dont repeat yourself)
 Function Declarations feel like they were intended to mimic Java style method declarations but Java methods are very different animals. In JavaScript functions are living objects with values. Java methods are just metadata storage to larger extent. 
```
// This is a function statement : declare and define the function
function calculaterAge(yearOfBirth) {
	var age = 2017 - yearOfBirth
	return age;
}
```
This can be invoked before the function is defined due to Function hoisting  

### HOISTING
Function declarations and function variables are always moved (‘hoisted’) to the top of their JavaScript scope by the JavaScript interpreter  
In JavaScript, a variable can be declared after it has been used.  
The variable declarations are hoisted but not assign the value, so the interpretor know the variable exists and assignment happens when it happens in the program 
	Example: var x=6; var Sum =x+10; var x;  
NOTE: Variables and constants declared with let or const are not hoisted!
```
	console.log(calculaterAge(1999));
	console.log(yearsToRetire('Gil', 1980));
	function yearsToRetire(name, yearOfBirth) {
		var age = calculaterAge(yearOfBirth);
		var yearsLeft = 65 - age;
		if (yearsLeft > 0) {
			return (name + ' has ' + yearsLeft + ' to retire');
		} else {
			return (name + " Has already retired");
		}

	}
	
	cannotHoist(1,2);  // This will fail as the anonymouns function is assigned to a const and they are not hoisted
	const cannotHoist = function(a,b){
		return a+b;
	}

	Javascipt engine when running first reads the file for any syntax error, function definitions are saved in memory, lexically scoped variable (var) will be declared and executes the scripts. 
```
### FUNCTIONS

* Expressions  
 any valid set of literals, variables, operators, and expressions that evaluates to a single value.  
 The value may be a number, a string, or a logical value.  
 Conceptually, there are two types of expressions:  
 1. those that assign a value to a variable 
 2. those that simply have a value  
 ```
 1. var x=7
 2. 3+4 
 ```
* Function Expression : A function expression can be stored in a variable:  
Declare define and save the value   
* **IIFE** - immediate Invoked Functional Expression    
	In JS IIFE - is a function which is executued immediately as its created, This pattern is often used when trying to avoid polluting the global namespace, because all the variables used inside the IIFE (like in any other normal function) are not visible outside its scope  
	This is just a bunch of statements   
	It creates a closure   

	To Do this us () and write the anonymous fuction with in that  
	`(function(){})();  `
	and invoke it with the closing () in the end
	By using () it looks at it as expression and not declaration/statement, and the invoke the fuction   
	IIfE can only be called only once and the idea is with data privacy only 
	IIFE helps with encapuslating variables 

```
//	Named Function Expression
		var foo = function bar(value1,value2) { ... }
//	Anonymous Function Expression
		var foo = function(value1,value2) { ... }
		
//	All other Function you declare and define to begin with are Function Declaration
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
```

* **First Class/Order Function**   
Functions can be    
    - Assigned to variables, value of array, Object value
	- pass function as arguments to other function
	- return functions
first order functions, don’t take a function as an argument or return a function as output.

* **High Order functions**    
    - Any function that take one or more  function as input and returns a function     
	1. Map(Array Map)    
		method creates a new array with the results of calling a function for every array element.calls the provided function once for each element in an array, in order.
		```
		var numbers = [65, 44, 12, 4];
		var newarray = numbers.map(myFunction) // [650, 440, 120, 40 ]

		function myFunction(num) {
			return num * 10; 
		}
		```

	2. Filter   
		creates an array filled with all array elements that pass a condition (which is form of function)   

		```
		const words = [
			'spray', 
			'limit', 
			'elite', 
			'exuberant', 
			'destruction', 
			'present'];

		const result = words.filter(word => word.length > 6);
		// ["exuberant", "destruction", "present"]
		```
	3. Reduce   
		method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.  
		```
		const array1 = [1, 2, 3, 4];
		// reducer Method to pass which adds elemenets
		const reducerMethod = (accumulator, currentValue) => accumulator + currentValue;

		
		console.log(array1.reduce(reducerMethod)); 
		// expected output as : 
		// 1+2 > 3+3 > 6+4 => 10
		```


### SCOPING 
Global JavaScript Variables  : A variable declared outside a function, becomes GLOBAL.  
Variables declared within a JavaScript function, become LOCAL to the function.


* Using Stict mode:  
		Strict mode is declared by adding "use strict"; to the beginning of a script or a function.
		Helps to write cleaner code such that no undeclared variable

* In JavaScript there:  
1. are 5 different data types that can contain values:  
    string  
    number  
    boolean  
    object  
    function  
2. There are 6 types of objects:  
Object  
Date  
Array  
String  
Number  
Boolean  
3. 2 data types that cannot contain values:  
null  
undefined  

### Objects N Properties 
Objects are mutable and stored by ref   
Ways to create an Object in JS   
1. Object literal : Object literals encapsulate data, enclosing it in a tidy package. Has name value pair.
```
// Creation
var george = {
	firstName: 'George',
	lastName: 'Goldman',
	age: 35,
	occupation: 'manager',
	isMarried: true,
	fullName: function () {
		return this.firstName + " " + this.lastName;
	}
};
```

* Reading values part of the object  
	1. Dot Notation: Object.key  
	2. Square braces: object['key'] , key must be passed as string  
	```
	console.log(george);
	console.log(george.age);
	console.log(george['isMarried']);
	console.log(george.fullName()); // if you access the function with () returns only definition
	```

* Object values can be updated / Data Mutation  
```
george.lastName = 'miller';
george['occupation'] = 'CTO';
console.log(george);
```

2. Creating object with object keyword using new  
```
var mitch = new Object();
mitch.firstName = 'Mitch';
mitch.lastName = 'Brand';
mitch['age'] = 65;
console.log(mitch);
```
The data that the object holds can be anything, from numbers, string, array, functions and even objects  


* Getter and setters can also be used  
Its useful instead of functions as when you invoke it you dont really need to use () withe the dot
```
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
	},
	get userName() {
		return (this.firstName + " " + this.lastName);
	},
	set userLastName(valueOfName) {
		this.lastName = valueOfName;
	}

};

john.calculateAge();
console.log(john)
john.userName // returns John Greg, this way the getteres are easier to invoke 
john.userLastName = "guru" // updates the setter method

```

- Prototype/Prototypal inheritance - constructor/keyword  
all non primitive types have properties and methods asscoiated with them - prototype
```
let a=[];
a.push('test') // adds a value and push is function asscoiated with array objects, Array.prototype.push()
// a.__proto__ shows all the supported proptotypes methods for the array
// a.__proto__.__proto__ shows the methods which are inherited by the array object of the object methods
let s= 'string value'
s.toUpperCase() // will convery the string to upper case
// Functions that can invoked on non primitives 
```
Each object has reference to its prototype   
So every obejct type has prototype property  which can be used and add more custome properties to the object/class    

Inheritance - We use prototype property for each specific object is inherited from the main object methods as well

Every object created is an instance of the object constructor has a methods in prototype property and any new object created inherits the Object   


- Object Mutation example
```
const o = {
	a:'a',
	b:'b'
};
const o2 = o;

o.a='new value';


cosole.log(o2.a) // will have new value printed as the object o2 is stroed by ref and both o and o2 points to same obj


- Global Object
	At runtime we have a global object any variable(lexically scoped)/method declared gets added to the global object
	In the node env, the object is called `global`
	While in browser `window` is a global object
```

## EXECUTION CONTEXT/SCOPE n EXECUTION STACK:

JS is a single threaded syncronous language, if a script takes ages to load that will make the page unresponsive.    
JS engine executes this JS code  in the browser
differnt engine such as: Google V8 used in chrome, Spider Monkey, JS core     

Typically the engine does the following:
 script > is read by the parser (verifys the syntax) > converts to machine code > invokes the script  

1. Global Execution context :  
	its location on stack where all the variables/variable initiations and function names/declarations are stores
	on browser window is the global object and all variables and Object created will be associated with the global object
	example:
	lastname === windows.lastname 
2. Execution context   
	This is where the code is executed for example when a function is invoked its run in the execution context 
		
		
* HOW DOES THE EXECUTION CONTEXT GET CREATED     
Each execution context has an Object which stores a lot of important data that a function will use when its run and this happens before the code is executed.   
The execution context object has the following:  
	- Variable Object : This contains all arguments passed to the function, function declaration and Variable declaration.  
	As the variable object is created at the beginning has function declaration (complete function) and 
	Variable declarations although known to variable object its marked as undefined before the execution context.  
	This is known as hoisting, where the function and the variables are known before the code is executed.  
	Also note this work only on FUNCTION DECLARTION, while Function expression hoisting does nmot work as the variables are undefined  
	
	- Scope chain : Where a variable or fucntion can be accessed. Each function and variable has scope. 
	In JS scope is based on creating a function, each new function creates a scope or Lexical scoping.
	Lexical scoping is when function written with a function gets access to variable and function of parent function.  
	- this variable :
	Its associted with the execution context
	When a function is called its put on top of the execution stack,   
		1. Creation phase: create a variable object with scope and understand the this variable, Functions are defined and variable are set to undefiend  
		2. Execution phase runs the function in global scope or the scope on which its declared
#### this keyword 
this keyword in JS is different to other languages   
1. In global Context: this referes to the global obejct, on node all global variable or on browser this returns window
```
function namePerson() {
    console.log(this.name);
}
var name = "Doug";
namePerson();     // "Doug"


OR


function test_this() {
	return this;
}
test_this();
```

2. Calling an Object’s Method: we need a way of identifying and referring to the object that we’re currently working with. this serves the purpose by providing our objects the ability to examine themselves, and point at their own properties.
```
	var deep_thought = {
		the_answer: 42,
		ask_question: function () {
			return this.the_answer;
		}
	};
	deep_thought.ask_question(); // 42
```

3. Constructor : 
Creating a constructor, this is used to refer to the object being created. 
```
function BigComputer(answer) {
	this.the_answer = answer; // attaches the property to the instance 
	this.ask_question = function () {
		return this.the_answer;
	}
}
var deep_thought = new BigComputer(42); 
var the_meaning = deep_thought.ask_question(); //42
```



### HOISTING EXAMPLE
```
console.log(addition(2, 3)); // this will be run as the function is hoisted and the declartion are in global execution object
function addition(a, b) {
	return (a + b);
}

//console.log(sub(1,3)); // Uncaught TypeError: sub is not a function
var sub = function (a, b) {
	return (a - b);
}
```

### SCOPING
```
add(10,11);	
function add(x,y) {	
var a = x;
var b = y;
sub();
function sub(){
	console.log(x+y); // Accessing X and Y from global /// for parent function 
	}
}
```

## MODULE IMPORT EXPORT
Node.js has a set of built-in modules which you can use without any further installation.  
Importing modules using require, and exporting using module.exports and exports.foo.  
To include a module, use the require() function with the name of the module:  
Example: 
```
var http = require('http');
var dt = require('./myfirstmodule');
///Importing modules using ES6 import, and exporting using ES6 export
```

### JavaScript Errors - Throw and Try to Catch
The try statement allows you to define a block of code to be tested for errors
The catch statement allows you to define a block of code to be executed,
The finally statement lets you execute code, after try and catch, regardless of the result

## DOM MANIPULATION - document object model
Browser renders HTML to a webpage   
HTML defines the tree like structures, browser constructs the tree in the memory before showing the page    
DOM  - Document object model    
tree like structure browser maintains to be insync with html of the page    
HTML webpage content is stored in the DOM which can be accessed and changed by JS  
HTML has elements and attributes like class, class can be used multiple times but ID are unique. The htmp page is divided into two parts  
Header and body: the body is the visible section of the page, while header has additional information like the fonts and css style sheets  
CSS file has presententaion /style the webpage, it has rules to do that. The CSS file is related to the html using the class name from the html in CSS to define the rule in CSS  
			
```
// Updates the text with html styling, sET HTML
document.querySelector("#name-0").innerHTML = '<em>' + "GURU" + '</em>';
// Updating the text on the html element, SET TEXT
document.querySelector("#score-0").textContent = 200;
// Getting value from DOM	
var name = document.querySelector("#name-0").textContent;
console.log(name);
// WE can also manipulate the CCS styling of the page
document.querySelector('#score-0').style.color = 'red';
```



## PACKAGE MANAGERS
Package Managers is essentially a way to automate the process of installing, upgrading, configuring or removing software.   
**What is NPM?**  
	NPM is a package manager for Node.js packages, or modules if you like.  
	www.npmjs.com hosts thousands of free packages to download and use.  
	The NPM program is installed on your computer when you install Node.js  
	A package in Node.js contains all the files you need for a module.  

**What is YARN?**  
Yarn is also a package manager which is created with by FB to solve the problems they were having while using NPM particularly the problems with consistency, security and speed.  
Its fast as Yarn installs multiple packages at once compared to NPM which installs one at a time.   
**NPM’s security issues.**  
- NPM allowed packages to run code on installation. NPM will run code from dependencies automatically and on the fly. While this feature has its conveniences, it raised a few security concerns.   
- Yarn is different to NPM, is that Yarn only installs from your yarn.lock or package.json files. Yarn.lock ensures that the same package is installed throughout all devices, this reduces the possibility of bugs from having different versions installed.
- Yarn can also be run in offline mode if run once on that machine  
- **NPM 5** introduced the package-lock.json file for better versioning control.


## NODE JS  
Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. The Node.js package ecosystem, npm, is the largest ecosystem of open source libraries in the world.  
Node.js is an open source JavaScript run-time environment used for making web servers and other networking tools.  
Node.js is similar to PHP, but there are some notable differences. In PHP, functions tend to block until completion, which means that commands execute one at a time.   
In, Node.js, commands are executed in parallel, and callbacks are used to determine completion or failure.  
A new release of Node.js is cut from the GitHub master branch every six months around April and October.   

**Whenever a new odd-numbered version comes out, the most recent even version goes to long-term support, or LTS.**

Versions under LTS receive active support for 18 months followed by an additional 12 months of maintenance support.

NODE JS release cycles: https://github.com/nodejs/Release


### ACCESSING ENV VARIBLE IN JS SCRIPTS
NOTE: When running a script and if you need to access an env variable you can do the following
		```
		process.env.ENV_VARIABLE
		where ENV_VARIABLE is the variable that is set
		```

### Node Version Manager (NVM)  
nvm seems to manage multiple versions but on a global basis. That is, you can switch between versions  of Node  
Node Version Manager (NVM) is a neat little bash script that allows you to manage multiple versions of Node.js on the same box.  
A version manager really helps to test our applications under different versions of the related software
```
	INSTALL:
		curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
	Installing Different Versions of Node.js
		nvm install v6.5.0
	To designate the latest version of Node.js as your default, run:
		nvm alias default node
		nvm alias my-favorite 6.5.0

		and use them as

		nvm use my-favorite

		To get a list of the Node.js versions you have installed as well as your assigned aliases, just run:
			nvm ls
```

### TODO
JSON Parser
	JSON.parse()



## CLASS IN JS
Introduced in ES6   
Name with upper case
to create one use   
class <clas Name>{	
}

- METHODS  
	In JS function are first-class functions, meaning they can have properties and also methods just like any object but we can invoke the function. They are function Objects  
	* passing fucntions as arguments  
	* returning arguments as arguments  	
		Invoking functions that return a function to do that:
```
		var d=functionA(x){
			returns funtionB(y){

			}
		}
		d(x)(y);		
```
.call/ .apply invokes a method from another class with the constructer set(this variable) invoke the method right away  
.bind helps to set a variable with the 	function from a differnt class which can be used to invoke later and not immediately

- Lexical scoping: Variables declared outside of a function are global variables and are visible everywhere in a JavaScript program. Variables declared inside a function have function scope and are visible only to code that appears inside that function

Static methods are fucntions asscociated with the class itself and not bound to any instance of it

Constructor: When a new class is created invoke this method,

## INHERITANCE
Given we have a class to add more properties/behaviour to it we inherit and extend the class, to do this we use extends/super keyword    
* extends - the parent class we are inheriting/extending it
* super - access the parent class method

Given we have a constructor in the child class, always run the parent constructor to begin with

## CLOSURE
- A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

```
function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++) {
    arr.push(function () { console.log(i) })
  }
  console.log(i) // will have 5 due to var scoping which is until the function ends
  // if let is used to declare i, i scope will be with in for and will work as expected
  return arr
}
const functionArr = makeFunctionArray()
functionArr[0]() // returns 5 

```
Example 2
```
function makeHelloFunction() {
  var message = 'Hello!'

  function sayHello() {
    console.log(message)
  }

  return sayHello
}

const sayHello = makeHelloFunction()

// the variable called message is not in scope here
console.log('typeof message:', typeof message)
// but the function sayHello still references a variable called message
console.log(sayHello.toString())

// because of the closure, sayHello still has access to the variables within scope
// when it was declared
sayHello()
```
## Callbacks vs Promises vs Async/Await
TODO 

Callback hells use promises

## Transpilers
They help to convert the code from ES6, ES2016 etc back to ES5 format. 
Polular ones include babel, Typescript, coffeeScripts etc

## ReactJS 
allows to build the reusable componenets you can use through your webpage
 - Helps to update the page with the dynamic component with out having to reach out to the server to fetch a new view
 - Angular helps to build the Single page application - Angular 2 has the tools to control the user navigation/what user does, but core react Js can do that but needs more library to do that 

 ### REACT
 - Allows us to write declarative views that react to changes in data


  ##### Imperative vs Declarative programming 
  > I : Series of steps to achieve it, in JS to modify the tree, we get the element and add a class or remove it etc
  > D : Say what you want this, ex: html, provides i want the page and browser renders the page



##### SOME EASY THINGS TO DO
1. Intersection elements of two arrays
array1.filter(value => array2.includes(value))
2. Match regex on string with a variable value
curString.match(new RegExp(`${char}`, 'g'))
3. Matching values in string
// MatchAll returns an iterator
for(i of x.matchAll('a')){console.log(i.index)}

Strings
```
	let x = 'abcdedddaa'
	x.match(/d/g) //['d','d','d','d'] returns all matched values
```
4. Random number generator between range 1-10
Math.floor(Math.random()* (10-1) + 1)
Math.floor(Math.random()* (max-min) + min)

5. filter multiple same elements of array y
y.filter(elem => elem.includes('a'))