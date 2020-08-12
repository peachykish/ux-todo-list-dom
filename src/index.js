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
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

let h1 = document.createElement("h1");
let app = document.querySelector("#app");

h1.innerText = "todoList";
document.body.appendChild(h1);

function renderTodoApp() {
  let listItem = "";
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    if (todos[i].completed === true) {
      listItem += `<li><input type="checkbox" checked>${todos[i].description}</input></li>`;
    } else {
      listItem += `<li><input type="checkbox">${todos[i].description}</input></li>`;
    }
  }
  
  app.innerHTML = `<ul style = "list-style-type: none"
  >${listItem}</ul>`;
}
renderTodoApp();
function onButtonClick() {
  let inputElement = document.querySelector("#input").value;
  let task = { completed: false, description: inputElement };
  todos.push(task);
  renderTodoApp();
}
