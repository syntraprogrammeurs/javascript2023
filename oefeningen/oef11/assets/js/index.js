function Omzetting() {
    // Stap 1: Haal de beginwaarde op uit het invoerveld en zet deze om naar een getal
    var beginWaarde = parseFloat(document.getElementById("beginWaarde").value);

    // Stap 2: Haal de eenheid "van" op uit het selectie-element
    var van = document.getElementById("van").value;

    // Stap 3: Haal de eenheid "naar" op uit het selectie-element
    var naar = document.getElementById("naar").value;

    // Controleer of de eenheden verschillend zijn
    if (van !== naar) {
        // Definieer een object met conversiefactoren voor verschillende eenheden
        var conversie = {
            km: { m: 1000, cm: 100000, mm: 1000000 },
            m: { km: 0.001, cm: 100, mm: 1000 },
            cm: { km: 0.00001, m: 0.01, mm: 10 },
            mm: { km: 0.000001, m: 0.001, cm: 0.1 }
        };

        // Stap 4: Bereken het resultaat door de beginwaarde te vermenigvuldigen met de juiste conversiefactor
        var resultaat = beginWaarde * conversie[van][naar];

        // Stap 5: Plaats het resultaat in het element met id "resultaat" op de pagina
        document.getElementById("resultaat").innerHTML = `${beginWaarde} ${van} is gelijk aan ${resultaat} ${naar}`;
    } else {
        // Als de eenheden gelijk zijn, toon een melding
        document.getElementById("resultaat").innerHTML = "De eenheden zijn gelijk, geen conversie nodig.";
    }
}
