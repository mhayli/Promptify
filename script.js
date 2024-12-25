// Funzione per cambiare il prompt
function givePrompt() {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  document.getElementById("promptArea").textContent = prompts[randomIndex];
}

function giveCharacterPrompt() {
  const randomIndex = Math.floor(Math.random() * characterPrompts.length);
  document.getElementById("promptArea").textContent =
    characterPrompts[randomIndex];
}

function giveScenarioPrompt() {
  const randomIndex = Math.floor(Math.random() * scenarioPrompts.length);
  document.getElementById("promptArea").textContent =
    scenarioPrompts[randomIndex];
}

function giveWordPrompt() {
  const randomIndex = Math.floor(Math.random() * wordPrompts.length);
  document.getElementById("promptArea").textContent = wordPrompts[randomIndex];
}

// Funzione per cambiare la frase motivazionale
function changeMotivationalQuote() {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  document.getElementById("motivationalQuote").textContent =
    motivationalQuotes[randomIndex];
}

// Aggiungi questo intervallo che cambierà la frase motivazionale ogni 5 minuti
setInterval(changeMotivationalQuote, 300000); // 300000 ms = 5 minuti

// Aggiungi eventi di click per ogni bolla
document.querySelectorAll(".bubble").forEach((bubble, index) => {
  bubble.addEventListener("click", () => {
    // Puoi decidere quale funzione chiamare in base all'indice della bolla
    switch (index) {
      case 0: // Bolla "Un'idea per distarsi"
        givePrompt();
        break;
      case 1: // Bolla "Chi è?"
        giveCharacterPrompt();
        break;
      case 2: // Bolla "Scenario da sogno?"
        giveScenarioPrompt();
        break;
      case 3: // Bolla "Una Parola per ispirarti"
        giveWordPrompt();
        break;
    }
  });
});

// Cambia la frase motivazionale inizialmente quando la pagina si carica
changeMotivationalQuote();

// Aggiungi l'evento di click al box della frase motivazionale per cambiarla
document
  .getElementById("motivationalQuote")
  .addEventListener("click", changeMotivationalQuote);
