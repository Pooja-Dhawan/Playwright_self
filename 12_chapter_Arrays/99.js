let [a,b,...rest] = [10,20,30,40,50];
console.log(a);
console.log(b);
console.log(...rest); //30,40,50
console.log(rest); // [30,40,50]


let [, , thirdOnly] = [10, 20, 30];
console.log(thirdOnly);
