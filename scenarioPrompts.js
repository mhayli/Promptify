const scenarioPrompts = [
  "Una vecchia biblioteca abbandonata, piena di libri che nessuno ha mai letto.",
  "Un villaggio circondato da una nebbia che non si dissolve mai.",
  "Un grande parco in una metropoli, dove le persone sembrano essere sempre in fuga.",
  "Un'isola remota dove nessuno è mai stato, ricca di misteri e leggende.",
  "Un'antica rovina nascosta nella foresta, dove il tempo sembra essersi fermato.",
  "Una città futuristica, ma con un'aria di desolazione e solitudine.",
  "Un deserto infinito, dove il caldo e la sabbia sembrano inghiottire ogni traccia di vita.",
  "Un castello in cima a una montagna, avvolto da nuvole oscure e minacciose.",
  "Un vecchio faro su una scogliera, con una luce che non si spegne mai.",
  "Un grande mercato notturno, dove ogni bancarella sembra nascondere un segreto.",
  "Un villaggio costiero che scompare ogni notte sotto un'inquietante marea alta.",
  "Un laboratorio scientifico abbandonato, dove macchinari misteriosi sono ancora in funzione.",
  "Una miniera sotterranea, dove si sentono rumori incomprensibili provenire dalle profondità.",
  "Un parco di divertimenti deserto, dove le giostre arrugginite sembrano ancora funzionare.",
  "Un'antica città sepolta sotto il ghiaccio, i cui edifici sono intatti ma vuoti di vita.",
  "Una giungla lussureggiante, piena di piante e animali mai visti prima.",
  "Un faro solitario su una scogliera che non ha mai visto un altro essere umano.",
  "Una casa abbandonata nel bosco, dove si sentono strani rumori provenire dal piano superiore.",
  "Un aeroporto internazionale vuoto, con aerei in attesa di decollo senza mai partire.",
  "Un vecchio cimitero, dove le tombe sono coperta da una fitta nebbia e non si vede mai il cielo.",
  "Un villaggio medievale dove le persone sembrano nascondere qualcosa di oscuro.",
  "Un parco di notte, con luci tremolanti e ombre che si allungano troppo a lungo.",
  "Una metropolitana sotterranea che non ha mai fine e sembra cambiare da sola.",
  "Un campo di battaglia desolato, dove il vento porta ancora l'eco di antichi conflitti.",
  "Un hotel di lusso abbandonato, con stanze che nessuno osa più aprire.",
  "Un'area industriale in disuso, dove le macchine sembrano riprendersi la città.",
  "Una foresta silenziosa, dove ogni suono sembra provenire da una direzione sbagliata.",
  "Un castello gotico, dove le ombre sembrano avere vita propria.",
  "Un'antica biblioteca sotto terra, dove gli scaffali si estendono all'infinito.",
  "Un paese che si sveglia sempre al tramonto, ma non sa mai se è di giorno o di notte.",
  "Un'incrocio di strade deserte, dove nessuno si ferma mai a chiedere indicazioni.",
  "Un villaggio sperduto in montagna, dove nessuno invecchia e nessuno se ne va.",
  "Una casa sulla spiaggia, dove il mare sembra avere una voce propria e parla di segreti nascosti.",
  "Una stazione spaziale abbandonata, dove il tempo e lo spazio si confondono.",
];

function giveScenarioPrompt() {
  const randomIndex = Math.floor(Math.random() * scenarioPrompts.length);
  document.getElementById("promptArea").textContent =
    scenarioPrompts[randomIndex];
}
