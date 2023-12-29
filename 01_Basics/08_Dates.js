// Dates

let dt = new Date()
// console.log(typeof dt);
// console.log(dt);
// console.log(dt.toString());
// console.log(dt.toLocaleString());

// let dt1 = new Date(2023,11,29) // Month number starts with 0 in JS
// let dt1 = new Date(2023,11,29, 5,30,32) 
// let dt1 = new Date("2023-12-29") //YYYY-MM-DD ISO
let dt1 = new Date("12-29-2023") // MM-DD-YYYY
// console.log(dt1.toLocaleString());

let tm = Date.now()
// console.log(tm);

// console.log(dt1.getTime());
// console.log(Math.floor(tm/1000));

console.log(dt.getDay());
console.log(dt.getMonth() + 1);

console.log(dt.toLocaleString('default', {weekday: "long"}));