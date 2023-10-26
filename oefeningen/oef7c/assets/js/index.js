// Deze functie wordt aangeroepen wanneer er op de knop "Genereer" wordt geklikt.
function aantalElementen() {
    // Hier wordt het ingevoerde aantal uit het inputveld gehaald en omgezet naar een geheel getal.
    var aantal = parseInt(document.getElementById('getalInput').value);

    // Een lege array wordt aangemaakt om de willekeurige getallen op te slaan.
    var elementen = [];

    // Een lus die het opgegeven aantal keren zal uitvoeren.
    for (var i = 0; i < aantal; i++) {
        // Hier wordt een willekeurig getal tussen 1 en 1000 gegenereerd.
        var randomGetal = Math.floor(Math.random() * 1000) + 1;

        // Het willekeurig gegenereerde getal wordt aan de array toegevoegd.
        elementen.push(randomGetal);
    }

    // Het HTML-element met het ID "resultaat" wordt opgehaald.
    var resultaatElement = document.getElementById('resultaat');

    // De tekst van het resultaatElement wordt aangepast om het aantal elementen en de gegenereerde getallen weer te geven.
    // met het escape character \n wordt een nieuwe regel toegevoegd.

    //Hier maken we gebruik van textContent maar je zou ook innerText kunnen gebruiken.
    //innerText geeft de tekstinhoud van een element terug, vergelijkbaar met textContent.
    //Het verschil is dat innerText geen verborgen tekst teruggeeft (tekst die niet zichtbaar is vanwege CSS-regels, zoals display: none;).
    resultaatElement.textContent = 'Aantal elementen: ' + elementen.length + '\nElementen: ' + elementen.join(', ');
}
