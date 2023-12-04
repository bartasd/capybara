/* 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą. */

class Kibiras1{
    constructor(){
        this.akmenuKiekis = 0;
    }
    prideti1Akmeni(){
        this.akmenuKiekis++;
    }
    pridetiDaugAkmenu(kiekis){
        this.akmenuKiekis += kiekis;
    }
    kiekPririnktaAkmenu(){
        console.log("Pririnkta: ", this.akmenuKiekis, " akmenu.");
    }
}

const kibirelis = new Kibiras1();
kibirelis.kiekPririnktaAkmenu();
kibirelis.prideti1Akmeni();
kibirelis.kiekPririnktaAkmenu();
kibirelis.pridetiDaugAkmenu(19);
kibirelis.kiekPririnktaAkmenu();

/* 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.*/

class Pinigine{
    constructor(){
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }
    ideti(kiekis){
        if(kiekis <= 2)
            this.metaliniaiPinigai += kiekis;
        else
            this.popieriniaiPinigai += kiekis;
    }
    skaiciuoti(){
        console.log("Pinigineje yra: ", this.popieriniaiPinigai + this.metaliniaiPinigai);
    }
}

const manoPinigine = new Pinigine();
manoPinigine.skaiciuoti();
manoPinigine.ideti(15);
manoPinigine.skaiciuoti();

/* 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali. */

class Troleibusas{
    constructor(){
        this.keleiviuSkaicius = 0;
    }
    ilipa(keleiviuSkaicius){
        this.keleiviuSkaicius += keleiviuSkaicius;
    }
    islipa(keleiviuSkaicius){
        if(this.keleiviuSkaicius - keleiviuSkaicius < 0){
            this.keleiviuSkaicius = 0;
        }
        else{
            this.keleiviuSkaicius -= keleiviuSkaicius;
        }
    }
    vaziuoja(){
        console.log("Troleibusu vaziuoja: ", this.keleiviuSkaicius);
    }
}

const trulikas = new Troleibusas();
trulikas.vaziuoja();
trulikas.ilipa(15);
trulikas.vaziuoja();
trulikas.islipa(7);
trulikas.vaziuoja();
trulikas.islipa(10);
trulikas.vaziuoja();

/* 4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). */

class Troleibusas2{
    constructor(){
        this.keleiviuSkaicius = 0;
    }
    ilipa(keleiviuSkaicius){
        this.keleiviuSkaicius += keleiviuSkaicius;
        this.bendrasKeleiviuSkaicius( keleiviuSkaicius );
    }
    islipa(keleiviuSkaicius){
        if(this.keleiviuSkaicius - keleiviuSkaicius < 0){
            this.keleiviuSkaicius = 0;
            this.bendrasKeleiviuSkaicius( -this.keleiviuSkaicius );
        }
        else{
            this.keleiviuSkaicius -= keleiviuSkaicius;
            this.bendrasKeleiviuSkaicius( -keleiviuSkaicius );
        }
    }
    vaziuoja(){+
        console.log("Troleibusu vaziuoja: ", this.keleiviuSkaicius);
    }
    bendrasKeleiviuSkaicius(keleiviuSkaicius){
        Troleibusas2.visiKeleiviai += keleiviuSkaicius;
    }
    static keleiviuSkaiciusVisuoseTroleibusuose(){
        console.log("Viso keleiviu visuose troleibusuose: ", Troleibusas2.visiKeleiviai);
    }
}
Troleibusas2.visiKeleiviai = 0;

const trulikas2 = new Troleibusas2();
const trulikas3 = new Troleibusas2();
trulikas2.ilipa(8);
trulikas3.ilipa(7);
trulikas2.vaziuoja();
trulikas3.vaziuoja();
Troleibusas2.keleiviuSkaiciusVisuoseTroleibusuose();

/* 5. (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis. */

class PirkiniuKrepselis{
    constructor(){
        this.turinys = new Map();
    }
    idetiSureli(kiekis){
        this.turinys.set("surelis", (this.turinys.get("surelis") || 0) + kiekis );
    }
    idetiPieno(kiekis){
        this.turinys.set("pienas", (this.turinys.get("pienas") || 0) + kiekis );
    }
    idetiDuonos(kiekis){
        this.turinys.set("duona", (this.turinys.get("duona") || 0) + kiekis );
    }
    krepselioTurinys(){
        console.log("Krepselio turinys yra: ", this.turinys);
    }
}

const manoKrepselis = new PirkiniuKrepselis();
manoKrepselis.krepselioTurinys();
manoKrepselis.idetiSureli(2);
manoKrepselis.krepselioTurinys();
manoKrepselis.idetiPieno(4);
manoKrepselis.krepselioTurinys();
manoKrepselis.idetiDuonos(7);
manoKrepselis.krepselioTurinys();
manoKrepselis.idetiPieno(5);
manoKrepselis.krepselioTurinys();

/* 6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta. */

/* 7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, naudokite statinę savybę visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis). */

/* 8. Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę. */

/* 9. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys, kuri turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis). */




