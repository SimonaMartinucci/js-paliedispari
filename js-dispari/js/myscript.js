// Utente sceglie pari o dispari
let userPrompt = prompt("Inserisci PARI o DISPARI");
// converto in minuscolo le lettere per corrispondere alla stringa di pariDispari
let userChoice = userPrompt.toLowerCase();

// Inserisce un numero da 1 a 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

// Generiamo un numero random da 1 a 5 per il computer
let pcNumber = randomNumber();

// Sommiamo i due numeri 
let somma = sommaDueNumeri(userNumber, pcNumber);

// Stabiliamo se la somma dei due numeri è pari o dispari
let risultato = pariDispari(somma);

// Dichiariamo chi ha vinto
let vincitore = winner(risultato, userChoice);

// stampo in console i risultati
console.log(userChoice, userNumber, pcNumber, somma, risultato, vincitore);