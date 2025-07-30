// src/App.jsx
import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
    setText("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-300 via-pink-200 to-orange-200 flex flex-col items-center px-4 py-8">
      {/* Header on Top */}
      <Header />

      {/* Main Card Below */}
      <div className="w-full max-w-3xl bg-white bg-opacity-90 backdrop-blur-lg rounded-3xl shadow-2xl px-10 py-10 mt-6">
        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Add a new task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white shadow-md"
          />
          <button
            onClick={addTodo}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-md"
          >
            Add Task
          </button>
        </div>

        {/* To-Do List Centered */}
        <div className="flex justify-center">
          <ToDoList
            todos={todos}
            onDelete={deleteTodo}
            onToggleComplete={toggleComplete}
            onEdit={editTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
