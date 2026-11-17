//every vs some

//every- all elements in the array should satisfy the condition provided in the callback function.
//every like add condition
console.log([80,90,85].every(s=> s>=70));
console.log([80,60,85].every(s=> s>=70));

// some- at least one element in the array should satisfy the condition provided in the callback function.
// some like or condition
console.log([80,60,85].some(s=>s<70)); // returns true
console.log([80,90,85].some(s=>s<70)); // returns false