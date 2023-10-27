// Initialiseer een lege array om de gegenereerde getallen op te slaan.
let gegenereerdeArray = [];

// Deze functie genereert een array van willekeurige getallen op basis van de input van de gebruiker.
function genereerArray() {
    // Haal het aantal gewenste getallen op uit het inputveld 'hoeveelGetallen'.
    const hoeveelGetallen = parseInt(document.getElementById('hoeveelGetallen').value);
    // Genereer een array met 'hoeveelGetallen' elementen, waarbij elk element een willekeurig getal tussen 1 en 10 is.
    gegenereerdeArray = Array.from({length: hoeveelGetallen}, () => Math.floor(Math.random() * 10) + 1);
    // Toon de gegenereerde array als een string in het HTML-element met de id 'generateArrayResult'.
    document.getElementById('generateArrayResult').textContent = '[' + gegenereerdeArray.join(', ') + ']';
}

// Deze functie telt het aantal opeenvolgende dubbele waarden in de gegenereerde array en toont deze.
function toonDubbele() {
    let teller = 0;  // Initialiseer een teller voor het bijhouden van het aantal opeenvolgende dubbele waarden.
    const dubbeleWaarden = [];  // Initialiseer een array om de dubbele waarden op te slaan.
    // Itereer door de gegenereerde array (tot het voorlaatste element) om dubbele waarden te vinden.
    for (let i = 0; i < gegenereerdeArray.length - 1; i++) {
        // Controleer of het huidige element gelijk is aan het volgende element.
        if (gegenereerdeArray[i] === gegenereerdeArray[i + 1]) {
            teller++;  // Verhoog de teller als een opeenvolgende dubbele waarde wordt gevonden.
            dubbeleWaarden.push(gegenereerdeArray[i]);  // Voeg de dubbele waarde toe aan de array.
        }
    }
    // Toon de resultaten in het HTML-element met de id 'showDouble'.
    document.getElementById('showDouble').textContent = teller > 0 ? '[' + dubbeleWaarden.join(', ') + ']' : 'Geen opeenvolgende dubbele waarden gevonden.';
}
