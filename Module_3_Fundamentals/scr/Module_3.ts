// Lec 1- Introduction

// In this section we are going to explore the fundamentals of the typeScirpt

// we are going to learn about
// BuiltIn types like:-
// The any Type
// Arrays
// Tuples
// Enums
// Fuctions
// Objects

//===================================================================================================================================================================
// Lec 2- Built-in Types

// Built in Types in the JavaScript

// number
// string
// boolean
// null
// undefined
// object

// Built in Type in TypeScript along with the javascript Types

// any
// unknown
// never
// enum
// tuple

let sales = 1234355_344;
let course = "TypeScript";
let is_pulished = true;
let level; // typeScript assumes that it is of type -> any

// we can remove the annotation because typeScript compiler know what
// .. is the type when we declare the variable

//===================================================================================================================================================================
// Lec 3- The any Type

// any type-> can represent the any types of values
// so if we don't initialize the variabel with any property the default type
//.. of that variable will be any

// we should avoid using any type because we will loose the major fearture of typescript -> type checking
// -> it will allow syntax like this
// let name;
// name = 1
// name = 'anurag'

// proplem: fuction will give error if we send any variable without their type

function render(document: any) {
  console.log(document);
}

// turn off the error in config file
/* Type Checking */
// "noImplicitAny": true,
//===================================================================================================================================================================
// Lec 5- Arrays

// javaScript arrays are the dynamically typed they can cotaing the elements with any data type
// ex
let number = [1, 2, "3"];

// using typeScript arrays
// let num: number[] = [1, 2, 3];

// or

let num = [1, 2, 3];

// by default the empty array will be any array

// so if you use emtpy array expilitcly define the type of that array

//ex->
let num_1: number[] = [];

// another cool feature of the typescript that is code completion
// ex->

let num_2: number[] = [];

// num_2.forEach(n=> n.)

//===================================================================================================================================================================
// Lec 6- Tuples

// TypeSctipt has new type of datatype called Tuple
// Tuple-> it is the fixed length array which have element of particular type

//ex - >

// 1, Anurag

let user: [number, string] = [1, "Anurag"];
console.log(user);

// try to strict the size of tuple upto two values

// internally the tuple are implemented using javascript arrays

//===================================================================================================================================================================
// Lec 7- Enums

// enum -> it is the list of realted constant

// ex->
// without enum

const small = 1;
const medium = 2;
const large = 3;

// with enum
// Pascal convention
enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// Note if we declare enum as constant the compiler will produce more
// .. optimized code

//===================================================================================================================================================================
// Lec 8- Functions

// Let see how type Script prevent us from common problems while working with fuctions

function calcuateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calcuateTax(10_000, 2022);

// How to make parameter Optional
// we can make it optional using ?
// ex -> taxYear?:number

// Note if we don't supply the argument it will by default
// ..pass the undifined we can prevent it using ||
// or we can give it default value

// how to prevent unsused Parameters
// in config file
//"noUnusedParameters": true -> unused parameter of the fuction
// "noImplicitReturns": true -> forget to return value from the fuction
// "noUnusedLocals": true, -> warning on unused local

//===================================================================================================================================================================
// Lec 9- Objects

// declaring object

let employee: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "Anurag",
};

// some times we need certain properties read only
let employee_1: {
  readonly id: number;
  name: string;
} = {
  id: 1,
  name: "Anurag",
}; // Notice that the code become too much noisy so in the next section we will
// how to declare the objects in the better way

// how can define the method in this object let say every employee have retire method

let employee_2: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void; // method_name: (parameters) => return_type
} = {
  id: 1,
  name: "Anurag",
  retire: (date: Date) => {
    console.log(date);
  },
};

// we can make the name string as empty string
// or we can make it optinal using ? -> this is something we should avoid
// always write the code that coceptually make sense

//===================================================================================================================================================================
