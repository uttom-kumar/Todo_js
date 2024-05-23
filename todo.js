let inputs = document.getElementById('input');
let genarate = document.querySelector('.genarate_task');

function AddButton(){
    if(inputs.value == ""){
        alert("Enter your task")
    }
    else{
        let newElement = document.createElement("ul");
        newElement.innerHTML= `${inputs.value} <button class="btnD"><i class="fa-solid fa-trash"></i></button>`;
        genarate.appendChild(newElement);
        inputs.value = "";
        newElement.querySelector('.btnD').addEventListener("click" ,remove);
        function remove(){
            newElement.remove();
        }
    }
}