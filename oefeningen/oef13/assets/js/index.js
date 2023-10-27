function Bereken() {
    const vandaag = new Date();  // Krijg de huidige datum
    const referentieDatum = new Date(1, 0, 1);  // Creëer een datum voor 01/01/0001

    // Functie om te controleren of een jaar een schrikkeljaar is
    function isSchrikkeljaar(jaar) {
        return (jaar % 4 === 0 && jaar % 100 !== 0) || (jaar % 400 === 0);
    }

    let dagenVerschil = 0;

    // Loop door elk jaar van 1 tot het huidige jaar
    for (let jaar = 1; jaar <= vandaag.getFullYear(); jaar++) {
        const dagenInJaar = isSchrikkeljaar(jaar) ? 366 : 365; // Bepaal het aantal dagen in het huidige jaar
        dagenVerschil += dagenInJaar; // Voeg het aantal dagen van dit jaar toe aan het totaal
    }

    const tijdsVerschil = vandaag - referentieDatum; // Bereken het tijdsverschil in milliseconden
    const millisecondenPerDag = 24 * 60 * 60 * 1000; // Aantal milliseconden in een dag
    const extraDagen = Math.floor(tijdsVerschil / millisecondenPerDag); // Converteer naar dagen

    dagenVerschil += extraDagen; // Voeg eventuele extra dagen toe

    const resultaatElement = document.getElementById('resultaat'); // Haal het HTML-element op om het resultaat weer te geven
    resultaatElement.textContent = `Aantal dagen sinds 01/01/0001: ${dagenVerschil}`; // Toon het resultaat
}
