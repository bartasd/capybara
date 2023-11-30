//1. Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;
const output = (txt) => console.log(txt);

output("oho");

/*2. Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;*/

const output2 = (txt, n) => {
    for(let i = 0; i < n; i++)
        output(txt);
}

output2("meh", 6);

/*3. Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)*/
const divs = (num) => new Array(num).fill(0).map((el, i) => (el = i+1)).filter(el => (num%el === 0)).length - 2;

meh = divs(10);
console.log(meh);

/*4. Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.*/

const asd = new Array(100).fill(0).map(el => Math.floor(Math.random() * 44 + 33)).sort((a,b) => divs(a)-divs(b));
console.log(asd);

/*5. Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 3 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.*/

const asd2 = new Array(100).fill(0).map(el => Math.floor(Math.random() * 444 + 333)).filter(a => divs(a) === 0);
console.log(asd2);

/*6. Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;*/

// tai masyvo ilgis 1 lygmens, nuo 10 iki 20 ar nuo 10 iki 30

let repeats = Math.floor(Math.random()*10 + 20);
let asd3 = [];

for(let i = 0; i < repeats; i++)
{
    if(i === 0){
        const temp = new Array(Math.floor(Math.random()*10+10)).fill(1).map(el => Math.floor(Math.random()*10));
        temp.push(0);
        asd3 = [...temp];
    }
    else{
        const temp = new Array(Math.floor(Math.random()*10+10)).fill(1).map(el => Math.floor(Math.random()*10));
        temp.push(asd3);
        asd3 = [...temp];
    }
}
console.log("asd3: ", asd3);


/*7. Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose.*/

let asd4 = [...asd3];
while(!asd4.every(el => typeof el === "number"))
    asd4=asd4.flat();
    
let sum = asd4.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

/*8. Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento. */

function generate( masive = []){
    if(divs(masive.at(-1)) || divs(masive.at(-2)) || divs(masive.at(-3)))
    {
        masive.push(Math.floor(Math.random()*32 + 1));
        generate(masive);
    }
    return;
}
const asd5 = new Array(3).fill(0).map(el=>(el = Math.floor(Math.random()*32 + 1)));
generate(asd5);
console.log(asd5);

/*9. Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite. */


