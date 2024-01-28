
//complex data

//objects
//arrays


//arrays
//ordered collectrion in contiguos memory location


// let arr = new Array(); //constructor

// let arr1 = []; //literal syntax;

// console.log(Array.isArray(arr1))


// let obj = {}

// console.log(Array.isArray(obj))



// let arr = [];
// let arr = [10, 20, 30, 40 ];

// let arr = ['Apples', 100, true, null ];

// // console.log(arr.length);
// //indexes
// // console.log(arr[2])
// // console.log(arr[3])

// arr[999] = 400;

// console.log(arr)



// let arr = [10, 20, 30, 40 ];

// // console.log(arr[arr.length - 1])

// console.log(arr.at(-1))

// //work with end of the array
// //push/pop


// let arr = [10, 20, 30, 40 ];

// console.log(arr.pop());
// console.log(arr);

// arr.push(100,200,300);

// console.log(arr);



//work with start of the array
//shift/unshift


// let arr = [10, 20, 30, 40 ];

// console.log(arr.shift());
// console.log(arr);

// arr.unshift(100,400,500);

// console.log(arr);


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);    
// }


//for of

// for (let num of arr){
//     console.log(num)
// }


// let arr = new Array(10,20,30);
// console.log(arr)

// let arrMatrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// console.log(arrMatrix[0][1])

// let arr = new Array(9);

// console.log(arr[2])


//Objects

//keyed collection => complex data and entities

// let obj = {}; //literal syntax

// let obj1 = new Object(); //constructor

//key and value

// let user = {
//     name:"john",
//     profession: 'programmer',
//     age:20
// };

// let user = {
//     name:"john",
//     profession: 'programmer',
//     age:20,
//     languages: ['Hindi', 'English', 'Japenese']
// };




// let user = {
//     name:"john",
//     profession: 'programmer',
//     age:20
// };

// delete user.age;



// let user = {
//     name:"john",
//     profession: 'programmer',
//     age:20,
//     'likes music': true
// };

// console.log(user.age); // dot notation
// console.log(user['age']); //square bracket notation

// console.log(user["likes music"]);
// delete user["likes music"];



// let user = {
//     name:"john",
//     profession: 'programmer',
//     age:20,
// };

// // let key = 'likes music';

// // user[key] = false;

// let key = prompt('What details you would like to know about the user');

// // console.log(typeof key)

// alert(user[key]);


// let property = prompt('Property?');

// let value = prompt(`Value of  ${property}`);

// // console.log(value)
// // console.log(property)

// // console.log({value, property});

// // let user = {
// //     [property]: value,
// // }
// let user = {
//     [property + '123']: value,
// }

// console.log(user)


// let name = 'john';

// let age = 20;


// let user = {

//     name:name,
//     age:age
// }


// let user = {
//     name,
//     age
// }


// console.log(user)


//existence of a property

// console.log(user.noSuchProperty === 'age');


// console.log('name' in user);
// console.log('age' in user);
// console.log('abcde' in user);



// for (let key in user){

//     console.log({
//         key,
//         value: user[key]
//     })
// }


let arr = [10,20];



