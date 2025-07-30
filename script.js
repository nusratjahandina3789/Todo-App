const todoButton = document.getElementById("todoButton");
const todoInput = document.getElementById("todoInput");
const error = document.getElementById("error");
const ul = document.getElementById("ul");
const clearAllBtn = document.getElementById('clearAllBtn');
const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');

todoButton.addEventListener("click", function () {
    if (todoInput.value.trim() === "") {
        error.innerHTML = "Please give me a todo list!";
        return;
    }

    error.innerHTML = "";

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = todoInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);


    ul.appendChild(li);


    todoInput.value = "";
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });
});

clearAllBtn.addEventListener("click", function () {
    ul.innerHTML = "";
});

deleteSelectedBtn.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll("#ul li input[type='checkbox']:checked");
    checkboxes.forEach(checkbox => {
        checkbox.parentElement.remove();
    });
});
todoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        todoButton.click();
    }
});