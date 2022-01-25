//import fruits
const fruits = require("./data.js");

const index = () => {
    for(const fruit of fruits) {
        console.log(fruit);
    }
}

const store = (name) => {
    fruits.push(name);
    index();
} 

const update = (idx, name) => {
    fruits[idx] = name;
    index();
}

const destroy = (idx) => {
    fruits.splice([idx], 1);
    index();
}

module.exports = {index, store, update, destroy};
