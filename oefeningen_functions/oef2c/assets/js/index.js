function go() {
    var input = document.querySelector('input[type="text"]');
    var lijst = document.querySelector('.list-group');

    // Deze onderstaande code controleert of de input niet leeg is (input.value.trim() !== '') voordat het een nieuw item toevoegt. Als de input niet leeg is, wordt het item toegevoegd aan het einde van de lijst en wordt de input gereset naar een lege string.
    if (input.value.trim() !== '') {
        var item = document.createElement('li');
        item.className = 'list-group-item';
        item.textContent = input.value;
        lijst.appendChild(item); // Voeg het nieuwe item toe aan het einde van de lijst
        input.value = ''; // Reset de input naar een lege string
    }
}
