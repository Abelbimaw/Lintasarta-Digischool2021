const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.")
            } else {
                reject("Maaf, mesin sedang sibuk")
            }
        }, 1000);
    });
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stock cukup. Bisa membuat Kopi.");
            } else {
                reject("Stock tidak cukup");
            }
        }, 3000);
    });
};

const brewCoffee = () => {
    console.log("Membuat kopi anda.....");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah jadi!");
        }, 2000);
    });
};

const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan air.....");
        setTimeout(() => {
            resolve(("Air panas sudah siap!"));
        }, 2000);
    })
}

const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi");
        setTimeout(() => {
            resolve("Biji kopi sudah halus!");
        }, 2000);
    })
}


// function makeEspresso() {
//     checkAvailability()
//         .then((value) => {
//             console.log(value);
//             return checkStock();
//         })
//         .then((value) =>{
//             console.log(value);
//             const promises = [boilerWater(), gridCoffeeBeans()];
//             //return brewCoffee();
//             return Promise.all(promises);
//         })
//         .then((value) =>{
//             console.log(value);
//             return brewCoffee();
//         })
//         .then((value) => {
//             console.log(value);
//             state.isCoffeeMachineBusy= false;
//         })
//         .catch((rejectReason) => {
//             console.log(rejectReason);
//             state.isCoffeeMachineBusy = false;
//         });
// }

async function makeEspresso() {
    try {
        await checkAvailability();
        await checkStock();
        await Promise.all([boilWater(), grindCoffeeBeans()]);
        const coffee = await brewCoffee();
        console.log(coffee);
    } catch (rejectedReason) {
        console.log(rejectedReason);
    }
}
makeEspresso();