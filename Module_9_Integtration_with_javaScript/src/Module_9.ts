//Lec 1- Introduction

// In this section we are going to learn about how to run
// typeScript and javaScript code side by side

// Including JS code in TS projects
// Type checking JS code
// JSDocs
// Declaration (Type Definition)
// Using Declaration files form @types

//======================================================================================================================================================
//Lec 2- Including JS Code in TS Projects

// so far we have been coding purely type Script but this is not
// always possible
// ex-> we were working on the java script project and have to introduce typeScritp later on.
// or work on existing javaScrip file

// adding new file tax.js
// Note -> by default our ts compiler can't see the javasctipt files
// so go to the ts Config and turn on
//"allowJs": true,
import { calculateTax } from "./tax";

let tax = calculateTax(1000);
console.log(tax);

// Note change your module format in tsconfig file to common js

//======================================================================================================================================================
//Lec 3- Type Checking JS Code

// while using the javaScript we don't get the fuctionality of type checking

// that means we call our fuction without argument
// and we can't get the error until run time

// if you want basic type checking turn on the feature
// checkJS:true in ts config file

// Now let say we don't want to type check in our js files we
// stop it using special comment
// @ts-nocheck

// Note-> if we don't pass the arguments to the fuction
// by default undefined is passed
// and if the type is any compiler will produce no error

//======================================================================================================================================================
//Lec 4- Describing Types Using JSDoc

// The one way to describe the Type information to the java script code is using
// .. JSDoc => which is special type of comment that we can add to our code

// ex-> mentioned in tax.js

import { calculateTax } from "./tax";

let tax = calculateTax(10_100);
console.log(tax);

// Using JSDoc we can provide the type information to the typescript compiler
// ex-> we can also provdie description to the fuction

// There is anothe ways to provide the type informatio to the typeScript compiler
//======================================================================================================================================================
//Lec 5- Creating Declaration Files

// Another way of providing the type information that is Using Type Decalaration file
// create file -> tax.d.ts -> to create type declaration file
// this same as the headerfile in C

import { calculateTax } from "./tax";

let tax = calculateTax(10_100);
console.log(tax);

// Note if you don't declare the fuction in the type declaration file
//.. your function will gonna be invisible to the TS compiler

//======================================================================================================================================================
//Lec 6- Using Definitely Typed Declaration Files

// Now lets talk about using third party javaSctipt libraries in our
// typeScript projects

// npm i lodash

// Note-> lodash is pure javaScript libaray this dosen't have any declaration file
// so what can we do here

// git repo {definetly typed} which have all the declaration file of famous javascript liabrary

// npm i @types/--name of the package--

//ex -> npm --save-dev i @types/lodash
// only want to install it as development depedency you can also use -D

import * as _ from "lodash";

_.clone([1, 2, 3]);

// Note that now days typeScript becoming famous so most dependencies comes with thier declaration files
// ex-> npm i chalk
// we can see in node modules folder its declaration file

//======================================================================================================================================================
