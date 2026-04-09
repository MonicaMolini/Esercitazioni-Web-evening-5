# 📘 Teoria e Best Practices – TypeScript

## 📌 Cos'è TypeScript?

TypeScript è un **superset** di JavaScript che aggiunge il **sistema di tipi statici**. È progettato per aiutare gli sviluppatori a scrivere codice più robusto e leggibile, individuando errori **a tempo di compilazione** invece che in esecuzione.

---

## Vantaggi principali

- ✅ Autocompletamento più accurato
- ✅ Errori evitati grazie ai controlli di tipo preventivi
- ✅ Migliore manutenibilità del codice
- ✅ Struttura più chiara in progetti complessi
- ✅ Perfetta integrazione con gli editor (es. VS Code)

---

## Tipi di base

Per dichiarare la tipologia di un dato conservato in una variabile, basta seguire la seguente sintassi:

```ts
let nome: string;
let età: number;
let attivo: boolean;
let linguaggi: string[] = ["HTML", "CSS", "JS"];
```

---

## ⚙️ Setup e Compilazione

### 🔹 Installazione TypeScript globalmente

```bash
npm install -g typescript
```

**Suggerimento**: per compilare automaticamente più file, puoi inizializzare un progetto TS:

```bash
 tsc --init
```

crea un file tsconfig.json con le opzioni di compilazione

## Il ruolo di TypeScript

**IMPORTANTE**
TypeScript è semplicemente un compilatore: non prende decisioni al posto tuo, ma si limita a segnalare possibili errori quando il codice non rispetta i tipi o i valori attesi; sta poi allo sviluppatore decidere se correggerli o ignorarli, perché è comunque possibile compilare anche in presenza di errori.

---

### 🔹 Compilare un file `.ts`

Usare TypeScript non significa scrivere codice direttamente eseguibile dal browser: i browser comprendono solo JavaScript, quindi un file .ts deve essere prima compilato, generando un file .js che sarà quello effettivamente eseguito.

```bash
tsc file.ts
```

---

## Funny Fact

Quando compili TypeScript, il codice JavaScript generato può apparire diverso (e a volte più complesso) rispetto a quello che hai scritto: questo succede perché il compilatore adatta il codice per garantire compatibilità con diversi ambienti e versioni di JavaScript.

Un esempio tipico è la trasformazione di let e const in var. Questo avviene quando il target di compilazione è impostato su versioni più vecchie di JavaScript (come ES5), che non supportano let e const. In questi casi TypeScript usa var per assicurarsi che il codice funzioni anche in ambienti meno moderni.

In sostanza, TypeScript non cambia la logica del tuo codice, ma lo “traduce” in una versione di JavaScript compatibile con l’ambiente scelto.

**ND** È possibile cambiare questo comportamento configurando il target nel file tsconfig.json, così TypeScript genererà un JavaScript più moderno e manterrà costrutti come let e const invece di convertirli in var.

tsconfig.json

```JSON
{
  "compilerOptions": {
    "target": "ES6"
  }
}
```

## 📌 Consiglio finale

**Pensa ai tipi come a una forma di documentazione e, soprattuto, protezione.** Non solo ti aiutano a evitare errori, ma rendono il codice più leggibile e collaborativo.

---

## 🔗 Risorse utili

- (https://www.typescriptlang.org/docs/)
