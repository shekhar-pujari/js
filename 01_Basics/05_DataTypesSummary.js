/*
Data types divided into two types

1. Premitive (Call by value)
    String, Number, Boolean, null, undefined, Symbol, BigInt

2. Non-Primitive (Referece Type). Always return object
    Object, Array, Functions

Javascript dynamically typed language
*/

const score = 100
const score_val = 83.65
const isLogged = false 
const temp = null
let userEmail

const id = Symbol("123")
const another_id = Symbol("123")

console.log(id === another_id)

const big_num = 556658554455n

//
const heros = ["Akshay", "Amir", "Salman", "Hritesh"]

let obj = {
        name: "Akshay",
        age: 40
}

const myFunction = function(){
    console.log("Hello From Function")
}
console.log(typeof obj);
console.log(typeof heros);
console.log(typeof myFunction);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/

/* ********************************************************
Memory in JS
    Stack (Primitive)
    Heap (Non-primitive)

*/

let city = "Pune"
let another_city = city 
another_city = "Bangalore"

console.log(city);
console.log(another_city);

let user1 = {
    name: "Mitesh",
    age: 32,
    city: "Pune"
}

let user2 = user1
user2.age = 45

console.log(user1);
console.log(user2);