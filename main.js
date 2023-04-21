let addTodo = document.querySelector(".addTodo")
let inputField = document.querySelector(".inputField")
let todos = document.querySelector(".todos")





addTodo.addEventListener("click", () => {
  console.log("click")
  //Create LI component
  let todo = document.createElement("li")
  //Create BUTTON component
  let removeBtn = document.createElement("button")
  removeBtn.innerHTML = "Remove"
  removeBtn.className = "remove"
  // Element structure
  todo.innerText = inputField.value
  todos.appendChild(todo)
  todo.appendChild(removeBtn)
  inputField.value = "";


  // remove todo
  removeBtn.addEventListener("click", () => {
    console.log("button click")
    todos.removeChild(todo)
  });
})
