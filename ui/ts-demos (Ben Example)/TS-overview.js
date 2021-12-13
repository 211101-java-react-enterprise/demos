console.log("Hello World from Typescript!");
/**
 * Typescript:
 *
 *  Typescript is a high level programming language that is quite similar to Javascript.
 *  It's actually a superset of JS. All valid JS code is valid TS Code.
 *
 *  Typescript was developed for managing larger applications. The syntax is closer to Java and C#.
 *
 *  TS is a strongly typed, easier to debug, and we even get syntax errors.
 *
 * To install Typescript:
 *  We can use npm, "npm install -g typescript".
 *
 * We can transpile TS into JS:
 *  Transipling is whena language is converted to another language of similar levels of abstraction.
 *
 * Use the command;
 *      tsc <filename>.ts
 *
 *      tsc -t es2015 <filename>.ts
 */
let s1;
s1 = "hello";
s1 = 3;
//In TS we can declare types for our variables. 
let s2; //implicitly declaring it to be of type "any"
let s3; //s3 is of type number
let s4;
s3 = 4;
// s3 = "not a number"; //will throw a compilation error
s4 = 5;
s4 = true;
s4 = "any kind of string!";
//---------------------Arrays---------------------------------
let arr1; //we've declared a number array 
arr1 = [1, 2, 3, 4];
let arr2; //pretty much an indentical way of declaring a number array 
arr2 = [1, true];
// arr2 = [1,"apples"]; //this will also throw a compilation error message
//---------------------Tuples--------------------------------
//Tuple is a a data strcutre of a fixed size and datatypes have to be in a specific order
let tuple1;
tuple1 = ['hola', true, 3];
console.log(tuple1);
//---------------------Enum------------------------------------
// A unique type that has a fixed set of values. 
// An enumeration is a collection of constants, representational values. 
//Below is the JS way 
const OFF = 0;
const IDLE = 1;
const ACCEL = 2;
let myCarStatus = ACCEL;
//base conditional logic of enums/states
if (myCarStatus == OFF) {
    console.log("My car is off!");
}
//Below is the TS way 
var carStates;
(function (carStates) {
    carStates[carStates["OFF"] = 0] = "OFF";
    carStates[carStates["IDLE"] = 1] = "IDLE";
    carStates[carStates["STOPLIGHT"] = 2] = "STOPLIGHT";
    carStates[carStates["ACCEL"] = 3] = "ACCEL";
    carStates[carStates["CRUISING"] = 4] = "CRUISING";
})(carStates || (carStates = {}));
; //TS will also automatically number the values!
if (myCarStatus == carStates.IDLE) {
    console.log("My car is idling");
}
//------------------------------Functions---------------------------------
// a valid TS function! (idential to JS code!)
function myFunc(a, b, c) {
}
function myFunc2() {
    return "A string";
}
function finalFunc(a, b, c) {
    //any vs unknown:
    // any means that the variable can take on any datatype and can be reassigned to any other datatype. 
    // unknonw might be used with an API. Where the return value might be unknown, but once assigned will have a strict dataype.
    return true;
}
let theMoon;
theMoon = { name: "The Moon", age: 1 };
let Earth = {
    name: "The Earth",
    hasRings: false,
    moons: [theMoon],
    orbit: (variable) => {
        console.log("does nothing!");
    }
};
//a class can implement an interface
class Star {
    constructor(name, age, size, planets) {
        this.name = name;
        this.age = age;
        this.size = size;
        this.planets = planets;
    }
    //In TS we can't make multiple constructors!
    // Instead wu get optional parameters. Optional paramenters, don't need to be added when invoking the function/constructor. 
    // Optional parameters HAVE to be on the right hand side of the non-optiaonl parameters!
    // constructor(name: string, age: number, size: number, planets: number){ 
    //     this.name = name;
    //     this.age = age;
    //     this.size = size;
    //     this.planets = planets;
    // }
    fusion() {
        console.log(`${this.name} is fusing and getting brighter!`);
    }
}
class NeutronStar extends Star {
}
let theSun = new Star("The Sun", 1000); //we creating a star without any planet information or size info
let alphaProximus = new Star("Alpha", 2000, 2); //we creating a star without any planet information
let betaProximus = new Star("Beta", 2000, 2, 4);
let pulsar = new NeutronStar("Pulasr", 4000);
// console.log(theSun);
// console.log(alphaProximus);
// console.log(betaProximus);
// pulsar.fusion();
class Animal {
    constructor(name, neutered, breed, age) {
        this.age = age;
        this.name = name;
        this.neutered = neutered;
        this.breed = breed;
    }
    get Breed() {
        console.log("I'm in the getter method for our protected variable!");
        return this.breed;
    }
    set Breed(breed) {
        console.log("I'm in the setter method!");
        this.breed = breed;
    }
}
let dog = new Animal("Bobby", true, "German Shepard", 3);
dog.Breed = "Dalmations"; //using the setter method
console.log(dog.Breed); //using the getter method!
// console.log(dog);
