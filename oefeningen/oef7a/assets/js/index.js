let maxGetal = -Infinity; // Initialiseer maxGetal met oneindig grote negatieve waarde

function checkMax() {
    let inputElement = document.getElementById('getalInput'); // Haal het input element op met id 'getalInput'
    let ingevoerdGetal = Number(inputElement.value); // Converteer de ingevoerde waarde naar een getal

    if (ingevoerdGetal < 0) { // Controleer of het ingevoerde getal negatief is
        document.getElementById('resultaat').textContent = "Het maximum is: " + maxGetal; // Toon het huidige maximum op de pagina
    } else {
        if (ingevoerdGetal > maxGetal) { // Als het ingevoerde getal groter is dan het huidige maximum
            maxGetal = ingevoerdGetal; // Update het maximum met het ingevoerde getal
        }
        inputElement.value = ''; // Maak het invoerveld leeg
    }
}
