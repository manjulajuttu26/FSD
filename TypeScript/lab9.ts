// lab9.ts
export {}; // make file a module

// Task 1: Union literal types
function move(direction: "up" | "down" | "left" | "right"): void {
  console.log(`Moving ${direction}`);
}

// Function calls
move("up");
move("left");

// Task 2: Type narrowing
function formatValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(Math.round(value));
  }
}

// Function calls
formatValue("typescript");
formatValue(10.6);
