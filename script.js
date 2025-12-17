/**
 * DATABASE COMPLETO DELLE 150 DOMANDE
 * Organizzato per facilitare il rimescolamento delle opzioni
 */
const allQuestions = [
    // --- BLOCCO 1 (1-50) ---
    {q: "Qual è la differenza fondamentale tra Internet e il World Wide Web secondo il framework DigComp 2.2?", options: ["Internet è un servizio specifico mentre il web è la rete globale di computer", "Sono termini completamente sinonimi utilizzati in modo intercambiabile", "Internet è l'infrastruttura di rete globale che collega milioni di computer mentre il web è un servizio che opera su Internet per condividere documenti ipertestuali", "Il web rappresenta l'hardware fisico mentre Internet è il software di gestione"], a: 2, s: "Internet è l’infrastruttura fisica e virtuale, il web è un servizio per documenti collegati."},
    {q: "Quale tra le seguenti attività può essere svolta esclusivamente attraverso una connessione attiva a Internet?", options: ["La lettura di un libro cartaceo in una biblioteca tradizionale", "La ricerca e la navigazione tra diversi siti web utilizzando un motore di ricerca come Google", "La scrittura di una lettera a mano su un foglio di carta", "Una telefonata effettuata con un telefono fisso tradizionale"], a: 1, s: "La navigazione web richiede connessione per accedere a risorse online."},
    {q: "Quale tra i seguenti software è considerato uno dei principali browser web disponibili sul mercato?", options: ["Microsoft Excel utilizzato per la creazione di fogli di calcolo", "Google Chrome utilizzato per la navigazione sul World Wide Web", "Adobe Photoshop utilizzato per l'editing di immagini digitali", "Microsoft PowerPoint utilizzato per la creazione di presentazioni"], a: 1, s: "Chrome è popolare per velocità e integrazione con servizi Google."},
    {q: "Quale browser web è particolarmente noto per l'attenzione dedicata alla protezione della privacy dell'utente?", options: ["Microsoft Edge", "Apple Safari", "Mozilla Firefox", "Google Chrome"], a: 2, s: "Firefox enfatizza estensioni per privacy e sicurezza."},
    {q: "Nella struttura di un indirizzo URL, quale parte indica il protocollo utilizzato per accedere alla risorsa online?", options: ["Il dominio di secondo livello come 'google' in google.com", "La parte iniziale come 'https' o 'http' all'inizio dell'indirizzo", "Il percorso delle cartelle dopo il dominio principale", "I parametri aggiunti dopo il simbolo del punto interrogativo"], a: 1, s: "'https' indica una connessione sicura con crittografia."},
    {q: "Quale elemento della struttura di un URL rappresenta il nome vero e proprio del sito web che si intende visitare?", options: ["Il dominio di primo livello (TLD) come '.com' o '.it'", "Il protocollo come 'http' o 'https'", "Il dominio di secondo livello come 'google' in google.com", "Il percorso delle sottocartelle o dei file"], a: 2, s: "È la parte unica che identifica il proprietario del dominio."},
    {q: "Cosa indica l'acronimo TLD all'interno della struttura di un indirizzo URL completo?", options: ["Temporary Link Domain", "Text Link Domain", "Top Level Domain", "Total Link Domain"], a: 2, s: "Esempi: .com per commerciale, .edu per educativo."},
    {q: "Quale tecnica di ricerca permette di trovare una frase esatta all'interno dei risultati restituiti da un motore di ricerca?", options: ["L'uso del trattino per escludere termini specifici", "L'inserimento della frase tra virgolette doppie per la corrispondenza precisa", "L'uso dell'asterisco come carattere jolly per varianti", "L'inserimento di un punto interrogativo per domande"], a: 1, s: "Virgolette assicurano che le parole siano cercate nell'ordine esatto."},
    {q: "Quale motore di ricerca è particolarmente apprezzato per la sua politica di non tracciamento delle ricerche effettuate dagli utenti?", options: ["Google Search", "Microsoft Bing", "DuckDuckGo", "Yahoo Search"], a: 2, s: "Non raccoglie dati personali per profilazione."},
    {q: "Qual è il principale vantaggio dell'utilizzo dei segnalibri o dei preferiti all'interno di un browser web?", options: ["Aumentare la velocità generale di connessione a Internet", "Permettere un accesso rapido e diretto ai siti web visitati con maggiore frequenza", "Eliminare automaticamente la pubblicità dai siti visitati", "Cambiare il motore di ricerca predefinito del browser"], a: 1, s: "Salva URL per accesso immediato senza ridigitare."},
    {q: "Quale elemento delle pagine web permette di navigare da una pagina all'altra semplicemente cliccando su di esso?", options: ["La barra degli indirizzi situata in alto nel browser", "Il collegamento ipertestuale o link presente nel contenuto", "Il pulsante di aggiornamento della pagina corrente", "La scheda aperta all'interno del browser"], a: 1, s: "Link sono cliccabili per transizioni tra pagine."},
    {q: "Quale browser web è sviluppato da Apple ed è ottimizzato principalmente per i dispositivi con sistema operativo macOS e iOS?", options: ["Google Chrome", "Mozilla Firefox", "Microsoft Edge", "Safari"], a: 3, s: "Integrato per efficienza energetica su Apple."},
    {q: "Nella struttura di un URL, cosa rappresentano i parametri che seguono il simbolo del punto interrogativo?", options: ["Il protocollo di accesso alla risorsa online", "Il nome del dominio principale del sito", "Dati aggiuntivi passati al server per elaborazioni specifiche o personalizzazioni", "La cartella principale in cui è ospitato il file"], a: 2, s: "Usati per query dinamiche come filtri."},
    {q: "Quale tra i seguenti è un esempio di dominio di primo livello nazionale noto come ccTLD?", options: [".www utilizzato come prefisso comune", ".com per siti commerciali internazionali", ".org per organizzazioni non profit", ".it per siti registrati in Italia"], a: 3, s: "Indica origine geografica del dominio."},
    {q: "Quale caratteristica distingue il browser Opera rispetto agli altri browser principali attualmente disponibili?", options: ["Integrazione nativa esclusiva con Microsoft 365", "VPN gratuita e blocco annunci integrato direttamente nel browser", "Modalità lettura esclusiva per e-book digitali", "Supporto limitato solo ai sistemi operativi Windows"], a: 1, s: "Migliora privacy e esperienza senza estensioni extra."},
    {q: "Quale è uno dei criteri fondamentali per valutare la credibilità di una fonte informativa reperita online?", options: ["Il numero di like o condivisioni ricevute sui social media", "La presenza di colori vivaci e design moderno del sito", "La competenza e l'autorevolezza dell'autore o dell'istituzione responsabile", "La quantità di immagini e video presenti nella pagina"], a: 2, s: "Autori esperti garantiscono affidabilità."},
    {q: "Quale rischio principale si corre accettando informazioni online senza una verifica preliminare della fonte e del contenuto?", options: ["Miglioramento della velocità di navigazione complessiva", "Possibile diffusione di fake news o informazioni non corrette e manipolatorie", "Riduzione del consumo di dati mobili durante la navigazione", "Aumento della comprensione immediata del contenuto"], a: 1, s: "Verifica per prevenire disinformazione."},
    {q: "Cosa si intende esattamente per 'fake news' nel contesto dell'alfabetizzazione digitale secondo DigComp 2.2?", options: ["Notizie datate ma ancora valide per approfondimenti storici", "Informazioni deliberatamente false create con l'intento di ingannare il pubblico", "Opinioni personali espresse liberamente su blog o forum", "Notizie brevi pubblicate esclusivamente sui social media"], a: 1, s: "Intentionali per manipolare opinione."},
    {q: "Qual è la differenza principale tra disinformazione e misinformazione nel contesto della valutazione dei contenuti digitali?", options: ["Non esiste alcuna differenza sostanziale tra i due termini", "La disinformazione è intenzionale mentre la misinformazione è condivisa senza intento malevolo", "La misinformazione appare solo sui social network moderni", "La disinformazione è pubblicata esclusivamente su media tradizionali"], a: 1, s: "Disinformazione è deliberata, misinformazione accidentale."},
    {q: "Quale elemento può indicare che un contenuto online ha principalmente uno scopo promozionale o commerciale piuttosto che informativo?", options: ["Linguaggio neutro e presenza di riferimenti bibliografici", "Linguaggio persuasivo e presenza di etichette come 'sponsorizzato' o 'pubblicità'", "Data di pubblicazione molto vecchia e non aggiornata", "Assenza completa di immagini pubblicitarie o link commerciali"], a: 1, s: "Indicatori come 'sponsor' segnalano scopo commerciale."},
    {q: "Quale tra i seguenti è un criterio affidabile per valutare la credibilità di una fonte informativa reperita attraverso una ricerca online?", options: ["Il numero totale di condivisioni ricevute sui social media", "La presenza di riferimenti bibliografici e fonti citate in modo chiaro e verificabile", "L'utilizzo di colori vivaci e un design grafico moderno", "La quantità elevata di pubblicità presente nella pagina web"], a: 1, s: "Citazioni supportano affidabilità."},
    {q: "Cosa sono i deepfake nel contesto della valutazione dei contenuti digitali e della loro affidabilità?", options: ["Video reali modificati con software di editing tradizionale manuale", "Contenuti audiovisivi falsi generati artificialmente da intelligenza artificiale per apparire estremamente realistici", "Fotografie vecchie ritoccate con strumenti base", "Notizie testuali completamente inventate senza supporto multimediale"], a: 1, s: "IA crea falsi convincenti."},
    {q: "Quale tipo di bias può influenzare significativamente i risultati restituiti dai motori di ricerca e dai social media personalizzati?", options: ["Bias di velocità di caricamento delle pagine", "Bias di conferma che privilegia contenuti in linea con le opinioni precedenti dell'utente", "Bias di dimensione del testo utilizzato", "Bias di colore dello sfondo delle pagine"], a: 1, s: "Conferma idee preesistenti."},
    {q: "Perché è importante controllare la data di pubblicazione di un contenuto informativo trovato durante una ricerca online?", options: ["Per verificare se il sito utilizza un design moderno e aggiornato", "Per valutare se le informazioni sono ancora attuali e non superate da eventi successivi", "Per contare il numero di visite ricevute dalla pagina", "Per identificare la quantità di annunci pubblicitari presenti"], a: 1, s: "Attualità evita obsolescenza."},
    {q: "Quale rischio principale è associato alle cosiddette 'bolle filtro' create dagli algoritmi dei social media e dei motori di ricerca?", options: ["Esposizione eccessiva a una varietà di opinioni contrastanti e diverse", "Limitazione dell'accesso a contenuti diversi da quelli già apprezzati o ricercati dall'utente", "Aumento della velocità di caricamento delle pagine web", "Riduzione del consumo di dati mobili durante la navigazione"], a: 1, s: "Crea echo chamber."},
    {q: "Quale pratica è consigliata per contrastare efficacemente la diffusione di disinformazione online in un contesto di cittadinanza digitale?", options: ["Condividere immediatamente contenuti che sembrano interessanti o veritieri", "Verificare l'informazione confrontandola con più fonti attendibili e indipendenti", "Ignorare completamente le notizie controverse o scomode", "Basarsi esclusivamente sul numero di like o condivisioni ricevuti"], a: 1, s: "Cross-checking riduce errori."},
    {q: "Cosa si intende con il termine 'infodemia' nel contesto dell'alfabetizzazione digitale e della gestione delle informazioni?", options: ["Completa mancanza di informazioni disponibili online su un determinato argomento", "Eccesso di informazioni spesso contraddittorie o di bassa qualità che genera confusione e sovraccarico", "Alta velocità di connessione a Internet in tutto il territorio", "Massima sicurezza nella gestione e protezione dei dati personali"], a: 1, s: "Sovraccarico informativo."},
    {q: "Quale tra i seguenti rappresenta un esempio chiaro di dato in formato digitale secondo i principi di DigComp?", options: ["Un disegno realizzato a mano su un foglio di carta tradizionale", "Una fotografia scattata e salvata nella memoria interna di uno smartphone", "Un libro stampato e rilegato conservato in biblioteca", "Una nota scritta a penna su un quaderno personale"], a: 1, s: "Codificato per dispositivi."},
    {q: "Quale unità di misura è generalmente utilizzata per indicare la dimensione di immagini ad alta risoluzione salvate su un dispositivo?", options: ["Kilobyte (KB) tipicamente per testi semplici e brevi", "Gigabyte (GB) per video di lunga durata", "Megabyte (MB) per immagini di qualità elevata e dettagliata", "Terabyte (TB) per archivi completi di sistema"], a: 2, s: "MB per immagini pesanti."},
    {q: "Su un computer con sistema operativo Windows, in quale cartella vengono salvati di default i file scaricati da Internet attraverso un browser?", options: ["Nella cartella 'Documenti' dell'utente corrente", "Direttamente sul Desktop principale del sistema", "Nella cartella 'Download' dedicata ai file scaricati", "Nella cartella 'Programmi' contenente le applicazioni installate"], a: 2, s: "Posizione predefinita."},
    {q: "Quale è uno dei principali vantaggi dell'utilizzo di servizi di archiviazione cloud per la gestione dei propri file digitali?", options: ["Accesso ai file esclusivamente in modalità offline senza connessione", "Possibilità di accedere ai file da diversi dispositivi e luoghi con una connessione Internet attiva", "Maggiore probabilità di perdita definitiva dei dati in caso di problemi", "Riduzione significativa dello spazio disponibile sul dispositivo locale"], a: 1, s: "Sincronizzazione multi-dispositivo."},
    {q: "Cosa si intende per 'open data' nel contesto della gestione e del riutilizzo delle informazioni digitali secondo DigComp 2.2?", options: ["Dati personali protetti da password e accessibili solo all'utente proprietario", "Dati pubblici resi disponibili liberamente per il riutilizzo senza restrizioni significative di copyright", "Dati soggetti a copyright stretto e licenze commerciali", "Dati accessibili esclusivamente a esperti qualificati o ricercatori"], a: 1, s: "Pubblici per trasparenza."},
    {q: "Quale azione è consigliata per liberare spazio di memoria su un dispositivo digitale quando la capacità di archiviazione è quasi esaurita?", options: ["Scarica ulteriori applicazioni non necessarie per riempire lo spazio rimanente", "Cancellare o comprimere file e applicazioni non più utilizzati regolarmente", "Disattivare completamente la connessione Internet per risparmiare risorse", "Spegnere e riaccendere ripetutamente il dispositivo per ottimizzare la memoria"], a: 1, s: "Gestione file essenziale."},
    {q: "Perché è fortemente raccomandato eseguire backup regolari dei propri dati digitali in un contesto di alfabetizzazione informativa?", options: ["Per rallentare le prestazioni generali del dispositivo e risparmiare batteria", "Per proteggere i dati da possibili perdite causate da guasti hardware errori umani o attacchi informatici", "Per occupare più spazio di archiviazione disponibile sul dispositivo principale", "Per facilitare la condivisione pubblica di tutti i file personali online"], a: 1, s: "Protegge da perdite."},
    {q: "Quale strumento online è particolarmente utile per raccogliere dati attraverso questionari e sondaggi in modo strutturato?", options: ["Microsoft Paint per il disegno e la creazione di grafici manuali", "Google Forms per la creazione di moduli interattivi e la raccolta di risposte", "Calcolatrice di sistema per operazioni matematiche semplici", "Microsoft Word per l'editing di testi lunghi"], a: 1, s: "Raccoglie risposte strutturate."},
    {q: "Quale tipo di grafico è più adatto per rappresentare proporzioni o percentuali che sommano al 100% in un insieme di dati raccolti?", options: ["Grafico a linee per mostrare trend temporali nel tempo", "Grafico a dispersione per analizzare correlazioni tra variabili", "Grafico a barre per confronti tra diverse categorie", "Grafico a torta per visualizzare distribuzioni percentuali di un tutto"], a: 3, s: "Visualizza parti del tutto."},
    {q: "Su uno smartphone o tablet, in quale sezione delle impostazioni è possibile verificare la quantità di memoria disponibile occupata e libera?", options: ["Nella sezione 'Fotocamera' per gestire le immagini scattate", "Nella sezione 'Calendario' per gli eventi programmati", "Nella sezione 'Archiviazione' o 'Memoria' del dispositivo", "Nella sezione 'Orologio' per impostare l'ora corrente"], a: 2, s: "Breakdown dettagliato."},
    {q: "Quale rischio principale è associato alla raccolta indiscriminata di dati personali da parte delle applicazioni installate su un dispositivo mobile?", options: ["Aumento significativo della durata della batteria del dispositivo", "Possibile utilizzo non autorizzato o commercializzazione dei dati personali raccolti", "Miglioramento automatico della velocità di connessione Internet", "Riduzione della necessità di utilizzare password per l'accesso"], a: 1, s: "Controlla autorizzazioni."},
    {q: "Come è possibile organizzare in modo efficace una raccolta di dati all'interno di un foglio elettronico per facilitarne l'analisi e l'elaborazione successiva?", options: ["Inserendo tutti i dati in una singola cella senza alcuna struttura definita", "Utilizzando intestazioni di colonna chiare e dedicando una riga per ogni record o osservazione", "Scrivendo i dati in ordine casuale senza titoli o etichette", "Limitandosi esclusivamente a testo non formattato senza tabelle"], a: 1, s: "Intestazioni per filtri."},
    {q: "Quale beneficio principale offrono gli open data alla società nel suo complesso secondo i principi di DigComp 2.2?", options: ["Limitazione dell'accesso alle informazioni pubbliche per maggiore sicurezza", "Maggiore trasparenza possibilità di riutilizzo libero e stimolo all'innovazione civica", "Aumento delle restrizioni di copyright sui dati pubblicati", "Riduzione della quantità di informazioni disponibili online"], a: 1, s: "Innovazione civica."},
    {q: "Quale operatore di ricerca permette di escludere termini specifici dai risultati restituiti da un motore di ricerca?", options: ["Virgolette doppie per cercare frasi esatte", "Asterisco come carattere jolly per varianti di parole", "Punto interrogativo per domande dirette", "Trattino immediatamente prima del termine da escludere"], a: 3, s: "Esempio: gatto -cane."},
    {q: "Come si può creare una strategia di ricerca personale efficace per soddisfare un bisogno informativo specifico?", options: ["Utilizzando sempre lo stesso motore di ricerca senza variazioni", "Combinando parole chiave appropriate con operatori e filtri avanzati in base al contesto", "Ignorando completamente i risultati della prima pagina", "Limitandosi esclusivamente alla ricerca di immagini o video"], a: 1, s: "Adatta al contesto."},
    {q: "Qual è un modo efficace per gestire contemporaneamente più ricerche aperte all'interno di un browser web moderno?", options: ["Chiudere tutte le schede e riaprirle una alla volta", "Aprire finestre separate per ogni ricerca senza organizzazione", "Utilizzare il tasto di refresh per aggiornare continuamente", "Organizzare ricerche simultanee attraverso l'uso di schede multiple in una singola finestra"], a: 3, s: "Confronti rapidi."},
    {q: "Come è possibile verificare se un contenuto trovato online ha principalmente uno scopo promozionale piuttosto che informativo?", options: ["Contando il numero di like ricevuti sui social", "Analizzando il linguaggio persuasivo e la presenza di etichette sponsorizzate", "Ignorando completamente la fonte e l'autore", "Contando esclusivamente le immagini presenti"], a: 1, s: "Etichette sponsor."},
    {q: "Qual è un esempio concreto di bias introdotto dall'intelligenza artificiale nei risultati di ricerca personalizzati?", options: ["Risultati sempre completamente neutri e oggettivi", "Risultati influenzati da dati di addestramento distorti come stereotipi di genere o etnia", "Risultati generati in modo completamente casuale", "Risultati identici per tutti gli utenti indipendentemente dalla storia"], a: 1, s: "Dataset distorti."},
    {q: "Come è possibile distinguere fatti verificabili da opinioni personali all'interno di una fonte informativa online?", options: ["Basandosi sui colori utilizzati nel design del sito", "Valutando l'obiettività e la presenza di prove o dati verificabili a supporto", "Contando il numero di visite o visualizzazioni", "Misurando la lunghezza complessiva del testo pubblicato"], a: 1, s: "Fatti verificabili."},
    {q: "Qual è un metodo efficace per verificare l'autenticità di un video che potrebbe essere un deepfake?", options: ["Contare il numero di pixel visibili nello schermo", "Utilizzare tool specifici di analisi basati su intelligenza artificiale per rilevare manipolazioni", "Ignorare il video e passare al successivo", "Condividerlo immediatamente per ottenere opinioni altrui"], a: 1, s: "Tool InVID."},
    {q: "Come si gestisce l'archiviazione dei contatti su uno smartphone in modo organizzato e sicuro?", options: ["Salvandoli esclusivamente in un file di testo semplice", "Utilizzando l'app Contatti nativa per aggiungere modificare e sincronizzare", "Memorizzandoli solo nella rubrica email", "Scrivendoli su un browser web temporaneo"], a: 1, s: "Sincronizzazione cloud."},
    {q: "Qual è un rischio concreto del sovraccarico informativo noto come infodemia in un contesto digitale quotidiano?", options: ["Maggiore capacità di acquisire conoscenza in tempi brevi", "Confusione difficoltà nel prendere decisioni informate e stress cognitivo", "Riduzione del tempo necessario per la ricerca online", "Aumento del numero di amici sui social network"], a: 1, s: "Filtra fonti."},
    {q: "Qual è una formula base utilizzabile in un foglio elettronico per calcolare la media di un intervallo di celle contenenti dati numerici?", options: ["=SOMMA", "=MEDIA", "=MAX", "=MIN"], a: 1, s: "Sintassi =MEDIA(A1:A10)."},

    // --- BLOCCO 2 (51-100) ---
    {q: "Come è possibile utilizzare gli assistenti vocali per effettuare una ricerca informativa in modo efficace e preciso?", options: ["Formulando domande confuse", "Ponendo domande chiare precise e singole", "Utilizzando comandi lunghi", "Senza specificare argomento"], a: 1, s: "Domande concise."},
    {q: "Qual è un esempio tipico di contenuto promozionale di un influencer?", options: ["Post neutro", "Post con hashtag #ad o #sponsorizzato", "Notizia governativa", "Foto personale"], a: 1, s: "Hashtag sponsor."},
    {q: "Come si gestisce un backup su cloud in modo sicuro?", options: ["Manuale sporadico", "Configurando il backup automatico nelle impostazioni", "Ignorando la funzione", "Solo in locale"], a: 1, s: "Automatico sicuro."},
    {q: "Quale grafico è appropriato per trend temporali?", options: ["Torta", "Linee", "Istogramma", "Barre"], a: 1, s: "Trend temporali."},
    {q: "Come riconoscere un sito web affidabile?", options: ["Design accattivante", "Presenza di autore, data e dominio istituzionale", "Molta pubblicità", "Colori vivaci"], a: 1, s: "Criteri CRAAP."},
    {q: "Qual è un rischio dei bias di popolarità?", options: ["Risultati casuali", "Priorità a contenuti virali non accurati", "Neutralità", "Identici per tutti"], a: 1, s: "Virali prioritari."},
    {q: "Come limitare i risultati a un intervallo di date?", options: ["Senza filtri", "Impostando l'intervallo nei filtri avanzati", "Solo parole chiave", "Ignorando il tempo"], a: 1, s: "Filtri data."},
    {q: "Qual è un metodo per verificare notizie potenzialmente false?", options: ["Leggere solo titolo", "Siti di fact-checking e confronto fonti", "Commenti utenti", "Prima fonte trovata"], a: 1, s: "Fact-checking siti."},
    {q: "Come integrare open data in un foglio elettronico?", options: ["Ignorando", "Importando tramite 'Da web' o CSV", "Solo visualizzando", "Copia manuale"], a: 1, s: "Importa per analisi."},
    {q: "Rischio privacy sensori app mobili?", options: ["Sicurezza generale", "Tracciamento continuo posizione e abitudini", "Meno batteria", "Più velocità"], a: 1, s: "Limita permessi."},
    {q: "Uso combinato operatori Booleani?", options: ["Solo AND", "Combinando AND, OR e NOT con parentesi", "Evitandoli", "Solo virgolette"], a: 1, s: "(gatto OR cane) AND -uccello."},
    {q: "Esempio di misinformazione (buona fede)?", options: ["Fatto verificato", "Errore condiviso senza intento di inganno", "Pubblicità dichiarata", "Opinione personale"], a: 1, s: "Non deliberata."},
    {q: "Ottimizzare scelta cloud vs locale?", options: ["Solo cloud", "Cloud per accessibilità e locale per dati sensibili", "Ignorando backup", "Solo locale"], a: 1, s: "Bilancia pro/contro."},
    {q: "Funzione avanzata per analisi statistica?", options: ["=SOMMA", "=DEV.ST", "=MEDIA", "Tutte le precedenti"], a: 3, s: "Per statistiche."},
    {q: "Contrastare le bolle filtro?", options: ["Stessi siti", "Cercando attivamente prospettive opposte", "Ignorando algoritmi", "Solo contenuti simili"], a: 1, s: "Espandi prospettive."},
    {q: "Rischio IA nella generazione contenuti?", options: ["Neutralità", "Riproduzione di stereotipi o bias", "Lentezza", "Meno personalizzazione"], a: 1, s: "Bias da dati."},
    {q: "Recuperare file cloud su mobile?", options: ["Manuale uno a uno", "App dedicata con ricerca e filtri", "Ignorando sync", "Cancellandoli"], a: 1, s: "Filtri per localizzazione."},
    {q: "Grafico per distribuzioni di frequenza?", options: ["Torta", "Linee", "Istogramma", "Dispersione"], a: 2, s: "Intervalli frequenze."},
    {q: "Configurare sensori mobile per privacy?", options: ["Sempre attivi", "Disattivando permessi non necessari", "Ignorando", "Tutto condiviso"], a: 1, s: "Limita accesso."},
    {q: "Strategia ricerca di routine?", options: ["Casuale", "Parole precise, valutazione fonti e raffinamento", "Solo video", "Senza filtro"], a: 1, s: "Passi strutturati."},
    {q: "Motore specializzato accademico?", options: ["Google Search", "Google Scholar", "Bing", "Yahoo"], a: 1, s: "Filtri accademici."},
    {q: "Valutare obiettività fonte?", options: ["Solo titolo", "Analisi conflitti interesse e finanziamenti", "Like", "Colori"], a: 1, s: "Conflitti d'interesse."},
    {q: "Rischio open data non verificati?", options: ["Perfezione", "Presenza di errori o obsolescenza", "Costo alto", "Accesso limitato"], a: 1, s: "Verifica qualità."},
    {q: "Funzione =MEDIA?", options: ["Somma", "Media aritmetica", "Massimo", "Minimo"], a: 1, s: "Sintassi A1:A10."},
    {q: "Evitare sovraccarico informativo?", options: ["Leggere tutto", "Filtrare e prioritarizzare fonti", "Ignorare news", "Casuale"], a: 1, s: "Obiettivi chiari."},
    {q: "Rischio IA generazione?", options: ["Neutralità", "Produzione di misinformazione", "Diversità", "Costo"], a: 1, s: "Verifica IA."},
    {q: "Recuperare backup locale?", options: ["Cancellando", "Collegando drive e copiando", "Ignorando", "Stampando"], a: 1, s: "Ripristino offline."},
    {q: "Grafico per relazioni tra variabili?", options: ["Torta", "Dispersione", "Barre", "Istogramma"], a: 1, s: "Pattern tra variabili."},
    {q: "Privacy app permessi?", options: ["Sempre attivi", "Revocando permessi in Impostazioni > Privacy", "Ignorando", "Condividendo"], a: 1, s: "Controllo granulare."},
    {q: "Strategia ricerca accademica?", options: ["Google base", "Google Scholar con filtri", "Ignorando peer-review", "Solo immagini"], a: 1, s: "Articoli peer-reviewed."},
    {q: "Operatore per file PDF?", options: ["Senza", "Aggiungendo 'filetype:pdf'", "Solo testo", "Ignorando"], a: 1, s: "Utile per documenti."},
    {q: "Esempio scopo vendita online?", options: ["News neutrali", "Pagine e-commerce con prezzi", "Wiki", "Blog personali"], a: 1, s: "Focus transazioni."},
    {q: "Verificare attualità fonte evolution?", options: ["Ignorando data", "Controllando data e confronto", "Like", "Design"], a: 1, s: "Evita obsolescenza."},
    {q: "Rischio open data in progetti?", options: ["Perfezione", "Propagazione errori", "Costo", "Accesso"], a: 1, s: "Valida sempre."},
    {q: "Operatore NOT?", options: ["Includere", "Escludere termini indesiderati", "Frasi esatte", "Alternative"], a: 1, s: "Esempio: clima NOT politica."},
    {q: "Esempio banca dati open?", options: ["Privati", "Dataset governativi", "Copyright stretto", "Segreti"], a: 1, s: "Liberi per uso pubblico."},
    {q: "Ottimizzare spazio memoria?", options: ["Espandendo", "Tool compressione ZIP", "Ignorando", "Stampando"], a: 1, s: "Riduce dimensione."},
    {q: "Conteggiare celle non vuote?", options: ["=SOMMA", "=CONTEGGIO", "=MEDIA", "=MAX"], a: 1, s: "Conta valori numerici."},
    {q: "Contrastare polarizzazione?", options: ["Piattaforme familiari", "Cercando punti di vista opposti", "Ignorando", "Solo simili"], a: 1, s: "Diversifica prospettive."},
    {q: "Rischio sensori attivi?", options: ["Privacy alta", "Tracciamento e profiling", "Meno batteria", "Più velocità"], a: 1, s: "Profiling commerciale."},
    {q: "Operatore AND?", options: ["Escludere", "Richiede presenza di entrambi", "Alternative", "Negazione"], a: 1, s: "Intersezione risultati."},
    {q: "Scopo intrattenimento?", options: ["News", "Video divertenti YouTube", "Statistiche", "Licenze"], a: 1, s: "Scopo divertimento."},
    {q: "Ottimizzare memoria cache?", options: ["Aumentando", "Cancellando periodicamente", "Ignorando", "Stampando"], a: 1, s: "Migliora prestazioni."},
    {q: "Funzione regressione?", options: ["=SOMMA", "=PREVISIONE", "=MEDIA", "=MAX"], a: 1, s: "Previsioni trend."},
    {q: "Contrastare echo chamber?", options: ["Stessi gruppi", "Unirsi a gruppi opposti", "Ignora", "Simili"], a: 1, s: "Esposizione diversificata."},
    {q: "Rischio generazione IA?", options: ["Neutralità", "Contenuti plausibili ma falsi", "Diversità", "Costo"], a: 1, s: "Hallucinations."},
    {q: "Uso versioni backup?", options: ["Ignora", "Seleziona data ripristino", "Cancella", "Stampa"], a: 1, s: "Versioni precedenti."},
    {q: "Grafico heatmap?", options: ["Torta", "Matrice colori", "Barre", "Linee"], a: 1, s: "Intensità valori."},
    {q: "Configurazione privacy totale?", options: ["Tutto condiviso", "Impostazioni massime e VPN", "Ignora", "Storia"], a: 1, s: "Anonimato."},
    {q: "Ricerca multi-lingua?", options: ["Solo IT", "Traduci query e filtra lingua", "Ignora", "Immagini"], a: 1, s: "Fonti internazionali."},

    // --- BLOCCO 3 (101-150) ---
    {q: "Motore specializzato immagini creative?", options: ["Google generale", "Pinterest", "Bing", "Yahoo"], a: 1, s: "Board tematici."},
    {q: "Valutare interessi politici?", options: ["Solo titolo", "Analizza affiliazioni e finanziamenti", "Like", "Colori"], a: 1, s: "Conflitti d'interesse."},
    {q: "Rischio open data grandi volumi?", options: ["Perfetti", "Difficoltà elaborazione senza tool", "Costo", "Accesso"], a: 1, s: "Software analisi."},
    {q: "Uso =MEDIANA?", options: ["Somma", "Valore centrale ordinato", "Massimo", "Minimo"], a: 1, s: "Resistente estremi."},
    {q: "Evitare infodemia ricerche lunghe?", options: ["Tutto leggere", "Obiettivi chiari e pause", "Ignora news", "Casual"], a: 1, s: "Prioritarizza qualità."},
    {q: "Rischio deepfake avanzato?", options: ["Verità", "Manipolazione opinione pubblica", "Velocità", "Costo"], a: 1, s: "Inganno masse."},
    {q: "Importare open data in Excel?", options: ["Manuale", "Dati > Da web/CSV", "Ignora", "Stampa"], a: 1, s: "Per analisi."},
    {q: "Esempio bias etnico IA?", options: ["Neutralità", "Stereotipi in risultati", "Diversità", "Costo"], a: 1, s: "Dati sbilanciati."},
    {q: "Verificare autore istituzionale?", options: ["Ignora", "Controlla dominio (.gov)", "Like", "Colori"], a: 1, s: "Affidabilità alta."},
    {q: "Metodo privacy sensori?", options: ["Sempre on", "Configura permessi", "Ignora", "Condividi"], a: 1, s: "Limita accesso."},
    {q: "Parentesi in Booleani?", options: ["Non necessarie", "Per raggruppare condizioni", "Solo virgolette", "Ignora"], a: 1, s: "Logica complessa."},
    {q: "Esempio contenuto opinioni?", options: ["Fatti", "Editoriale con giudizio", "Dati", "Notizie"], a: 1, s: "Soggettivo."},
    {q: "Importare CSV in foglio?", options: ["Manuale", "Dati > Da testo", "Ignora", "Stampa"], a: 1, s: "Separatori corretti."},
    {q: "Funzione varianza?", options: ["=SOMMA", "=VAR", "=MEDIA", "=MAX"], a: 1, s: "Dispersione dati."},
    {q: "Verificare dominio phishing?", options: ["Ignora", "Controlla ortografia e HTTPS", "Like", "Colori"], a: 1, s: "Siti falsi."},
    {q: "Rischio geolocalizzazione?", options: ["Privacy", "Posizione tracciata", "Batteria", "Velocità"], a: 1, s: "Ads locali."},
    {q: "Uso site: per dominio?", options: ["Senza", "site:example.com", "Testo", "Ignora"], a: 1, s: "Limita sito."},
    {q: "Esempio misinformazione?", options: ["Falso intenzionale", "Errore condiviso non intenzionale", "Pubblicità", "Opinione"], a: 1, s: "Buona fede."},
    {q: "Sincronizzazione multi-dispositivo?", options: ["Manuale", "Cloud account condiviso", "Ignora", "Locale"], a: 1, s: "Accesso unificato."},
    {q: "Grafico per cicli?", options: ["Torta", "Radar", "Barre", "Linee"], a: 1, s: "Multi-variabili."},
    {q: "Configurare vocali?", options: ["Confusi", "Comandi precisi", "Lunghi", "Senza"], a: 1, s: "Risultati accurati."},
    {q: "Rischio deepfake politica?", options: ["Verità", "Falsi discorsi", "Velocità", "Costo"], a: 1, s: "Influenza voto."},
    {q: "Open data per mappe?", options: ["Ignora", "Integra con GIS", "Copyright", "Stampa"], a: 1, s: "Visualizzazioni geo."},
    {q: "Funzione correlazione?", options: ["=SOMMA", "=CORREL", "=MEDIA", "=MAX"], a: 1, s: "Relazione variabili."},
    {q: "Verificare autore anonimo?", options: ["Ignora", "Contesto e cross-check", "Like", "Colori"], a: 1, s: "Affidabilità contenuti."},
    {q: "Bias genere IA?", options: ["Neutralità", "Stereotipi raccomandazioni", "Diversità", "Costo"], a: 1, s: "Dati sbilanciati."},
    {q: "Import per open data?", options: ["Manuale", "Dati > Da web", "Ignora", "Stampa"], a: 1, s: "Analisi automatica."},
    {q: "Rischio misinformazione buona fede?", options: ["Verità", "Diffusione errori", "Velocità", "Costo"], a: 1, s: "Correzione gentile."},
    {q: "Sincronizzazione multi-cloud?", options: ["Manuale", "Tool terze parti", "Ignora", "Locale"], a: 1, s: "Ridondanza backup."},
    {q: "Grafico multi-serie?", options: ["Torta", "Linee multiple", "Barre", "Istogramma"], a: 1, s: "Confronta trend."},
    {q: "Uso filetype:?", options: ["Senza", "filetype:docx o pdf", "Testo", "Ignora"], a: 1, s: "Formati specifici."},
    {q: "Esempio misinformazione?", options: ["Falso intenzionale", "Errore non intenzionale", "Pubblicità", "Opinione"], a: 1, s: "Senza inganno."},
    {q: "Sincronizzare file cloud?", options: ["Manuale", "App con auto-sync", "Ignora", "Stampa"], a: 1, s: "Dropbox esempio."},
    {q: "Grafico relazioni?", options: ["Torta", "Dispersione", "Barre", "Linee"], a: 1, s: "Correlazioni."},
    {q: "Importare da CSV?", options: ["Manuale", "Dati > Da testo", "Ignora", "Stampa"], a: 1, s: "Separatori corretti."},
    {q: "Rischio deepfake identità?", options: ["Verità", "Furto identità video", "Velocità", "Costo"], a: 1, s: "Falsi video personali."},
    {q: "Open data visualizzazioni?", options: ["Ignora", "Importa e crea grafici", "Copyright", "Stampa"], a: 1, s: "Tableau o Sheets."},
    {q: "Funzione moda?", options: ["=SOMMA", "=MODA", "=MEDIA", "=MAX"], a: 1, s: "Valore frequente."},
    {q: "Verificare fonte anonima?", options: ["Ignora", "Contesto e cross-check", "Like", "Design"], a: 1, s: "Affidabilità da contenuti."},
    {q: "Rischio tracciamento?", options: ["Privacy", "Dossier abitudini", "Batteria", "Velocità"], a: 1, s: "Profiling dettagliato."},
    {q: "Uso site: dominio?", options: ["Senza", "site:example.com", "Testo", "Ignora"], a: 1, s: "Limita sito."},
    {q: "Contenuto opinioni editoriale?", options: ["Fatti", "Commento giudizio", "Dati", "Notizie"], a: 1, s: "Soggettivo."},
    {q: "Ottimizzare cache?", options: ["Aumenta", "Cancella regolarmente", "Ignora", "Stampa"], a: 1, s: "Privacy e velocità."},
    {q: "Funzione quartili?", options: ["=SOMMA", "=QUARTILE", "=MEDIA", "=MAX"], a: 1, s: "Distribuzione dati."},
    {q: "Contrastare echo chamber?", options: ["Stessi", "Gruppi opposti", "Ignora", "Simili"], a: 1, s: "Diversità."},
    {q: "Rischio generazione IA?", options: ["Neutralità", "Contenuti falsi", "Diversità", "Costo"], a: 1, s: "Hallucinations."},
    {q: "Versioni backup?", options: ["Ignora", "Seleziona precedente", "Cancella", "Stampa"], a: 1, s: "Ripristino modifiche."},
    {q: "Grafico heatmap?", options: ["Torta", "Matrice colori", "Barre", "Linee"], a: 1, s: "Intensità."},
    {q: "Configurare privacy totale?", options: ["Condiviso", "Massime e VPN", "Ignora", "Condividi"], a: 1, s: "Anonimato."},
    {q: "Ricerca multi-lingua?", options: ["Solo IT", "Traduci query filtra", "Ignora", "Immagini"], a: 1, s: "Fonti globali."}
];

// VARIABILI DI STATO
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let timer;
let timeLeft = 45 * 60; // 45 minuti in secondi

// ELEMENTI DOM
const quizForm = document.getElementById('quiz-form');
const timerDisplay = document.getElementById('timer');
const navigationInfo = document.getElementById('navigation-info');
const resultArea = document.getElementById('result-area');
const scoreText = document.getElementById('score-text');
const outcomeText = document.getElementById('outcome-text');
const summaryArea = document.getElementById('summary-area');
const submitBtn = document.getElementById('submit-quiz');
const restartBtn = document.getElementById('restart-new-quiz');
const repeatBtn = document.getElementById('repeat-same-quiz');

// --- FUNZIONI CORE ---

/**
 * Inizializza un nuovo test estraendo 30 domande casuali
 */
function initNewTest() {
    clearInterval(timer);
    currentIndex = 0;
    score = 0;
    userAnswers = [];
    timeLeft = 45 * 60;
    
    // Estrae 30 domande a caso
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, 30).map(q => {
        // Rimescola le opzioni all'interno della domanda
        const optionsWithIndex = q.options.map((text, i) => ({ text, isCorrect: i === q.a }));
        const shuffledOptions = optionsWithIndex.sort(() => 0.5 - Math.random());
        return {
            ...q,
            shuffledOptions: shuffledOptions.map(o => o.text),
            newCorrectIndex: shuffledOptions.findIndex(o => o.isCorrect)
        };
    });

    startQuizUI();
}

/**
 * Ripete lo stesso test con le stesse 30 domande
 */
function repeatSameTest() {
    clearInterval(timer);
    currentIndex = 0;
    score = 0;
    userAnswers = [];
    timeLeft = 45 * 60;
    startQuizUI();
}

function startQuizUI() {
    resultArea.classList.add('hidden');
    quizForm.classList.remove('hidden');
    navigationInfo.classList.remove('hidden');
    submitBtn.classList.add('hidden');
    
    startTimer();
    renderQuestion();
}

function startTimer() {
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    timerDisplay.textContent = `Tempo rimanente: ${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function renderQuestion() {
    const q = currentQuestions[currentIndex];
    navigationInfo.textContent = `Domanda ${currentIndex + 1} di 30`;
    
    let html = `
        <div class="question-block">
            <h4>${q.q}</h4>
            <div class="options-container">
    `;
    
    q.shuffledOptions.forEach((opt, i) => {
        const letter = String.fromCharCode(65 + i);
        html += `
            <label class="option-group">
                <input type="radio" name="q" value="${i}">
                <span>${letter}) ${opt}</span>
            </label>
        `;
    });
    
    html += `
            </div>
            <button type="button" id="hint-btn" class="hint-button">💡 Suggerimento</button>
            <p id="hint-text" class="hidden" style="margin-top:10px; font-style:italic; color:#666;">${q.s}</p>
        </div>
    `;
    
    quizForm.innerHTML = html;

    // Listener per avanzamento automatico
    const inputs = quizForm.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            userAnswers[currentIndex] = parseInt(e.target.value);
            setTimeout(nextQuestion, 300); // Breve delay per feedback visivo
        });
    });

    // Listener per suggerimento
    document.getElementById('hint-btn').onclick = () => {
        document.getElementById('hint-text').classList.toggle('hidden');
    };
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < 30) {
        renderQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    quizForm.classList.add('hidden');
    navigationInfo.classList.add('hidden');
    resultArea.classList.remove('hidden');
    
    calculateScore();
}

function calculateScore() {
    score = 0;
    let summaryHtml = '';
    
    currentQuestions.forEach((q, i) => {
        const userAns = userAnswers[i];
        const isCorrect = userAns === q.newCorrectIndex;
        if (isCorrect) score++;
        
        const statusClass = isCorrect ? 'correct' : 'incorrect';
        const userText = userAns !== undefined ? q.shuffledOptions[userAns] : "Nessuna risposta";
        const correctText = q.shuffledOptions[q.newCorrectIndex];
        
        summaryHtml += `
            <div class="summary-item ${statusClass}">
                <strong>${i + 1}. ${q.q}</strong><br>
                La tua risposta: ${userText}<br>
                ${!isCorrect ? `<em>Risposta corretta: ${correctText}</em>` : ''}
            </div>
        `;
    });

    const percent = Math.round((score / 30) * 100);
    const passed = percent >= 75; // 23 su 30 (75%) come soglia standard ECDL/DigComp
    
    scoreText.textContent = `Punteggio: ${score} / 30 (${percent}%)`;
    outcomeText.textContent = passed ? "TEST SUPERATO! 🎉" : "TEST NON SUPERATO 😞";
    outcomeText.className = passed ? "passed" : "failed";
    summaryArea.innerHTML = summaryHtml;
}

// EVENT LISTENERS
restartBtn.onclick = initNewTest;
repeatBtn.onclick = repeatSameTest;

// AVVIO AUTOMATICO AL CARICAMENTO
window.onload = initNewTest;
