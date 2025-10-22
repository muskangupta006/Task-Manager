import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./my_components/Header.jsx";
import Home from "./screens/Home.jsx";
import AddTask from "./screens/AddTask.jsx";

function App() {
  const [tasks, setTasks] = useState([]); // store all tasks here

  return (
    <BrowserRouter>
      <Header />

      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={<Home tasks={tasks} setTasks={setTasks} />}
          />
          <Route
            path="/add-task"
            element={<AddTask tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
