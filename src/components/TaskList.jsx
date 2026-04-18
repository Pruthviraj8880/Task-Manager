import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} setTasks={setTasks} />
      ))}
    </div>
  );
}

export default TaskList;