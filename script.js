const inputText = document.getElementById("todoInput");
const listParent = document.getElementById("parent");

function addTodo(){
    if(inputText.value){
        const div = document.createElement("div");
        div.setAttribute("class", "todo");
        const p = document.createElement("p");
        p.innerHTML = inputText.value;
        const button = document.createElement("button");
        button.setAttribute("onclick","removeTodo(this)")
        button.innerHTML = "Remove";
        div.append(p, button);
        listParent.appendChild(div);
        inputText.value = "";
    }else{
        alert("Please Enter To Do!")
    }    
}

function removeTodo(b){
   // console.log(b.parentElement)
    const parentOfDiv = b.parentElement;      
    listParent.removeChild(parentOfDiv);
}
