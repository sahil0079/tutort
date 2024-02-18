

// console.log('start');

// setTimeout(() => {
//     console.log('settimeout callback')
//     //callback queue
// }, 0);


// Promise.resolve().then(() => {
//     console.log('Promise resolved');
//     //microtask queue
// })

// console.log('end');


//it logs start
//setimeout is called with a callback that is added to which callback queue.
//promise.resolve().then() create a microtask. Micro tasks have higher priorities that tasks (ex=> callbacks from settimeout)

//synchronous code continues as js or callstack waits for nothing so it exevutes and logs End

//now all the sync code is finished and then js can start processing async tasks

//it first checks microtask queue. since there is one microtask (the resolved promise) it executes the microtask logging Promise resolved

//After executng all available microtasks. js moves to callback queue

//then it logs settimeout callback


// const promise = Promise.resolve(
//     setTimeout(() => {
//         console.log('Inside settimeout callback')
//     }, 1000)
// )
// console.log('Before promise');

// promise.then(result => {
//     console.log('Promise resolved with result:', result)
// })
// console.log('After promise');

// setTimeout returns a unique id to the timer. so it becomse Promise.resolve(6) quicky resolves with a value of 6
//before promise is logged
//promise's then method , registers a callback into microtask queue
//after promise gets logged
//all the sync is code is completed , now async code can be processed
//Promise resolved with result:6
//the callback rom callback que is picked so it logs Inside settimeout callback 



// const promise = Promise.resolve('Resolved value');

// console.log('Before promise');

// promise.then(result => {
//     console.log('promise with result: ', result)

//     setTimeout(() => {
//         console.log('inside settimeout callback')
//     }, 1000)
// });

// console.log('After promise');


// const promise = Promise.resolve('Resolved value');

// console.log(promise.then());

//async await as home work


