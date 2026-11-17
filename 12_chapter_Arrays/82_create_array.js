//create array using array literal []
let browsers=["chrome", "firefox","webkit"];

//create empty array    
let scores = new Array(3);
scores[0]= "1";

//create array with initial values
let scores2= new Array(1,2,3);

//create array with initial values
let numbers= new Array(100,200,300);

//create array using Array.of() method
let test = Array.of(10,20,30,40);
console.log(test.length);

//create array from string using Array.from() method
let chars = Array.from("hello");
console.log(chars[0]);
console.log(chars.length);