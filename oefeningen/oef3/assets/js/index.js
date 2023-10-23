    function machtsverheffing() {
    var grondtal = parseInt(document.getElementById('grondtal').value);
    var exponent = parseInt(document.getElementById('exponent').value);

    if (exponent === 0) {
    document.getElementById('resultaat').innerText = '1';
} else if (exponent < 0) {
    var resultaat = 1;
    for (var i = 0; i < Math.abs(exponent); i++) {
    resultaat /= grondtal;
}
    document.getElementById('resultaat').innerText = resultaat.toString();
} else {
    var resultaat = 1;
    for (var i = 0; i < exponent; i++) {
    resultaat *= grondtal;
}
    document.getElementById('resultaat').innerText = resultaat.toString();
}
}

