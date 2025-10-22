import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../my_components/Button.jsx";

function AddTask({ tasks, setTasks }) {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const handleDone = () => {
    if (!taskName.trim() || !dueDate) {
      alert("Please enter both task name and due date.");
      return;
    }

    setTasks([...tasks, { name: taskName.trim(), dueDate }]);
    navigate("/"); // go back to home
  };

  return (
    <div className="container mt-3">
      <h2>Add New Task</h2>
      <div className="mb-3">
        <label>Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="form-control"
        />
      </div>

      <Button onClick={handleDone}>Done</Button>
    </div>
  );
}

export default AddTask;
