// PAROLA PALINDROMA

function palindroma(parola) {

    // Chiedere all’utente di inserire una parola
    parola = prompt("Inserisci una parola");

    // Capire se la parola inserita è palindroma
    // dividere la parola in una array di sue lettere
    let parolaDivisa = parola.split('');

    // invertire l'ordine delle lettere al contrario
    parolaDivisa = parolaDivisa.reverse();
    
    // trasformiamo le lettere invertite in una stringa
    const parolaInvertita = parolaDivisa.join('');

    // creo la condizione
    if(parola === parolaInvertita) {
        console.log("Questa parola è palindroma");
    }else {
        console.log("Questa parola NON è palindroma");
    }
}

