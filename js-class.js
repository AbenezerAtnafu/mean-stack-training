// // variables
// let name = "Abebe";

// let age = 25;

// let isMarried = false;

// let undefinedVariable = undefined;

// let nullVariable = null;

// const father_name = "Kebede";

let obj = {
  name: "Abebe",
  age: 25,
  key: "value",
};

// let obj_two = new Object();
// obj_two.name = "Abebe";
// obj_two.age = 25;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.push(11);

//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// arr.pop();

//  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr.pop();

//  [1, 2, 3, 4, 5, 6, 7, 8, 9]

// arr.forEach((item) => {
//   console.log(item);
// });

// console.log(arr.length);

// console.log(arr.includes(50));

// Set , Map

/** 
    @param birthYear Birth year of the person
 */
// function ageCalculator(birthYear) {
//   return 2021 - birthYear;
// }

// const age = ageCalculator(1996);

// Arithmetic Operators

let num_one = 10;
let num_two = 20;
let mark = 90;
// console.log(num_one + num_two); // addition
// console.log(num_one - num_two); // subtraction
// console.log(num_one * num_two); // multiplication
// console.log(num_one / num_two); // division
// console.log(num_one % num_two); // modulus (remainder)
// console.log(num_one ** num_two); // exponentiation

// console.log(num_one++); // increment  first assign then add 1

// console.log(++num_one); // increment  first add 1 then assign

// console.log(num_one--); // decrement

// Comparison Operators

// console.log(num_one == num_two); // equal to
// console.log(num_one === num_two); // equal to - value and type
// console.log(num_one != num_two); // not equal to
// console.log(num_one !== num_two); // not equal to - value and type
// console.log(num_one > num_two); // greater than
// console.log(num_one < num_two); // less than
// console.log(num_one >= num_two); // greater than or equal to
// console.log(num_one <= num_two); // less than or equal to

// Bitwise operators

// console.log(num_one & num_two); // AND
// console.log(num_one | num_two); // OR
// console.log(num_one ^ num_two); // XOR
// console.log(~num_one); // NOT
// console.log(num_one << 2); // left shift
// console.log(num_one >> 2); // right shift
// console.log(num_one >>> 2); // zero fill right shift

// Logical operators

// console.log(num_one && num_two); // AND
// console.log(num_one || num_two); // OR
// console.log(!num_one); // NOT

// Assignment operators

// console.log((num_one += num_two)); // addition
// console.log((num_one -= num_two)); // addition

// if (num_one > num_two) {
//   console.log("num_one is greater than num_two");
// } else {
//   console.log("num_one is less than num_two");
// }

// num_one > num_two
//   ? console.log("num_one is greater than num_two")
//   : console.log("num_one is less than num_two");

// for (const key in obj) {
//   console.log(key);
// }
// delete obj["name"];

// console.log(obj);

// Conditional Statements

// if (num_one > num_two) {
//   // true
//   console.log("num_one is greater than num_two");
// } else {
//   // false
//   console.log("num_one is less than num_two");
// }

// if (mark >= 95) {
//   console.log("A");
// } else if (mark >= 80) {
//   console.log("B");
// } else if (mark >= 70) {
//   console.log("C");
// } else if (mark >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// switch (mark) {
//   case 95:
//     console.log("A");
//     break;
//   case 80:
//     console.log("B");
//     break;
//   case 70:
//     console.log("C");
//     break;
//   case 60:
//     console.log("D");
//     break;
//   default:
//     console.log("F");
//     break;
// }

// Loops

// let arr_two = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// for (let i = 0; i < arr_two.length; i++) {
//   console.log(i, arr_two[i]);
// }

// while (arr_two.length == 0) {
//   console.log(arr_two.pop());
// }

// do {
//   console.log(arr_two.pop());
// } while (arr_two.length > 0);

// Functions
// function add(a, b) {
//   const sum = a + b;

//   return sum;
// }

// function print_function(str) {
//   console.log(str);
// }

// const result = add(10, 20);
// const result_two = add(30, 40);

// console.log(result_two);

// Objects

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let person = new Person("Abebe", 25);

// let person = "Abebe Kebede";
// let person_two = "Zewdu";

// console.log(person.substring(0, 3));

// let current_date = new Date("2021-07-09T13:00:00");

// console.log(current_date.getFullYear());

// console.log(Math.sqrt(150));

// function add(a, b) {
//   const sum = a + b;

//   return sum;
// }

// arrow function  / ES6
// const add_two = (a, b) => a + b;

// first_name, middle_name, last_name
// let arr_two = ["abebe", "kebede", "zewdu"];

// let [first_name, middle_name, last_name] = arr_two;

// let first_name = arr_two[0];
// let middle_name = arr_two[1];
// let last_name = arr_two[2];

// console.log(middle_name);

// let obj_three = {
//   first_name: "Abebe",
//   middle_name: "Kebede",
//   last_name: "Zewdu",
//   age: 25,
// };

// let { first_name, ...rest } = obj_three;

// console.log(rest);

// let arr_two = ["abebe", "kebede", "zewdu"];
// let arr_three = [0, 1, 2];

// let arr_four = [...arr_two, ...arr_three];

// let arr_five = [
//   ["abebe", "kebede", "zewdu"],
//   [0, 1, 2],
// ];

// console.log(arr_four);
