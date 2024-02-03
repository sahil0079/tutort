

// var a = 10;

// let b = 20;

// const c = 30;

//declaration and initialization
// var a = 10;
// console.log(a)
// var a = 20;

// console.log(a)

// let a = 10;
// console.log(a)
// // let a = 20;
// a = 30;

// console.log(a)


// const a = 10;
// // let a = 20;
// a = 30;

// console.log(a)


//hoisting 
//

// console.log(a);
// var a = 100;


// console.log(a);
// let a = 100;
// console.log(a);
//let and const
//temporal dead zone


//scoping

//var are functional scope
//let and const are block scoped

// var a = 10;

// {
//     var a = 20;

//     console.log(a);
// }
// console.log(a);

// let a = 10;

// {
//     let a = 20;

//     console.log(a);
// }
// console.log(a);


// const a = 10;

// {
//     const a = 20;

//     console.log(a);
// }
// console.log(a);


// let a = 10;

// function x() {
//     let a = 20;
//     console.log(a)
// }
// x();
// console.log(a);



// var a = 10;

// let a = 20;

// console.log(a)


// const user = {
//     name: 'john',
//     age: 20
// };

// user.age = 30;

//pass by value and pass by reference


// let a = 10;

// let b = a;

// console.log(a == b)


// let user1 = {
//     name: 'john'
// };


// let user2 = {
//     name: 'john'
// };

// let user1 = {
//     name: 'john'
// };


// let user2 = user1;
// console.log(user1 == user2)


// const user = {
//     name: 'john',
//     age: 20
// };

// user.age = 30;

//functions

// first-class functions

// function sum(a, b) {

//     return a + b;
// }

// let sum2 = function sum(a, b) {

//     return a + b;
// }


// function x() {

//     function y() {

//     }

//     return y
// }


// function a() {

// }

// function b(cb) {

//     cb();
// }

// b(a)


// function multiply(a, b) {

//     return a * b
// }

// multiply.b = 20
// let b = multiply.b

// console.log(multiply(10, b))

// 'use strict'
function x() {
    function y() {
        function z() {

            const num = 10

        }
        z()

    }
    y()

}
x()
console.log(num)