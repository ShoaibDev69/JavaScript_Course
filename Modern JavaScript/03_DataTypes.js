console.log("Not a Number" / 2); // NaN, such division is erroneous
console.log("Not a Number" / 2 + 5); // NaN

// Example - Special numeric values Infinity, -Infinity and NaN

console.log(1 / 0); // Infinity
console.log(Infinity); // Infinity
console.log(Infinity + 1); // Infinity
console.log(Infinity + Infinity); // Infinity
console.log(Infinity - Infinity); // NaN
console.log(1 / Infinity); // 0

// Example - NaN is sticky. Any further mathematical operation on NaN returns NaN

console.log(NaN + 5); // NaN
console.log(NaN * 5); // NaN