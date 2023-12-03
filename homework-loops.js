const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

/*1. Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25; */

let a = rand(5, 25);
let b = rand(5, 25);
let c = rand(5, 25);
console.log("a: ", a, " b: ", b, " c ", c);

/* 1A. Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį; */

const sum1 = a + b + c;
console.log(sum1);

/* 1B. Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log; */

const varContainer1 = `${a}${b}${c}`;
console.log(varContainer1);

/* 1C. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log; */

const varContainer2 = `${a} ${b} ${c}`;
console.log(varContainer2);

/* 1D. Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, 
paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log; */

const varContainer3 = `${varContainer2} ${sum1}`;
console.log(varContainer3);

/* 2. Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), 
kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log; */

const d = rand(5, 10);
console.log(d);

/* 3. Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. 
Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus; */

const hello = "Labas";

for (let i = 0; i < 5; i++) {
  console.log(hello);
}

/* 4. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus; */

for (let i = 0; i < 7; i++) {
  console.log(d);
}
console.log();

/* 5. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas; */

for (let i = 0; i < d; i++) {
  console.log(d);
}
console.log();

/* 6. Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, 
koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7; */

if (d > 7) {
  for (let i = 0; i < d; i++) {
    console.log(d);
  }
}
console.log();

/* 7. Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus; */

let e = null;
for (let i = 0; i < d; i++) {
  e = rand(10, 20);
}

/* 7A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite; */

console.log(e);

/* 7B. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, 
kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų; */

let f = 0;

for (let i = 0; i < d; i++) {
  f += rand(10, 20);
}

console.log(f);

/* 7C. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. 
Stringo tipo kintamąjį atspauzdinkite už ciklo ribų jam pasibaigus; */

let g = "";

for (let i = d; i > 0; i--) {
  if (i === 1) g += `${rand(10, 20)}`;
  else g += `${rand(10, 20)} `;
}

console.log(g);

/* 7D. Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. 
Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, 
paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log; */

let hs = "";
let temp = 0;
let hsum = 0;

for (let i = 0; i < 5; i++) {
  temp = rand(10, 20);
  hs += `${temp} `;
  hsum += temp;
}
let final = `${hs} ${hsum}`;
console.log(final);

/* 8. Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. 
Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12; */

let max12 = null;
let itterations = 0;
let valueSum = 0;
let rejected = 0;
let odd = 0;

do {
  max12 = rand(10, 25);
  if (max12 % 2) odd++;
  itterations++;
  if (max12 < 19) {
    valueSum += max12;
  } else {
    rejected++;
  }
} while (max12 >= 12);

/* 8A. Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite; */

console.log(max12);

/* 8B. Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus; */

console.log(itterations);

/* 8C. Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, 
ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų; */

console.log(valueSum);

/* 8D. Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, 
kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). 
Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų; */

console.log(valueSum + " " + rejected);

/* 8E. Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. 
Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus. */

console.log(
  `There was ${odd} odd numbers, and there was ${
    itterations - odd
  } even numbers`
);

/* 8F. Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). 
Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje. */

let max122 = 0;
let itterations2 = 0;
let odd2 = 0;
let valueSum2 = 0;
let rejected2 = 0;
let magic = 20;
while (magic > 0) {
  max122 = 0;
  odd2 = 0;
  valueSum2 = 0;
  rejected2 = 0;
  do {
    max122 = rand(10, 25);
    if (max122 % 2) odd++;
    if (max12 < 19) {
      valueSum2 += max12;
    } else {
      rejected2++;
    }
    itterations2++;
  } while (max12 >= 12);
  magic--;
}

console.log("There was : ", itterations2, " itterations.");

/* 9. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), 
kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5; */

let meh = 666;
let countBig = 0;
let countSmall = 0;

while (meh != 5) {
  countBig++;
  meh = rand(5, 10);
  countSmall += meh;
}

/* 9A. Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, 
koks skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų 
padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus; */

console.log("Isorinis ciklas padare: ", countBig, " ciklu.");
console.log("Vidinis ciklas padare: ", countSmall, " ciklu.");

/* 9B. Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, 
bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje; */

meh = 666;
countBig = 0;
countSmall = 0;
found = 0;

while (meh !== 5 || found !== 5) {
  countBig++;
  meh = rand(5, 10);
  countSmall += meh;
  if (meh === 5) found++;
}

console.log("Isorinis ciklas padare: ", countBig, " ciklu.");
console.log("Vidinis ciklas padare: ", countSmall, " ciklu.");

/* 9C. Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės; */

meh = 666;
countBig = 0;
countSmall = 0;
found = 0;

while (meh !== 5 || found !== 3) {
  countBig++;
  meh = rand(5, 10);
  countSmall += meh;
  if (meh === 5) found++;
  else found = 0;
}

console.log("Isorinis ciklas padare: ", countBig, " ciklu.");
console.log("Vidinis ciklas padare: ", countSmall, " ciklu.");

/* 10. Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, 
Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir 
“Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. 
Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, 
kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų. */

let kazys = 0;
let petras = 0;

while (kazys < 222 && petras < 222) {
  kazys += rand(5, 25);
  petras += rand(10, 20);
}

const winner =
  kazys > petras ? "Kazys" : kazys === petras ? "Lygiosios" : "Petras";
console.log(
  `Kazys surinko ${kazys} tasku. Petras surinko ${petras} tasku. Partija laimejo: ${winner}`
);
