// lab13.ts
export {}; // make file a module

// Task 1 & Task 2: Class, Constructor, Access Modifiers
class Student {
  public name: string;
  public age: number;
  private rollNo: number;

  constructor(name: string, age: number, rollNo: number) {
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
  }

  // Method to access private property
  showRollNo(): void {
    console.log("Roll No:", this.rollNo);
  }
}

// Create an instance
const student1 = new Student("Alia", 22, 101);

// Print public properties
console.log("Name:", student1.name);
console.log("Age:", student1.age);

// Access private property using method
student1.showRollNo();

// Try to access private property directly (uncomment to see error)
// console.log(student1.rollNo); 
// Error: Property 'rollNo' is private and only accessible within class 'Student'
