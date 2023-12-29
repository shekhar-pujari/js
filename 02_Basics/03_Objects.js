// singleton
// Object.create()

const sym = Symbol("Key1");

// object literals is discussed here
const js_user = {
    name: "Mohan",
    age: 23,
    location: "Pune",
    email: "mohit@yahoo.com",
    isLogged: true,
    lastLogin: ["Monday", "Saturday"],
    "full name": "Mohit Patil",
    // sym: "Key1",
    [sym]: "Key1",
};

// console.log(js_user.lastLogin);
// console.log(js_user["lastLogin"]);
// console.log(js_user["full name"])   // if key has space, we can not access it using dot notation

// console.log(js_user["sym"]);
// console.log(typeof js_user["sym"]);

// console.log(js_user[sym]);
// console.log(typeof js_user[sym]);

// js_user.email = "mohit@gmail.com"
// console.log(js_user);
// Object.freeze(js_user)
// js_user.email = "hitesh@microsoft.com" // this will not be affected once we freeze the object

js_user.greeting = function(){
    console.log("Hello JS User");
}

js_user.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(js_user.greeting());
console.log(js_user.greeting2());

// 16 Complete