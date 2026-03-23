// Le Promise
// Cos'è? è un oggetto che rappresenta un’operazione asincrona che permette di gestire meglio il codice asincrono rispetto alle callback tradizionali migliorando la leggibilità

// Una Promisepuò trovarsi in tre stati:

// Pending - lo stato iniziale: l'operazione è in corso e non ha ancora un risultato

// Fulfilled - nel caso in cui l'operazione è completata con successo e la Promise ha restituito un valore

// Rejected - quando l'operazione è fallita e la Promise ha restituito l’errore

// Creare una Promise
// Per creare una Promise, utilizziamo il costruttore new Promise, che accetta una arrow function come argomento la quale ha due parametri, resolve e reject, che sono a loro volta funzioni:

// resolve(value): Indica che la Promise è completata con successo e passa il value come risultato.

// reject(): Indica che la Promise è stata rifiutata per qualche motivo: spesso gli viene passato il motivo dell'errore

let getData = new Promise((resolve, reject) => {
  // In questo caso setTimeout ci serve unicamente per simulare il ritardo
  setTimeout(() => {
    let success = false; // una variabile per simulare una casistica di errore
    if (success) {
      resolve("Operazione completata con successo!"); // in caso venga risolta
    } else {
      reject("Errore durante l'operazione.."); // in caso venga rifiutata
    }
  }, 2000);
});

// Una questione di leggibilita: .then(), .catch(), e .finally()
// Come nel try..catch, per gestire i risultati di una Promise, utilizziamo tre metodi principali:

// .then(): al quale passiamo il risultato dell'operazione completata con successo

// .catch(): È usato per gestire gli errori (stato "rejected") di una Promise

// .finally(): È eseguito indipendentemente dal risultato

getData
  .then((result) => {
    //oppure, di solito, viene passato 'data'
    console.log("Successo:", result); // Viene eseguito se la Promise è risolta
  })
  .catch((error) => {
    console.error("Errore:", error); // Viene eseguito se la Promise è rifiutata
  })
  .finally(() => {
    console.log("Operazione conclusa"); // Viene sempre eseguito
  });

// Concatenare Promise
// Uno dei vantaggi principali delle Promise è la possibilità di concatenare più operazioni asincrone senza creare callback annidate

// Supponiamo di avere tre step consequenziali:

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Passo 1 completato");
      resolve("Risultato del passo 1");
    }, 1000);
  });
}

function step2(previousResult) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Passo 2 completato con:", previousResult);
      resolve("Risultato del passo 2");
    }, 1000);
  });
}

function step3(previousResult) {
  return new Promise((resolve, reject) => {
    let contatore = 0;
    setTimeout(() => {
      console.log("Passo 3 completato con:", previousResult);
      resolve("Risultato finale");
    }, 1000);
    let int = setInterval(() => contatore++, 1000);
    if (contatore === 10) {
      clearInterval(int);
      reject("promise non risolta in tempo");
    }
  });
}

// Invocazione della catena di Promise
step1()
  .then((result1) => step2(result1))
  .then((result2) => step3(result2))
  .then((finalResult) => {
    console.log("Tutti i passaggi completati con:", finalResult);
  })
  .catch((error) => {
    console.error("Errore nella catena:", error);
  });

//I metodi delle Promise

// Promise.all
// Esistono altri metodi per gestire più Promise in parallelo

// Promise.all: Aspetta che tutte le Promise siano risolte. Se una delle Promise è rifiutata, Promise.all rifiuta immediatamente tutte.

let promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("risultato1"), 1000),
);
let promise2 = new Promise((resolve) =>
  setTimeout(resolve, 2000, "Risultato 2"),
);
let promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 1500, "Errore 3"),
);

Promise.all([promise1, promise2, promise3]) //in questo caso Promise.all verrà rifiutata a causa dell'errore di promise3, e l’errore verrà gestito nel .catch().
  .then((results) => {
    console.log("Tutti i risultati:", results);
  })
  .catch((error) => {
    console.error("Una delle promesse è fallita:", error);
  });

// Promise.allSettled: Aspetta che tutte le Promise siano risolte o rifiutate. Restituisce **un array di oggetti** che contengono lo stato e il valore o il motivo del rifiuto di **ogni** Promise.

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log("Tutti i risultati (anche quelli rifiutati):", results);
  })
  .catch((error) => {
    console.error("Errore in Promise.allSettled:", error);
  });

// Promise.race: restituisce il risultato della prima Promise risolta o rifiutata. Se una delle Promise è risolta, Promise.race restituisce il suo valore. Se tutte le Promise sono rifiutate, restituisce un errore.

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log("Prima promessa risolta:", result);
  })
  .catch((error) => {
    console.error("Tutte le promesse sono fallite:", error);
  });

// Promise.any: Restituisce la prima Promise risolta o rifiutata. Se una delle Promise è risolta, Promise.any restituisce il suo valore. Se tutte le Promise sono rifiutate, restituisce un errore.

Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log("Prima promessa risolta:", result);
  })
  .catch((error) => {
    console.error("Tutte le promesse sono fallite:", error);
  });

// Async/await

// Un nuovo modo (relativamente recente, 2017) di scrivere codice asicrono...come se fosse sincrono!

// Se le promise rendono il codice più leggibile rispetto alle callback, async/await lo rende ancora più leggibile mantenendo una struttura più simile al codice sincrono

// Quando una funzione è dichiarata con la parola chiave async essa restituisce **sempre** una Promise

const funzioneDaChiamare = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Operazione completata con successo!");
  }, 2000);
});

async function fetchData() {
  try {
    const result = await funzioneDaChiamare;
    // await può essere usato solo all'interno di una funzione dichiarata come async. Await blocca temporaneamente l'esecuzione della funzione fino a quando la Promise non è risolta o rigettata
    console.log(result); // Stampa "Operazione completata con successo!" dopo 2 secondi
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// Quindi..

// async è usato per definire una funzione asincrona. Questa funzione restituisce implicitamente una Promise.

// await mette in pausa l'esecuzione della funzione async e aspetta che la Promise sia risolta o rigettata.

// Più operazioni?
// Se hai bisogno di effettuare più chiamate asincrone, puoi utilizzare await in sequenza, ma evita di utilizzare await su operazioni non necessarie (ad esempio quelle il cui risultato non blocca il codice)

// IMPORTANTE: ricorda sempre di utilizzarlo in combnazione con try... catch per una gestione degli errori efficace
// Infatti, contrariamente al metodo classico delle Promise, Async/await non ha un modo nativo per gestire gli errori, quindi è necessario utilizzare un blocco try...catch per catturare eventuali errori che si verificano durante l'esecuzione della funzione asincrona.
