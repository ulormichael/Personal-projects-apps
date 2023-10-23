const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = "bobby";
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran. the function executed. It's never....
// But it's going remember that there are references to those....
// so the child scope always has access to the parents scope...

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);