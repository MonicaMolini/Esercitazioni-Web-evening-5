//Operatore Ternario
//l'operatore ternario è, banalmente, un costrutto if-else sintetico: è un costrutto che permette di eseguire un'operazione in base a una condizione, restituendo un valore se la condizione è vera e un altro valore se la condizione è falsa. La sintassi dell'operatore ternario è la seguente:

//condizione ? argomento1 : argomento2;

let eta = 20;
let stato = eta >= 18 ? "Maggiorenne" : eta < 10 ? "Bambino" : "Minorenne";
console.log(stato); // "Maggiorenne"

//Diversamente, con il costrutto if-else, avremmo scritto:

// let stato;
// if(eta >= 18){
//     stato = "maggiorenne"
// } else if(eta < 10) {
//     stato = "Bambino"
// } else {
// stato= "Minorenne"}

// Il Costrutto switch
//spesso ci capita di dover esegure un'operazione diversa in base al valore di una variabile, e se le condizioni da verificare sono molte, l'utilizzo di un costrutto if-else può diventare poco leggibile e difficile da gestire. In questi casi, il costrutto switch può essere una soluzione più elegante e chiara.
//La sintassi del costrutto switch è la seguente:

// switch (espressione) {
//     case valore1:
//       // Codice da eseguire se l'espressione è uguale a valore1
//       break;
//     case valore2:
//       // Codice da eseguire se l'espressione è uguale a valore2
//       break;
//     default:
//       // Codice da eseguire se nessuno dei casi corrisponde
//   }

let giorno = 3;

switch (giorno) {
  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default:
    console.log("Giorno non valido");
}

//L'opzione default viene eseguita se nessuno dei casi corrisponde al valore dell'espressione. In questo esempio, se giorno fosse uguale a 8, verrebbe stampato "Giorno non valido".

//**Attenzione:** Se non utilizziamo il break, l'esecuzione del switch continua anche nei casi successivi.

// I Cicli (Loop)
//In programmazione, spesso è necessario eseguire un blocco di codice più e più volte, e per farlo possiamo utilizzare i cicli (o loop). I principali tipi di cicli in JavaScript sono for, while, do...while e for...in/for...of. I cicli ci permettono di iterare su una serie di valori o di eseguire un blocco di codice finché una certa condizione è soddisfatta.

//Ciclo for
//Il ciclo for è uno dei tipi di cicli più comuni in JavaScript, e la sua sintassi è la seguente:

// for (inizializzazione; condizione; incremento) {
//     Blocco di codice da eseguire
//   }

// inizializzazione: viene eseguita una volta all'inizio del ciclo
// condizione: la condizione viene valutata prima di ogni iterazione. Se è true il ciclo continua, mentre se è false il ciclo termina
// incremento: viene eseguito dopo ogni iterazione per aggiornare la variabile

for (let i = 0; i < 5; i++) {
  console.log("Iterazione " + i);
}

//BREAK
//inserire la parola chiave break all'interno di un ciclo permette di interrompere l'esecuzione del ciclo stesso, anche se la condizione è ancora vera. Questo può essere utile quando vogliamo uscire da un ciclo in modo anticipato, ad esempio quando abbiamo trovato ciò che stavamo cercando o quando si verifica una certa condizione.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("ciclo terminato");
    break; // Interrompe il ciclo quando i è uguale a 5
  }
  console.log(i);
}

//CONTINUE
//la parola chiave continue, invece, permette di saltare l'iterazione corrente del ciclo e passare direttamente alla successiva. Questo può essere utile quando vogliamo ignorare determinate condizioni o quando vogliamo eseguire solo alcune iterazioni del ciclo.
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Salta il resto del codice quando i è uguale a 2
  }
  console.log(i);
}

//Ciclo while
//Il ciclo while invece continua a eseguire un blocco di codice finché una certa condizione è vera. La sintassi del ciclo while è la seguente:

// while (condizione) {
//     Blocco di codice da eseguire
//   }

let w = 0;
while (w < 5) {
  console.log("Iterazione " + w);
  w++;
}
//Il ciclo continua fino a quando w diventa uguale o maggiore di 5

//Ciclo do...while
//similmente al ciclo while il ciclo do...while continua a eseguire un blocco di codice finché una certa condizione è vera, ma con una differenza fondamentale: il blocco di codice viene eseguito **almeno una volta**, perché la condizione viene controllata dopo l'esecuzione del codice. La sintassi del ciclo do...while è la seguente:

// do {
//     Blocco di codice da eseguire
//   } while (condizione);

let d = 0;
do {
  console.log("Iterazione " + d);
  d++;
} while (d < 5);

//ESEMPI

let numero = 5;
let somma = 0;

//Ciclo for per calcolare la somma dei numeri da 1 al numero inserito
for (let i = 1; i <= numero; i++) {
  somma += i; // += serve per aggiornare il valore di una variabile aggiungendole un nuovo valore: vs abbreviata di somma = somma - i
}
// somma = somma + i
// somma = 0 + 1 → somma = 1
// somma = 1 + 2 → somma = 3
// somma = 3 + 3 → somma = 6
// somma = 6 + 4 → somma = 10
// somma = 10 + 5 → somma = 15

console.log("La somma dei numeri da 1 a " + numero + " è: " + somma);

//Attenzione a non innescare cicli infiniti, ovvero cicli che non terminano mai perché la condizione è e rimarrà sempre vera. Ad esempio:

// for(let i = 1; i <= numero; i++){
//     numero = numero + i
//     console.log(numero)
// }

numero = 0;

while (numero % 2 === 0) {
  console.log("Il doppio di " + numero + " è " + numero * 2);
  numero = numero + 2;

  if (numero === 22) {
    break; // Interrompe il ciclo
  }
}

console.log("Numero 20 raggiunto. Programma terminato.");

//Le Funzioni
//Le funzioni sono blocchi di codice che possono essere riutilizzati più volte all'interno di un programma. Le funzioni ci permettono di organizzare il nostro codice in modo più modulare e di evitare la ripetizione di codice simile. In JavaScript, possiamo definire le funzioni in diversi modi, ma la sintassi più comune è la seguente:

//Dichiarazione

// function nomeFunzione(parametro1, parametro2, ...) {
//     Blocco di codice da eseguire (argomento)
//     return risultato;
//   }

function somma(a, b) {
  return a + b;
}

//ATTENZIONE: il nome dato ai parametri è facoltativo e non implica alcun collegamento diretto con quelli che verranno poi passati alla funzione.
//Sono, praticamente, dei placeholders e servono unicamente per far interagire dati esterni all'interno della funzione.

// Invocazione
//linvocazione di una funzione consiste nel chiamare la funzione per eseguire il blocco di codice al suo interno (ovvero l'atto pratico di utilizzarla). Per invocare una funzione, basta scrivere il nome della funzione seguito da parentesi tonde, all'interno delle quali possiamo passare i valori dei parametri, se la funzione ne prevede.
let x = 3;
let y = 5;

somma("stringa1", "stringa 2");

let risultato = somma(x, y);
console.log(risultato); // 8
let sum = somma(7, 2);

//Modi alternativi per definire funzioni

//Funzione anonima che viene assegnata a una variabile
//In questo caso, la funzione non ha un nome e viene assegnata a una variabile, che può essere utilizzata per invocare la funzione. La sintassi è la seguente:

// let nomeVariabile = function(parametro1, parametro2, ...) {
//     Blocco di codice da eseguire (argomento)
//     return risultato;
//   }

let moltiplica = function (x, y) {
  return x * y;
};

console.log(moltiplica(4, 5));

//DIFFERENZA: Le funzioni anonime NON possono essere utilizzate prima della loro dichiarazione, a differenza di quelle dichiarate con function

//Arrow Functions
//Le arrow functions sono una sintassi più concisa per definire funzioni in JavaScript. La sintassi è la seguente:

// let nomeVariabile = (parametro1, parametro2, ...) => {
//     Blocco di codice da eseguire (argomento)
//     return risultato;
//   }

let sommatoria = (z, f) => z + f;

console.log(sommatoria(3, 87));

//uguale a

function sommare(x, y) {
  return x + y;
}

//IMPORTANTE: Se la funzione ha solo un'istruzione si può omettere le parentesi graffe e return. Se la funzione ha un solo parametro si può omettere le parentesi attorno al parametro.

//Altri strumenti utili: Math e Date

//MATH
//Math è un oggetto incorporato in JavaScript che fornisce una serie di metodi e proprietà per eseguire operazioni matematiche.

// Genera un numero casuale tra 1 e 100
let numeroCasuale = Math.floor(Math.random() * 100) + 1;
Math.floor();
Math.random();

//Math.floor arrotonda -verso il basso- il numero ad intero , Math.random genera un numero casuale tra 0 e 100, poi viene sommato 1 per farlo partire da 1.

//Questi due strumenti sono utili quando vogliamo simulare un calcolo di probabilità. Ad esempio:

if (numeroCasuale <= 50) {
  console.log("Complimenti! Hai vinto la lotteria!");
} else {
  console.log("Peccato! Non hai vinto. Riprova!");
}
//Probabilità del 50%

//DATE
//sarebbe impossibile in programmazione intercettare un momento esatto manualmente, il tempo materiale di scriverlo e sarebbe già cambiato! ecco perché esiste l'oggetto Date, che ci permette di lavorare con date e orari in JavaScript. L'oggetto Date fornisce una serie di metodi per creare, manipolare e formattare date e orari.

let data = new Date(); //Il costruttore Date() senza argomenti restituisce la data e l'ora correnti

// Attenzione il formato di data restituito da Date() è ISO, ovvero un formato standardizzato che rappresenta la data e l'ora in un formato leggibile e facilmente interpretabile. Il formato ISO è composto da una stringa che segue la struttura "YYYY-MM-DDTHH:mm:ss.sssZ".
//se volessimo un formato più leggibile, possiamo utilizzare il metodo toLocaleString(), che restituisce una stringa rappresentante la data e l'ora in un formato più comprensibile per l'utente, basato sulle impostazioni locali del sistema.

let datalocale = data.toLocaleString();

console.log(data);
console.log(datalocale);
