const colors = [
    'pink',
    'orange',
    'yellow',
    'pink',
    'blue',
    'indigo',
    'pink'
];

const colBlack  = colors.map(el => el === "pink"? el = 'black' : el);

const colskyblue  = colors.map(el => el === "pink"? el = 'skyblue' : el);

console.log(colBlack);
console.log(colskyblue);

const meh = [...colors];
meh.forEach((el,i) => {
    if(el === "pink")
        meh[i] = "black";
});
console.log(meh);

const colors22 = [
    { name: 'pink' },
    { name: 'orange' },
    { name: 'yellow' },
    { name: 'pink' },
    { name: 'blue' },
    { name: 'indigo' },
    { name: 'pink' }
];

const toBlack = colors22.map(el => el.name == "pink"? { name :"black" } : {...el})
console.log(toBlack);

const colors44 = [
    {name: 'pink', age: 12},
    {name: 'orange', age: 13},
    {name: 'yellow', age: 14},
    {name: 'pink', age: 15},
    {name: 'blue', age: 16},
    {name: 'indigo', age: 17},
    {name: 'pink', age: 18}
];

const meh2 = colors44.map(el => el.name == "pink"? { ...el, name : "black" } : {...el})
console.log(meh2);

const colors66 = [
    {name: 'pink', age: 12},
    {name: 'orange', age: 13},
    {name: 'yellow', age: 14},
    {name: 'pink', age: 15, tractor: 'John Deere'},
    {name: 'blue', age: 16},
    {name: 'indigo', age: 17},
    {name: 'pink', age: 18}
];


const meh3 = colors66.map(el => ({ ...el, name: "black"}));



console.log(meh3);

const cats = [
    {name: 'Tomas', age: 12},
    {name: 'Pukis', age: 13},
    {name: 'Juodis', age: 14},
    {name: 'Margis', age: 15, tractor: 'John Deere'},
    {name: 'Ryzas', age: 16},
    {name: 'Pukis', age: 17},
    {name: 'Pukis', age: 18}
];

const bepukis = cats.filter(el => el.name !== "Pukis")
console.log(bepukis);



const cats2 = [
    {name: 'Tomas', age: 12},
    {name: 'Juodis', age: 13},
    {name: 'Juodis', age: 14},
    {name: 'Margis', age: 15, tractor: 'John Deere'},
    {name: 'Ryzas', age: 16},
    {name: 'Pukis', age: 17},
    {name: 'Juodis', age: 18}
];
console.log(cats2);
const rez = cats2.filter(el => el.name !=="Juodis").map(el => ({...el, age: (el.age)+1}));

console.log(rez);
console.log(cats2);
let flag = 0
let abr = cats2.find((cat, index) => cat.age > 15 && ++flag == 2)

console.log(abr)
