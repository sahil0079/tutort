
//DOM => document object model
//object version of ur document 


// console.dir(document)
// console.log(document.URL)
// console.log(document.title)

// document.title = 'abcde'

// console.log(document.all[4])


//add 
// const body = document.body;

// console.log(body)

// body.append('hello', 'world');
// body.appendChild('hello')

// let user = {
//     name: 'John',
//     getName() {
//         console.log(user.name)
//     }
// }

// // function getName(){
// //     console.log(user.name)
// // }
// // getName();

// user.getName();


//create a new element

// const body = document.body;

// const div = document.createElement('div');

// //add text into an element

// // div.innerText = 'Javascript'
// div.textContent = 'Javascript'
// console.log(div);

// // body.append(div);
// body.appendChild(div);

// const div = document.querySelector('div');

// console.log(div)
// console.log(div.innerText)
// console.log(div.textContent)



const body = document.body;

// const div = document.createElement('div');

// div.innerText = '<strong> My fav lang is </strong>'

//create a strong element

// const strong = document.createElement('strong');

// //add text to strong element

// strong.innerText = 'My fav lang is';
// //append strong to div

// div.append(strong);

// body.append(div);


// div.innerHTML = '<strong><p> My fav lang is </p></strong>';

// body.append(div);


const div = document.querySelector('div');
const spanOne = document.getElementById('one');
const spanTwo = document.getElementById('two');

//removing elements

// spanTwo.remove();

// div.removeChild(spanOne);

// // div.append(spanTwo);

//attributes methods

// console.log(spanOne.getAttribute('name'));

// spanOne.setAttribute('name', 'abcde');

// spanOne.id = 'ndjkandjkan';

// spanOne.removeAttribute('name');

// var attributeName = 'data-info';

// var attributeValue = 'additional info';

// spanOne.setAttribute(attributeName, attributeValue);


//classes

// spanTwo.classList.add('new-class', 'a', 'b', 'c');

// spanTwo.classList.remove('new-class');

// spanTwo.className = 'a b c d new-class';

// spanOne.classList.toggle('new-class');

spanOne.style.color = 'tomato';

// spanTwo.style.backgroundColor = 'green';


// spanTwo.style['background-color'] = 'green';

