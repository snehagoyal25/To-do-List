
function deletetodo(element){
    if(element){
    element.parentNode.removeChild(element);
    }
 }


 function addTodo(){
    const inputElement = document.querySelector("input");
    const value = inputElement.value;
    
    const spanEl = document.createElement("span");
    const buttonEl = document.createElement("button");
    spanEl.innerHTML = value;
    buttonEl.innerHTML = "Delete";

    const divEl = document.createElement("div");
    divEl.appendChild(spanEl);
    divEl.appendChild(buttonEl);


    buttonEl.addEventListener('click', function() {
       deletetodo(divEl);  
  });
   document.querySelector("body").appendChild(divEl);
   inputElement.value="";
 
    }
     