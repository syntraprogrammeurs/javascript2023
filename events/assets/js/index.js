window.onload = function(){
    document.getElementById('textBtn').addEventListener('click',function(){
        var naam = document.getElementById('textNaam').value;
        document.getElementById("resultaat").innerHTML = naam;
    }, false)
}
//Dit betekent dat het evenement eerst op het binnenste element (textBtn) wordt afgehandeld en vervolgens op hogere elementen in de hiërarchie.