export default class Employee {
  constructor(public id: string, private name: string, protected age: number) {}
  retire(date: Date) {
    console.log("Retiring on " + date);
  }
}

console.log("to check git workflow");
