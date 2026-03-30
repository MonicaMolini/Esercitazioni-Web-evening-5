// API: una API (Application Programming Interface) è un insieme di regole e protocolli che permette a diverse applicazioni di comunicare tra loro. Nel contesto del web, le API sono spesso utilizzate per consentire l'interazione tra client e server, permettendo di recuperare o inviare dati in modo strutturato, come nel caso della Fetch API.

//Un po' di teoria:

//Client e Server: cosa sono?
//Il client è l'applicazione o il dispositivo che richiede un servizio o una risorsa, come un browser web che richiede una pagina web.
// Il server è l'applicazione o il dispositivo che fornisce il servizio o la risorsa richiesta, come un server web che ospita un sito e risponde alle richieste del browser.
// Nel vostro caso, il server è il vostro computer locale (localhost) che ospita i file del progetto, mentre il client è il browser che visualizza la pagina web e interagisce con essa.

// Anatomia di un URL - Approfondimento
// Un URL (Uniform Resource Locator) è l'indirizzo che identifica una risorsa su Internet. La sua struttura è composta da diverse parti:

// Protocollo: Indica il tipo di protocollo utilizzato per accedere alla risorsa, come http:// o https://.
// Dominio: Indica il nome del server che ospita la risorsa, come www.example.com.
// Porta: (opzionale) Indica la porta del server a cui connettersi, come :80 per HTTP o :443 per HTTPS.
// Percorso: Indica il percorso specifico della risorsa sul server, come /path/to/resource.
// Query string: (opzionale) Contiene parametri aggiuntivi per la richiesta, come ?key=value&key2=value2.
// Frammento: (opzionale) Indica una sezione specifica della risorsa, come #section1.

// Le API del browser: localStorage e sessionStorage

// Il localStorage e il sessionStorage sono due API del browser che permettono di memorizzare dati in modo persistente o temporaneo.

// localStorage: Memorizza i dati senza scadenza, anche dopo la chiusura del browser.
// sessionStorage: Memorizza i dati solo per la durata della sessione del browser, ovvero fino alla chiusura della scheda o del browser.

// Entrambi utilizzano una struttura chiave-valore simile agli oggetti JavaScript.

// Esempio di utilizzo:

// Salvataggio di un dato
localStorage.setItem("nome", "Monica"); // localStorage.setItem(nome della chiave in formato stringa, valore da salvare)
sessionStorage.setItem("nome", "Monica");
//**Attenzione:** qualora intendessimo salvare un oggetto, dovremmo prima convertirlo in JSON con JSON.stringify() poichè qualsiasi dato salvato in localStorage e sessionStorage deve essere una stringa e soprattutto ritorna una stringa quando viene recuperato, quindi è necessario fare il contrario con JSON.parse() per convertirlo nuovamente in un oggetto JavaScript.

// Recupero di un dato
const nomeLocal = localStorage.getItem("nome");
const nomeSession = sessionStorage.getItem("nome");

console.log(nomeLocal); // "Monica"
console.log(nomeSession); // "Monica"

// Rimozione di un dato
localStorage.removeItem("nome");
sessionStorage.removeItem("nome");

// Cancellazione di tutti i dati
localStorage.clear();
sessionStorage.clear();

// Nota: I dati memorizzati in localStorage e sessionStorage sono accessibili solo dallo stesso dominio e protocollo, garantendo la sicurezza dei dati.

// I JSON

// Il JSON (JavaScript Object Notation -  .json) è un formato di dati leggero e facile da leggere ed usato comunemente per lo scambio di dati tra client e server

//La sua struttura è molto simile a quella di un oggetto Javascript con la differenza che anche le chiavi (Key) sono scritte sottoforma di stringa (ovvero con le " " - **ATTENZIONE**: supporta solo le doppie virgolete non gli apostrofi '', nè i backtick ``):

// {
//     "nome": "Monica",
//     "età": 31,
//     "interessi": ["storia", "web", "design", "pittura"]
//  }

// Il JSON è sostanzialmente una stringa di testo, quindi deve essere convertito in un oggetto JavaScript per poter essere manipolato, vediamo come:

// PARSE()
// Converte una stringa, un file, un dato salvato in JSON in un oggetto Javascript

const jsonString = '{"nome": "Monica", "età": 31}';

const obj = JSON.parse(jsonString); // Conversione in oggetto

// obj {nome: "Monica", età: 31}

//STRINGIFY()

// Di contro, converte un oggetto Javascript in formato JSON

const user = {
  nome: "Monica",
  età: 31,
};

const jsonStringify = JSON.stringify(user);

console.log(jsonStringify); // '{"nome":"Monica","età":31}'

// La Fetch API

// La funzione fetch() è una funzione JavaScript nativa per effettuare richieste HTTP in modo asincrono

const url = "https://jsonplaceholder.typicode.com/todos/3";

const options = {
  method: "GET", // Il metodo HTTP per recuperare dati
  headers: {
    "Content-Type": "application/json", // Il tipo di dato atteso
  },
};

async function recuperoDati(x) {
  try {
    const dati = await fetch(`https://jsonplaceholder.typicode.com/todos/${x}`); // utilizziamo i backtick per interpolare la variabile x nell'URL e rendere dinamica la richiesta
    const result = await dati.json(); // Converte la risposta in formato JSON, utilizzando il metodo .json() che restituisce una Promise invece che il metodo JSON.parse() che è sincrono e non può essere utilizzato con fetch()
    const id = result.id;
    const title = result.title;

    return `${id}: ${title}`;
  } catch (error) {
    console.error(error);
  }
}

const numero = Math.floor(Math.random() * 8);
recuperoDati(numero).then((dato) => console.log(dato));

console.log(recuperoDati(3)); // Promise {<pending>}
// Restituisce una Promise in attesa di essere risolta poichè recuperoDati è una funzione asincrona quindi è necessario attendere il suo completamento per ottenere il risultato e gestirlo correttamente con then() o await

//nel caso in cui non si utilizzi async/await, si può utilizzare la funzione fetch() in modo tradizionale:
fetch(url, options)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Errore:", error));

// url: Stringa che specifica l'URL della risorsa da recuperare;
// options: Oggetto opzionale che configura il tipo di richiesta (metodo, intestazioni, corpo, ecc...)

//Fetch() resittuisce SEMPRE una Promise
