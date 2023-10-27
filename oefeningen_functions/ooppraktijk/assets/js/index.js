class Persoon{
    constructor(voornaam, achternaam, haarkleur){
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.haarkleur = haarkleur;
    }

    volledigeNaam(){
        return this.voornaam + ' ' + this.achternaam + " met haarkleur " + this.haarkleur;
    }
}

class Student extends Persoon{
    constructor(voornaam,achternaam,haarkleur, studentnummer){
        super(voornaam, achternaam);
        this.studentnummer = studentnummer;
    }

    toonStudentInfo(){
        return `Student: ${this.volledigeNaam()}, Studentnummer: ${this.studentnummer}, haarkleur:${this.haarkleur}`;
    }
}

let studentenArray = [];

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Voorkom standaard gedrag van het formulier

    let voornaam = document.getElementById('voornaam').value;
    let familienaam = document.getElementById('familienaam').value;
    let studentnummer = document.getElementById('studentnummer').value;

    let student = new Student(voornaam, familienaam, studentnummer);

    studentenArray.push(student);

    // Reset de formulier velden
    document.getElementById('voornaam').value = '';
    document.getElementById('familienaam').value = '';
    document.getElementById('studentnummer').value = '';
});

document.getElementById('toonStudenten').addEventListener('click', function() {
    let studentenLijst = document.getElementById('studentenLijst');
    studentenLijst.innerHTML = '';
    //ES5 javascript
    studentenArray.forEach(function(student) {
        let li = document.createElement('li');
        li.textContent = student.toonStudentInfo();

        // Voeg klassen toe aan het li element
        li.classList.add('text-white', 'bg-primary', 'rounded-pill','px-2','my-1');

        studentenLijst.appendChild(li);
    });
    //ES6 javascript
    // studentenArray.forEach(student => {
    //     let li = document.createElement('li');
    //     li.textContent = student.toonStudentInfo();
    //
    //     // Voeg klassen toe aan het li element
    //     li.classList.add('text-white', 'bg-primary', 'rounded-pill','px-2','my-1');
    //
    //     studentenLijst.appendChild(li);
    // });

});

