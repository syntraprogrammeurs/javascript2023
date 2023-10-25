function checkSpaties() {
    // Haal de ingevoerde tekst op uit het inputveld
    var inputTekst = document.getElementById('palindroom').value;

    // Verwijder de spaties uit de tekst
    var tekstZonderSpaties = inputTekst.replace(/\s/g, '');
    console.log(tekstZonderSpaties);

    // Plaats het resultaat terug in het HTML-element met het id 'resultaat'
    document.getElementById('resultaat').innerHTML = tekstZonderSpaties;
}
