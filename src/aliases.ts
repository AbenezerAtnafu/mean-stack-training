// let employee: {
//   readonly id: string;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: "123",
//   name: "John",
//   retire: function (date: Date) {
//     console.log("Retiring on " + date);
//   },
// };

// type alias
type Department = {
  name: String;
};

type Employee = {
  readonly id: string;
  name: string;
  department: Department;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: "123",
  name: "John",
  department: {
    name: "ICT",
  },
  retire: function (date: Date) {
    console.log("Retiring on " + date);
  },
};

// union types  - vertical bar
// function kgToLb(weight: number | string): number {
//   if (typeof weight === "string") {
//     weight = parseFloat(weight);
//   }
//   return weight * 2.20462;
// }

// kgToLb(10);
// kgToLb("10");

// intersection types - ampersand
// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let widget: UIWidget = {
//   drag: function () {
//     console.log("Dragging");
//   },
//   resize: function () {
//     console.log("Resizing");
//   },
// };

// Literal types
type Quantity = 1 | 2 | 3;
let quantity: 1 | 2 | 3 = 1;
type Direction = "left" | "right" | "up" | "down";
type Metric = "kg" | "lb" | "g" | "oz";

// Nullable Types
// function greet(name: string | null) {
//   if (name === null) {
//     console.log("Hello");
//   } else {
//     name.console.log("Hello " + name.toUpperCase());
//   }
// }

// greet("John");

// Optional chaining
type Customer = {
  birthDate: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 1 ? { birthDate: new Date() } : null;
}

let customer = getCustomer(1);

let birthDate = customer?.birthDate;

console.log(birthDate);
