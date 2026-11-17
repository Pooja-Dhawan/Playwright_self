let scores=[45, 82, 91,60, 73 ];

//map
// will add new values to a new array based on the condition provided in the callback function.
let grades = scores.map(i => i>70? "Pass":"Fail")
console.log(grades);

//filter
//will add same values to a new array based on the condition provided in the callback function.
let passing= scores.filter(s => s >= 70);
console.log(passing);