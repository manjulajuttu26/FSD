export {}; 

function greetUser(name: string, title: string = "Mr./Ms."): string {
  return `Hello, ${title} ${name}!`;
}
console.log(greetUser("Alia", "Dr."));
console.log(greetUser("Alia"));