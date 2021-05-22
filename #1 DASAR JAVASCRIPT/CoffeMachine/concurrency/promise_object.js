const executorFunction= (resolve, reject) =>{
    const isCoffeMakerReady = true;
    if (isCoffeMakerReady){
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin Kopi tidak bisa digunakan");
    }
}

const makeCoffe = () => {
    return new Promise(executorFunction);
}

const infoKopi = makeCoffe();
console.log(infoKopi);