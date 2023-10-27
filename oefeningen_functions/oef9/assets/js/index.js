function decToHex() {
    // Haal de waarde op uit het inputveld
    var decimaalGetal = document.getElementById("eenGetal").value;

    // Converteer naar een hexadecimaal getal
    var hexadecimaalGetal = parseInt(decimaalGetal, 10).toString(16).toUpperCase();

    // Toon het resultaat
    document.getElementById("resultaat").textContent = hexadecimaalGetal;
}

