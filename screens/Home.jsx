import React, { useState } from "react";
import ListGroup from "./my_components/ListGroup.jsx";
import Button from "./my_components/Button.jsx";

function Home() {
  const [items, setItems] = useState([]); // list of tasks (empty to start)
  const [selectedIndex, setSelectedIndex] = useState(-1); // index of selected task, -1 if none selected
  const [newTask, setNewTask] = useState(""); // new task input

  // toggle selection of an item
  const handleSelectItem = (index) => {
    setSelectedIndex(selectedIndex === index ? -1 : index);
  };

  // add a new task
  const addTask = () => {
    if (!newTask.trim()) return; // prevent adding empty tasks
    setItems([...items, newTask.trim()]);
    setNewTask("");
  };

  // edit selected task
  const editTask = () => {
    if (selectedIndex === -1) return;
    const updatedTask = prompt("Edit task:", items[selectedIndex]);
    if (updatedTask === null || !updatedTask.trim()) return; // cancel or empty input
    const updated = [...items];
    updated[selectedIndex] = updatedTask.trim();
    setItems(updated);
  };

  // delete selected task
  const deleteTask = () => {
    if (selectedIndex === -1) return;
    const updated = items.filter((_, i) => i !== selectedIndex);
    setItems(updated);
    setSelectedIndex(-1);
  };

  return (
    <div className="container mt-3">
      <ListGroup
        items={items}
        heading="Tasks"
        selectedIndex={selectedIndex}
        onSelectItem={handleSelectItem}
      />

      <div className="mt-3">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Type a task"
          className="form-control mb-2"
        />
        <Button onClick={addTask}>Add Task</Button>
      </div>

      {selectedIndex !== -1 && (
        <div className="mt-3">
          <Button onClick={editTask}>Edit</Button>
          <Button onClick={deleteTask}>Delete</Button>
        </div>
      )}
    </div>
  );
}

export default Home;
