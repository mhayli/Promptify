const prompts = [
  "Scrivi una scena in cui il protagonista scopre un segreto sconvolgente.",
  "Immagina un dialogo tra due personaggi che non si vedono da anni.",
  "Descrivi una giornata di pioggia in un vecchio quartiere.",
  "Il protagonista entra in una stanza buia e sente un rumore inquietante provenire da un angolo.",
  "Crea una scena in cui un personaggio deve fare una scelta difficile che cambierà il suo futuro.",
  "Descrivi un incontro casuale che cambia la vita di un personaggio.",
  "Immagina un dialogo tra due amici che si rivelano segreti l’uno all’altro.",
  "Il protagonista trova un oggetto misterioso che sembra avere poteri straordinari.",
  "Crea una scena in cui un personaggio affronta una grande paura per la prima volta.",
  "Descrivi un paesaggio invernale che nasconde una storia dimenticata.",
  "Un personaggio scopre che il mondo che conosceva non è mai esistito. Come reagisce?",
  "Immagina una cena di famiglia dove emergono vecchi rancori.",
  "Il protagonista riceve una lettera che cambierà il corso della sua vita.",
  "Crea una scena in cui due estranei si aiutano in circostanze inaspettate.",
  "Descrivi una città futuristica vista attraverso gli occhi di qualcuno che ci arriva per la prima volta.",
  "Un personaggio si trova davanti a una porta chiusa e non sa cosa c’è dietro. Cosa fa?",
  "Immagina un sogno inquietante che un personaggio non riesce a dimenticare.",
  "Scrivi una scena in cui un personaggio affronta una rivelazione che mette in discussione tutto ciò in cui credeva.",
  "Il protagonista è costretto a prendere una decisione che potrebbe compromettere una sua relazione più importante.",
  "Descrivi una scena in cui un personaggio è costretto a scegliere tra il dovere e il desiderio.",
  "Un personaggio incontra un vecchio amico, ma qualcosa non va come previsto.",
  "Il protagonista trova una vecchia fotografia che riporta alla mente un ricordo dimenticato.",
  "Un personaggio è testimone di un evento misterioso e deve decidere se rivelarlo o meno.",
  "Immagina un incontro casuale che rivela una connessione nascosta tra due personaggi.",
  "Scrivi una scena in cui un personaggio affronta una crisi di identità.",
  "Il protagonista deve confrontarsi con un errore del passato che sta tornando a galla.",
  "Un personaggio si ritrova a dover scegliere tra ciò che è giusto e ciò che è facile.",
  "Descrivi un paesaggio naturale che riflette lo stato d’animo di un personaggio.",
  "Immagina un viaggio che sembra normale, ma che alla fine porterà a una scoperta sconvolgente.",
  "Un personaggio deve affrontare le conseguenze di un'azione impulsiva che ha compiuto.",
  "Un personaggio scopre un'abilità nascosta che cambia il corso della sua vita.",
  "Un protagonista si trova a dover affrontare una verità scomoda che potrebbe distruggere la sua reputazione.",
  "Un personaggio deve prendere una decisione che potrebbe salvare o distruggere una vita.",
  "Il protagonista è costretto a rivivere lo stesso giorno, ma ogni volta qualcosa cambia.",
];

function givePrompt() {
  const randomIndex = Math.floor(Math.random() * prompts.length);
  document.getElementById("promptArea").textContent = prompts[randomIndex];
}

// const motivationalQuotes = [
//   "La scrittura è la pittura della voce.",
//   "Non smettere mai di scrivere, anche quando non sai dove ti sta portando.",
//   "Scrivere è l'arte di scoprire ciò che credi.",
//   "La scrittura è un viaggio senza fine.",
//   "Ogni parola scritta è un passo verso la tua libertà.",
//   "Scrivere è un atto di coraggio, non di perfezione.",
//   "Non temere di scrivere ciò che non conosci, è lì che si trova la magia.",
//   "La scrittura è l'unico posto dove puoi essere completamente te stesso.",
//   "Ogni storia raccontata è una parte di te che prende vita.",
//   "Ogni parola scritta è una piccola vittoria.",
//   "La scrittura trasforma le emozioni in arte.",
//   "Scrivere è l'unico modo per dare un senso al caos.",
//   "Non è importante dove inizi, ma dove ti porta la tua penna.",
//   "Le parole hanno il potere di cambiare il mondo, inizia con la tua.",
//   "La scrittura è una forma di libertà che solo i veri scrittori comprendono.",
//   "Ogni parola scritta è una speranza in più nel mondo.",
//   "Non esistono limiti per chi scrive con il cuore.",
//   "La scrittura è il ponte tra l'idea e la realtà.",
//   "Non hai bisogno di motivazione, hai bisogno di scrivere.",
//   "Ogni pagina scritta è un pezzo di te che cresce.",
//   "Non temere il silenzio, è il momento in cui la scrittura trova voce.",
//   "Scrivere è un atto di fede.",
//   "Le parole sono la chiave che apre porte nuove.",
//   "Il mondo è pieno di storie, e tu sei l'unico a poterle raccontare.",
//   "La scrittura ti permette di parlare quando non hai parole.",
//   "Scrivere è un modo per rendere immortale una parte di noi.",
//   "Ogni scrittore è un esploratore, e ogni pagina è una nuova terra da scoprire.",
//   "La scrittura è il nostro strumento per trasformare i sogni in realtà.",
//   "Non aspettare il momento giusto, inizia a scrivere ora.",
//   "Le parole possono curare, possono ispirare, possono cambiare il mondo.",
//   "Scrivere è riscoprire se stessi attraverso il flusso delle parole.",
//   "Non esistono errori nella scrittura, solo scoperte.",
// ];

// function changeMotivationalQuote() {
//   const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
//   document.getElementById("motivationalQuote").textContent =
//     motivationalQuotes[randomIndex];
// }

// const characterPrompts = [
//   "Un detective che non crede nei sogni, ma improvvisamente comincia a vivere le esperienze di qualcun altro.",
//   "Una persona che ha appena perso la memoria e deve ricostruire la propria vita.",
//   "Un vecchio artista che non ha mai avuto il coraggio di esporre le sue opere.",
//   "Un giovane che scopre di avere poteri soprannaturali, ma non riesce a controllarli.",
//   "Un uomo che riceve una lettera da sé stesso, scritta anni prima.",
//   "Un gruppo di amici che scopre che una delle loro vite è stata programmata.",
//   "Una ragazza che può leggere i pensieri, ma non riesce a distinguere tra quelli veri e falsi.",
//   "Un uomo che si sveglia ogni giorno in un luogo diverso e non ricorda come ci è arrivato.",
//   "Una donna che trova una vecchia chiave e scopre che apre una porta che non esiste più.",
//   "Un ragazzo che diventa immortale, ma ad ogni giorno che passa perde un ricordo.",
//   "Un soldato che deve scegliere tra salvare se stesso o il suo migliore amico in guerra.",
//   "Una persona che può vedere il futuro, ma non riesce mai a cambiarlo.",
//   "Un uomo che scopre di essere l'unico superstite di una catastrofe imminente.",
//   "Una donna che ha il potere di fermare il tempo, ma solo per un minuto alla volta.",
//   "Un uomo che deve affrontare la sua paura più grande, ma scopre che è solo un'illusione.",
//   "Un ragazzo che trova una macchina del tempo, ma ogni viaggio lo porta a un futuro più oscuro.",
//   "Una persona che deve decidere se rivelare un segreto che cambierà il destino di tutti.",
//   "Un medico che scopre di poter curare malattie che non sono mai esistite.",
//   "Un uomo che si rende conto che tutti intorno a lui sono personaggi di un libro.",
//   "Un viaggiatore che scopre di essere intrappolato in un sogno che non può controllare.",
//   "Un ragazzo che trova un vecchio diario che predice eventi futuri, ma non sa chi lo ha scritto.",
//   "Una donna che sente voci nella testa, ma scopre che sono le voci di persone del suo passato.",
//   "Un personaggio che si rende conto che il suo riflesso nell'acqua non è il suo.",
//   "Un uomo che scopre che il mondo che conosce è solo una simulazione.",
//   "Una ragazza che può parlare con gli animali, ma solo quando è sola.",
//   "Un detective che risolve casi impossibili, ma non ricorda mai il volto del colpevole.",
//   "Un ragazzo che scopre che ogni sua azione causa un effetto collaterale catastrofico.",
//   "Una persona che ha il potere di guarire, ma ogni volta perde una parte della sua umanità.",
//   "Un uomo che diventa invisibile ogni volta che mente, ma non riesce più a dire la verità.",
//   "Un ragazzo che vive in un mondo dove ogni sogno diventa realtà.",
//   "Un uomo che scopre di poter tornare indietro nel tempo, ma solo per 24 ore.",
//   "Una persona che scopre di poter manipolare il tempo, ma ogni uso ha un prezzo enorme.",
//   "Un detective che inizia a risolvere casi che riguardano direttamente la sua vita passata.",
//   "Un ragazzo che scopre che le sue azioni vengono scritte in un libro, ma non può modificarle.",
//   "Una donna che può viaggiare tra mondi paralleli, ma ogni mondo ha un prezzo da pagare.",
// ];

// const scenarioPrompts = [
//   "Una vecchia biblioteca abbandonata, piena di libri che nessuno ha mai letto.",
//   "Un villaggio circondato da una nebbia che non si dissolve mai.",
//   "Un grande parco in una metropoli, dove le persone sembrano essere sempre in fuga.",
//   "Un'isola remota dove nessuno è mai stato, ricca di misteri e leggende.",
//   "Un'antica rovina nascosta nella foresta, dove il tempo sembra essersi fermato.",
//   "Una città futuristica, ma con un'aria di desolazione e solitudine.",
//   "Un deserto infinito, dove il caldo e la sabbia sembrano inghiottire ogni traccia di vita.",
//   "Un castello in cima a una montagna, avvolto da nuvole oscure e minacciose.",
//   "Un vecchio faro su una scogliera, con una luce che non si spegne mai.",
//   "Un grande mercato notturno, dove ogni bancarella sembra nascondere un segreto.",
//   "Un villaggio costiero che scompare ogni notte sotto un'inquietante marea alta.",
//   "Un laboratorio scientifico abbandonato, dove macchinari misteriosi sono ancora in funzione.",
//   "Una miniera sotterranea, dove si sentono rumori incomprensibili provenire dalle profondità.",
//   "Un parco di divertimenti deserto, dove le giostre arrugginite sembrano ancora funzionare.",
//   "Un'antica città sepolta sotto il ghiaccio, i cui edifici sono intatti ma vuoti di vita.",
//   "Una giungla lussureggiante, piena di piante e animali mai visti prima.",
//   "Un faro solitario su una scogliera che non ha mai visto un altro essere umano.",
//   "Una casa abbandonata nel bosco, dove si sentono strani rumori provenire dal piano superiore.",
//   "Un aeroporto internazionale vuoto, con aerei in attesa di decollo senza mai partire.",
//   "Un vecchio cimitero, dove le tombe sono coperta da una fitta nebbia e non si vede mai il cielo.",
//   "Un villaggio medievale dove le persone sembrano nascondere qualcosa di oscuro.",
//   "Un parco di notte, con luci tremolanti e ombre che si allungano troppo a lungo.",
//   "Una metropolitana sotterranea che non ha mai fine e sembra cambiare da sola.",
//   "Un campo di battaglia desolato, dove il vento porta ancora l'eco di antichi conflitti.",
//   "Un hotel di lusso abbandonato, con stanze che nessuno osa più aprire.",
//   "Un'area industriale in disuso, dove le macchine sembrano riprendersi la città.",
//   "Una foresta silenziosa, dove ogni suono sembra provenire da una direzione sbagliata.",
//   "Un castello gotico, dove le ombre sembrano avere vita propria.",
//   "Un'antica biblioteca sotto terra, dove gli scaffali si estendono all'infinito.",
//   "Un paese che si sveglia sempre al tramonto, ma non sa mai se è di giorno o di notte.",
//   "Un'incrocio di strade deserte, dove nessuno si ferma mai a chiedere indicazioni.",
//   "Un villaggio sperduto in montagna, dove nessuno invecchia e nessuno se ne va.",
//   "Una casa sulla spiaggia, dove il mare sembra avere una voce propria e parla di segreti nascosti.",
//   "Una stazione spaziale abbandonata, dove il tempo e lo spazio si confondono.",
// ];

// const wordPrompts = [
//   "Cielo",
//   "Fiume",
//   "Tempesta",
//   "Luna",
//   "Vento",
//   "Incocciare",
//   "Criptovaluta",
//   "Algoritmo",
//   "Quasar",
//   "Nebulosa",
//   "Eclissi",
//   "Rifrazione",
//   "Sisma",
//   "Ologramma",
//   "Elettrone",
//   "Cerniera",
//   "Armonica",
//   "Frequenza",
//   "Acufene",
//   "Anomalia",
//   "Sonda",
//   "Polinomio",
//   "Rendimento",
//   "Riflesso",
//   "Paradosso",
//   "Cibernetico",
//   "Equilibrio",
//   "Transizione",
//   "Frattale",
//   "Equazione",
//   "Meteo",
//   "Intelligenza",
//   "Resilienza",
//   "Cybersicurezza",
// ];

// function giveCharacterPrompt() {
//   const randomIndex = Math.floor(Math.random() * characterPrompts.length);
//   document.getElementById("promptArea").textContent =
//     characterPrompts[randomIndex];
//   changeMotivationalQuote();
// }

// function giveScenarioPrompt() {
//   const randomIndex = Math.floor(Math.random() * scenarioPrompts.length);
//   document.getElementById("promptArea").textContent =
//     scenarioPrompts[randomIndex];
//   changeMotivationalQuote();
// }

// function giveWordPrompt() {
//   const randomIndex = Math.floor(Math.random() * wordPrompts.length);
//   document.getElementById("promptArea").textContent = wordPrompts[randomIndex];
// }

// const backgrounds = [
//   "https://i.pinimg.com/originals/44/1f/7a/441f7a387237d3b47f45841ef9501200.png",
//   "https://wallhalla.com/wallpaper/8/variant/preview/lg",
//   "https://wallhalla.com/wallpaper/61/variant/preview/lg",
// ];

// function changeBackground() {
//   const randomIndex = Math.floor(Math.random() * backgrounds.length);
//   document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
// }
