function TaskItem({ task, setTasks }) {

  const toggleComplete = () => {
    setTasks(prev =>
      prev.map(t =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };

  return (
    <div className="flex justify-between border p-2 mt-2">
      <span
        onClick={toggleComplete}
        className={task.completed ? "line-through cursor-pointer" : "cursor-pointer"}
      >
        {task.text}
      </span>

      <button onClick={deleteTask} className="text-red-500">
        Delete
      </button>
    </div>
  );
}

export default TaskItem;