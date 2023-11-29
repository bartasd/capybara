/*6. Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;*/

// tai masyvo ilgis 1 lygmens, nuo 10 iki 20 ar nuo 10 iki 30

let repeats = Math.floor(Math.random()*10 + 10);
let asd3 = [];

for(let i = 0; i < repeats; i++)
{
    if(i === 0){
        const temp = new Array(9).fill(1).map(el => Math.floor(Math.random()*10));
        temp.push(0);
        asd3 = [...temp];
    }
    else{
        const temp = new Array(9).fill(1).map(el => Math.floor(Math.random()*10));
        temp.push(asd3);
        asd3 = [...temp];
    }
}
console.log("asd3: ", asd3)
