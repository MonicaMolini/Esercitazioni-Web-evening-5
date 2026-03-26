//Esercizi sul mondo asincrono

// Vi ricordo che i seguenti esercizi non sono in alcun modo obbligatori ma MOLTO consigliati.
// La pratica è la vostra migliore alleata durante il vostro percorso!

//Esercizio 1

const utenti = [
  { id: 1, nome: "Luca", attivo: true },
  { id: 2, nome: "Sara", attivo: false },
  { id: 3, nome: "Mina", attivo: true },
  { id: 4, nome: "Marco", attivo: false },
];

// Crea una funzione getUtentiAttivi(listaUtenti) che restituisca una Promise.

// La Promise deve:
// - aspettare simbolicamente 2 secondi;
// - filtrare solo gli utenti attivi;
// - risolvere la Promise con il nuovo array degli utenti attivi.

// Poi usa .then() per:
// - stampare in console l’array risultante;
// - stampare anche quanti utenti attivi sono stati trovati.

// Gestisci eventuali errori con .catch().

// ==================================================================

//Esercizio 2

const prodotti = [
  { id: "p1", nome: "Mouse", prezzo: 25 },
  { id: "p2", nome: "Tastiera", prezzo: 45 },
  { id: "p3", nome: "Monitor", prezzo: 180 },
  { id: "p4", nome: "Cuffie", prezzo: 60 },
];

// Crea una funzione trovaProdotto(idProdotto) che restituisca una Promise.

// La funzione deve:
// - cercare nell’array prodotti2 il prodotto con l’id passato;
// - se lo trova, fare resolve con l’oggetto prodotto;
// - se non lo trova, fare reject con un messaggio di errore.

// Dopo, usa .then() per stampare:
// - nome del prodotto;
// - prezzo del prodotto.

// Usa il destructuring direttamente dentro il .then() per recuperare nome e prezzo.
// Gestisci l’errore con .catch().

// ==================================================================

//Esercizio 3

const studenti = [
  { id: 1, nome: "Anna", voto: 28 },
  { id: 2, nome: "Marco", voto: 22 },
  { id: 3, nome: "Elisa", voto: 30 },
  { id: 4, nome: "Giulia", voto: 18 },
];

// Crea una funzione async preparaReportStudenti().

// All'interno:
// - simula il recupero dei dati con una Promise;
// - usa await per ottenere l’array studenti3;
// - usa map() per creare un nuovo array di stringhe del tipo:
//   "Anna - voto: 28"
// - usa destructuring nell’argomento della callback di map.

// Infine:
// - stampa in console il nuovo array;
// - stampa anche quanti studenti hanno un voto maggiore o uguale a 28.

// ==================================================================

// Esercizio 4

const ordini = [
  { id: 1, cliente: "Monica", totale: 120, pagato: true },
  { id: 2, cliente: "Luca", totale: 75, pagato: false },
  { id: 3, cliente: "Sara", totale: 210, pagato: true },
  { id: 4, cliente: "Nina", totale: 55, pagato: false },
];

// Crea una funzione fetchOrdini() che restituisca una Promise e risolva con l’array ordini4.

// Poi crea una funzione async analizzaOrdini() che:
// - recuperi gli ordini con await;
// - filtri solo quelli pagati;
// - calcoli la somma totale degli ordini pagati usando reduce();
// - crei un array con i soli nomi dei clienti che hanno pagato.

// Stampa:
// - array degli ordini pagati;
// - totale incassato;
// - array dei nomi clienti.

// Usa destructuring almeno in una callback.

// ==================================================================

// Esercizio 5

const libri = [
  { id: 1, titolo: "Il Nome della Rosa", autore: "Eco", disponibile: true },
  { id: 2, titolo: "1984", autore: "Orwell", disponibile: false },
  { id: 3, titolo: "Dune", autore: "Herbert", disponibile: true },
  {
    id: 4,
    titolo: "Il Signore degli Anelli",
    autore: "Tolkien",
    disponibile: false,
  },
  { id: 5, titolo: "Harry Potter", autore: "Rowling", disponibile: true },
  {
    id: 6,
    titolo: "Il Gattopardo",
    autore: "Tomasi di Lampedusa",
    disponibile: false,
  },
];

// Crea due funzioni che restituiscono Promise:

// 1. getLibri()
//    - restituisce l’array libri5 dopo un piccolo ritardo;

// 2. formattaLibri(listaLibri)
//    - riceve un array;
//    - tiene solo i libri disponibili;
//    - restituisce un nuovo array di oggetti con questa struttura:
//      { titolo, autoreCompleto: autore }

// Poi concatena le Promise con .then() in questo modo:
// - recupera i libri;
// - trasformali;
// - stampa il risultato finale.

// Aggiungi .catch() finale.

// Usa destructuring nella trasformazione degli oggetti.

// ==================================================================

//Esercizio 6
const users = [
  {
    id: 1,
    nome: "Giulia",
    profilo: {
      email: "giulia@email.it",
      ruolo: "admin",
    },
  },
  {
    id: 2,
    nome: "Paolo",
    profilo: {
      email: "paolo@email.it",
      ruolo: "user",
    },
  },
  {
    id: 3,
    nome: "Marta",
    profilo: {
      email: "marta@email.it",
      ruolo: "editor",
    },
  },
  {
    id: 4,
    nome: "Luca",
    profilo: {
      email: "luca@email.it",
      ruolo: "user",
    },
  },
];

// Crea una funzione getUtentiConProfili() che restituisca una Promise con l’array utenti6.

// Poi crea una funzione async stampaProfili() che:
// - recuperi i dati con await;
// - usi map() per creare un array di stringhe nel formato:
//   "Giulia | giulia@email.it | admin"
// - usi destructuring annidato per leggere nome, email e ruolo.

// Infine:
// - stampa il nuovo array;
// - stampa separatamente quanti utenti NON hanno ruolo "user".

// ==================================================================

// Esercizio 7

const catalogo = [
  { id: "a1", nome: "Penna", prezzo: 2 },
  { id: "a2", nome: "Quaderno", prezzo: 5 },
  { id: "a3", nome: "Zaino", prezzo: 35 },
  { id: "a4", nome: "Calcolatrice", prezzo: 15 },
  { id: "a5", nome: "Riga", prezzo: 1 },
];

const carrello = [
  { prodottoId: "a1", quantita: 3 },
  { prodottoId: "a3", quantita: 1 },
  { prodottoId: "a4", quantita: 2 },
  { prodottoId: "a5", quantita: 5 },
];

// Crea una funzione getDettagliCarrello(carrello, catalogo) che restituisca una Promise.

// La funzione deve:
// - controllare che tutti i prodottoId presenti nel carrello esistano nel catalogo;
// - se anche solo uno non esiste, fare reject con un messaggio di errore;
// - altrimenti creare un nuovo array di oggetti con struttura:
//   {
//     nome,
//     prezzo,
//     quantita,
//     subtotale
//   }

// Dopo:
// - usa .then() per stampare il dettaglio completo del carrello;
// - usa reduce() per calcolare il totale finale;
// - stampa il totale.

// Usa destructuring dove ha senso.

// ==================================================================

//Esercizio 8

const persone = [
  { id: 1, nome: "Anna" },
  { id: 2, nome: "Luca" },
];

const punteggi = [
  { utenteId: 1, punti: 120 },
  { utenteId: 2, punti: 95 },
];

const badge = [
  { utenteId: 1, badge: "Gold" },
  { utenteId: 2, badge: "Silver" },
];

// Crea tre funzioni che restituiscono Promise:
// - getUtenti()
// - getPunteggi()
// - getBadge()

// Poi crea una funzione async creaClassifica() che:
// - usi Promise.all() per recuperare tutti i dati;
// - unisca le informazioni dei tre array;
// - produca un nuovo array di oggetti nel formato:
//   {
//     id,
//     nome,
//     punti,
//     badge
//   }

// Infine:
// - ordina l’array in ordine decrescente di punti;
// - stampa la classifica finale.

// Usa find(), map(), destructuring e async/await.

// ==================================================================

//Esercizio 9

const prenotazioni = [
  { id: 1, nome: "Monica", tavolo: 4 },
  { id: 2, nome: "Sara", tavolo: 2 },
  { id: 3, nome: "Luca", tavolo: 7 },
];

// Crea una funzione getPrenotazioneById(id) che restituisca una Promise.

// La Promise deve:
// - cercare una prenotazione per id;
// - fare resolve con la prenotazione trovata;
// - fare reject se non esiste.

// Poi crea una funzione async mostraPrenotazione(id) che:
// - usi try/catch;
// - recuperi la prenotazione con await;
// - stampi una frase del tipo:
//   "Prenotazione trovata: Monica - tavolo 4"

// Usa destructuring per leggere nome e tavolo.
// Nel catch, stampa un messaggio di errore personalizzato.

// ==================================================================

//Esercizio 10

const persons = [
  { id: 1, nome: "Anna", premium: true },
  { id: 2, nome: "Marco", premium: false },
  { id: 3, nome: "Lia", premium: true },
];

const acquisti = [
  { id: 1, utenteId: 1, importo: 80 },
  { id: 2, utenteId: 1, importo: 20 },
  { id: 3, utenteId: 2, importo: 15 },
  { id: 4, utenteId: 3, importo: 120 },
  { id: 5, utenteId: 3, importo: 30 },
];

// Crea queste funzioni:

// 1. getUtentiPremium()
//    - restituisce una Promise con i soli utenti premium;

// 2. getAcquisti()
//    - restituisce una Promise con l’array acquisti10;

// 3. creaReportFinale()
//    - funzione async che:
//      - recupera utenti premium e acquisti con await;
//      - per ogni utente premium calcola:
//        - totale speso;
//        - numero acquisti;
//      - crea un nuovo array di oggetti con struttura:
//        {
//          id,
//          nome,
//          totaleSpeso,
//          numeroAcquisti
//        }

// Infine la funzione deve:
// - ordinare il report dal totaleSpeso più alto al più basso;
// - stampare il report finale;
// - stampare anche il nome dell’utente premium che ha speso di più.

// Vincoli:
// - usa filter(), map(), reduce(), sort();
// - usa destructuring;
// - usa try/catch per la gestione errori.
