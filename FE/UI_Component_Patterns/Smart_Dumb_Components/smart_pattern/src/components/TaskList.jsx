import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle }) {
  return (
    <ul className="bg-white shadow rounded-md divide-y divide-gray-200">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </ul>
  );
}
