let welcomeHeader = document.getElementById('welcome')
console.log(welcomeHeader);

// single line comments

/*
    multi
    line
    comments
 */

/**
 * Documentation comments
 */

/*
    JavaScript is a loosely-typed language, not untyped!

        Primitive types:
            - string
            - number
            - boolean
            - null (represents the lack of an object value; primitive root value)
            - undefined (an uninitialized value)
            - bigint
            - Symbol (always unique, even if they contain the same value; excellent for UUIDs)

        Structural types:
            - object
                + Array
                + Set
                + Date
                + Map
                + Function
                + user-defined types
 */
let id_1 = Symbol('test'); // single quote or double quote is fine for JS (be consistent!)
let id_2 = Symbol('test');
console.log(id_1 == id_2);

let a_1; //value: undefined
let b_1 = null;
let c_1 = undefined;

// standard/named function declarations
function functionA() {
    console.log('This is a named function declaration!');
}

functionA(); // invokes the function named "functionA"

// anonymous function declarations
let functionB = function() {
    console.log('This is an anonymous function declaration!');
}

functionB();

// Callback function
function complexFunction(someOtherFunction) {
    console.log('complexFunction invoked!');
    someOtherFunction();
}

complexFunction(functionB);

// anonymous arrow function declarations
// NOTE: there is a difference between functionB and functionC's usage
let functionC = () => {
    console.log('This is an anonymous arrow function declaration!');
}

functionC();

// Explore the "this" keyword

function functionD() {
    console.log('functionD, this: ' + this);
    console.log(this); // in a browser environment, refers to the global Window object
}

functionD();

// Object literals
let objectA = {
    greeting: 'hello!',
    printGreeting: function() {
        console.log('objectA.printGreeting invoked!');
        console.log(this);
        console.log(this.greeting);
    }
}

objectA.printGreeting();

/*
    Why is "this" different in a globally declared function vs. an object?

        - Globally declared values (functions and variables) are "hoisted" to the global object
          of the environment we are running in.
                + in the browser, this is the Window object
                + in NodeJS, this is the Object object
 */

// location = 'https://www.google.com'; // DO NOT DECLARE GLOBAL VARIABLES WITHOUT A DECLARATIVE KEYWORD (var, let, const)

let objectB = {
    greeting: 'bonjour!',
    printGreeting: () => {
        console.log('objectB.printGreeting invoked!');
        console.log(this); // refers to the global Window object
    }
}

objectB.printGreeting();

let objectC = {
    greeting: 'hola!',
    greeter: {
        printGreeting: () => {
            console.log('objectC.greeter.printGreeting invoked!');
            console.log(this); // still refers to the global Window object
        }
    }
}

objectC.greeter.printGreeting();

let objectD = {
    greeting: 'hey!',
    greeter: {
        printGreeting: function() {
            console.log('objectD.greeter.printGreeting invoked!');
            console.log(this); 
        }
    }
}

objectD.greeter.printGreeting();

// An example of "higher-order" function
let functionE = function() {
    // some logic
    let a = 5;
    return () => {
        console.log('functionE returned a function that was invoked!')
        console.log(this); // in an arrow function, "this" always points to the global object
    }
}

functionE()();

// IIFEs (immediate invoked function expressions)
(function() {
    console.log('This is an immediately invoked function expression (aka: IIFE)');
})();

(function(x) {
    console.log('This is an immediately invoked function expression (aka: IIFE), Value: ' + x);
})(3.14);

// Example of "template literals"
// Simplified strings through "interpolation"
// Respects whitespace
(function(x) {
    console.log(`This is an immediately invoked function expression (aka: IIFE), Value: ${x}`);
})(3.14);

console.log(
    '<h1>Hello world</h1>\n' + 
    '<h2>This is JavaScript!</h2>'
);

console.log(`<h1>Hello world</h1>



<h2>This is JavaScript!</h2>
`);


// Known as "hoisting". 
// Works because the JS Engine loads declarations first and then executes expressions
functionF();
function functionF() {
    console.log('do the thing');
}

onMessage(someValue);
var someValue = 'someValue';
function onMessage(someString) {
    console.log(someString);
}

/*
    Variable declarative keywords
        - var: been around forever, used to simply declare variables/functions/objects
        - let: introduced in ES6 (ECMAScript 2015), block-scoped
        - const: introduced in ES6 (ECMAScript 2015), block-scoped, represents a constant/final value
        - (lack of declarative keyword): bad practice! results in the binding of the declaration to the global object

    Variable scopes
        - global
        - function/method/local
        - block
        - lexical (closure)
*/

function varScopeExample(x) {
    console.log('varScopeExample (1): ' + greeting); // undefined
    if (x % 2 == 0) {
        var greeting = 'hello!';
        console.log('varScopeExample (2): ' + greeting); // if x is even, greeting = 'hello!'
    }
    console.log('varScopeExample (3): ' + greeting); // if x is even, greeting = 'hello!'
}

varScopeExample(2);

console.log('+-----------------------------+');

function varScopeExample_whatsActuallyHappening(x) {
    var greeting;
    console.log('varScopeExample_whatsActuallyHappening (1): ' + greeting); // undefined
    if (x % 2 == 0) {
        greeting = 'hello!';
        console.log('varScopeExample_whatsActuallyHappening (2): ' + greeting); // if x is even, greeting = 'hello!'
    }
    console.log('varScopeExample_whatsActuallyHappening (3): ' + greeting); // if x is even, greeting = 'hello!'
}

varScopeExample_whatsActuallyHappening(2);

console.log('+-----------------------------+');

function letScopeExample(x) {
    // console.log('letScopeExample (1): ' + greeting); 
    if (x % 2 == 0) {
        let greeting = 'hello!'; // variables declared with "let" are NOT subject to hoisting
        console.log('varScopeExample (2): ' + greeting); // if x is even, greeting = 'hello!'
    }
    // console.log('letScopeExample (3): ' + greeting); // if uncommented, throws ReferenceError
}

letScopeExample(2);

// Const variables
const meaningOfLife = 42;
// meaningOfLife = 43; // throws TypeError

const immutableMaybe = {
    someValue: 10,
    anotherValue: 'test',
    nestedObject: {
        nestedValue: 100
    }
};

try {
    immutableMaybe = {}; // throws TypeError
} catch (e) {
    console.log('Caught error! e: ' + e);
} finally {
    console.log('This will always execute!');
}

console.log(immutableMaybe);
immutableMaybe.someValue = 20; // does actually change the value
console.log(immutableMaybe);

console.log('+---------------------------------------+');

// Aggregate Data Types

let numbers = [1, 2, 3, 4, 5]; // dynamically sized
numbers.push(6);
console.log(numbers);
console.log(numbers.pop()); // can add items to it
console.log(numbers[numbers.length - 1]); // index specific access is standard syntax
console.log(numbers);

let randomVals = [1, 'test', false, function() {}, new Date(), undefined] // JS Arrays not required to be homogenous

let evens = numbers.filter(function(num) {
    return num % 2 == 0;
});

console.log(evens);

let timesTenValues = evens.map(num => num * 10);

console.log(timesTenValues);

function summation(prevValue, currentValue) {
    return prevValue + currentValue;
}

let sum = timesTenValues.reduce(summation);
console.log(sum);

let someMap = new Map();
someMap.set('wsingleton', {firstName: 'Wezley', lastName: 'Singleton'});
console.log(someMap.get('wsingleton'));

let tryIt = 'tryIt';
let me = {
    'firstName': 'Wezley', // legal, but not really required (makes no difference)
    lastName: 'Singleton',
    email: 'wezley.singleton@revature.com',
    username: 'wsingleton',
    '1a': 'but why?',
    'more common': 'you\'ll see this from time to time'
}

// Access object members using dot notation
let myUsername = me.username;

// Access object members using bracket notation
let moreCommon = me['more common'];
let badlyNamed = me['1a'];
console.log(moreCommon, badlyNamed)

// Adding members to objects dynamically
me.new = 'new'
me['new field'] = 'new field value';
console.log(me);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('+------------------------------+');

// for..of loop (iterates over iterable objects [strings, arrays, maps, etc.])
for (let value of numbers) {
    console.log(typeof(value)); // number
    console.log(value); // prints as a number
}

console.log('+------------------------------+');
// Apparently maps in JS are pure associative arrays (even indexes are keys, odds are values)
for (let entry of someMap) {
    console.log(entry);
}

console.log('+------------------------------+');
// for..in loop (used iterate over the keys of some object)
for (let value in numbers) {
    console.log(typeof(value)); // string
    console.log(value); // prints as a string, rather than a number
}

console.log('+------------------------------+');
for (let prop in me) {
    console.log(`${prop}: ${me[prop]}`) // access object members dynamically
}

let cardJson = `{
    "questionText": "What does JS stand for?",
    "answerText": "JavaScript",
    "owner": {
        "firstName": "Wezley",
        "lastName": "Singleton"
    }
}`;

console.log(cardJson);
let card = JSON.parse(cardJson);
console.log(card);

let simplifiedCard = {};
for (let prop in card) {
    let propVal = card[prop];

    if (typeof(propVal) == 'object') {
        for (let innerProp in propVal) {
            if (innerProp == 'firstName') {
                simplifiedCard['owner' + innerProp] = propVal[innerProp];
            }
        }
    } else {
        simplifiedCard[prop] = card[prop];
    }

}

console.log(simplifiedCard);

console.log('+------------------------------+');
console.log(typeof(new Map()));

// Make a custom map data structure
// Implementation of the "revealing module" design pattern
// https://medium.com/@Rahulx1/revealing-module-pattern-tips-e3442d4e352
function MyCustomMap() {

    let entryArray = [];

    function mapSet(key, value) {
        entryArray.push(key);
        entryArray.push(value);
    }

    function mapGet(key) {
        for (let i = 0; i < entryArray.length; i++) {
            if (entryArray[i] == key) {
                return entryArray[i + 1];
            }
        }
    }

    return {
        set: mapSet,
        get: mapGet
    }

}

let myMap = MyCustomMap();
myMap.set('key-1', 'value-a');
myMap.set('key-2', 'value-b');
myMap.set('key-3', 'value-c');
myMap.set('key-4', 'value-d');

console.log(myMap.get('key-3'));
console.log(myMap);

// Make a "constructor" function (can be used with 'new')
function AnotherCustomMap() {

    let entryArray = []; // effectively "private" (though such keyword actually exists -- yet)

    this.set = function(key, value) {
        entryArray.push(key);
        entryArray.push(value);
    }

    this.get = function(key) {
        for (let i = 0; i < entryArray.length; i++) {
            if (entryArray[i] == key) {
                return entryArray[i + 1];
            }
        }
    }

}

let anotherMap = new AnotherCustomMap();
anotherMap.set('valueA', 1);
anotherMap.set('valueB', 3);
console.log(anotherMap.get('valueB'));
console.log(anotherMap);

console.log('+------------------------------+');

/*
    Type Coercion and Truthy/Falsy Values

    Falsy Values:
        - ''/"" (empty string)
        - 0
        - null
        - undefined
        - false
        - NaN
 */

console.log(7 + '7' + 7); // "777"
console.log(7 + 7 + '7'); // "147"

let username = 'wsingleton'; // pretend we obtained some value from an HTML form on the page
let password = 'p4ssw0rd'; // pretend we obtained some value from an HTML form on the page

if (username && password) {
    console.log(`Provided credentials: {username:${username}, password:${password}}`);
} else {
    console.log('Invalid credentials provided!');
}

console.log('hello' - 3); // NaN = Not a Number
console.log(typeof('hello' - 3)); // that's right, Not a Number is a number.

console.log(10 / 0); // Positive infinity
console.log(-10 / 0); // Negative infinity

let nan_1 = 'hello' - 3;
let nan_2 = 'hello' - 3;

console.log(nan_1 == nan_2); // NaN is never equal to itself (in fact all operations on NaN yield false or raise an error)

// Difference between =, ==, and ===
let z = 1; // = is the assignment operator
console.log(7 == '7'); // == checks for "coerced" equality (attempts to coerce values to be compatible before evaluating)
console.log(7 === '7'); // === does not allow type coercion, and will return false if types are not same

console.log('hello' + 3); // coerce 3 into '3', then concatenate

console.log('+------------------------------+');


function guardedLogin(un, pw) {
    console.log(`Provided login credentials: ${un}, ${pw}`);
}

// Guard operator
let loginUsername = 'wsingleton';
let loginPassword = 'password';
(loginUsername && loginPassword) && guardedLogin(loginUsername, loginPassword);

// Default operator
function returnsSomething(x) {
    return (x % 2 == 0) ? {a: 1} : null; // ternary operator (same as Java's)
}

let obj = returnsSomething(3) || {b:2}; 
console.log(obj);

console.log('+-------------------------------------------------+');

// Playing around with the DOM (basics)
function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    if (username && password) {
        console.log(`Provided login credentials: ${username}, ${password}`);
    } else {
        alert('You need to provide credentials!');
    }

}
document.getElementById('login-btn').addEventListener('click', login);

let token = ''; 

function isTokenValid() {
    return !!token; // neat little trick to check for the original truthy/falsy value of anything
}

console.log(isTokenValid());