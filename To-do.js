function addTodo(){
    const inputElement = document.querySelector("input");
    const value = inputElement.value;
    // console.log(value);
    
    const newDivElement = document.createElement("div");
    newDivElement.innerHTML = value + "<button>Delete</button>";
    
    document.querySelector("body").appendChild(newDivElement);
    
    }
    
