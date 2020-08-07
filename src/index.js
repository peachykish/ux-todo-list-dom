let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation",
  },
  {
      completed: false,
      description: "Pick up the cake"
  },
  {
      completed: false,
      description: "Call the caterers"
  }
];

let app = document.querySelector("#app");
let h1 = document.createElement("h1");
let ul = document.createElement("ul");
ul.style = "list-style-type: none";

app.appendChild(h1);
app.appendChild(ul);
function renderTodoApp() {
  h1.innerText = "todoList";

  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    let input = `<input type="checkbox">${todos[i].description}</input>`;
    if (todos[i].completed === true) {
      input = `<input type="checkbox" checked>${todos[i].description}</input>`;
    }
    ul.appendChild(li);
    li.innerHTML += input;
  }

 
}
function onButtonClick(){
  let inputElement = document.querySelector("#input").value;
  let task = {completed:false, description:inputElement};
  todos.push(task);

}
renderTodoApp();
