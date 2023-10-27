function backarray() {
    // Haal de ingevoerde reeks op uit het inputveld.
    var inputReeks = document.getElementById('inputReeks').value;

    // Maak een lege string om de omgekeerde reeks in op te slaan.
    var omgekeerdeReeks = '';

    // Loop door de karakters van de ingevoerde reeks, beginnend bij het laatste karakter (length - 1) tot aan het eerste karakter (0).
    for (var i = inputReeks.length - 1; i >= 0; i--) {
        // Voeg het huidige karakter toe aan de omgekeerde reeks.
        omgekeerdeReeks += inputReeks[i];
    }

    // Toon het omgekeerde resultaat in het HTML-element met het ID "resultaat".
    document.getElementById('resultaat').textContent = 'Omgekeerde reeks: ' + omgekeerdeReeks;
}