// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Dichiararzione variabile e log del risultato
let parola = prompt("Inserisci una parola");
alert(palindroma(parola));

// FUNZIONE
function palindroma(p) {
    // Reverso la parola
    let pReverse = "";

    for (i = p.length - 1; i>=0; i--) {
        pReverse = pReverse + p[i];
    }

    console.log(pReverse);
    

    // Controllo se è uguale all'input
    if (p === pReverse) {
        return "La parola è palindroma"
    } else {
        return "La parola non è palindroma"
    }
}