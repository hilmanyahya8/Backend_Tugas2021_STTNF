function persiapan() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("Persiapan ...");
        }, 3000);
    })
}

function rebusAir() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("Rebus air ...");
        }, 7000);
    })
}

function masak() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve("Masak ...");
        }, 5000);
    })
}

function main() {
    persiapan()
        .then(function(result){
            console.log(result);
            return rebusAir();
        })
        .then(function(result){
            console.log(result);
            return masak();
        })
        .then(function(result){
            console.log(result);
        })
        .catch(function(err) {
            console.log("err");
        });
}

main();