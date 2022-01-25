/*const P = 10;
const T = 9;
const L = P * T;
const hLP = L;
console.log(hLP);
//console.log(L);

function hitungLuasPersegi(P, T) {
    const L = P * T;
    //console.log(L);
    return(L);
}

console.log(hitungLuasPersegi(9, 9));*/

// Buat Pudding Manis
function buatPudding(gelatin, air, rasa){
    const cupPudding = gelatin + air + rasa;
    if (cupPudding == 300) {
        return("Pudding is nicely served!");
    }
    else {
        return("Try again");
    }
}

function buatFlaPudding(susu, gula) {
    const flaCupPudding = susu + gula;
    return flaCupPudding;
}

console.log(buatPudding(50, 200, 40));
