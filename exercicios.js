function inverterString(frase){
    const inverso = frase.split("").reverse().join("");

    console.log("O inverso da frase é " + inverso);
}

function contarVogais(frase){
    const fraseMin = frase.toLowerCase("").split("");
    var qtd = 0;

    for(i = 0; i < fraseMin.length; i++){
        if (fraseMin[i] == "a" || fraseMin[i] == "e" || fraseMin[i] == "i" || fraseMin[i] == "o" || fraseMin[i] == "u"){
            qtd += 1; 
        }
    }

    console.log("Quantidade de vogais: " + qtd);
}

function ehPalindromo(frase){
    frase = frase.toLowerCase("");
    const inverso = frase.split("").reverse().join("");

    if (frase == inverso){
        return true;
    } else {
        return false
    }
}