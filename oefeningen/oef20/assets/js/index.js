function tekstNaarMorseCode() {
    // Definieer een object dat de morsecode vertaalt voor elke letter en cijfer.
    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
        ' ': '/'  // Spaties worden weergegeven als een schuine streep (/) in morsecode.
    };
    // Haal de ingevoerde tekst op uit het inputveld en zet deze om naar hoofdletters.
    const inputTekst = document.getElementById('eenString').value.toUpperCase();
    // Splits de tekst op in afzonderlijke woorden.
    const woorden = inputTekst.split(' ');
    // Map elke letter van elk woord naar zijn overeenkomstige morsecode, of laat het ongewijzigd als er geen overeenkomst is.
    const morseCodeArray = woorden.map(woord => {
        return woord.split('').map(teken => morseCodeMap[teken] || teken).join(' ');
    });
    // Haal het HTML-element op waarin het resultaat zal worden weergegeven.
    const resultaatElement = document.getElementById('resultaat');
    // Zet de morsecode om naar een leesbaar formaat en toon het resultaat.
    resultaatElement.textContent = morseCodeArray.join(' / ');  // Voeg de woorden samen met een spatie-slash-spatie.
}
