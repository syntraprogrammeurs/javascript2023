document.querySelector("#id-checkbox").addEventListener("click", function(event){
    document.getElementById("resultaat").innerHTML = "standaard gedraging uitgeschakeld";
    event.preventDefault();
}, false)