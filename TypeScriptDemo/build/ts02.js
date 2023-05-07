"use strict";
function greet() {
    console.log("Hellow there..");
}
greet();
function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 3));
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(4, 5));
console.log(add(3, 5, 6));
function expo(value, expo = 2) {
    return value ** expo;
}
console.log(expo(4, 5));
console.log(expo(4)); //2 is defalut
