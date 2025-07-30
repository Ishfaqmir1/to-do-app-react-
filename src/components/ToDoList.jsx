import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onDelete, onToggleComplete, onEdit }) => (
  <ul className="w-full max-w-2xl space-y-4">
    {todos.map((todo) => (
      <ToDoItem
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        onToggleComplete={onToggleComplete}
        onEdit={onEdit}
      />
    ))}
  </ul>
);

export default ToDoList;
