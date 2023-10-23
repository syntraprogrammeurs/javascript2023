// function functionScoped(test){
//     if(test){
//         var naam = 'Tom';
//     }
//     console.log(naam);
// }
//
// functionScoped(true);
//
// function functionScoped(test){
//     if(test){
//         let naam = 'Tom';
//         console.log(naam);
//     }
//
// }
//
// functionScoped(true);
//
// schrijfwijze
// function som(parameter1, parameter2,...){
//     //code schrijven
//     let som =parameter1 + parameter2;
//     return som;
//
// }
/*programma*/
// var x = som(5,6);
// function foo(){
//     var tekst = "hallo";
//     console.log(tekst);
// }
// console.log(tekst);

// function foo(){
//     var tekst = "hallo";
//     function bar(){
//         var tekst2 = "world";
//         console.log(tekst);
//         console.log(tekst2);
//     }
//     console.log(tekst);
//     console.log(tekst2);
// }
// console.log(tekst);
// console.log(tekst2);

//named function

// var som = function sum(a,b){return a+b};
// //anonymous function
// var som = function(a,b){return a+b};

// var som = function sum(a,b){
//     return a+b;
// }
// sum(1,3);

// function berekenLeeftijd(geboorteJaar){
//     return new Date().getFullYear() - geboorteJaar;
// }
// /*programma*/
// let huidigJaar = new Date().getFullYear();
// let geboorteJaar = prompt('Geef uw geboortejaar in: YYYY');
// let leeftijd = berekenLeeftijd(geboorteJaar);
//
// if(leeftijd >=0){
//     // console.log('Het aantal jaren tussen',huidigJaar,'en', geboorteJaar, 'is', leeftijd);
//     console.log(`Het aantal jaren tussen ${huidigJaar} en ${geboorteJaar} is ${leeftijd}`);
// }else{
//     console.log('Het resultaat kan niet negatief zijn');
// }

// /*arrow function es6*/
// const arrayGetallen = [1000,2000,3000,4000];
//
// //es5
// var verschil = arrayGetallen.map(function(el){
//     return 5000-el;
// });
// document.write(verschil + '<br>');
//
// //es6
// let verschil2 = arrayGetallen.map(el=>5000-el);
// document.write(`${verschil2}<br>`);

//es5
const mijnClass = document.querySelectorAll('.resultaat');
const mijnId = document.querySelectorAll('#test');

var mijnArray = Array.prototype.slice.call(mijnClass);
//console.log(mijnArray); //style
mijnArray.forEach(function(el){
    el.style.color = 'red';
});

//es6
Array.from(mijnId).forEach(el => el.style.color='green');
