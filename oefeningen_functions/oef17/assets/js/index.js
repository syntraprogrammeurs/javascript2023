// Deze functie controleert of het ingevoerde rekeningnummer geldig is.
function controleerRekeningnummer() {
    // Haal de waarde van het inputveld met id 'rekeningnummer' op.
    const rekeningnummerInput = document.getElementById('rekeningnummer').value;
    // Verwijder eventuele koppeltekens, split de string in afzonderlijke cijfers en zet ze in een array.
    const rekeningnummerArray = rekeningnummerInput.split('-').join('').split('');
    // Haal het controlegetal (laatste twee cijfers) uit de array en converteer het naar een getal.
    const controleGetal = parseInt(rekeningnummerArray.slice(-2).join(''));
    // Haal de eerste tien cijfers uit de array en converteer ze naar een getal.
    const eersteTienCijfers = parseInt(rekeningnummerArray.slice(0, -2).join(''));
    // Controleer of het rekeningnummer geldig is volgens de opgegeven regel.
    if (eersteTienCijfers % 97 === controleGetal) {
        document.getElementById('resultaat').textContent = 'Geldig';
    } else {
        document.getElementById('resultaat').textContent = 'Niet geldig';
    }
}

// Voeg een event listener toe aan het inputveld met id 'rekeningnummer'.
document.getElementById('rekeningnummer').addEventListener('input', function() {
    // Haal de ingevoerde waarde op.
    const inputValue = this.value;
    // Verwijder alle niet-cijfers uit de ingevoerde waarde.
    //\D: Dit is een speciale regex-metafoor die overeenkomt met elk karakter dat geen cijfer is. Met andere woorden, het staat voor "niet-cijfer".
    // g: Dit is een vlag die aangeeft dat de zoekopdracht globaal moet worden uitgevoerd. Dit betekent dat het alle overeenkomsten in de hele string zal vinden in plaats van alleen de eerste.
    // Dus, /\D/g zoekt naar alle niet-cijfers in de string.
    const formattedValue = inputValue.replace(/\D/g, '');
    // Formatteer de waarde in het gewenste formaat met koppeltekens.
    const formattedOutput = formattedValue.slice(0, 3) + '-' + formattedValue.slice(3, 10) + '-' + formattedValue.slice(10, 12);
    // Zet de geformatteerde waarde terug in het inputveld.
    this.value = formattedOutput;
});
