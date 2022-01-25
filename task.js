function showDownload(result) {
    return new Promise(function(resolve, reject) {
        console.log("Download selesai");
        setTimeout(() => {
            resolve("Hasil download: " + result);
        }, 3000);
    })
}

async function main() {
    console.log(await showDownload("windwos-10.exe"));
}

main();