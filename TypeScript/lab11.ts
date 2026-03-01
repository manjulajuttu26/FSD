// lab11.ts
export {}; // make file a module

// Task 3: Interface with Arrays
interface Student {
  name: string;
  marks: number;
}

interface StudentList {
  students: Student[];
}

// Create an array of students
const studentList: StudentList = {
  students: [
    { name: "Alia", marks: 85 },
    { name: "Rahul", marks: 90 },
    { name: "Sneha", marks: 78 }
  ]
};

// Print student details
studentList.students.forEach((student) => {
  console.log("Name:", student.name, "| Marks:", student.marks);
});

// ----------------------------------------------------
// Task 4: Interface vs Type & Combined Practice

// Type alias
type PointType = {
  x: number;
  y: number;
};

// Interface
interface PointInterface {
  x: number;
  y: number;
}

// Function accepting both type and interface
function printPoint(point: PointType | PointInterface): void {
  console.log("X:", point.x, "Y:", point.y);
}

// Function calls
const p1: PointType = { x: 10, y: 20 };
const p2: PointInterface = { x: 30, y: 40 };

printPoint(p1);
printPoint(p2);


