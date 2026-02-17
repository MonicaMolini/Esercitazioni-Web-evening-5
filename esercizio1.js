// Scrivi il codice sotto ogni consegna e stampa in console l’output richiesto.

// ESERCIZIO 1

//   Dati i seguenti dati:

let persona = {
  nome: "Luca",
  eta: "24",
  indirizzo: {
    citta: "Palermo",
    provincia: "PA",
    cap: 90100,
    via: "Via Roma 123",
  },
  occupazione: {
    studente: true,
    impiegato: false,
    disoccupato: false,
  },
};

//   OUTPUT in console: "Marco ha 19 anni, vive a Palermo. Attualmente è studente."
//   Accedi correttamente a tutte le proprietà, anche quelle annidate, e usa i dati per costruire la frase.

// ESERCIZIO 2

//  Un prodotto ha un prezzo base e uno sconto.

const prodotto = {
  nome: "Smartphone",
  prezzo: 89.9,
  sconto: 20,
};

//   Calcola il prezzo finale dopo lo sconto e stampalo in console con etichetta chiara.
//   OUTPUT: "Il prezzo finale di Smartphone è: 71.92"

// ESERCIZIO 3

const persona1 = {
  nome: "Alice",
  eta: 30,
};

const persona2 = {
  nome: "Bob",
  eta: 14,
};

//   Date le due persone, crea una funzione 'verificaEta(eta)' che accetti come parametro una età e restituisca un messaggio di autorizzazione o meno se la persona è maggiorenne o minorenne.
//  utilizza questa funzione per verificare l'età di persona1 e persona2, stampando i risultati in console.
// OUTPUT:
// - "Alice è maggiorenne, può accedere al sito."
// - "Bob è minorenne, accesso negato."

// ESERCIZIO 4

//   Un’azienda calcola l’IVA su un preventivo.
//   Crea una funzione `totaleConIVA(imponibile, ivaPercento)` che restituisce il totale.
//   I parametri potrebbero arrivare anche come stringhe numeriche.
//   Testali con i seguenti valori:
//   - imponibile "100", IVA "22"
//   - imponibile 250.5, IVA 10
//   Esegui i controlli necessari per assicurarti che i parametri siano numerici e gestisci eventuali errori.

// ESERCIZIO 5

//   Crea un oggetto `account` con:
//   - username: "admin"
//   - password: "1234"
//   - tentativi: 0
//   Poi crea due variabili `inputUser` e `inputPass` (scegli tu i valori).
//   Se le credenziali sono corrette stampa "Accesso effettuato".
//   Altrimenti incrementa `tentativi` e stampa "Errore. Tentativi: X".
//   Infine stampa sempre lo stato attuale dell’oggetto account.

//   OUTPUT:
//   - Se inputUser è "admin" e inputPass è "1234":
//     "Accesso effettuato"
//    { username: "admin", password: "1234", tentativi: 0 }
//   - Se inputUser o inputPass sono sbagliati:
//    "Errore. Tentativi: 1"
//    { username: "admin", password: "1234", tentativi: 1 }
//   ecc.

// ESERCIZIO 6

//  Simuliamo una partita di calcio.
const partita = {
  squadra1: {
    nome: "Juventus",
    punteggio: 0,
  },
  squadra2: {
    nome: "Inter",
    punteggio: 0,
  },
};
//  Crea una funzione `segnaGol(squadra1, squadra2)` che accetti come parametro gli oggetti squadra e incrementi, con una probabilità del 50% il punteggio di una delle due squadre.
//  Usa un ciclo per lanciare la funzione 3 volte.
// Effettua un controllo su chi ha segnato di più e stampa il risultato finale:
// - "Juventus vince X-Y"
// - "Inter vince X-Y"
// - "Pareggio: Juventus X - Inter Y"

// ESERCIZIO 7

//   Un contatore stampa una sequenza da 1 a 25.
//   Per ogni numero:
//   - se è multiplo di 4 stampa "POP"
//   - se è multiplo di 6 stampa "BANG"
//   - se è multiplo di 4 e 6 stampa "POPBANG"
//   - altrimenti stampa il numero

// ESERCIZIO 8

//  Dato il seguente oggetto

const carrello = {
  prodotto1: {
    nome: "Laptop",
    prezzo: 999.99,
  },
  prodotto2: {
    nome: "Smartphone",
    prezzo: 499.99,
  },
  prodotto3: {
    nome: "Tablet",
    prezzo: 299.99,
  },
};

// - Calcola il totale da pagare sommando i prezzi dei prodotti e stampalo in console con etichetta chiara.
// - Applica uno sconto del 15% al totale e stampa il nuovo importo da pagare.

// ESERCIZIO 9

//   Un dado “truccato” decide l’esito di un’azione con queste probabilità:
//   - 60%: "Successo"
//   - 30%: "Fallimento"
//   - 10%: "Critico"
//   Crea una funzione `lanciaDado()` che restituisce uno dei tre risultati in base alle probabilità.

// ESERCIZIO 10

// Dato il seguente oggetto:
const menu = {
  lunedi: {
    primo: "Pasta al pomodoro",
    secondo: "Pollo alla griglia",
    contorno: "Insalata",
  },
  martedi: {
    primo: "Risotto ai funghi",
    secondo: "Salmone al forno",
    contorno: "Verdure grigliate",
  },
  mercoledi: {
    primo: "Lasagne",
    secondo: "Hamburger",
    contorno: "Patatine fritte",
  },
  giovedi: {
    primo: "Gnocchi al pesto",
    secondo: "Scaloppine al limone",
    contorno: "Spinaci saltati",
  },
  venerdi: "chiuso",
  sabato: {
    primo: "Pizza Margherita",
    secondo: "Calzone",
    contorno: "Mozzarella in carrozza",
  },
  domenica: {
    primo: "Tortellini in brodo",
    secondo: "Arrosto di vitello",
    contorno: "Purè di patate",
  },
};

//  -Crea una funzione `stampaMenu(giorno)` che accetti come parametro un giorno della settimana e resituisca il menu corrispondente in una stringa.
//  -Se il giorno è "venerdi", restituisce "Il ristorante è chiuso".
//  -Se il giorno non è valido, restituisce "Giorno non valido".
//  -Testa la funzione con diversi giorni della settimana e stampa i risultati in console.
