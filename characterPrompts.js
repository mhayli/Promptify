const characterPrompts = [
  "Un detective che non crede nei sogni, ma improvvisamente comincia a vivere le esperienze di qualcun altro.",
  "Una persona che ha appena perso la memoria e deve ricostruire la propria vita.",
  "Un vecchio artista che non ha mai avuto il coraggio di esporre le sue opere.",
  "Un giovane che scopre di avere poteri soprannaturali, ma non riesce a controllarli.",
  "Un uomo che riceve una lettera da sé stesso, scritta anni prima.",
  "Un gruppo di amici che scopre che una delle loro vite è stata programmata.",
  "Una ragazza che può leggere i pensieri, ma non riesce a distinguere tra quelli veri e falsi.",
  "Un uomo che si sveglia ogni giorno in un luogo diverso e non ricorda come ci è arrivato.",
  "Una donna che trova una vecchia chiave e scopre che apre una porta che non esiste più.",
  "Un ragazzo che diventa immortale, ma ad ogni giorno che passa perde un ricordo.",
  "Un soldato che deve scegliere tra salvare se stesso o il suo migliore amico in guerra.",
  "Una persona che può vedere il futuro, ma non riesce mai a cambiarlo.",
  "Un uomo che scopre di essere l'unico superstite di una catastrofe imminente.",
  "Una donna che ha il potere di fermare il tempo, ma solo per un minuto alla volta.",
  "Un uomo che deve affrontare la sua paura più grande, ma scopre che è solo un'illusione.",
  "Un ragazzo che trova una macchina del tempo, ma ogni viaggio lo porta a un futuro più oscuro.",
  "Una persona che deve decidere se rivelare un segreto che cambierà il destino di tutti.",
  "Un medico che scopre di poter curare malattie che non sono mai esistite.",
  "Un uomo che si rende conto che tutti intorno a lui sono personaggi di un libro.",
  "Un viaggiatore che scopre di essere intrappolato in un sogno che non può controllare.",
  "Un ragazzo che trova un vecchio diario che predice eventi futuri, ma non sa chi lo ha scritto.",
  "Una donna che sente voci nella testa, ma scopre che sono le voci di persone del suo passato.",
  "Un personaggio che si rende conto che il suo riflesso nell'acqua non è il suo.",
  "Un uomo che scopre che il mondo che conosce è solo una simulazione.",
  "Una ragazza che può parlare con gli animali, ma solo quando è sola.",
  "Un detective che risolve casi impossibili, ma non ricorda mai il volto del colpevole.",
  "Un ragazzo che scopre che ogni sua azione causa un effetto collaterale catastrofico.",
  "Una persona che ha il potere di guarire, ma ogni volta perde una parte della sua umanità.",
  "Un uomo che diventa invisibile ogni volta che mente, ma non riesce più a dire la verità.",
  "Un ragazzo che vive in un mondo dove ogni sogno diventa realtà.",
  "Un uomo che scopre di poter tornare indietro nel tempo, ma solo per 24 ore.",
  "Una persona che scopre di poter manipolare il tempo, ma ogni uso ha un prezzo enorme.",
  "Un detective che inizia a risolvere casi che riguardano direttamente la sua vita passata.",
  "Un ragazzo che scopre che le sue azioni vengono scritte in un libro, ma non può modificarle.",
  "Una donna che può viaggiare tra mondi paralleli, ma ogni mondo ha un prezzo da pagare.",
];

function giveCharacterPrompt() {
  const randomIndex = Math.floor(Math.random() * characterPrompts.length);
  document.getElementById("promptArea").textContent =
    characterPrompts[randomIndex];
}
