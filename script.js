const todoButton = document.getElementById("todoButton")
const todoInput = document.getElementById("todoInput")
const error = document.getElementById("error")
const ul = document.getElementById("ul")
const clearAllBtn = document.getElementById('clearAllBtn');
const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');
todoButton.addEventListener("click", function () {
    if (todoInput.value == "") {
        error.innerHTML = "Give a todo list!";
    } else {
        error.innerHTML = ""
        const li = document.createElement("li")
        li.innerHTML = todoInput.value
        ul.appendChild(li)
    }

})