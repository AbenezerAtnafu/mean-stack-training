// // Type assertions
// // let someValue;

// // someValue = "this is a string";

// // let x = (<string>someValue).endsWith("g");
// // let y = (someValue as string).endsWith("g");

// // Arrow functions

// // let add = function (a: number, b: number): number {
// //   return a + b;
// // };

// // let add = (a: number, b: number) => a + b;

// // Interfaces
// interface Employee {
//   readonly id: string;
//   name: string;
//   retire: (date: Date) => void;
// }

// let employee: Employee = {
//   id: "123",
//   name: "John",
//   retire: function (date: Date) {
//     console.log("Retiring on " + date);
//   },
// };

// // Classes
// class Employee {
//   id: string;
//   name: string;
//   constructor(id: string, name: string) {
//     this.id = id;
//     this.name = name;
//   }
//   retire(date: Date) {
//     console.log("Retiring on " + date);
//   }
// }

// // Objects
// let employee = new Employee("123", "John");

// // employee.name

// // Access Modifiers
// // Public, Private, Protected (within the class and its subclasses.)
// class Employee {
//   public id: string;
//   private name: string;
//   protected age: number;
//   constructor(id: string, name: string, age: number) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//   }
//   retire(date: Date) {
//     console.log("Retiring on " + date);
//   }
// }

// // let employee = new Employee("123", "John", 30);

// // Access Modifiers in Constructor (handled by the compiler)
// class Employee {
//   constructor(public id: string, private name: string, protected age: number) {}
//   retire(date: Date) {
//     console.log("Retiring on " + date);
//   }
// }

// // Properties
// class Employee {
//   constructor(public id: string, private name: string, protected age: number) {}
//   retire(date: Date) {
//     console.log("Retiring on " + date);
//   }
//   getName() {
//     return this.name;
//   }
//   setName(name: string) {
//     this.name = name;
//   }
// }

// // Modules
// // multiple files

import Employee from "./employee";
import { Department } from "./department";
let employee = new Employee();
