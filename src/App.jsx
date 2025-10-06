import ListGroup from "./my_components/ListGroup.jsx";
import Alert from "./my_components/Alert.jsx";
import Button from "./my_components/Button.jsx";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]); //list of tasks (empty to start)
  const [selectedIndex, setSelectedIndex] = useState(-1); //selected index: index of task if selected, -1 if none selected
  const [newTask, setNewTask] = useState(""); //new task input

  //toggle the selection of an item and update the selectedIndex as necessary
  const handleSelectItem = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  //add task to items list
  const addTask = () => {
    setItems([...items, newTask]);
    setNewTask("");
  }

  //edit a task
  const editTask = () => {
    if (selectedIndex === -1) return; //can only work if a task is selected
    //ask user for the new task value
    const updatedTask = prompt("Edit task:", items[selectedIndex]);
    //update in items
    const updated = [...items];
    //make a copy and update that copy, then setItems to that copy
    updated[selectedIndex] = updatedTask;
    setItems(updated);
  };

  //delete a task
  const deleteTask = () => {
    if (selectedIndex === -1) return; //can only work if a task is selected
    const updated = items.filter((_, ind) => ind !== selectedIndex); //remove item whose index is selectedIndex
    setItems(updated);
    setSelectedIndex(-1);
  };

  return (
    <div>
      <ListGroup items={items} heading = {'Tasks'} selectedIndex = {selectedIndex} onSelectItem={handleSelectItem}/>
      <input
        type="text"
        value={newTask}
        onChange={(task) => setNewTask(task.target.value)}
        placeholder="Type a task"
        className="form-control"
      />
      <Button onClick={addTask}>Add Task</Button>
      {selectedIndex !== -1 && (
        <div>
          <Button onClick={editTask}>Edit</Button>
          <Button onClick={deleteTask}>Delete</Button>
        </div>
      )}
    </div>
  );
}

export default App;