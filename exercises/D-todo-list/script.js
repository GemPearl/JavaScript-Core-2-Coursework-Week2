function todoList(todos) {// Write your code here...
  let toDoListName = document.querySelector("#content");
  let ulForToDos = document.createElement("ul");
  toDoListName.appendChild(ulForToDos);

  todos.foreach((element) => {
    let toDoListItem = document.createElement("li");
    toDoListItem.innerText = element.todo; 

    ulForToDos.appendChild(toDoListItem);

    toDoListItem.addEventListener("click", () =>{
      if (toDoListItem.style.textDecoration === "line-through")toDoListItem.removeAttribute("style");}
      else {
      toDoListItem.style.textDecoration = "line-through";
      }
    );
  });

}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);