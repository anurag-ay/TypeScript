//// 1- Introduction

// In this section we are going to cover

// Intro to oops
// classes
// constructors
// Properties and methods
// Access control keywords
// Getters and Setters
// Statatc member
// Index Signature

// Inheritence
// Polymorphism
// Abstract Classes
// Interfaces

////========================================================================================================================================================================
//// 2- What is Object-oriented Programming

// OOP is one of the many pradigms of the programming
// like

// Procedural
// Functional
// Object Orientes
// Event-Driven
// Aspect-Oriented
// etc

// In obJect oriented programming Objects are the building block of the application
// application consist 100 or 1000s objcted working together to solve problems

// Object contains
// data (state)
// operation (behaviour)

// Ex-> person Object

// Person

// states
// name
// email

// Methods
// talk()
// dance()

// Note Each object is responsible for single task

// ex-> in restaurant we have people responsible of single roles
// Chef, receptionist, waiter, cutomers etc.

// OOPs vs Fuctional
// in fuctional-> functions as building blocks
// every tool and pradigms have their own advantage and disadvantage

////========================================================================================================================================================================
//// 3- Creating Classes

// // class is buleprint for creating objects

// // building class

// class Account {
//   // properties
//   id: number;
//   owner: string;
//   balance: number;

//   // adding constructor (used to initialize object)

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this.balance = balance;
//   }

//   // adding methods

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Invalid Amount");
//     }
//     this.balance += amount;
//   }
// }

////========================================================================================================================================================================
//// 4- Creating Objects

// class Account {
//   // properties
//   id: number;
//   owner: string;
//   balance: number;

//   // adding constructor (used to initialize object)

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this.balance = balance;
//   }

//   // adding methods

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Invalid Amount");
//     }
//     this.balance += amount;
//   }
// }

// // creating object

// let account = new Account(1, "Anurag", 0);
// account.deposit(100);
// console.log(account instanceof Account);

// // earliear we have talked about

// // Union
// // use instance of operator isntead of type of when you want
// // .. to know wheater the given object belong to the particular class or not

////========================================================================================================================================================================
//// 5- Read-only and Optional Properties

// // How to make the properties of the class as the read only
// // .. so that they can't be infuled by other outside the class ex-> id
// class Account {
//   readonly id: number; // readonly property
//   owner: string;
//   balance: number;
//   nickname?: string; // we can make it optional

//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this.balance = balance;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Invalid Amount");
//     }
//     this.balance += amount;
//   }
// }

////========================================================================================================================================================================
//// 6- Access Control Keywords

// Ex-> of using the acces modifier
// Let say we also want to record all the transactions that who paid whome and when
//.. and how much amount of money

// but the proble is that we can access the balance outside the class directly
// .. if we do so we can't able to record the transactions

// so to solve this problem we use access specifeir

// typescript have 3 Access specifiers

// Private
// Public
// Protected

// class Account {
//   readonly id: number; // readonly property
//   owner: string;
//   private _balance: number; // making balace private
//   nickname?: string; // we can make it optional

//   getBalance(): number {
//     // now we can't use the balace directly so we made this fuction
//     // .. to make the balace accessible outside
//     return this._balance;
//   }
//   //     private _calclateTax():number {
//   //         return this._balance * 0.30;
//   // }
//   constructor(id: number, owner: string, balance: number) {
//     this.id = id;
//     this.owner = owner;
//     this._balance = balance;
//   }

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Invalid Amount");
//     }
//     this._balance += amount;
//   }
// }

////========================================================================================================================================================================
//// 7- Parameter Properties

// // Now the problem is that whenever we create the class we need to
// // .. create all the properites and initialize them using constructor
// // this is so reapetative

// // solution

// class Account {
//   nickname?: string; // we can make it optional
//   getBalance(): number {
//     return this._balance;
//   }

//   // prameter properties => to inialize the propeties inside
//   //.. the consturctor
//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Invalid Amount");
//     }
//     this._balance += amount;
//   }
// }

////========================================================================================================================================================================
//// 8- Getters and Setters

// // Implemeting the get values and set value methods in the better ways
// // .. using getters and setter
// // so that we can use the get and set methods as the propeties not as fuctions
// // ex => account.balance() as account.balance

// class Account {
//   nickname?: string; // we can make it optional

//   // implementing getter
//   get balance(): number {
//     return this._balance;
//   }

//   set balance(value: number) {
//     if (value < 0) {
//       throw new Error("Invalid value");
//     }
//     this._balance = value;
//   }

//   // prameter properties => to inialize the propeties inside
//   //.. the consturctor
//   constructor(
//     public readonly id: number,
//     public owner: string,
//     private _balance: number
//   ) {}

//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("Invalid Amount");
//     }
//     this._balance += amount;
//   }
// }

// const account = new Account(1, "Anurag", 1000);

// account.balance = 2000;
// console.log(account.balance);

////========================================================================================================================================================================
//// 9- Index Signatures

// // we know that we can create objects and propeties to it dynamically
// // ex->

// // but in typeScript we can't because it is more conserned with the type of object.
// // but some time we need to assign the values to the object dynamically so how can we do it
// //.. here we can use index signature

// // ex->

// class SeatAssignment {
//   // A1, A2...
//   // Mosh, Anurag,..

//   // A1: string
//   // A2: string

//   // Note that there can be thousand of the people in the venue
//   // .. and we don't want to hard code each of them

//   // so here we will use the index signature for creating the propeties dynamically

//   // indexSignature Propeties
//   [seatNumber: string]: string;
// }

// let seats = new SeatAssignment();
// seats.A1 = "Mosh";
// seats.A2 = "Anurag";
// // we can also use square bracket notation
// seats["A1"] = "Anurag";

////========================================================================================================================================================================
//// 10- Static Members

// // let say we are building the ride sharing system like uber
// // so people can book the rides

// class Ride {
//   // passanger
//   // pickuplocation
//   // dropOff etc.

//   private static _activeRides: number = 0;

//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides--;
//   }

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRides);
// console.log(Ride.activeRides);

// // if we print total number of rides we will see that 1 1
// // we so
// // because those rides are saved in the seprate location of memory

// // So how do we solve this problem we can use static member so that they are
// //.. saved at the same memory location

// // Note => static propertis are belong to the class not to the specific object.

// // there is the problem in our current implementation
// // we can directly modify the active ride
// // we can use the access specifier to make it private
// // and use the getter to get the value of ride

////========================================================================================================================================================================
//// 11- Inheritance

// // some time we have the classes with mere commonalites
// // ex => Student and Teacher class
// // so we don't want to create the same propeties again and again

// // Pesong -> Parent/ Base/ Super class
// // Student, teacher -> child/Derived/ Sub

// // ex-> of inheritence

// class Person {
//   constructor(public firstname: string, public lastName: string) {}

//   get fullName(): string {
//     return this.firstname + this.lastName;
//   }

//   walk() {
//     console.log("Walking");
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }

//   takeTest() {
//     console.log("Taking Test");
//   }
// }

// let student = new Student(1, "Anurag", "Yadav");
// student.fullName;

// // as the best practce we should create each class in the seprate file

////========================================================================================================================================================================
// //// 12- Method Overriding

// class Teacher extends Person {
//   override get fullName(): string {
//     return "Professor" + super.fullName + " " + super.fullName;
//   }
//   // Note that we can also use it without overide but it will create some isuue
//   // so config file enable noImplicitOverride-> to make it ture // so that it can remind us
//   //.. to use ovrride
// }
// let teacher = new Teacher("Smith", "Jhon");

////========================================================================================================================================================================
//// 13- Polymorphism

// // this is the propety of object where it can take many different forms
// printNames([new Student(1, "John", "Smith"), new Teacher("Anurag", "Yadav")]);
// function printNames(people: Person[]) {
//   for (let person of people) console.log(person.fullName);
// }

// // this is the example of polymorphism
// // because here our person object taking many different forms

// // Open Close Principle **
// // Classed should be open for extension and closed for modification

////========================================================================================================================================================================
//// 14- Private vs Protected Members

// // Privte -> only scoped to the clas
// // Protected -> scoped in the class as well as in inherited class

////========================================================================================================================================================================
//// 15- Abstract Classes and Methods

// // Let we want to build the program where we allow user to draw something
// //.. on the canvas

// // ex->
// // circle
// // Rectangle
// // Triangle etc.

// // here we are telling the TypeScript that this class is the abstract class
// // so other classed have to extend this class to use

// // in abstract classes we have abstract methods
// // abstract -> methods with no implemetation
// // Note abstract method only appears in the Abstract Class

// abstract class Shape {
//   constructor(public color: string) {}
//   abstract render(): void;
// }

// class Circle extends Shape {
//   constructor(public radius: number, color: string) {
//     super(color);
//   }

//   override render(): void {
//     console.log("Rendering a Circle");
//   }
// }

// // But we don't want to create the instance of the Shape class becuse it
// // .. dosen't make any sense
// // so to prevent this we can mark the class as abstract

////========================================================================================================================================================================
//// 16- Interfaces

// We use Interface to define the shape of our object

// ex->> calendar implementation
// Google Calendar
// iCal
// outlook

// all these calendras have some common properties and method so we
// .. can define all the commonalites in base class called calendar

// ex->

// Defining using the abtract class
// abstract class Calendar {
//   constructor(public name: string) {}

//   abstract addEvent(): void;
//   abstract removeEvent(): void;
// }

// Defining using the interface

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

// shall we use interfaces or the abstract class
// It depends

// Here our calendar class is not offering any logic or any algorithm
// .. that subclasses can use

// so in this case it is better to use interfaces

// in other case use the abstract classes

// Note in interface we only have the signatrure of our methods not the defination
// if you try to define the method it will produce error

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
