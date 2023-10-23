
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        console.log('array', array);
        console.log('accumulator', accumulator);
        return [].concat([0, 1])
}, []);

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        debugger;
        return [].concat([0, 1])
}, []);

// Function of JavaScript
const a = 1;
const b = 10;
const c = 100;

//call stack
console.log('1');
console.log('2');
console.log('3');

const one = () => {
    const two = () => {
        console.log('4');
    }
    two();
}

//CALL STACK

//Recursion
function foo() {
    foo()
}

foo()

//call stack
console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000)
console.log('3');

setTimeout(() => {
    console.log('2');
}, 2000)
//CALL STACK


//WEB API

//CALLBACK QUEUE

//EVENT LOOP