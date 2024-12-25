const prompts = [
  "Scrivi una scena in cui il protagonista scopre un segreto sconvolgente.",
  "Immagina un dialogo tra due personaggi che non si vedono da anni.",
  "Descrivi una giornata di pioggia in un vecchio quartiere.",
  "Il protagonista entra in una stanza buia e sente un rumore inquietante provenire da un angolo.",
  "Crea una scena in cui un personaggio deve fare una scelta difficile che cambierà il suo futuro.",
];

const characterPrompts = [
  "Un detective che non crede nei sogni, ma improvvisamente comincia a vivere le esperienze di qualcun altro.",
  "Una persona che ha appena perso la memoria e deve ricostruire la propria vita.",
  "Un vecchio artista che non ha mai avuto il coraggio di esporre le sue opere.",
  "Un giovane che scopre di avere poteri soprannaturali, ma non riesce a controllarli.",
];

const scenarioPrompts = [
  "Una vecchia biblioteca abbandonata, piena di libri che nessuno ha mai letto.",
  "Un villaggio circondato da una nebbia che non si dissolve mai.",
  "Un grande parco in una metropoli, dove le persone sembrano essere sempre in fuga.",
  "Un'isola remota dove nessuno è mai stato, ricca di misteri e leggende.",
];

const wordPrompts = ["Cielo", "Fiume", "Tempesta", "Luna", "Vento"];

const motivationalQuotes = [
  "La scrittura è la pittura della voce.",
  "Non smettere mai di scrivere, anche quando non sai dove ti sta portando.",
  "Scrivere è l'arte di scoprire ciò che credi.",
  "La scrittura è un viaggio senza fine.",
];

function givePrompt() {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  document.getElementById("promptArea").textContent = prompts[randomIndex];
  changeMotivationalQuote();
}

function giveCharacterPrompt() {
  const randomIndex = Math.floor(Math.random() * characterPrompts.length);
  document.getElementById("promptArea").textContent =
    characterPrompts[randomIndex];
  changeMotivationalQuote();
}

function giveScenarioPrompt() {
  const randomIndex = Math.floor(Math.random() * scenarioPrompts.length);
  document.getElementById("promptArea").textContent =
    scenarioPrompts[randomIndex];
  changeMotivationalQuote();
}

function giveWordPrompt() {
  const randomIndex = Math.floor(Math.random() * wordPrompts.length);
  document.getElementById("promptArea").textContent = wordPrompts[randomIndex];
  changeMotivationalQuote();
}

function changeMotivationalQuote() {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  document.getElementById("motivationalQuote").textContent =
    motivationalQuotes[randomIndex];
}

const backgrounds = [
  "https://i.pinimg.com/originals/44/1f/7a/441f7a387237d3b47f45841ef9501200.png",
  "https://wallhalla.com/wallpaper/8/variant/preview/lg",
  "https://wallhalla.com/wallpaper/61/variant/preview/lg",
];

function changeBackground() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
}
