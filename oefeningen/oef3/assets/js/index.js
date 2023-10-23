function go() {
    //var input = document.getElementById('myInput');
    var input = document.querySelector('input[type="number"]');
    var aantalLijnen = Number(input.value);

    var lijst = document.querySelector('.list-group');
    lijst.innerHTML = '';

    for (var i = 1; i <= aantalLijnen; i++) {
        var item = document.createElement('li');
        item.className = 'list-group-item text-white wobble-hor-top';
        item.textContent = 'Item ' + i;

        if (i % 2 === 0) {
            item.classList.add('even');
           // item.style.backgroundColor= 'rood';
        } else {
            item.classList.add('oneven');
        }

        lijst.appendChild(item);
    }
}
