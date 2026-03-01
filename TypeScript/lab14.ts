// lab14.ts
export {}; // make file a module

// ===============================
// Task 3: Readonly Property
// ===============================

class Student {
  public name: string;
  public age: number;
  private rollNo: number;
  readonly id: number;

  constructor(name: string, age: number, rollNo: number, id: number) {
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
    this.id = id; // readonly assigned in constructor
  }

  showRollNo(): void {
    console.log("Roll No:", this.rollNo);
  }
}

// Create instance
const student1 = new Student("Alia", 22, 101, 1);

console.log("ID:", student1.id);
console.log("Name:", student1.name);
console.log("Age:", student1.age);

// Try modifying readonly property (uncomment to see error)
// student1.id = 2;
// Error: Cannot assign to 'id' because it is a read-only property

student1.showRollNo();

// ===============================
// Task 4: Inheritance
// ===============================

// Parent class
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Animal makes a sound");
  }
}

// Child class
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  // Override method
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

// Create instances
const animal = new Animal("Generic Animal");
const dog = new Dog("Buddy", "Labrador");

// Call methods
animal.makeSound();
dog.makeSound();

console.log("Dog Name:", dog.name);
console.log("Dog Breed:", dog.breed);
