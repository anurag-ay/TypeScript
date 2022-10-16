// Lec 1- Introduction
// Decorators allow us to change and enhance our classes

// what we are going to cover
// What are decorator
// Creating various types of decorators

// Class Decorator
// Method Decorator
// Property Decorator
// Accessor Decorator
// Parameter Decorator

//=============================================================================================================================================================================
// Lec 2- What Are Decorators

// Decorators -> these are the attributer that we apply to our
// .. classes and thier members and with this we can change how they
//.. behave
// they are frequently used in angular and vue application

// ex->

// let say we have a class called Profile component

//  Now by applying the Componet Decorator we can convert this class
//.. to the web application

// Note -> typeScript Dosen't have any built in decorators so we need to
//.. built one by our own.

// under the hood the decorators are the fuctions that gets call by the javaScript
// runtime so the javascript engine calls this decorator and pass our class to it
// in that fuction we have the chance to modify this class so we can add new properties and methods to it
// we can also change the implemetation of the existing methods

class ProfileComponent {}

//=============================================================================================================================================================================
// Lec 3- Class Decorators

// let see how we can apply the decorator to our classes

// Decorators are just a fuction that are called by the javaScript run time

//ex->

// if the type is the Function compiler assumes that we are gonna apply it on the Class

function Componet(constructor: Function) {
  // in this fuction  we can
  // add, modify, delete the new properties

  console.log("Component decorator called");
  // going to its prototype and new Propeties and methods
  constructor.prototype.UniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log("Insertng the componet in the DOM");
  };
  // we can also do this using inheritence
}

// Note every object in JavaScript have some ProtoType from which it inherits
// the various properties and methods

@Componet
class ProfileComponent {}
//=============================================================================================================================================================================
// Lec 4- Parameterized Decorators

// sometimes we need to pass the argument to our decorator
// so let see how we can create parameterize decorator

type ComponentOptions = {
  selector: string;
};

// Decorator Factory
// this fuction act as the decorator factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.UniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Insertng the componet in the DOM");
    };
  };
}

// function Componet(constructor: Function) {
//   console.log("Component decorator called");
//   constructor.prototype.UniqueId = Date.now();
//   constructor.prototype.insertInDOM = () => {
//     console.log("Insertng the componet in the DOM");
//   };
// }

@Component({ selector: "#my-profile" })
class ProfileComponent {}

//=============================================================================================================================================================================
// Lec 5- Decorator Composition

// we can also apply multiple decorators to the class or its members

type ComponentOptions = {
  selector: string;
};
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.UniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Insertng the componet in the DOM");
    };
  };
}

function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.Pipe = true;
}

// our decorator are called in reverse order
// like in math f(g(x))
@Component({ selector: "#my-profile" })
@Pipe
class ProfileComponent {}

//=============================================================================================================================================================================
// Lec 6- Method Decorators

// Now let see how we are going to enhance our methods using decorators

// to apply the decorators in the fuction we need 3 parameters
// whereas in the class we only need one as constuctor

// Note-> every Property and object have descriptor which describe there properties
// function Log(target: any, methodsName: string, descriptor: PropertyDescriptor) {
//   // here we can do really cool thing ex-> we can replace this method we
//   // .. entierly new method
//   const original = descriptor.value as Function;
//   descriptor.value = function (message: string) {
//     console.log("Before"); // adding something before fuction
//     original.call(this, message); // execution of fuction
//     console.log("After"); // adding something after fuction
//   };
// }

// there is the problem we can only applly this decorator with fuciton as defined signature
// How can we solve this problem

// we can use the spread operator to take any number of arguments
//.. and pass it to the fuctions one by one

function Log(target: any, methodsName: string, descriptor: PropertyDescriptor) {
  // here we can do really cool thing ex-> we can replace this method we
  // .. entierly new method
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before"); // adding something before fuction
    original.call(this, ...args); // execution of fuction
    console.log("After"); // adding something after fuction
  };
}

class Person {
  @Log
  say(message: string) {
    console.log("Person says" + message);
  }
}

let person = new Person();

person.say("Hello");
//=============================================================================================================================================================================
// Lec 7- Accessor Decorators - Title

// Let see how to create decorator to apply decorators meaning getters and setters
// ex->

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}
class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("anurag", "Yadav");

//=============================================================================================================================================================================
// Lec 8- Property Decorators

// Now let define a decorator for enhancing the property

function MinLength(lenght: number) {
  return (target: any, propertyName: string) => {
    let value: String;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < lenght)
          throw new Error(
            `${propertyName} should be at least ${lenght} character long`
          );
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  @MinLength(4)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}
let user = new User("124");
console.log(user.password);
//=============================================================================================================================================================================
// Lec 9- Parameter Decorators

// it is not used that often but
// if you want to desing the frame work that other people use
// than you should know this decorator

// we store the meta data for that parameter so that
// our frame work can do something about it

type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({
    methodName,
    parameterIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(Watch);

//=============================================================================================================================================================================
