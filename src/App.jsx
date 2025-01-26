import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]); // State for tasks
  const [newTask, setNewTask] = useState(""); // State for input value

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]); // Add new task to the list
      setNewTask(""); // Clear input
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove task by index
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">React To-Do List</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="border p-2 flex-1 rounded mr-2"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-6">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center mb-2 border p-2 rounded"
          >
            {task}
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
