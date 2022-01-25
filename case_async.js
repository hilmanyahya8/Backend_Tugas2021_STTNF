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

/*async function main() {
    const hasilPersiapan = await persiapan();
    console.log(hasilPersiapan);
    
    const hasilRebusAir = await rebusAir    ();
    console.log(hasilRebusAir);
    
    const hasilMasak = await masak();
    console.log(hasilMasak);
}*/

async function main() {
    console.log(await persiapan());
    console.log(await rebusAir());
    console.log(await masak());
}

main();