const fs = require('fs');

const tamanho = process.argv[2];

fs.writeFileSync("input.txt", tamanho, function() {});
fs.appendFileSync("input.txt", "\n", function() {});
for (var i = 0; i < tamanho; i++) {
    fs.appendFileSync("input.txt", random(tamanho, i), function() {});
    fs.appendFileSync("input.txt", "\n", function() {});
}

function random(qtd, linha) {
    var ret = "";
    for (var i = 0; i < qtd; i++) {
        if (i != linha) {
            min = Math.ceil(-21);
            max = Math.floor(19);
            ret += Math.floor(Math.random() * (max - min + 1)) + min + 1;
            ret += " ";
        } else {
            ret += "0 ";
        }
    }

    min = Math.ceil(-100);
    max = Math.floor(100);
    ret += Math.floor(Math.random() * (max - min + 1)) + min;
    ret += " ";

    return ret;
}
