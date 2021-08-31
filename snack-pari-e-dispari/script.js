// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all utente di scegliere tra pari e dispari
var pariOdispari = prompt("Scegli pari o dispari");


// chiedo all'utente di scegliere un numero da 1 a 5
var numeroUtente = parseInt(prompt ("Scegli un numero da 1 a 5"));

// faccio generare un numero random da 1 a 5 al computer con una funzione
function numeroComputerCasuale(min, max) {
    var num = Math.round(Math.random() * 5) + 1;
    return num;
}

var numeroCasuale = numeroComputerCasuale(1, 5);

alert("Ehi umano io scelgo il numero" + " " + numeroCasuale);

// Sommo i due numeri (utente e computer)
var somma = numeroUtente + numeroCasuale;

// creo funzione per stabilire se la somma dei due numeri è pari o dispari
function verificaSommaPariDispari (somma) {
    if (somma%2 == 0) {
        return ("pari");
    } else {
        return ("dispari");
    }
}

// creo una variabile di controllo per il vincitore
var checkVincitore = verificaSommaPariDispari(somma);

// dichiaro chi ha vinto
if (checkVincitore == pariOdispari) {
    alert("La somma dei vostri numeri è" + " " + somma + "." + " " + "Hai vinto tu utente. Dato che la tua scelta era" + " " + pariOdispari);
} else {
    alert ("La somma dei vostri numeri è" + " " + somma + "." + " " + "Ha vinto il PC dato che la sua scelta era" + " " + pariOdispari);
}