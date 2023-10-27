// Definieer de functie strPlosion met één parameter, karakter
function strPlosion(karakter) {
    // Haal de waarde op van het inputveld met het id 'mijnString'
    const mijnString = document.getElementById('mijnString').value;

    // Gebruik de split-methode om de string te splitsen op het opgegeven karakter
    // en de join-methode om de resulterende array weer samen te voegen tot een string zonder het karakter
    const resultaat = mijnString.split(karakter).join('');

    // Verander de tekstinhoud van het element met het id 'resultaat' naar het resulterende string
    document.getElementById('resultaat').textContent = resultaat;
}
