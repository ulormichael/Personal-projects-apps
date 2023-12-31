// Solve the below problems:

// #1) Line up the Turtle and Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);


// #2) What happens when you run turtle.trim().padEnd(8, 'e') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

'   ||<- Start line'
'🐢========'
'       🐇'

// #3) Get the below object to go from:
Let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'rainder'
}
// to this:
'my name is Rudolf the rainder'

Object.entries(obj).map(value => value.join(" ")).join(' ')