


//true or false als resultaat van deze functie
function isSchrikkeljaar(jaartal){
    if((jaartal % 4 === 0 && jaartal % 100 !==0) || jaartal %400 ===0){
        return true;
    }else{
        return false;
    }
}
function checkSchrikkeljaar(){
    const jaartalInput = document.getElementById('jaartalInput');
    const resultaat = document.getElementById('resultaat');

    const jaartal = Number(jaartalInput.value);
    const isSchrikkel = isSchrikkeljaar(jaartal);

    if(isSchrikkel){
        resultaat.style.backgroundColor = 'green';
        resultaat.textContent = 'Schrikkeljaar'
    }else{
        resultaat.style.backgroundColor = 'red';
        resultaat.textContent = 'Geen Schrikkeljaar'
    }

}