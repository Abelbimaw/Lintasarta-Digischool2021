//--------------------multiple export---------------- 
// const coffeStock= {
//     arabica:100,
//     robusta:150,
//     liberca:200
// };


//const isCoffeeMachineReady = true;

//module.exports = {coffeStock, isCoffeeMachineReady};
//module.exports = isCoffeeMachineReady;
//console.log(module);

//-----------------ES6 MODULE-------------------
const coffeStock= {
    arabica:100,
    robusta:150,
    liberca:200
};

const isCoffeeMachineReady = true;
export {coffeStock, isCoffeeMachineReady};

