// singlelton

const User = new Object()
// const User = {}

User.id = "123abc"
User.name = "Mohit"
User.LoggedIn = false 

// console.log(User);

const GoogleUser = {
    email: "someone@google.com",
    userFullName: {
        FirstName: "Rajesh",
        LastName: "Patil"
    }
}

// console.log(GoogleUser);
// console.log(GoogleUser.userFullName.FirstName);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));

// console.log(User.hasOwnProperty("isWorking")); // retunrs false as key does not exists

// 17 Complete

// 18 - Object de-structure

const course = {
    name: "Javascript",
    price: 1000,
    course_instructor: "Mohit",
    place: "Pune"
}

// course.course_instructor
// course.place

// const {course_instructor} = course
// console.log(course_instructor);

// const {course_instructor: instructor} = course
// console.log(instructor);

