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
