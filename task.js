const farm = [
    'Cow',
    'Pig',
    'Chicken',
    'Dog',
    'Cat',
    'Cow',
    'Horse',
    'Sheep',
    'Goat',
    'Cow',
    'Duck',
    'Cat',
    'Turkey',
];

let count = 0;

farm.forEach(animal => {
    if(animal === "Cow")
        count++;
});

console.log(`There are ${count} cows in a farm list.`);
console.log(farm.reduce((acc, curr) => (curr === "Cow")? ++acc: acc , 0));
