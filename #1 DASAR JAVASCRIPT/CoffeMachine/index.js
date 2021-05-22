// console.log("Menyalakan mesin kopi");
// console.log("Memasukkan biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi anda sudah siap");

//cara Import
// const {coffeStock, isCoffeeMachineReady} = require('./state');

// // const makeCoffee = (type, miligrams) => {
// //     if (coffeStock[type] >= miligrams) {
// //         console.log("Kopi berhasil dibuat!");
// //     } else {
// //         console.log("Biji kopi habis!");
// //     }
// // }
 
// // makeCoffee("robusta", 80);
// console.log(coffeStock);
// console.log(isCoffeeMachineReady);


//-----------------ES6 MODULE-------------------
// import {coffeStock as stock, isCoffeeMachineReady}  from './state.js';

// // const displayStock = stock => {
// //     for (const type in stock) {
// //         console.log(type);
// //         console.log(isCoffeeMachineReady);
// //     }
// // }

// // displayStock(coffeStock);
// console.log(stock);
// console.log(isCoffeeMachineReady);

//---------------------Using Package------------------
//import variablename from 'package-name';
import _ from 'lodash';
//normal
// const myArray = [1, 2, 3, 4];
// let sum = 0;
 
// for(let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
// }

//Function reduce
// const myArray = [1,2,3,4];
// let sum = myArray.reduce((prev, curr) =>{
//     return prev + curr;
// });

//Meringkas
const myArray = [1,2,3,4];
const sum =  _.sum(myArray);
console.log(sum);