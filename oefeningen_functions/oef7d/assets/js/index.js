// Deze functie wordt aangeroepen wanneer de gebruiker op de "Bereken" knop klikt.
function bereken() {
    // De geselecteerde keuze (max of min) wordt opgehaald uit de radio buttons.
    var keuze = document.querySelector('input[name="keuze"]:checked').value;

    // De reeks van getallen waarop we het maximum of minimum willen berekenen.
    var reeks = [5, 8, 3, 12, 9, 6, 2, 7, 4, 10]; // Voeg hier je eigen reeks toe

    // De volgende if-else statements controleren welke keuze de gebruiker heeft gemaakt.
    if (keuze === 'max') {
        // Math.max() wordt gebruikt om het maximum van de reeks te berekenen.
        // De "..." (spreidingsoperator) wordt gebruikt om de elementen van de array uit te spreiden als afzonderlijke argumenten voor Math.max().
        var maximum = Math.max(...reeks);

        // Het resultaat wordt weergegeven in het HTML-element met het ID "resultaat".
        document.getElementById('resultaat').textContent = 'Het maximum is: ' + maximum;
    } else if (keuze === 'min') {
        // Math.min() wordt gebruikt om het minimum van de reeks te berekenen.
        var minimum = Math.min(...reeks);
        document.getElementById('resultaat').textContent = 'Het minimum is: ' + minimum;

    }}
// Het resultaat wordt weergegeven in het HTML-element met het ID "resultaat
