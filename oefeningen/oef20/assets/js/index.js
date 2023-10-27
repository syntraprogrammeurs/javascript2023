let gegenereerdeArray = [];

function genereerArray() {
    const hoeveelGetallen = parseInt(document.getElementById('hoeveelGetallen').value);

    gegenereerdeArray = Array.from({length: hoeveelGetallen}, () => Math.floor(Math.random() * 10) + 1);

    document.getElementById('generateArrayResult').textContent = '[' + gegenereerdeArray.join(', ') + ']';
}

function toonDubbele() {
    let teller = 0;
    const dubbeleWaarden = [];

    for (let i = 0; i < gegenereerdeArray.length - 1; i++) {
        if (gegenereerdeArray[i] === gegenereerdeArray[i + 1]) {
            teller++;
            dubbeleWaarden.push(gegenereerdeArray[i]);
        }
    }

    document.getElementById('showDouble').textContent = teller > 0 ? '[' + dubbeleWaarden.join(', ') + ']' : 'Geen opeenvolgende dubbele waarden gevonden.';
}
