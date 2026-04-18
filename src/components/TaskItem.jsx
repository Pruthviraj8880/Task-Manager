function TaskItem({ task, setTasks }) {

const toggleComplete = () => {
  setTasks(prev =>
    prev.map(t =>
      t.id === task.id
        ? { ...t, completed: !t.completed }
        : t
    )
  );
};
  const deleteTask = () => {
    setTasks(prev => prev.filter(t => t.id !== task.id));
  };
  return (
    <div>
  <input type="checkbox"
    checked={task.completed}
    onChange={toggleComplete} />

  <span className={task.completed ? "line-through" : ""}>
    {task.text}
  </span>

  <button onClick={deleteTask}>
    Delete
  </button>
    </div>
  );
}

export default TaskItem;