function dagenpermaand(maand, jaar) {
    // Bepaal het aantal dagen in de opgegeven maand
    switch (maand) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;  // Januari, maart, mei, juli, augustus, oktober en december hebben elk 31 dagen.
        case 4: case 6: case 9: case 11:
            return 30;  // April, juni, september en november hebben elk 30 dagen.
        case 2:
            return (schrikkeljaar(jaar)) ? 29 : 28;  // Februari heeft 29 dagen in een schrikkeljaar, anders 28.
        default:
            return -1; // Ongeldige maand (dit zal alleen gebeuren als de maand niet 1-12 is).
    }
}

function schrikkeljaar(jaar) {
    // Controleer of het jaar een schrikkeljaar is
    // Een schrikkeljaar is deelbaar door 4, behalve wanneer het deelbaar is door 100 maar niet door 400
    return (jaar % 4 === 0 && jaar % 100 !== 0) || (jaar % 400 === 0);
}

function Omzetting() {
    var inputDatum = document.querySelector('input[type="month"]').value;
    var datum = new Date(inputDatum);
    var maand = datum.getMonth() + 1; // Maanden zijn 0 tem 11, dus voegen we 1 toe
    var jaar = datum.getFullYear();

    var dagen = dagenpermaand(maand, jaar);

    var resultaatElement = document.getElementById('resultaat');
    resultaatElement.textContent = "Aantal dagen in de maand: " + dagen;
}

