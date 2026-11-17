let original=[1,2,3];
let copy1=[...original];
copy1.push(9);
console.log(original);
//spread and slice creates new array, original array doesnt change.
console.log(copy1);

let copy2=original.slice();
copy2.push(10);
console.log(copy2);
console.log(original);

// when we assign, original array gets changed also.
//wehn we directly assign the array, it becomes deep copy so both gets changed if anyone is changed.
let deep_copy_array = original;
deep_copy_array.push(91);
console.log(deep_copy_array);
console.log(original);