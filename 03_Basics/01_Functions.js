
function printName(){
    console.log("M");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
}

// printName()

// function addNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addNumbers(6,3)
// addNumbers(6,"3")
// addNumbers(6,"a")
// addNumbers(6, null)

// const result = addNumbers(9,4)
// console.log("Result is: ", result);

function addNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    // console.log("This will never print");

    return number1 + number2
}

// const result = addNumbers(9,4)
// console.log("Result is: ", result)

function loginUserMessage(username){        //function loginUserMessage(username="Default User"){
    // if(username === undefined){
    //     console.log("Please enter username");
    //     return
    // }

    if(!username){
        console.log("Please enter username")
        return
    }

    return `${username} just logged in`
}

// let msg = loginUserMessage("Prashant")
// console.log(msg);
// let msg = loginUserMessage()
// console.log(msg);

// 19

// *******20

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(100,200,300)); // in this case only first value is returned

// function calculateCartPrice(...num1){   // ... is rest operator
//     return num1
// }

// console.log(calculateCartPrice(100,200,300))    // array of all the values are returned

function calculateCartPrice(val1, val2, ...num1){   // ... is rest operator
    return num1
}

console.log(calculateCartPrice(100,200,300))    // 300 will be returned 
                                                // as 100 = val1 and 200 = val2 which we are not returning in the function

const user = {
    name: "Milind",
    age: 24
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and the age is ${anyobject.age}`);
}

// handleObject(user)
handleObject({
    name: "Sony",
    age:42
})

const arr = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(arr));

// 20 Complete