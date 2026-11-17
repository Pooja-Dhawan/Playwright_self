//Function as expression
function greet(name)
{
return `Hello ${name}`;
}
// fn as expression
// u can use var, cobst, let for expression
const greet1 = function (name1)
{
    return `Hello ${name1}`;
}

var greet2 = function (name1)
{
    return `Hello ${name1}`;
}

let greet3 = function (name1)
{
    return `Hello ${name1}`;
}

console.log(greet("pooja"));
console.log(greet1("dhawan"));
console.log(greet2("bfxdb"));
console.log(greet3("sbsh"));