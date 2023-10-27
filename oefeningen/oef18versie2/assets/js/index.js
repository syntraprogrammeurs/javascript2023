// Wacht tot de volledige pagina (inclusief afbeeldingen en scripts) geladen is
window.onload = function() {
    // Zoek het element met de class 'btn-group' en wijs het toe aan de variabele 'btnGroup'
    const btnGroup = document.querySelector('.btn-group');
    // Loop door de ASCII-codes van 'a' (97) tot 'z' (122)
    for (let i = 97; i <= 122; i++) {
        // Converteer de ASCII-code naar een karakter (a tot z)
        const karakter = String.fromCharCode(i);
        // Maak een nieuw button element aan
        const button = document.createElement('button');
        // Stel het type van de button in op 'button'
        button.type = 'button';
        // Voeg de CSS-klassen 'btn' en 'btn-secondary' toe aan de button voor opmaak
        button.classList.add('btn', 'btn-secondary');
        // Stel de tekstinhoud van de button in op het karakter (a tot z)
        button.textContent = karakter;
        // Voeg een 'onclick' eventlistener toe aan de button die de functie 'strPlosion' aanroept met het gekozen karakter
        button.setAttribute('onclick', `strPlosion('${karakter}')`);
        // Voeg de button toe aan de 'btnGroup' container
        btnGroup.appendChild(button);
    }
};


// Definieer de functie strPlosion met één parameter, karakter
function strPlosion(karakter) {
    // Haal de waarde op van het inputveld met het id 'mijnString'
    const mijnString = document.getElementById('mijnString').value;

    // Gebruik de split-methode om de string te splitsen op het opgegeven karakter
    // en de join-methode om de resulterende array weer samen te voegen tot een string zonder het karakter
    const resultaat = mijnString.split(karakter).join('');

    // Verander de tekstinhoud van het element met het id 'resultaat' naar het resulterende string
    document.getElementById('resultaat').textContent = resultaat;
}
