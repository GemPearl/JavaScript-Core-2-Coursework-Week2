function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  let list = document.querySelector("#todo-list");

  list.replaceChildren([]);

  // Renders and sets event listeners for todo list items using array of objects `todos`,
  todos.forEach((todo) => {
    let todoItem = document.createElement("li");
    list.appendChild(todoItem).className =
      "list-group-item d-flex justify-content-between align-items-center";
    todoItem.innerHTML = todo.task;

    let todoButtons = document.createElement("span");
    todoItem.appendChild(todoButtons);

    let doneToggle = document.createElement("i");
    todoButtons.appendChild(doneToggle).setAttribute("aria-hidden", "true");
    todoButtons.className = "badge bg-primary rounded-pill";
    doneToggle.className = "fa fa-check";

    doneToggle.addEventListener("click", () => {
      todo.completed = !todo.completed;
      populateTodoList(todos);
    });

    let deleteToggle = document.createElement("i");
    todoButtons.appendChild(deleteToggle).setAttribute("aria-hidden", "true");
    deleteToggle.className = "fa fa-trash";

    deleteToggle.addEventListener("click", () => {
      todos = todos.filter((todoObject) => {
        return todoObject.task != todo.task;
      });
      populateTodoList(todos);
    });

    if (todo.completed) {
      todoItem.style = "text-decoration: line-through green;";
    }
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: true },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
   let todoInput = document.querySelector("#todoInput");
  todos.push({ task: todoInput.value, completed: false });
  populateTodoList(todos);
  todoInput.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  function deleteAllCompletedTodos(event) {
  event.preventDefault();

  todos = todos.filter((todo) => {
    return !todo.completed;
  });
  populateTodoList(todos);
}
