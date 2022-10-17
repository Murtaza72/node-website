let obj = {
    name: 'Murtaza',
    age: 18,
    greet() {
        console.log('Hi, I am ' + this.name);
    },
};

const name = '12';

obj.greet();

function Add(i, j) {
    return i + j;
}

const addOne = a => a + 1;

console.log(Add(1, 2));

const arr = ['Name', 'Age'];

console.log(arr.map(prop => 'Property: ' + prop));

const copiedArr = [...arr]; // spread operator extracts each element from an object and puts in the array
console.log(copiedArr);

function toArray(...args) {
    // rest operator allows us to give as many arguement as we want
    return args;
}

console.log(toArray(1, 2, 4, 4, 6, 6, 5, 4, 2, 3));

// Async code
// Async code will always be run after the sync or "normal" code
