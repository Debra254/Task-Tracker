document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("taskForm");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const title = document.getElementById("title").value.trim();
      const description = document.getElementById("description").value.trim();
      const dueDate = document.getElementById("dueDate").value;
  
      if (!title || !description || !dueDate) {
        alert("Please fill in all fields.");
        return;
      }
  
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate
      };
  
      // Retrieve existing tasks from localStorage
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
      // Add the new task
      tasks.push(newTask);
  
      // Save back to localStorage
      localStorage.setItem("tasks", JSON.stringify(tasks));
  
      // Clear form
      form.reset();
  
      alert("Task added successfully!");
    });
  });
  