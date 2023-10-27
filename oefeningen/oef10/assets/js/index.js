function decToBin() {
    // Haal de waarde op uit het inputveld
    var decimaalGetal = document.getElementById("eenGetal").value;

    // Converteer naar een binair getal
    var binairGetal = parseInt(decimaalGetal, 10).toString(2);

    // Toon het resultaat
    document.getElementById("resultaat").textContent = binairGetal;
}
