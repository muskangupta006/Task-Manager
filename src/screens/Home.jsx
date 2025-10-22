import React, { useState } from "react";
import ListGroup from "../my_components/ListGroup.jsx";
import Button from "../my_components/Button.jsx";
import { useNavigate } from "react-router-dom";

function Home({ tasks, setTasks }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();

  const handleSelectItem = (index) => {
    setSelectedIndex(selectedIndex === index ? -1 : index);
  };

  const deleteTask = () => {
    if (selectedIndex === -1) return;
    const updated = tasks.filter((_, i) => i !== selectedIndex);
    setTasks(updated);
    setSelectedIndex(-1);
  };

  return (
    <div className="container mt-3">
      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks yet. Click "Add Task" to create one.</p>
      ) : (
        <ListGroup
          items={tasks.map((t) => `${t.name} (Due: ${t.dueDate})`)}
          selectedIndex={selectedIndex}
          onSelectItem={handleSelectItem}
        />
      )}

      <div className="mt-3">
        <Button onClick={() => navigate("/add-task")}>Add Task</Button>
      </div>

      {selectedIndex !== -1 && (
        <div className="mt-3">
          <Button onClick={deleteTask}>Delete</Button>
        </div>
      )}
    </div>
  );
}

export default Home;
