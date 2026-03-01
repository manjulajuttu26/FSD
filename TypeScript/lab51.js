"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greetUser(name, title) {
    if (title === void 0) { title = "Mr./Ms."; }
    return "Hello, ".concat(title, " ").concat(name, "!");
}
console.log(greetUser("Alia", "Dr."));
console.log(greetUser("Alia"));
