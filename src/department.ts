export class Department {
  constructor(public id: string, private name: string, protected age: number) {}
  retire(date: Date) {
    console.log("Retiring on " + date);
  }
}
