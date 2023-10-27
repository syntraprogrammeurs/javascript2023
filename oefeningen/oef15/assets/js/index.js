function perfectGetal() {
    // Haal het ingevoerde getal op en zet het om naar een integer
    const eenGetal = parseInt(document.getElementById('eenGetal').value);

    // Haal het element op waarin we het resultaat gaan weergeven
    const resultaatElement = document.getElementById('resultaat');

    // Controleer of het ingevoerde getal geldig is (niet leeg of kleiner dan 2)
    if (!eenGetal || eenGetal <= 1) {
        // Als het niet geldig is, geef een melding weer
        resultaatElement.textContent = "Voer een geldig getal groter dan 1 in.";
        return; // Stop de functie uitvoering
    }

    // Functie om te controleren of een getal perfect is en de delers terug te geven
    const isPerfectNumber = (num) => {
        // Initialiseer de som met 1 omdat 1 altijd een deler is
        let sum = 1;
        // Initialiseer een array om de delers bij te houden
        let delers = [1];

        // Loop door alle getallen van 2 tot de wortel van het nummer
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                // Als i een deler is, voeg het toe aan de som en de delers array
                sum += i;
                delers.push(i);
                if (i !== num / i) {
                    // Als i niet gelijk is aan num/i, voeg num/i ook toe aan de som en delers array
                    sum += num / i;
                    delers.push(num / i);
                }
            }
        }
        // Als de som gelijk is aan het originele nummer en nummer is niet gelijk aan 1, dan is het perfect
        return sum === num && num !== 1 ? { num, delers } : null;
    }

    // Genereer een lijst van perfecte getallen
    const perfectNumbersList = Array.from({length: eenGetal - 1}, (_, i) => i + 2)
        .map(isPerfectNumber)
        .filter(Boolean);

    // Creëer een tekstuele weergave van de perfecte getallen en hun delers
    let output = perfectNumbersList.map(item => `${item.num} = ${item.delers.join('+')}`).join('<br>');

    // Toon de resultaten in het HTML-element
    resultaatElement.innerHTML = output.length > 0
        ? output
        : "Er zijn geen perfecte getallen tot aan " + eenGetal;
}
