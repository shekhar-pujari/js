const name = "Mohit"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const game_name = new String("Chess-2")

// console.log(game_name[0]);
// console.log(game_name.endsWith("S"));
// console.log(game_name.length);
// console.log(game_name.toUpperCase());
// console.log(game_name.charAt(2));

// console.log(game_name.indexOf('s'));

x = game_name.substring(0,4);
console.log(x);

const another_string = game_name.slice(-6,3)
console.log(another_string);

const newString = "    Bangalore   "
console.log(newString.trim());

let url = "https://www.facebook.com/Mohit%20Patil"
console.log(url.replace('%20','-'));

console.log(url.includes('%20'));

// Split url by /
console.log(url.split('/'));
