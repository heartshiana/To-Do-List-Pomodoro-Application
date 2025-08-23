function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskInput.value;

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "✖"; // cross symbol
    delBtn.classList.add("delete-btn");
    delBtn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    taskInput.value = "";
  }
}
