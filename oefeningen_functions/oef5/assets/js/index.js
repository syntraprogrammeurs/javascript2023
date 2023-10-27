function checkPalindroom() {
    const input = document.getElementById("palindroom").value;
    const resultaat = document.getElementById("resultaat");

    // Omkeren van de string
    const reversed = input.split('').reverse().join('');

    if (input === reversed) {
        resultaat.textContent = "Dit is een palindroom!";
        resultaat.style.backgroundColor="green";
    } else {
        resultaat.textContent = "Dit is geen palindroom.";
        resultaat.style.backgroundColor="red";
    }
}
