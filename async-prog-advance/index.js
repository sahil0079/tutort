

// function x(num, callback) {
//     console.log(num);
//     callback();
// }

// function y() {
//     console.log(20)
// }

// x(10, y)

// setTimeout(y, 1000)

//many functions are provide javascript host environments that allow us to schedule asynchronous actions.
//in simple words, actions that we initiate now, but they finish later, example=> setTimeout

// function loadScript(src, callback) {

//     //create script tag and append it to a page
//     //it will allow the script with given src to start loading and run it when completed

//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => callback(script);
//     document.head.append(script);
// }

// loadScript('/test/script.js', function(){
//     someFunction();
// });


// setTimeout(someFunction, 1000)


//rest of the code will not wait



// loadScript('/test/script.js', function () {
//     someFunction();
//     loadScript('/test/script2.js', function () {
//         loadScript('/test/script3.js', function () {
//             //continue if all the scrips are loaded
//         })
//     })
// });

//callback hell

// setTimeout(function () {
//     console.log(1);
//     setTimeout(function () {
//         console.log(2)
//         setTimeout(function () {
//             console.log(3)
//             setTimeout(function () {
//                 console.log(4);
//                 setTimeout(function () {
//                     console.log(5);
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
//callback hell





//simulate a basic async operation

// function fetchData(callback) {
//     setTimeout(function () {
//         const data = { name: 'john', age: 30 };
//         // console.log(data)
//         console.log('data fetched')
//         callback(data);
//     }, 2000)
// }
// //async operation
// function processData(data, callback) {
//     setTimeout(function () {
//         data.age += 1;
//         console.log('data processed')

//         callback(data);
//     }, 1000)
// }

// function displayData(data) {
//     console.log(data);
//     console.log('data displayed')

// }

// fetchData(function (response) {
//     //multiple operations
//     processData(response, function (result) {
//         displayData(result);
//     })
// })




//all the steps are dependant
//step 1 fetchData
//step 2  process the data
//step 3 display that data



//ecommerce

//simulation of ecomm process

// const orders = [
//     { id: 1, item: 'Product A', price: 10 },
//     { id: 2, item: 'Product B', price: 15 },
//     { id: 3, item: 'Product C', price: 20 },
// ]

//simulate a func to get orders 

// function getOrders(callback) {

//     setTimeout(() => {
//         callback(null, orders)
//     }, 1000);
// };

// function displayOrders(orders) {
//     console.log('Orders: ');

//     orders.forEach(order => {
//         console.log(`${order.id}: ${order.item} - ${order.price}`)
//     })
// };

// function checkout(callback) {

//     setTimeout(() => {
//         callback(null, 'Checkout successfull')
//     }, 2000)

// }
// function proceedToPayment(callback) {

//     setTimeout(() => {
//         callback(null, 'Proceeding to payment')
//     }, 1500)

// }

// console.log('fetching orders...');

// getOrders((error, fetchedOrders) => {
//     if (error) {
//         console.error('Error:', error);
//         return;
//     };
//     console.log(fetchedOrders)
//     displayOrders(fetchedOrders);
//     //do something else

//     console.log('checking out...');

//     checkout((checkoutError, checkoutResult) => {
//         if (checkoutError) {
//             console.error('Error: ', checkoutError);
//             return;
//         }
//         console.log(checkoutResult);

//         console.log('proceed to payment...');
//         proceedToPayment((paymentError, paymentResponse) => {
//             if (paymentError) {
//                 console.error('Error: ', paymentError);
//                 return;
//             }
//             console.log(paymentResponse);
//             console.log('payment is successfull');
//         })
//     });

// })




//getOrders
//displayOrders depend upon checkout
//checkout depends upon getOrders
//proceedToPayment depends upon checkout

//each function takes callback as an argument and the subsequent steps are nested within the callbacks

//problems with callbacks
//callback hell
//maintainability and readability issue
//harder error management
//inversion of control
//no idea about background in js memory process running


//solve
//promises and async await

//promises can used to handle async operations in a more 
//managable and understandable manner especially when dealing with multiple async operations

//key points

//async operation
//state: pending (initial state), fulfilled(operation completed succesfully),  rejected(operation failed)
//chaining: to handle sequences of async tasks



// const myPromise = new Promise(function (resolve, reject) {
//     //perform an async operation
//     setTimeout(() => {
//         //operation successfull
//         resolve('operation completed successfully')
//         //simulate error
//         // reject(new Error('Operation failed'))

//     }, 2000);
// });

//using the promise

// console.log(myPromise);

// myPromise
//     .then(function (result) {
//         console.log('Success: ', result)
//     })
//     .then(() => console.log('it will run after sucesss'))

//     .catch(function (error) {
//         console.error('Error: ', error)
//     })


//implementing with promises

const orders = [
    { id: 1, item: 'Product A', price: 10 },
    { id: 2, item: 'Product B', price: 15 },
    { id: 3, item: 'Product C', price: 20 },
]

function getOrders() {

    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(orders);
        }, 1000);
    })

    //return promise
}

function displayOrders(orders) {
    console.log('Orders: ');

    orders.forEach(order => {
        console.log(`${order.id}: ${order.item} - ${order.price}`)
    })
};

//async
function checkout() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Checkout successfull')
        }, 2000)
    })
}

function proceedToPayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('proceeding to payment')
        }, 1500)
    })
}

console.log('Fetching orders...');

getOrders()
    .then(function (fetchedOrders) {
        // console.log(fetchedOrders)
        displayOrders(fetchedOrders);
        return checkout();
    })
    .then(function (checkoutResult) {
        console.log(checkoutResult);

        console.log('Proceeding to payment...');

        return proceedToPayment();
    })
    .then(paymentResult => {
        console.log(paymentResult);
        console.log('Payment successfull');
    })
    .catch(error => {
        console.error('Error: ', error)
    })

//in case of promise
//in this implementation, each async operation returns a promise and the subsequent steps are chained using .then() calls. .catch() to catch or to handle errors

//getOrders
//displayOrders depend upon checkout
//checkout depends upon getOrders
//proceedToPayment depends upon checkout
