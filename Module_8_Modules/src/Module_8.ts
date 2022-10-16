// Lec 1- Introduction

// we going to learn

// creating and using modules
// Module formats
// Default Exports
// Wildcart imports
// Re-Exporting

// ====================================================================================================================================================
// Lec 2- Exporting and Importing

// we don't want to write all our code in one module
//.. because as our code grows maintaining those code will be maitaining these
//.. large code will become harder and harder

// so we should split our code into different file or modules each serving its own
//.. purpose.

// create new module
// shapes.ts

// import{Circle as MyCircle} from './shapes' // using name alias

import { Circle } from "./shapes";

let circle = new Circle(1);
console.log(circle.radius);

// ====================================================================================================================================================
// Lec 3- Module Formats

// previously we have certain techniques to make module
// but from ES6 we have new system to create modules

// Note -> commonJs module is one that initially comes with the node
// we can change it in tsconfig.json file
// as "module": "ES2015"
// ====================================================================================================================================================
// Lec 4- Default Exports

// Sometimes we only want to export the single thing from the moudule
//.. this case we use the default export

// ex->

// add file
// storage.ts

import Store, { Format } from "./storage";

let store = new Store();

// ====================================================================================================================================================
// Lec 5- Wildcard Imports

// Sometimes we need quite a few objects from the module
// .. so importing them one by one could be quite a big hustle.

// importing everything fromt the module

// this is called widld card import
import * as Shapes from "./shapes";

let circle = new Shapes.Circle(1);

// ====================================================================================================================================================
// Lec 6- Re-exporting

// with re-exporting we can combine the export of different module

// import { Circle } from "./shapes/Circle";
// import { Square } from "./shapes/Square";
// there is nothing wrong with this implementation
// but what if we have 10 diffrent type of shapes we need to
//.. import form we need 10 statements
//.. this is where we can use reexportint to combine all the module in the
//.. single module and then we import only that single moudle here

// check out index.js of current folder shapes

// now we can import

import { Circle, Square } from "./shapes";
// we don't even need to write index here we can import it from
// shape -> called Shapes Package
// ====================================================================================================================================================
