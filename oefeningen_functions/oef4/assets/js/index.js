function checkPythagoras() {
    const eindgetal = parseInt(document.getElementById("eindgetal").value);

    let resultaatTekst = "";

    for (let a = 1; a <= eindgetal; a++) {
        for (let b = a; b <= eindgetal; b++) {
            const cSquare = a**2 + b**2;
            //We controleren of de wortel van cSquare een geheel getal is.
            // Als dit het geval is, betekent dit dat cSquare zelf ook een perfect kwadraat is, en dat we een geldige combinatie hebben.
            if (Number.isInteger(Math.sqrt(cSquare))) {
                resultaatTekst += `${a}² + ${b}² = ${Math.sqrt(cSquare)}²<br>`;
            }
        }
    }

    const resultaatElement = document.getElementById("resultaat");
    resultaatElement.innerHTML = resultaatTekst;
}
