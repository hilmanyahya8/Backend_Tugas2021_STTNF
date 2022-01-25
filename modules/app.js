//Import method index dan store
//tanpa extrak 
/*
const hasilImport = require("./fruitController.js");

hasilImport.index();
hasilImport.store("Anggur ");
*/

const {index, store, update, destroy} = require("./FruitController.js");

const main = () => {
    index();
    store("Anggur");
    update(2, "Delima");
    destroy(1);
}

main(); 
