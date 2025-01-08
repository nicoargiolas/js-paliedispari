// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let PariODispari = prompt("Scegli tra pari e dispari");
console.log(`Hai scelto ${PariODispari}`);

let nUser = parseInt(prompt("Inserisci un numero tra 1 e 5"));
let nCpu = getRandomArbitrary(1, 5);

console.log(`Hai messo ${nUser}`);
console.log(`Il computer ha messo ${nCpu}`);

if (sommaPariODispari(nUser,nCpu) === PariODispari) {
    alert("Hai vinto!");
} else {
    alert("Hai perso!")
}

// FUNZIONI

    // Funzione per numero randomico
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

    // Funzione per controllare se una somma è pari o dispari
function sommaPariODispari(n1,n2) {
    if ((n1 + n2) % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}