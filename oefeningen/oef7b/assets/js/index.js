let minGetal = Infinity; // Initialiseer minGetal met oneindig grote positieve waarde

function checkMin() {
    let inputElement = document.getElementById('getalInput'); // Haal het input element op met id 'getalInput'
    let ingevoerdGetal = Number(inputElement.value); // Converteer de ingevoerde waarde naar een getal

    if (ingevoerdGetal <= 0) { // Controleer of het ingevoerde getal negatief is
        document.getElementById('resultaat').textContent = "Het minimum is: " + minGetal; // Toon het huidige minimum op de pagina
    } else {
        if (ingevoerdGetal < minGetal) { // Als het ingevoerde getal kleiner is dan het huidige minimum
            minGetal = ingevoerdGetal; // Update het minimum met het ingevoerde getal
        }
        inputElement.value = ''; // Maak het invoerveld leeg
    }
}
