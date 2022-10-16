// Lec 1- Introduction

// we are going to cover with
// Introduction to typeScript
// Setting up th develope environment
// Creating your first Type Script Program
// configuring the TypeScript compiler
// Debugging the TypeScript programs

//========================================================================================================================================================================
// Lec 2- What is TypeScript

// what is type script ?
// why do we need it ?
// How it is different from the JavaScript

// TypeScript is the programming language developed at microsoft to
// .. address shrotcomings of javaScript

// javaScript and typeScript are like brother and sister
// JavaScript is-> less disciplined child
// TypeScript is-> more Disciplined child

// TypeScript is the programming languate that is built on top of the javacript
// .. every Javascript file is a valid typeScript fille
// Benifits -> that help us to make more robust and maintainble applications

// Static Typing
// Static Type langusage-> like c++, java-> we know the type of the variable at compile time
// Dynamically type language->like javascript, python type of the variable at run time can be number first and string later
// TypeScript-> it is javaScript with type checking

// Note is more than that checking-> it offers productivity features like code completion, Refactoring, and other new features

// Code completion
// Refactoring
// Shorthand notations

// note -> anything we do with JavaScript we can also do with typeScript

// DrawBack
// Compilation
// .ts -->> compiler (Transpilation)-->> .js
// Disciplined programming

// TypeScript-> Medium to Large Projects
// JavaScript-> Simple Projects

//========================================================================================================================================================================
// Lec 3- Setting Up the Development Environment

// Install Node
// npm i -g typescript (install typeScript compiler)
// npm tsc -v (to check version)
// VsCode

//========================================================================================================================================================================
// Lec 4- Your First TypeScript Program

// every typeScript file has .ts extension
// every javaScript file/code is valid typeScript code/file
// ex->

console.log("hello world");

// comple using cmd -> tsc --file_name--

// Writing the type script code

// note type script uses ES5 so it is more comfortable with the
// .. var keyword instead of let.
var n: number = 20;

//========================================================================================================================================================================
// Lec 5- Configuring the TypeScript Compiler

// Creating the configuration file for the typeScript compiler

// tsc --init (to Show the configuration file of typeScript Compiler)

// shortcuts-> ctrl+Space to see all the valid versions of the ES versions
// setting explored
// /* Modules */
// "module": "commonjs"
// "rootDir": "./src" -> where will .ts file resides
// /* Emit */
// "outDir": "./dist" -> where will the javascript code resides
// "removeComments": true, -> remove all the comments in .js file
// "noEmitOnError": true, -> Don't compile on error

// Now we can compile or file simply by running
// tsc

////========================================================================================================================================================================
// Lec 6- Debugging TypeScript Applications

// in tsconfig.json enbale

/* Emit */
// "sourceMap": true, -> it map .ts code to the generted .js code

let age: number = 20;
if (age < 50) age += 10;

// to the debug panel and select crea launch.json file select Node.js
// add this setting
//  tsc: build - Module_2_Getting_Started/tsconfig.json,

// we can also watch the variabel.
//========================================================================================================================================================================
