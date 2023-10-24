window.onload = function(){
    var binnen = document.getElementById("binnen");
    var buiten = document.getElementById("buiten");
    var x = 0;
    var y=0;
    binnen.onmouseover = function(){
        binnen.innerHTML = x+=1;
        binnen.style.color= 'red';
        binnen.style.fontSize= "24px";
        binnen.style.backgroundColor="yellow";
    }
    binnen.onmouseout = function(){
        binnen.style.backgroundColor="orange";
    }
    buiten.onmousedown= function(){
        buiten.innerHTML = y+=5;
    }
}

