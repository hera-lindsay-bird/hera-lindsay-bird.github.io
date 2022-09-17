// ------------ OBJECTS -----------

// 1. Define an object named `contact`. This object should contain:
// The key `name` and the value 'Leon Kim'.
// The key `address` and the value '123 Main St'.
// The key `phone` and the value '021 555 555'.

let contact = {
  name: 'Leon Kim',
  address: '123 Main St',
  phone: '021 555 555',
}

// 2. Declare a variable named 'customer' and assign it the value of the `name` key from the `receipt` object.
// n.b. make sure you access the object's property, do not type the string 'Marta'.
const receipt = {
  price: 89.99,
  store: 'Ariels Diner',
  name: 'Marta',
}
// Write your code below this comment
customer = receipt.name
// 3. Use dot notation to access the `name` property in the `person` object and reassign the value to be your own name.
const person = {
  name: 'Navita',
  age: '28',
  eyeColor: 'brown',
}
// Write your code below this comment
person.name = 'lizzy'
// ------------ CHECKS -----------
// The below lines of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!
const toExport = {
  person,
  receipt,
}
if (typeof contact !== 'undefined') toExport.contact = contact
if (typeof customer !== 'undefined') toExport.customer = customer
module.exports = toExport
