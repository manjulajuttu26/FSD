// lab8.ts
export {}; // make file a module

// Type Alias
type Point = {
  x: number;
  y: number;
};

// Function using the type alias
function printPoint(point: Point): void {
  console.log("X:", point.x);
  console.log("Y:", point.y);
}

// Function call
const p1: Point = { x: 10, y: 20 };
printPoint(p1);
