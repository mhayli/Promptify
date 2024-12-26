const motivationalQuotes = [
  "La scrittura è la pittura della voce.",
  "Non smettere mai di scrivere, anche quando non sai dove ti sta portando.",
  "Scrivere è l'arte di scoprire ciò che credi.",
  "La scrittura è un viaggio senza fine.",
  "Ogni parola scritta è un passo verso la tua libertà.",
  "Scrivere è un atto di coraggio, non di perfezione.",
  "Non temere di scrivere ciò che non conosci, è lì che si trova la magia.",
  "La scrittura è l'unico posto dove puoi essere completamente te stesso.",
  "Ogni storia raccontata è una parte di te che prende vita.",
  "Ogni parola scritta è una piccola vittoria.",
  "La scrittura trasforma le emozioni in arte.",
  "Scrivere è l'unico modo per dare un senso al caos.",
  "Non è importante dove inizi, ma dove ti porta la tua penna.",
  "Le parole hanno il potere di cambiare il mondo, inizia con la tua.",
  "La scrittura è una forma di libertà che solo i veri scrittori comprendono.",
  "Ogni parola scritta è una speranza in più nel mondo.",
  "Non esistono limiti per chi scrive con il cuore.",
  "La scrittura è il ponte tra l'idea e la realtà.",
  "Non hai bisogno di motivazione, hai bisogno di scrivere.",
  "Ogni pagina scritta è un pezzo di te che cresce.",
  "Non temere il silenzio, è il momento in cui la scrittura trova voce.",
  "Scrivere è un atto di fede.",
  "Le parole sono la chiave che apre porte nuove.",
  "Il mondo è pieno di storie, e tu sei l'unico a poterle raccontare.",
  "La scrittura ti permette di parlare quando non hai parole.",
  "Scrivere è un modo per rendere immortale una parte di noi.",
  "Ogni scrittore è un esploratore, e ogni pagina è una nuova terra da scoprire.",
  "La scrittura è il nostro strumento per trasformare i sogni in realtà.",
  "Non aspettare il momento giusto, inizia a scrivere ora.",
  "Le parole possono curare, possono ispirare, possono cambiare il mondo.",
  "Scrivere è riscoprire se stessi attraverso il flusso delle parole.",
  "Non esistono errori nella scrittura, solo scoperte.",
];

function changeMotivationalQuote() {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  document.getElementById("motivationalQuote").textContent =
    motivationalQuotes[randomIndex];
}

//Questo intervallo  cambierà la frase motivazionale ogni 5 minuti
setInterval(changeMotivationalQuote, 300000); // 300000 ms = 5 minuti

function changeMotivationalQuote() {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  document.getElementById("motivationalQuote").textContent =
    motivationalQuotes[randomIndex];
}

// Cambia la frase motivazionale inizialmente quando la pagina si carica
changeMotivationalQuote();

// Al click sulla box la frase motivazionale cambia
document
  .getElementById("motivationalQuote")
  .addEventListener("click", changeMotivationalQuote);
