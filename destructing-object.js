const user = {
    name: "Izzy", 
    age: 22, 
    isMarried: false,
    address: "Depok"
}

/*
const name = user.name;
const age  = user.age;
*/

const {name, age, isMarried, address} = user;

console.log(name, age, isMarried, address);