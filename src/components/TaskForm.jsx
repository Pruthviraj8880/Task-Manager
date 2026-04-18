import { useState } from "react";

function TaskForm({ setTasks }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    setTasks(prev => [
      ...prev,
      { id: Date.now(), text, completed: false }
    ]);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button>Add</button>
    </form>
  );
}

export default TaskForm;