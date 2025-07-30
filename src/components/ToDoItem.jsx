import { useState } from "react";

const ToDoItem = ({ todo, onDelete, onToggleComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between bg-white bg-opacity-80 border border-purple-200 p-4 rounded-full shadow hover:shadow-lg transition-all duration-200 hover:scale-[1.01]">
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="flex-1 p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      ) : (
        <span
          onClick={() => onToggleComplete(todo.id)}
          className={`flex-1 text-lg cursor-pointer select-none transition-all ${
            todo.completed
              ? "line-through text-gray-400"
              : "text-gray-800 hover:text-purple-600"
          }`}
        >
          {todo.text}
        </span>
      )}
      <div className="flex gap-3 ml-4">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="text-green-600 font-medium hover:underline"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-yellow-500 font-medium hover:underline"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 font-medium hover:underline"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
