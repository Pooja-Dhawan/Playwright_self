let results=["pass","fail","pass", "error","fail"];
console.log(results);

// indexOf() method returns the first index of the specified element in the array.
console.log(results.indexOf("fail"));

// if the specified element is not found in the array, it returns -1.
console.log(results.indexOf("skip"));

// lastIndexOf() method returns the last index of the specified element in the array.
console.log(results.lastIndexOf("fail"));

// includes() method returns true if the specified element is found in the array,
//  otherwise it returns false.
console.log(results.includes("error"));
console.log(results.includes("skip"));
