const form = document.querySelector("#task-form")
const todoList = document.querySelector("#todo-list");

document.addEventListener("DOMContentLoaded", function(){
    if(localStorage.todo){
        todoList.innerHTML = JSON.parse(localStorage.todo);
    }
    else{
        localStorage.setItem("todo", JSON.stringify(todoList.innerHTML));
    }
});

form.addEventListener("submit", function(e){
    e.preventDefault();
    const todo = document.querySelector("#todo");
    if (todo.value === ""){
        form.reset();
        return;
    }
    const newList = document.createElement("li");
    const newBtn = document.createElement("button");

    newList.innerText = todo.value + " ";
    newBtn.innerText = "Delete";

    newList.append(newBtn);
    todoList.append(newList);
    localStorage.todo = JSON.stringify(todoList.innerHTML);
    form.reset();
});

todoList.addEventListener("click", function(e){
    if (e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    }
    else if (e.target.tagName === "LI"){
        e.target.classList.toggle("cross-out");
    }
    localStorage.todo = JSON.stringify(todoList.innerHTML);
});