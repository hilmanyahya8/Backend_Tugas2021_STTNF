//Function Declaration
/*
function hitungLuasLingkaran(JariJari) {
    const PHI = 3.14;
    const luas = PHI * JariJari * JariJari;
    
    return luas;
}


//Function Expression
const hitungLuasLingkaran = function(JariJari) {
    const PHI = 3.14;
    const luas = PHI * JariJari * JariJari;
    
    return luas;
}

//Function Arrow
const hitungLuasLingkaran = (JariJari) => 3.14 * JariJari * JariJari;
*/

const hitungLuasLingkaran = (JariJari) => {
    const PHI = 3.14;
    const luas = PHI * JariJari * JariJari;
    
    return luas;
}

console.log(hitungLuasLingkaran(5));
console.log(hitungLuasLingkaran(6));