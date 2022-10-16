// Lec 1- Introduction

// In this section we are going to learn about

// Generic Classes
// Generic fuctions
// Generic interfaces
// Generic constraints
// Type mapping

//===========================================================================================================================================================
// Lec 2- Understanding the Problem

// Lets try to see the problem what generics are trying to solve

// Let say we want to represent key value pair

class KeyValuePair {
  constructor(public key: number, public value: string) {}
}
let pair = new KeyValuePair(1, "Apple");
// now let say some one wants to use string as the key

// we have two sol here

// 1. use any
class KeyValuePair_1 {
  constructor(public key: any, public value: string) {}
}
// but we should avoid any as much as possible

// 2. Dublicate the class
class KeyValuePair_2 {
  constructor(public key: string, public value: string) {}
}
// But this is redundant

//===========================================================================================================================================================
// Lec 3- Generic Classes

// Now let see how we can use the generic class to solve the problem discussed above

class KeyValuePair_3<K, V> {
  constructor(public key: K, public value: V) {}
}
let pair_ = new KeyValuePair_3<string, string>("1", "a");
// or
let pair_1 = new KeyValuePair_3<string, string>("1", "a"); // in this case compiler can infer them for us

//===========================================================================================================================================================
// Lec 4- Generic Functions

// similar idea of generic classes

function wrapInArray<T>(value: T) {
  return [value];
}
let number = wrapInArray("1");

// or

class ArraysUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
let utils = ArraysUtils.wrapInArray(1);

//===========================================================================================================================================================
// Lec 5- Generic Interfaces

// ex-> let say we have several endpoints in our websites
// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<Product>("url");
result.data?.title;

//===========================================================================================================================================================
// Lec 6- Generic Constraints

// some time we need to constrain Generic type arugument
// limiting the type of object we are passing here

function echo<T extends number | string>(value: T): T {
  return value;
}

// or passing the shape of object
function echo_1<T extends { name: string }>(value: T): T {
  return value;
}
// also by Interface

interface Person {
  name: String;
}

function echo_2<T extends Person>(value: T): T {
  return value;
}

// also constraint by class

class Person_1 {
  constructor(public name: string) {}
}
function echo_3<T extends Person_1>(value: T): T {
  return value;
}

//===========================================================================================================================================================
// Lec 7- Extending Generic Classes

// Let say we are building the e-commerce application
// so we have product catagory, photos and so on

interface Product {
  name: string;
  price: number;
}

// let say we need mechanism for storing these objects
// so that we can store product, shopping cart and so on
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

// here we need to also add T after the class name
// .. so that the compiler can know what would be the value
// of T it is going to use

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// Restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}

//===========================================================================================================================================================
// Lec 8- The keyof Operator

interface Product {
  name: string;
  price: number;
}

class Store_2<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // T is product
  // keyofT => 'name' | 'price'
  // we should tell the compiler that we are working with the actual properties of type T
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store_2<Product>();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", 1);
// but there is some issue.
// ex->
store.find("nonExistProperty", 1); // this property type dosen't exist
// .. so it can crash the whole program

//===========================================================================================================================================================
// Lec 9- Type Mapping

// sometimes we need to base a type on another type
// .. this is called type mapping

// ex->
interface Product {
  name: string;
  price: number;
}

// // let say we only want to use read only properties
// // .. we can create the new interface with  read only porpeties
// //.. but this will be very reapeatative.

// interface ReadOnlyProdcut {
//   readonly name: string;
//   readonly price: number;
// }

// Method 2 using Type Mapping

// we are going to create new type based on the existing type
//.. and we add all the properties dynamically and make them readonly

// index signature
// key of
type ReadOnlyProdcut = {
  readonly [K in keyof Product]: Product[K];
};

let product: ReadOnlyProdcut = {
  name: "a",
  price: 1,
};

// so why do we limit our self to the product we also
// want to make cutomers as readonly

// using genercs

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

let product_1: ReadOnly<Product> = {
  name: "a",
  price: 1,
};

// using the same techique we can make the product properties as
// .. optional

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]?: T[K] | null;
};
// we can make many types
//===========================================================================================================================================================
