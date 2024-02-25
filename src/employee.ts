export default class Employee {
  constructor(public id: string, private name: string, protected age: number) {}
  retire(date: Date) {
    console.log("Retiring on " + date);
  }
}

