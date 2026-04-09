## Best Practices

### 1. Tipizza sempre lo stato (`useState`) _Quando farete React_

```ts
const [contatore, setContatore] = useState<number>(0);
```

### 2. Usa interfacce per tipizzare `props` nei componenti

```ts
interface Props {
  messaggio: string;
}

const Componente: React.FC<Props> = ({ messaggio }) => <p>{messaggio}</p>;
```

### 3. Evita `any` a meno che non sia strettamente necessario

```ts
// Evita
let dato: any;

// Preferisci
let dato: string | number;
```

### 4. Organizza i tipi in un file `types.ts`

Questo aiuta a mantenere il codice più pulito e riutilizzabile.

### 5. Usa `type guard` per discriminare i tipi nelle union

```ts
function isErrore(risposta: Risposta): risposta is Errore {
  return risposta.tipo === "errore";
}
```

---
