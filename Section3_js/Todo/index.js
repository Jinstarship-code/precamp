const todoList = document.querySelector("#todo-list");
let todoInput = document.querySelector("#todo-input");

const keyCodeCheck = (event) => {
  if (window.event.keyCode == 13 && todoInput.value !== "") {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");

    newSpan.textContent = todoInput.value;
    todoList.appendChild(newLi).appendChild(newSpan);
    todoInput.value = "";
  } else if (window.event.keyCode == 13 && todoInput.value === "") {
    alert("할 일을 입력해주세요.");
  }
};

// todoInput.addEventListener("keydown", (event) => {
//   if (event.keyCode == 13) {
//     console.log("hi enter~");
//   }
// });
