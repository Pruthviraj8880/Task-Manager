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
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        className="border p-2 flex-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task..."
      />
      <button className="bg-blue-500 text-white px-4">Add</button>
    </form>
  );
}

export default TaskForm;