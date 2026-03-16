/*
  L' ASINCRONICITÀ IN PROGRAMMAZIONE

  COSA SIGNIFICA "ASINCRONO"?
  In JavaScript, il codice viene eseguito in modo "sincrono" per default, cioè riga per riga, una dopo l'altra.
  Tuttavia, alcune operazioni (come il caricamento di dati, timer, richieste HTTP) impiegano tempo.
  Per evitare che il programma si blocchi in attesa, queste operazioni vengono gestite in modo "asincrono".

  L'ESECUZIONE ASINCRONA
  JavaScript delega certe operazioni (es. setTimeout, fetch...) all'ambiente esterno (browser o Node.js),
  che le esegue e poi, quando sono pronte, le "rimette in coda" per essere gestite.

  EVENT LOOP E CALLBACK QUEUE
  Quando un'operazione asincrona è completata, la funzione collegata (callback) viene inserita nella "callback queue".
  L'Event Loop controlla quando la call stack è libera e prende una funzione dalla coda per eseguirla.

  CALLBACK
  Una callback è una funzione passata come argomento ad un’altra funzione, che verrà eseguita al momento giusto.
  È il meccanismo più comune per gestire operazioni asincrone prima dell’introduzione delle Promises e async/await.
 
  CALLBACK HELL
  Quando le callback vengono annidate troppo (es. una dentro l’altra), il codice diventa difficile da leggere e mantenere.
  Questo fenomeno è chiamato "callback hell" o "pyramid of doom".

  SOLUZIONE MODERNA
  Per evitare il callback hell si usano Promise o async/await, che rendono il codice asincrono più lineare e leggibile.
*/

// Simulazione di codice asincrono: setTimeout e setInterval

// setTimeout
// è una funzione di JavaScript che consente di eseguire una funzione dopo un certo intervallo di tempo (in millisecondi).
// Essa non è un vero codice asincrono, ma simula l'asincronicità ritardando l'esecuzione di una funzione.

//La sua sintassi è la seguente:
// setTimeout(funzione, tempoInMillisecondi);  

console.log("Inizio");
function print() {
  console.log("Esecuzione dopo 2 secondi");
}
setTimeout(print, 2000);
//ATTENZIONE: se scriviamo setTimeout(print(), 2000) con le parentesi, la funzione print() viene eseguita immediatamente e il suo risultato (undefined) viene passato a setTimeout, che non farà nulla dopo 2 secondi. Invece, senza le parentesi, stiamo passando la funzione stessa come argomento, e sarà eseguita dopo 2 secondi.

console.log("Fine");

// Output:
// Inizio
// Fine
// Dopo 2 secondi


// setInterval
// è una funzione di JavaScript che consente di eseguire una funzione ripetutamente, con un intervallo di tempo specificato tra ogni esecuzione.
// La sua sintassi è la seguente:
// setInterval(funzione, tempoInMillisecondi);
// Diversamente dai loop tradizionali, che eseguono un blocco di codice un tot di volte o finchè una condizione è vera, setInterval introduce il concetto di tempo ed esegue la funzione ogni tot millisecondi finché non viene fermato con un'altra funzione nativa: clearInterval.

let contatore = 1;

const intervallo = setInterval(() => {
  console.log(`Contatore: ${contatore}`);
  contatore++;

  if (contatore > 200) {
    clearInterval(intervallo); // Ferma il setInterval
  }
}, 1000);

setTimeout(() => {
  clearInterval(intervallo);
}, 2000);

// setInterval(() => {
//   console.log("operazione infinita");
// }, 1000);

// Output:
// Contatore: 1
// Contatore: 2
// Contatore: 3 (poi si ferma)

//Fondamentale non dimenticare di fermare un setInterval quando non è più necessario, altrimenti continuerà a eseguire la funzione indefinitamente, causando potenziali problemi di performance o comportamenti indesiderati.


//Le callback sono un concetto chiave per gestire l'asincronicità in JavaScript. 
//Essenzialmente, una callback è una funzione che viene passata come argomento a un'altra funzione e viene eseguita dopo che un'operazione asincrona è completata.
//Ad esempio, quando usiamo setTimeout, stiamo passando una funzione come callback che verrà eseguita dopo un certo intervallo di tempo. 
//Le callback sono fondamentali per gestire operazioni asincrone come richieste HTTP, eventi del DOM, timer e molto altro.

function saluta(nome, callback) {
  console.log(`Ciao, ${nome}`);
  callback();
}

function fineSaluto() {
  console.log("Saluto completato.");
}

saluta("Monica", fineSaluto);

// Output:
// Ciao, Monica
// Saluto completato.

// Callback Hell: quando il codice asincrono diventa difficile da leggere a causa di molte callback annidate, creando una struttura a piramide.

setTimeout(() => {
  console.log("Operazione 1 completata");

  setTimeout(() => {
    console.log("Operazione 2 completata");

    setTimeout(() => {
      console.log("Operazione 3 completata");

      setTimeout(() => {
        console.log("Operazione 4 completata");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

// Output dopo 4 secondi:
// Operazione 1 completata
// Operazione 2 completata
// Operazione 3 completata
// Operazione 4 completata

// Funzione asincrona riutilizzabile con callback

function operazioneAsincrona(messaggio, tempo, callback) {
  setTimeout(() => {
    console.log(messaggio);
    if (callback) callback();
  }, tempo);
}

operazioneAsincrona("Step 1", 1000, () => {
  operazioneAsincrona("Step 2", 1000, () => {
    operazioneAsincrona("Step 3", 1000);
  });
});

// setTimeout(() => console.log("step 1"), 1000);
// setTimeout(() => console.log("step 2"), 2000);
// setTimeout(() => console.log("step 3"), 3000);

// const stop = setInterval(() => console.log("loop"), 1000);

// setTimeout(() => clearInterval(stop), 5000);

// Output:
// Step 1
// Step 2
// Step 3


// Gestire gli errori con le callback
// quando abbiamo operazioni asincrone che possono fallire, è importante gestire gli errori in modo appropriato.
// Un approccio comune è quello di utilizzare un pattern di callback che accetta un primo argomento per l'errore e un secondo argomento per il risultato.

function dividi(a, b, callback) {
  if (b === 0) {
    return callback(new Error("Divisione per zero!"), null);
  }
  return callback(null, a / b);
}

dividi(10, 2, (errore, risultato) => {
  if (errore) {
    console.error("Errore:", errore.message);
  } else {
    console.log("Risultato:", risultato);
  }
});

// Quando usare le callback:
// - Quando vuoi che una funzione possa eseguire un comportamento flessibile
// - Quando gestisci azioni asincrone (es. timer, richieste API)
// - Quando lavori con eventi o metodi di array

// Best practice:
// 1. Dai nomi significativi alle callback
// 2. Gestisci gli errori nelle callback asincrone
// 3. Se il codice diventa troppo annidato, considera l'uso di Promises o async/await
