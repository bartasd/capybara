const farm2 = [
    { name: 'Cow', age: 5 },
    { name: 'Pig', age: 3 },
    { name: 'Chicken', age: 1 },
    { name: 'Dog', age: 2 },
    { name: 'Cat', age: 4 },
    { name: 'Cow', age: 7 },
    { name: 'Horse', age: 4 },
    { name: 'Sheep', age: 6 },
    { name: 'Goat', age: 3 },
    { name: 'Cow', age: 2 },
    { name: 'Duck', age: 1 },
    { name: 'Cat', age: 2 },
    { name: 'Turkey', age: 3 },
];

const age = farm2.reduce((acc, curr) => curr.name === "Cow" ? acc += curr.age : acc += 0 , 0);
console.log(age);
