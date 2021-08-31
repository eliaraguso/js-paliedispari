// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 
// Creare una funzione per capire se la parola inserita è palindroma




// // Chiedo all'utente di inserire una parola
// var parolaUtente = prompt("Inserisci una parola");

// // creo una variabile che sia uguale ad un array composto 
// // dai singoli caratteri di cui è composta la parola 

// var parolaDivisa = parolaUtente.split("");
// console.log(parolaDivisa);


// // inverto l'array appena creato
// var parolaDivisa = parolaDivisa.reverse("");
// console.log(parolaDivisa);

// // riunisco le lettere dell'array appena creato per creare una variabile che sia uguale
// // alla parola inserita dall'utente ma con le lettere invertite
// var parolaInvertita = parolaDivisa.join("");
// console.log(parolaInvertita);

// // creo la condizione che verifica se la parola inserita è palindroma o no

// if(parolaUtente == parolaInvertita){
//     alert("la parola è palindroma");
// } else {
//     alert("la parola non è palindroma");
// }

// ---------------------------------------------------------------------------------------------------------------------


// Chiedo all'utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola");
// creo una funzione che verifichi se la parola è palindroma o no
function verificaPalindroma(parola) {
    var parolaDivisa = parola.split("");
    var parolaDivisa = parolaDivisa.reverse("");
    var parolaInvertita = parolaDivisa.join("");
    if(parola == parolaInvertita){
        alert("la parola è palindroma");
    } else {
        alert("la parola non è palindroma");
    }  
}

// applico la funzione
verificaPalindroma(parolaUtente);