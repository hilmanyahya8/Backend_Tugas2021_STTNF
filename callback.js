function formatName(name) {
    const result = name.toUpperCase();
    return result;
}

function getName(name, callformatName) {
    const result = callformatName(name);
    console.log(result);
}

getName("aufa", formatName);