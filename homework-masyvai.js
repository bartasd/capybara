/*1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25. */

const array1 = new Array(30)
  .fill(0)
  .map((el) => (el = Math.floor(Math.random() * 20 + 5)));
console.log("array1:");
console.log(array1);

/* 2a. Suskaičiuokite kiek masyve yra reikšmių didesnių už 10; */

const biggerThan10 = array1.filter((el) => el > 10).length;
console.log("count of an array1 values bigger than 10:");
console.log(biggerThan10);

/*2b. Raskite didžiausią masyvo reikšmę ir jos indeksą; */

const meh = [...array1].sort((a, b) => a - b);
const biggestValue = meh.at(-1);
const biggestValueIndex = array1.indexOf(biggestValue);

console.log(
  "biggest value is",
  biggestValue,
  " and it's index is: ",
  biggestValueIndex
);

/*2c. Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą; */
const evenIndexElSum = array1
  .filter((el, i) => el == el && i % 2 === 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(evenIndexElSum);

/*2d. Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;*/
let newArray1 = array1.map((el, i) => el - i);
console.log(newArray1);

/*2e. Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;*/
newArray1.push(
  new Array(10).fill(0).map((el) => (el = Math.floor(Math.random() * 20 + 5)))
);

newArray1 = [...newArray1.flat()];
console.log(newArray1);

/*2f. Iš masyvo elementų sukurkite du naujus masyvus. 
Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę) */

const evenArray = [];
const oddArray = [];

newArray1.forEach((el, i) => {
  i % 2 ? oddArray.push(el) : evenArray.push(el);
});
console.log("even array:");
console.log(evenArray);
console.log("odd array:");
console.log(oddArray);

/* 2g. Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15; */

array1.forEach((el, i) => i % 2 === 0 && el > 15 && (array1[i] = 0));
console.log(array1);

/* 2h. Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10; */

const indexOfValue10 = array1.indexOf(array1.find((el) => el > 10));
console.log(indexOfValue10);

/* 3. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D,
 o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.*/
const generateArray = () =>
  new Array(200).fill(0).map((el) => whiteList[Math.floor(Math.random() * 4)]);

const whiteList = ["A", "B", "C", "D"];
const letterArray = generateArray();
console.log(letterArray);
const freq = new Map();
for (const letter of letterArray) {
  freq.set(letter, (freq.get(letter) || 0) + 1);
}
console.log(freq);

/* 4. Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. 
Sudėkite masyvus, sudėdami atitinkamas reikšmes. 
Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.*/

const mehmeh = new Array(3).fill(0).map((el) => generateArray());
const unique = new Array(100)
  .fill(0)
  .map((el, i) => mehmeh[0][i] + mehmeh[1][i] + mehmeh[2][i]);
console.log(unique);

const freq2 = new Map();
for (const combination of unique) {
  freq2.set(combination, (freq2.get(combination) || 0) + 1);
}
console.log(freq2);

let unrepeated = 0;
freq2.forEach((freq) => {
  if (freq === 1) unrepeated++;
});

console.log("unrepeated combinations: ", unrepeated);
console.log("original combinations total: ", freq2.size);

/* 5. Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. 
Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).*/

const arrayFirst = [];
const arraySecond = [];
let no1 = null;
let no2 = null;
for (let i = 0; i < 100; i++) {
  while (
    arrayFirst.includes(no1) ||
    arraySecond.includes(no2) ||
    no1 === null ||
    no2 === null
  ) {
    no1 = Math.floor(Math.random() * 899 + 100);
    no2 = Math.floor(Math.random() * 899 + 100);
  }
  arrayFirst.push(no1);
  arraySecond.push(no2);
}

console.log("First Array:");
console.log(arrayFirst);
console.log("Second Array:");
console.log(arraySecond);

/* 6. Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 5 uždavinio masyve, 
bet nėra antrame 5 uždavinio masyve. */

const mixedArray = [];

arrayFirst.forEach((el) => {
  if (!arraySecond.includes(el)) mixedArray.push(el);
});
console.log(mixedArray);

/* 7. Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 5 uždavinio masyvuose. */

const mixedArray2 = [];

arrayFirst.forEach((el) => {
  if (arraySecond.includes(el)) mixedArray2.push(el);
});
console.log(mixedArray2);

/* 8. Sugeneruokite masyvą, kurio indeksus sudarytų 5 uždavinio pirmo masyvo reikšmės, 
o jo reikšmės  būtų iš  antrojo 5 uždavinio masyvo.*/

const arrayLen = Math.max(...arrayFirst);
const superDuperArray = new Array(arrayLen).fill(null);

arrayFirst.forEach((el, i) => (superDuperArray[el] = arraySecond[i]));
console.log(superDuperArray);

/* 9. Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. 
Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.*/

const lastArray = new Array(2)
  .fill(0)
  .map((el) => (el = Math.floor(Math.random() * 20 + 5)));

for (let i = 0; i < 8; i++) {
  lastArray.push(lastArray[i] + lastArray[i + 1]);
}

console.log(lastArray);
