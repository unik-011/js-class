// ES5

// const pi = 3.14;

// function area(radius) {
//   const answer = pi * radius * radius;
//   return answer;
// }

// const rad = +prompt("enter the radius of circle");

// const result = area(rad);
// alert(result);

// ES6
// Arrow function

// const sum = (num1, num2) => {
//   const result = num1 + num2;
//   return result;
// };

// function call
// console.log(sum(1, 2));

// default function

// const greet = (name = "user") => {
//   return `welcome ${name}`;
// };

// console.log(greet("unique"));
// console.log(greet());

// parametrized function

// const volume = ({ length, breadth, height }) => {
//   return `The volume = ${+length * +breadth * +height}`;
// };

// console.log(volume({ length: "12", breadth: "10", height: "11" }));

//IIFES FUNCTION (Immediately invoked functional expresion

//closure function

// const counter = () => {
//   let count = 1; //local scope
//   return () => { //count++; implicit function
//     const increment = count + 1; // explicit function
//     return increment;
//   };
// };

// const counterA = counter();
// const counterB = counter();

// console.log(counterA());
// console.log(counterA());
// console.log(counterA());

// console.log(counterB());
// console.log(counterB());

//callback function

const taxCal = (item) => 0.13 * item;

const cart = (items, calculateTaxFn) => {
  return calculateTaxFn(items);
};

const tax = cart(100, taxCal);
console.log(tax);
