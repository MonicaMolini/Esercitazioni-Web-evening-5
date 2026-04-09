/**
 * LEZIONE 2 – Funzioni, union types e interfacce avanzate
 * --------------------------------------------------------
 */

// Funzione semplice con tipi sui parametri e sul ritorno
function somma(a: number, b: number): number {
  return a + b;
}

// Parametri opzionali e predefiniti
function saluta(nome: string, saluto: string = "Ciao"): string {
  return `${saluto}, ${nome}`;
}

// Funzione con tipo void (non restituisce niente)
function mostraMessaggio(msg: string): void {
  console.log("Messaggio:", msg);
}

// Union type
// Permette a una variabile di essere di più tipi diversi
let valore: (string | number)[]; // array che può contenere stringhe o numeri
valore = ["ciao", 1, 4];

// Interfaccia con metodi
interface Animale {
  nome: string;
  verso(): string;
}

const cane: Animale = {
  nome: "Fido",
  verso: () => "Bau!",
};

console.log(cane.verso()); // Bau!

//Gli errori

//Gli errori di tipo vengono evidenziati in fase di sviluppo, ad esempio se proviamo a chiamare la funzione somma con stringhe invece di numeri, TypeScript ci avviserà dell'errore prima ancora di eseguire il codice. 

// Attenzione però: anche se TypeScript ci avvisa degli errori, se noi forziamo la compilazione, il file JavaScript verrò generato in ogni caso e il codice JavaScript generato potrebbe comunque essere eseguito, quindi è importante correggere gli errori segnalati per evitare comportamenti imprevisti.



