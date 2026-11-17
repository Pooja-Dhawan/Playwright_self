function greet(name){
    return `helo ${name}`;
}

const greet1 = function (name){
    return `helo ${name}`;
}

//Arrow fn
//remove function keyword
//remove curly braces brackets, use arrow sign
//remove return keyword
//keep the parameter part
const greet2 =  (name) => `hello ${name}`;

console.log(greet("poo"));
console.log(greet1("ja"));
console.log(greet2("dhawan"));