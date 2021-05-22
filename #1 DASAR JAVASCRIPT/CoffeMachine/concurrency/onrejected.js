const stock = {
    coffeBeans: 21,
    water: 260,
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if(stock.coffeBeans >= 16 && stock.water >= 250){
            resolve("Stock cukup. Bisa membuat kopi");
        } else {
            reject("Stock tidak cukup");
        }
    });
};

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
 
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkStock().then(handleSuccess, handleFailure);

checkStock()
    .then(handleSuccess)
    .then(null, handleFailure);

// checkStock()
//     .then(handleSuccess)
//     .catch(handleFailure);