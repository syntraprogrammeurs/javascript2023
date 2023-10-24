/*een event listener toevoegen aan de form tag*/
var taskForm = document.getElementById('new_task_form');
var tasksList = document.getElementById('tasksList');

taskForm.addEventListener("submit",function(e){
    e.preventDefault();//standaard gedraging knop uitschakelen
    var newTaskInputValue = taskForm.elements.new_task;
    addTask(newTaskInputValue.value);
});

function addTask(newTaskInputValue){
    /*BEGINNEN TAAK TOEVOEGEN*/
    /*OPBOUW VAN DE TAGS*/
    const div = document.createElement("div");
    const trash= document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");

    /*toevoegen van de waarden van de button en de ingevulde taak van de gebruiker*/
    trash.innerHTML = "DEL";
    trash.classList="btn btn-danger";
    trash.style.color="white";
    label.innerText = newTaskInputValue;
    div.className="form-control";
    checkbox.className="form-check-input";

    /*In volgorde de elementen toevoegen*/
    div.appendChild(trash);
    div.appendChild(checkbox);
    div.appendChild(label);
     /*tasksList toevoegen*/
    tasksList.appendChild(div);


    //addEventListener aan het checkbox element verbinden met het click event.
    checkbox.addEventListener("click", function () {
        if (checkbox.checked == true) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }

    });
    //addEventListener aan het trash element verbinden met een click event.
    trash.addEventListener("click", function () {
        div.remove();
    });

}

