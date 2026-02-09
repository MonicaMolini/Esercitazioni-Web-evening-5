//Javascript è un linguaggio di programmazione che ci permette di creare interattività e dinamismo nelle pagine web. In questa lezione, esploreremo i concetti fondamentali di JavaScript, tra cui le variabili, i tipi di dati, le operazioni e gli operatori di confronto.

//Esso è un linguaggio basato su oggetti , dinamico e interpretato, che viene eseguito principalmente nei browser web, ma può essere utilizzato anche lato server con l'aiuto di ambienti come Node.js. JavaScript è un linguaggio versatile che consente agli sviluppatori di creare una vasta gamma di applicazioni, dalle semplici interazioni con l'utente alle complesse applicazioni web.

//Un linguaggio basato su oggetti significa che tutto in JavaScript è un oggetto, o può essere trattato come tale. Gli oggetti sono strutture dati che contengono proprietà e metodi, e possono rappresentare qualsiasi cosa, dalle persone agli elementi della pagina web. Ad esempio, un oggetto "persona" potrebbe avere proprietà come "nome" e "età", e metodi come "saluta()".

//Da non confondere con **Java**, che è un linguaggio di programmazione completamente diverso, nonostante il nome simile. JavaScript è stato creato per essere eseguito nei browser web e per manipolare il contenuto delle pagine web, mentre Java è un linguaggio di programmazione general-purpose utilizzato per una vasta gamma di applicazioni, tra cui lo sviluppo di software, applicazioni mobili e giochi.

//Durante la maggior parte del modulo, utilizzeremo console.log() per stampare i risultati in console(terminale), in questo modo potremo vedere l'output delle nostre operazioni e comprendere meglio il funzionamento del codice. La console è uno strumento molto utile per il debug e l'apprendimento, poiché ci permette di vedere i risultati delle nostre operazioni in tempo reale e di identificare eventuali errori nel nostro codice. Tuttavia è bene precisare che esso è solo un modo di simulare l'output del nostro codice, in un ambiente reale, come una pagina web, potremmo utilizzare altri metodi per visualizzare i risultati direttamente sulla pagina.

//Le variabili sono dei contenitori che ci permettono di memorizzare dei dati, possono essere di diversi tipi e hanno delle regole specifiche per la loro dichiarazione e utilizzo. In JavaScript, esistono tre parole chiave principali per dichiarare le variabili: var, let e const. Ognuna di queste ha caratteristiche uniche che influenzano il comportamento della variabile.

//Lessico base
//Dichiarazione: è il processo di creare una variabile e darle un nome. Ad esempio, `var colore;` è una dichiarazione di variabile.
//Assegnazione: è il processo di assegnare un valore a una variabile. Ad esempio, `colore = "rosso";` è un'assegnazione di valore alla variabile `colore`.
//Riassegnazione: è il processo di assegnare un nuovo valore a una variabile già dichiarata. Ad esempio, `colore = "blu";` è una riassegnazione del valore alla variabile `colore`.
//Scope: si riferisce alla visibilità e alla durata di una variabile. Le variabili dichiarate con `var` hanno uno scope globale o di funzione, mentre quelle dichiarate con `let` e `const` hanno uno scope di blocco.
//Hoisting: è un comportamento in JavaScript in cui le dichiarazioni di variabili e funzioni vengono spostate in cima al loro contesto di esecuzione prima che il codice venga eseguito. Le variabili dichiarate con `var` sono soggette a hoisting, mentre quelle dichiarate con `let` e `const` no.

// Tipi di variabile

//VAR
var colore; //dischiarazione
colore = "rosso"; //assegnazione
console.log(colore);
var colore = "rosso"; //dichiarazione e assegnazione assieme
var colore = "blu"; // è possibile riassegnare il valore, sono accessibili globalmente e richiamate dopo l'assegnazione daranno semplicemente undefined
console.log(colore);


// LET
let nome = "Mario";
function somma() {
  let nome = "Giovanni";
  console.log(nome); // Giovanni
}
console.log(nome); //Mario

// let nome = "Giovanni" **non posso farlo**
nome = "Luigi"; // è possibile riassegnare il valore, sono accessibili nello stesso blocco e solo dopo l'assegnazione

//CONST
const numero = 3.14; // ctrl + ù per commentare rapidamente
// const numero non è possibile
// numero = 5  non è possibile
// numero = 3.15; // Questo darà un errore dal  momento che non posso riassegnare il valore


//RECAP

/* 

Ridichiarazione 
 var si | let no | const no

Riassegnazione
var si | let si | const no

Scope
var globale | let blocco | const blocco

Hoisting
var si | let no | const no 

*/

//Tipi di dato 
//Ad ogni variabile è associato un tipo di dato, che indica la natura del valore che essa può contenere. I tipi di dati in JavaScript possono essere suddivisi in due categorie principali: tipi primitivi e tipi di oggetto. I tipi primitivi rappresentano valori semplici e immutabili, mentre i tipi di oggetto rappresentano strutture dati più complesse che possono contenere proprietà e metodi.

//Primitivi

//Numeri
let tipoNumero = 56;

//Stringhe
let tipoStringa = "Mario ? 780 l'oracolo";

//Booleani
let tipoBooleanTrue = true;
let tipoBooleanFalse = false;

//Undefined
let c; //undefined è una variabile che è stata dichiarata ma non ha ancora un valore

//Null

let i = null; // null è l'assenza intenzionale di qualsiasi valore


//Conversione tra i Tipi
//Delle volte può essere necessario convertire un valore da un tipo di dato a un altro. JavaScript fornisce diverse funzioni per eseguire queste conversioni, come String(), Number() e Boolean().

let num = 1;
let numToStr = String(num); // mi restituisce una stringa "1"

let str = "23";
let strToNum = Number(str); // mi restituisce un numero 23

let t = Boolean(1); // mi restituisce un booleano true
let f = Boolean(0); // mi restituisce un booleano false

let sumByType = "5" + 1; // restituisce una stringa "51"
let operationByType = "5" - 1; // restituisce un numero 4

//Operatori di Confronto
//Spesso è necessario confrontare due valori per verificare se sono uguali, diversi, maggiori o minori. JavaScript fornisce una serie di operatori di confronto che ci permettono di fare queste verifiche. Gli operatori di confronto restituiscono sempre un **valore booleano** (true o false) in base al risultato del confronto.

// UGUAGLIANZA
5 == "5"; // UGUAGLIANZA: restituisce true perchè esegue automaticamente la traduzione a numero e quindi hanno lo stesso valore

// UGUAGLIANZA STRETTA
5 === "5"; // restituisce false perchè i tipi sono diversi

//DISUGUAGLIANZA
5 != "5"; // restituisce false perchè esegue automaticamente la traduzione a numero e quindi non hanno lo stesso valore

//DISUGUAGLIANZA STRETTA
5 !== "5"; // restituisce true perchè i tipi sono diversi

10 > 5; //MAGGIORE ; Restituisce true
10 >= 10; //MAGGIORE UGUAlE ; Restituisce true
5 < 10; //MINORE ; Restituisce true
5 <= 4; //MINORE UGUALE ; Restituisce false

//Stampare in Console

console.log(2 + 5); //stampa 7
console.log(str); //stampa il valore della variabile str, se esiste
console.log("Ciao, sono " + tipoStringa); //stampa la stringa Ciao, sono Mario **Attenzione agli spazi!!**

// Gli operatori logici
// Gli operatori logici ci permettono di combinare più condizioni per creare espressioni più complesse. I principali operatori logici in JavaScript sono AND (&&), OR (||) e NOT (!).

//Operatore AND
let a = true;
let b = false;
//L'operatore logico AND restituisce true solo se entrambe le espressioni sono vere

console.log(a && b); // false, perché b è false
console.log(a && true); // true, entrambi sono true

//Operatore OR
let x = true;
let y = false;

//L'operatore logico OR restituisce true se almeno una delle due espressioni è vera.

console.log(x || y); // true, perché almeno uno è true
console.log(false || y); // false, entrambi sono false

//Operatore NOT
let z = true;
//L'operatore logico NOT inverte il valore di un'espressione

console.log(!z); // false, inverte il valore di z

// Il Costrutto if-else
//In programmazione, spesso è necessario eseguire determinate operazioni solo se una certa condizione è soddisfatta. Per gestire queste situazioni, JavaScript fornisce il costrutto if-else, che ci permette di eseguire blocchi di codice in base al risultato di una condizione.

// if(condizione){
//    argomento
//  }

//Il costrutto if controlla una condizione e se è true esegue il blocco di codice inserito nell'argomento. Diversamente, se la condizione è false, il blocco di codice all'interno dell'if viene saltato e l'esecuzione continua con il codice successivo.

let eta = 20;
if (eta >= 18 && eta <= 30) {
  console.log("Sei maggiorenne");
}

console.log("sei minorenne");
//Stamperà la stringa in console sole se la condizione è vera

//if-else
//Possiamo eseguire determinate operazioni se la condizione data non è true, inserendole nell'argomento dell'else

eta = 16;
if (eta >= 18) {
  console.log("Sei maggiorenne");
} else {
  console.log("Sei minorenne"); //verrà eseguita questa perchè la condizione data è false
}

//Possiamo anche concatenare condizioni diverse

let voto = 85;
if (voto >= 90) {
  console.log("Ottimo");
} else if (voto >= 70) {
  console.log("Buono");
} else {
  console.log("Insufficiente");
}

// Nidificazione

//Possiamo anchi nidificare un'if dentro un'altra if per gestire operazioni più complesse
eta = 22;
let isStudente = 30;

if (eta >= 18) {
  if (isStudente) {
    console.log("Sconto per studenti");
  } else {
    console.log("Nessuno sconto");
  }
}

//Prima verrà verificata la condizione del primo if, quello più esterno, se è true entreremo nell'argomento e verrà verificato il secondo if
