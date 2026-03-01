// lab10.ts
export {}; // make file a module

// Task 1: Interface with readonly and optional properties
interface User {
  readonly id: number;
  name: string;
  age?: number;
}

// Object of type User
const user: User = {
  id: 1,
  name: "Alia",
  age: 22
};

// Print properties
console.log("ID:", user.id);
console.log("Name:", user.name);
console.log("Age:", user.age);

// Try to modify readonly property (uncomment to see error)
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

// Task 2: Interface with functions
interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
}

// Implementing the interface
const calculator: Calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  }
};

// Call methods
console.log("Add:", calculator.add(5, 3));
console.log("Multiply:", calculator.multiply(5, 3));
