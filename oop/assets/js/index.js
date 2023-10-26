// /1*eigenschap*/
// let persoon ={
//     voornaam: 'Tom',
//     naam: 'Vanhoutte',
//     leeftijd:'50'
// }
//
// let persoon2={
//     voornaam: 'Benjamin',
//         naam: 'Vanhoutte',
//         leeftijd:'50'
// }
// console.log(persoon.naam);
// console.log(persoon2.voornaam);

//2 constructor
// function Persoon(voornaam, achternaam){
//     /*eigenschappen*/
//     this.voornaam = voornaam;
//     this.achternaam = achternaam;
//     /*methodes*/
//     this.volledigeNaam = function(){
//         return this.voornaam + ' ' + this.achternaam;
//     };
//
// }
// /*programma*/
// let persoon1 = new Persoon('Tom','Vanhoutte');
// let persoon2 = new Persoon('Benjamin', 'M');
// console.log(persoon1);
// console.log(persoon1.achternaam);
// console.log(persoon2.volledigeNaam());

/* get */
/* met een getter kan je een waarde van een eigenschap ophalen*/
// let persoon ={
//     voornaam: 'TOm',
//     familienaam: 'Vanhoutte',
//     get volledigeNaam(){
//         return this.voornaam + ' ' + this.achternaam
//     }
//
// }
// console.log(persoon.volledigeNaam);

/*4 set */
/* setter is een methode waarmee je de waarden van een eigenschap kan instellen*/
// let persoon ={
//     voornaam: 'TOm',
//     familienaam: 'Vanhoutte',
//     set volledigeNaam(naam){
//       let namen = naam.split(' ');
//       this.voornaam = namen[0];
//       this.familienaam = namen[1];
//     }
// }
// persoon.volledigeNaam = 'Benjamin M';
// console.log(persoon.voornaam);
// console.log(persoon.familienaam);

//5 overerving van objecten
// parent
// function Dier(naam){
//     this.naam = naam;
// }
// Dier.prototype.maakGeluid = function(){
//     return "onbekend geluid";
// }
// //child
// function Hond(naam, ras){
//     Dier.call(this,naam) //roept de constructor op van de parent klas en zijn eigenschappen
//     this.ras = ras;
// }
// Hond.prototype = Object.create(Dier.prototype);
// Hond.prototype.constructor = Hond;
//
// Hond.prototype.blaf = function(){
//     return "woef";
// }
// /**programma**/
// let m = new Hond("Max","Labrador");
//
// console.log(m.naam);
// console.log(m.ras);
// console.log(m.maakGeluid());
// console.log(m.blaf());

/*7 oververing voorbeeld2*/
// function Voertuig(merk, bouwjaar){
//     this.merk = merk;
//     this.bouwjaar = bouwjaar;
// }
// Voertuig.prototype.start = function(){
//     return "Het voertuig is gestart";
// }

/*child*/
// function Auto(merk, bouwjaar, model){
//     Voertuig.call(this, merk, bouwjaar);
//     this.model = model;
// }
// Auto.prototype = Object.create(Voertuig.prototype);
// Auto.prototype.constructor = Auto;
//
// Auto.prototype.claxoneren = function(){
//     return "de auto claxoneert";
// }
//
// /*INSTANTIEREN*/
// let mijnAuto = new Auto('Mercedes', 2020, 'cla');
// let jouwAuto = new Auto('bmw', 2023, 'x5');
//
// console.log(mijnAuto.merk);
// console.log(jouwAuto.model);
// console.log(jouwAuto.claxoneren());

/*8 classes */
class Persoon{
   /*eigenschappen*/
    constructor(voornaam, achternaam){
        this.voornaam = voornaam;
        this.achternaam = achternaam;
    }
    /*methodes*/
    volledigeNaam(){
        return this.voornaam + ' ' + this.achternaam;
    }
}
/*child*/
class Student extends Persoon{
    /*eigenschappen*/
    constructor(voornaam,achternaam, studentnummer){
        super(voornaam, achternaam); //hiermee roep je deconstructor op van de parent.
        this.studentnummer = studentnummer;
    }
    /*methodes*/
    toonStudentInfo(){
        return `Student: ${this.volledigeNaam()},Studentnummer: ${this.studentnummer}`;
    }
}
/*programma*/
let v = 'Tom';
let f='Vanhoutte';
let s = 1111;

let student1 = new Student('Benjamin', 'm', 53663);
let student2 = new Student('Ruben');
let student3 = new Student(v,f,s);
console.log(student1.studentnummer);
console.log(student3.voornaam);