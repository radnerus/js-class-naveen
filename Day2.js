// Array functions

let array = [1, 2, 3, 4, 5];


console.log('Conventional');
for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    console.log(ele)
}

console.log('For..in');
for (let i in array) {
    console.log('index ' + i);
    const ele = array[i];
    console.log(ele)
}

let strArr = ['a', 'Naveen', 1, 'Suren'];
console.log('For..of');
for (let ele of strArr) {
    console.log(ele);
}

let objArr = [{
        name: 'Naveen',
        location: 'US'
    },
    {
        name: 'Suren',
        location: 'India'
    }
];

for (let obj of objArr) {
    console.log(obj.name);
}

// String Manipulation
console.log('test1 ' + 'test 2');

const variable1 = 'test1';
const variable2 = 'test2';

console.log(variable1 + " " + variable2);

console.log(`This is the value of variable1 ${variable1}`);

console.log(`${variable1} ${variable2}`);

// forEach
// No modification to Original - read-only conditions
console.log(array);

array.forEach((value, index, array) => {
    console.log({ value, index, array });
});

strArr.forEach((value, index, array) => {
    console.log({ value, index, array });
});

function print(arr) {
    arr.forEach((value) => {
        console.log(value);
    });
}

strArr.forEach((__, index, _) => {
    console.log(index);
})

console.log('Before pushing');
print(strArr);
// pushing new element
strArr.push('new element');
console.log('After pushing');
print(strArr);

// unshift
strArr.unshift('new element at the begining');
print(strArr);

// pop element - remove from last
strArr.pop();
print(strArr);

// shift - remove from first
strArr.shift();
print(strArr);

console.log(strArr.length);