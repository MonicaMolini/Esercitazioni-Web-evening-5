/**
 * LEZIONE 1 – Fondamenti di TypeScript
 * --------------------------------------------------
 */

// I tipi

// In sostanza il tipo è una descrizione del formato dei dati, ad esempio se è un numero, una stringa, un booleano, un array, un oggetto, ecc. Tipizzare significa quindi rendere il nostro codice prevedibile e più facile da capire, perché sappiamo esattamente che tipo di dati stiamo manipolando e quali operazioni possiamo fare su di essi.

// Tipi primitivi

// Questi sono i tipi fondamentali in TypeScript per rappresentare valori base.

let nome: string = "Monica"; // stringa
let eta: number = 31; // numero
let attiva: boolean = true; // booleano (vero/falso)

// Any, unknown e never

// Any: permette di assegnare qualsiasi tipo, ma è sconsigliato perché perde i vantaggi di TypeScript

let qualsiasi: any = "può essere qualsiasi cosa";
qualsiasi = 42; // nessun errore, ma è rischioso

//di fatto equivale a disabilitare e non utilizzare TypeScript, quindi è meglio evitarlo

// Unknown: simile a any, ma più sicuro perché richiede un controllo di tipo prima di usarlo

let sconosciuto: unknown = "non so che tipo è";

// La differenza con any è che con unknown non posso usarlo direttamente senza prima verificare il tipo, ad esempio:

if (typeof sconosciuto === "string") {
  console.log(sconosciuto.toUpperCase()); // Posso usarlo come stringa solo dopo aver verificato il tipo
} else {
  console.log("Non è una stringa!");
}

// Never: rappresenta un tipo che non può mai accadere, ad esempio una funzione che lancia sempre un errore
function errore(): never {
  throw new Error("Questo è un errore!");
}

// Rispetto a void, che indica una funzione che non restituisce un valore ma può comunque terminare normalmente, never indica una funzione che non termina mai in modo normale, ad esempio perché lancia sempre un errore o perché entra in un ciclo infinito.

// Array e Tuple

// Gli array possono essere tipizzati con la notazione tipo[]
let tag: string[] = ["typescript", "lezione"]; // array di stringhe

// Le tuple permettono di definire array con un numero fisso di elementi e tipi precisi
let coppia: [string, number] = ["capitolo", 1];

// Enum
// Gli enum sono utili per definire insiemi di valori costanti nominati
enum Ruolo {
  Admin = "Admin",
  Developer = "Developer",
  Guest = "Guest",
}

let ruoloUtente: Ruolo = Ruolo.Developer; // Assegna un valore dell'enum

//Type alias
// I type alias permettono di creare nuovi nomi per tipi esistenti o combinati
type Punto = {
  x: number;
  y: number;
};

// Interface
// Le interfacce permettono di definire la struttura di un oggetto con proprietà e tipi specifici
interface Utente {
  id: number; // obbligatorio
  nome: string; // obbligatorio
  ruolo?: Ruolo; // opzionale (può non essere presente)
}

const utente1: Utente = { id: 2, nome: "Luca", ruolo: Ruolo.Admin };

// Funzione che utilizza tipi personalizzati

// Tipizziamo i parametri in ingresso e il valore di ritorno
const generaMessaggio = (utente: Utente): string => {
  // Operatore nullish coalescing (??) restituisce 'utente' se ruolo è undefined/null
  const ruolo = utente.ruolo ?? "utente";
  return `Ciao, ${utente.nome}! Sei una fantastica ${ruolo}!`;
};

// Il tipo void indica che la funzione non restituisce un valore
// particolarmente utile per funzioni che stampano in console o modificano lo stato
// oppure per funzioni che non hanno un valore ma eseguono un'azione, una funzione, un errore, ecc.

function stampaSaluto(nome: string): void {
  console.log(`Ciao, ${nome}!`);
}

// Esempio d'uso dell'interfaccia e della funzione
const utente: Utente = {
  id: 1,
  nome: "Monica4",
  ruolo: Ruolo.Developer,
};

// Output nel terminale
console.log(generaMessaggio(utente));
