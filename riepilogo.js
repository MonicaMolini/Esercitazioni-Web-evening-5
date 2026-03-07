// Esercizi di riepilogo

// 1. Dato il seguente array di numeri; crea una funzione che usa un ciclo for per effettuare il console.log di ogni valore presente nell'array.

const numbers = [13, 24, 43, 44, 54];

// 2. Completare la seguente funzione chiamata "numberExists", essa riceve due parametri di cui uno è un array. La funzione deve controllare se il primo parametro è presente nell'array e restituire un messaggio indicante se quell'elemento è presente o meno. Spiega il metodo che hai scelto per risolvere l'esercizio.

function numberExists(number, array) {
  //CODE HERE
  return;
}

// 3. Scrivi un oggetto chiamato "personalInfo" che rappresenti le tue informazioni personali, le proprietà sono: name, surname, age, hairColor, eyesColor, hobbies ( array di stringhe ).

// 4. Crea una funzione chiamata "orderedHobbies" che accetta come parametro un oggetto. Essa deve verificare la presenza della proprietà hobbies all'interno dell'oggetto e ordinare gli hobby in ordine alfabetico restituendo un nuovo array.

// 5. Istanzia una classe chiamata "Persona" che abbia come proprietà name, surname, age, hairColor, eyesColor, hobbies ( array di stringhe ) e un metodo chiamato "introduce" che restituisca una stringa con le informazioni della persona. Crea un'istanza della classe e invoca il metodo introduce.

// 7. Prova a duplicare l'oggetto dell'esercizio precedente senza istanziarlo nuovamente. Spiega il metodo che hai scelto e quali sono i suoi vantaggi.

// 8. Dato il seguente array di oggetti, crea una funzione  "login" che accetti come parametro un username o email, e una password e verifichi se esiste un utente con quelle credenziali. Se esiste, restituisci il messaggio "Login effettuato con successo", altrimenti restituisci "Credenziali non valide".

const users = [
  {
    username: "topolino",
    email: "topolino@example.com",
    password: "minnie",
  },
  {
    username: "pippo",
    email: "pippo@example.com",
    password: "pluto",
  },
];

// 9. Crea una funzione "register" che accetti come parametro un username e una password e aggiunga un nuovo utente all'array degli utenti. La funzione deve verificare che l'email non sia già presente nell'array, in caso contrario deve restituire un messaggio di errore. Se l'utente viene aggiunto con successo, restituisci il messaggio "Utente registrato con successo".

// 10. Definisci una funzione "acquista" che simuli l'acquisto di prodotti dal catalogo products.
// La funzione deve accettare come parametri la categoria e il numero di unità che l'utente vuole acquistare di quel prodotto.
// Esegui le seguenti operazioni all'interno della funzione:
// - Verifica se la categoria esiste all'interno del catalogo products, se non esiste restituisci un messaggio di errore.
// - Se la categoria esiste, verifica se la disponibilità del prodotto è sufficiente a coprire la quantità richiesta, altrrimenti restituisci un messaggio di errore che indichi la quantità disponibile in stock.
// - Se la categoria esiste e la disponibilità è sufficiente, calcola il prezzo totale dell'acquisto e restituisci un messaggio con il totale da pagare.
// - Aggiorna lo stock del prodotto sottraendo la quantità acquistata, se questa è pari a 0, imposta la proprietà available su false.

const products = [
  {
    id: "p1",
    nome: "Abito",
    categoria: "abiti",
    prezzo: 50,
    avaible: true,
    stock: 10,
  },
  {
    id: "p2",
    nome: "Smartphone",
    categoria: "elettronica",
    prezzo: 300,
    avaible: true,
    stock: 5,
  },
  {
    id: "p3",
    nome: "Pizza",
    categoria: "cibo",
    prezzo: 8,
    avaible: true,
    stock: 20,
  },
  {
    id: "p4",
    nome: "Gonna",
    categoria: "abiti",
    prezzo: 40,
    avaible: true,
    stock: 15,
  },
  {
    id: "p5",
    nome: "Laptop",
    categoria: "elettronica",
    prezzo: 800,
    avaible: true,
    stock: 3,
  },
  {
    id: "p6",
    nome: "Pasta",
    categoria: "cibo",
    prezzo: 5,
    avaible: true,
    stock: 30,
  },
  {
    id: "p7",
    nome: "Giacca",
    categoria: "abiti",
    prezzo: 100,
    avaible: false,
    stock: 0,
  },
];

//11. Definisci una funzione 'aggiungiSconto' che ricalcoli il prezzo totale di un acquisto applicando eventuali sconti in base alla categoria del prodotto acquistato. Gli sconti da applicare sono i seguenti:

// Abiti: Se l'utente acquista più di 3 pezzi, applica uno sconto del 10% sul totale
// Elettronica: Applica sempre uno sconto del 5% sul totale, indipendentemente dalla quantità
// Cibo: Nessuno sconto applicato

// Utilizza questa funzione all'interno della funzione 'acquista' per calcolare il prezzo totale dell'acquisto dopo l'applicazione degli sconti.

//12. Definisci una funzione 'start' che consente di simulare più acquisti e ritorna il totale complessivo.

// BONUS: Prova a gestire eventuali errori che potrebbero verificarsi durante gli acquisti, come ad esempio la mancanza di stock o l'inserimento di una categoria non valida, se uno degli acquisti fallisce, la funzione 'start' deve restituire un messaggio di errore.
