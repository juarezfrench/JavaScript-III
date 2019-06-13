/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding
 * 2. Implicit Binding
 * 3. New binding
 * 4. Explicit binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function myCar(name) {
  let car = `My car is a ${name} `;
  console.log(this);
  return car;
}

console.log(myCar("HellCat"));

// Principle 2

// code example for Implicit Binding

const userTyler = {
  name: "Tyler",
  age: 27
};

// // Principle 3

function sayAge() {
  let getAge = userTyler.age;
  console.log(`My age is ${getAge}`);
  return this.age;
}

sayAge();

// code example for New Binding

let userObject = {
  name: "name",
  age: "age",
  id: "id"
};

function UserPrototype(name, age, id) {
  this.name = name, 
  this.age = age, 
  this.id = id;
}

const userMary = new UserPrototype("Mary", 35, 1);

console.log(userMary);

// Principle 4

// code example for Explicit Bindinglet speak= function() {

speak = function() {
  const greeting = "Hello, my name is " + this.name + "!";
  return greeting;
};

console.log(speak.call(userTyler));
