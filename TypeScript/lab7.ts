// lab7.ts
export {}; // avoid global scope conflicts

// Optional & Default Parameters
function greetUser(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

// Function calls
console.log(greetUser("Alia", "Dr."));
console.log(greetUser("Alia"));

// Arrow Function
const addNumbers = (a: number, b: number): number => {
  return a + b;
};

// Function call
console.log("Sum:", addNumbers(30, 20));
