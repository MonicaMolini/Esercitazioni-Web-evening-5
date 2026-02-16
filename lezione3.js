//Gli oggetti
//In un linguaggio orientato agli oggetti come JavaScript, gli oggetti sono una struttura dati fondamentale che consente di rappresentare e organizzare informazioni in modo più complesso rispetto a tipi di dati primitivi come numeri o stringhe. Un oggetto è una collezione di proprietà, dove ogni proprietà è costituita da una chiave (o nome) e un valore associato. I valori possono essere di qualsiasi tipo, inclusi altri oggetti, funzioni (in questo caso prendono il nome di metodo) o array.

let ogg = {
  nome: "Cosimo",
  eta: 31,
};

let persona = {
  nome: "Monica",
  eta: 31,
  oggetto: {
    nome: "Pippo",
  },
  lavoro: "Web Developer",
  saluta: function () {
    //una funzione attribuita come valore ad una proprietà diventa un metodo
    let saluto = "Ciao, mi chiamo " + this.oggetto.nome; //il this si riferisce all'interno dell'oggetto in cui si trova il metodo
    return saluto;
  },
};

//Nota bene: se provassimo ad accedere ad una chiave che non esiste all'interno di un oggetto, otterremmo come risultato undefined. Questo perchè in potenza potremmo accedere a qualsiasi chiave anche se queste non esistono. Questo è un aspetto importante da tenere a mente quando lavoriamo con gli oggetti, perchè potrebbe portare a errori se non stiamo attenti a controllare l'esistenza delle chiavi prima di accedervi.

console.log(persona.pizza); //undefined

let cibi = {
  prodotto1: {
    nome: "Pizza",
    prezzo: 50,
    sconto: 10,
  },
  prodotto2: {
    nome: "hamburger",
  },
};

//Per accedere ai valori di un oggetto possiamo utilizzare la notazione a punto(dot notation):
console.log(persona.nome); // accedere al valore di una chiave in un oggetto

//per invocare un metodo di un oggetto, utilizziamo la notazione a punto seguita da parentesi tonde, all'interno delle quali possiamo passare eventuali argomenti richiesti dal metodo. In questo caso, il metodo saluta non richiede argomenti, quindi basta scrivere le parentesi vuote:
console.log(persona.saluta()); // invocare un metodo di un oggetto

//L'operatore IN
//L'operatore in è un operatore logico che restituisce true se una proprietà specificata esiste in un oggetto, altrimenti restituisce false. È spesso utilizzato per verificare l'esistenza di una chiave prima di accedere al suo valore, evitando così errori di tipo "undefined".

if ("prezzo" in cibi.prodotto2) {
  //particolarmente utile se utilizzato in strumenti di controllo come IF-ELSE
  console.log(cibi.prodotto2.prezzo);
} else {
  console.log("errore la proprità non esiste");
}

console.log("prezzo" in cibi.prodotto2);

//**Restituisce true o false** a seconda che una proprietà esista all'interno di un oggetto o meno

//Il ciclo FOR...IN ci permette di iterare le proprietà all'interno dell'oggetto
for (let b in persona) {
  console.log(`${b}: ${persona[b]}`); //oggetto[chiave] mi permette di intercettare tutti i valori delle proprietà del mio oggetto
}

//output:
//nome: Monica
//eta: 31
//oggetto: [object Object]
//lavoro: Web Developer
//saluta: function () { ... }

//Riferimento variabili VS oggetti
//In javaScript, le variabili che contengono tipi di dati primitivi (come numeri, stringhe, booleani) memorizzano direttamente il valore. Quando assegni una variabile a un'altra, viene creata una copia del valore. Pertanto, modificare una variabile non influenzerà l'altra.

let c = 10;
let c2 = c; //assegnare ad una variabile il valore di un'altra variabile...

c2 = 30; //... e poi andarlo a modificare

console.log(c); //10
console.log(c2); //30
//non modificherà anche il valore della variabile originale

//Se provassimo a fare la stessa cosa con un oggetto, invece di creare una copia del valore, creeremmo un **riferimento** all'oggetto originale. Ciò significa che se modifichiamo una delle variabili che fanno riferimento all'oggetto, modificheremo anche l'oggetto originale e tutte le altre variabili che fanno riferimento a esso.
let persona1 = {
  nome: "Monica",
};
let persona2 = persona1; //diversamente, fare la medesima cosa con due oggetti crea un riferimento diretto per cui...

persona2.nome = "Pippo"; // se modifico il valore della proprietà di uno dei due oggetti...

console.log(persona1.nome); //Pippo
console.log(persona2.nome); //Pippo
//li modificherò entrambi

//Come possiamo quindi duplicare un oggetto o creare un prototipo di essi?

//Il metodo costruttore: due modi per definire i prototipi

// Definizione del Prototipo

//Metodo nuovo: le Classi
//il metodo più moderno per definire un prototipo è quello di utilizzare le classi, introdotte in JavaScript a partire da ES6. Le classi forniscono una sintassi più chiara e concisa per creare oggetti e gestire l'ereditarietà.
class Persona {
  constructor(nome, eta) {
    this.nome = nome; // Proprietà 'nome'
    this.eta = eta; // Proprietà 'eta'
  }
  saluta() {
    console.log(`Ciao, mi chiamo ${this.nome} e ho ${this.eta} anni.`);
  } // I metodi possono essere definiti direttamente all'interno della classe senza utilizzare function
}

//Metodo "vecchio": la funzione costruttore
//questo metodo è più vecchio e meno intuitivo rispetto alle classi, ma è ancora ampiamente utilizzato in JavaScript. Consiste nel definire una funzione che funge da costruttore per creare oggetti con determinate proprietà e metodi.
function PersonaVecchio(nome, eta) {
  //**IN QUESTO CASO VA SCRITTO CON L'INIZIALE MAIUSCOLA**
  this.nome = nome; // Proprietà 'nome'
  this.eta = eta; // Proprietà 'eta'
  this.saluta = function () {
    //Metodo 'saluta'
    console.log(`Ciao, mi chiamo ${this.nome} e ho ${this.eta} anni.`);
  };
}

// Creazione di istanze dell'oggetto
//in entrambi i casi, possiamo creare istanze dell'oggetto utilizzando la parola chiave new seguita dal nome del costruttore o della classe, passando i valori necessari come argomenti. In questo modo, otterremo oggetti con le proprietà e i metodi definiti nel prototipo.

let person1 = new Persona("Cosimo", 31); //**L'ordine in cui gli passo i valori segue quello del prototipo!**
let person2 = new PersonaVecchio("Maria", 25);

// Utilizzo dei metodi
person1.saluta(); //Ciao, mi chiamo Cosimo e ho 31 anni.
person2.saluta(); //Ciao, mi chiamo Maria e ho 25 anni.

//Altri metodi utili degli oggetti(Object) Javascript

const obj = {
  nome: "Cosimo",
  eta: 31,
  professione: "Sviluppatore",
};

//Object.keys()
//mi restituisce un **ARRAY** con tutte le chiavi dell'oggetto passato come argomento. Ad esempio, se abbiamo un oggetto con le chiavi "nome", "eta" e "professione", Object.keys() restituirà un array contenente queste chiavi: ["nome", "eta", "professione"].

console.log(Object.keys(obj));

//Object.values();
//mi restituisce un **ARRAY** con tutti i valori dell'oggetto passato come argomento. Ad esempio, se abbiamo un oggetto con le chiavi "nome", "eta" e "professione" e i rispettivi valori "Cosimo", 31 e "Sviluppatore", Object.values() restituirà un array contenente questi valori: ["Cosimo", 31, "Sviluppatore"].

console.log(Object.values(obj));

//Object.entries()
//mi restituisce un **ARRAY** di coppie chiave-valore di un oggetto. Ogni coppia è rappresentata come un array a due elementi, dove il primo elemento è la chiave e il secondo elemento è il valore corrispondente. Ad esempio, se abbiamo un oggetto con le chiavi "nome", "eta" e "professione" e i rispettivi valori "Cosimo", 31 e "Sviluppatore", Object.entries() restituirà un array contenente queste coppie: [["nome", "Cosimo"], ["eta", 31], ["professione", "Sviluppatore"]].

console.log(Object.entries(obj));
