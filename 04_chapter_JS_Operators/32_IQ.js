let responseTime = 850;
let sla = 1000;
let slastatus =responseTime <= sla ? "within sla" : "sla breached";
console.log (`Response : ${responseTime}ms - ${slastatus}`);

console.log(`what is the sla time ? - ${sla}`);