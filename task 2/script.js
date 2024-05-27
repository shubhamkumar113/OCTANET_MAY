function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    if (taskText !== "") {
      var ul = document.getElementById("taskList");
      var li = document.createElement("li");
      li.innerHTML = taskText + '<button class="complete-btn" onclick="completeTask(this)">Complete</button><button class="delete-btn" onclick="deleteTask(this)">Delete</button>';
      ul.appendChild(li);
      input.value = "";
    } else {
      alert("Please enter a task!");
    }
  }

  function deleteTask(btn) {
    var li = btn.parentNode;
    li.parentNode.removeChild(li);
  }

  function completeTask(btn) {
    var li = btn.parentNode;
    li.style.textDecoration = "line-through";
    btn.parentNode.removeChild(btn);
  }