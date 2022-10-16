// Lec 1-Introduction

// in this section we are going to learn about

// How to

// use Type aliases
// use Union and Intersection
// Type Narrowing
// Nullabe Types
// The Unknow Type
// The Never Type

//================================================================================================================================================
// Lec 2-Type Aliases

let employee: {
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

// Problem with the above implemetation

// 1. if we want to create the another employee object we have to repeat the shape
// .. of object again and again
// DRY principle
// 2. the other employee object might have other property so it might not have cosistent shape
// 3. above fuction making our code too much noisy

// that's why we use the type alias

// type alias-> using the Type alias we can defiene the cutom types

//ex ->

// first we create the custome type.
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void; // method_name: (parameters) => return_type
};

// than annoate the variable with the given this custome type
let employee_1: Employee = {
  id: 1,
  name: "Anurag",
  retire: (date: Date) => {
    console.log(date);
  },
};

//================================================================================================================================================
// Lec 3-Union Types

// with Union Type we can give fuction of variable more than one Type

// Ex->

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2;
  else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs("10kg");

//================================================================================================================================================
// Lec 4-Intersection Types

// Intersection Types-> with Intesection we can give variable and fuction more than one type
// .. which are necessary to follow

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//================================================================================================================================================
// Lec 5-Literal Types

// Some times we want to limit the values that we are assign to the vairable
// .. thats where we use the literal Types
// Literal (exact, specific)

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

//================================================================================================================================================
// Lec 6-Nullable Types

// It provides the ability to pass null object in the fuction

function greet(name: string | null | undefined) {
  if (name) console.log(name.toLocaleUpperCase());
  else console.log("Hola");
}
greet(undefined);

//================================================================================================================================================
// Lec 7-Optional Chaining

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

if (customer !== null && customer !== undefined) console.log(customer.birthday);

// or

// optional property access operator
console.log(customer?.birthday?.getFullYear()); // this code is executed when the customer object is not Null or undefined

// optional elemetnt access operator
// if(customer!==null && customer!== undefined)
// customers[0]

// or

// customer?.[0]

// optional call

let log: any = null;
log?.("a");
//================================================================================================================================================
// Lec 8-The Nullish Coaelscing Operator

// While Working with the null or undefined vlaues
// .. sometimes we need fallback to some defualt values

// ex ->
let speed: number | null = null;

// in .js
// let ride = {

//     // false vlaues in JavaScript (undefined, null, flase,0)
//     speed: speed || 300
// }

let ride = {
  //speed: speed !== null ? speed : 30

  // or

  // using nullish Coelising Operator (null, undefined)
  speed: speed ?? 30, // if speed is not null or undefined used that value else use 30
};

//================================================================================================================================================
// Lec 9-Type Assertions

// some time we know the type more than the TypeScript thats wher we use the type assertion
let phone_0 = document.getElementById("phone") as HTMLInputElement;

// or

let phone = <HTMLInputElement>document.getElementById("phone");
// HtmlElement
// HtmlInput Element

// if we don't assert the type we can't access the properties of the object
phone.value;

// Note here no type conversion  happening under the hood

//================================================================================================================================================
// Lec 10 The unknown Type

// if we don't know the type of the variable or the fuciton
// use Type  unknown instead of any because any may cause errors in the code

// ex-> using any

function render(document: any) {
  document.radoome();
  document.whatever();
  // note here compiler not giving any erros so
  // .. the document don't have these methods the program will crash
}

// ex-> using unknow

function render_1(document: unknown) {
  // Narrowing
  if (typeof document === "string") {
    document.toUpperCase();
  }
  // Note typeof operator only works with the primitive type ex-> stirng,boolean, number

  // we use instanceof in case of user defined types ex classes
  // if (document instanceof class_name) {
  //     document.abd()
  // }

  // now all the other fuctions will give errors
  // document.radoome();
  // document.whatever();
}
//================================================================================================================================================
// Lec 11 The never Type

// Never Type -> it repersents the values that never occur

// ex ->

// Here never said -> this fuction will never return
function reject(message: string): never {
  throw new Error(message);
}

function processEvents(): never {
  while (true) {
    // read a message from a queue
  }
}

processEvents();
console.log("Hello World");
