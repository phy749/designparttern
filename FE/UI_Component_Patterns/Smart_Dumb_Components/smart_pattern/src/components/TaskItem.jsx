export default function TaskItem({ task, onToggle }) {
  return (
    <li className="flex items-center space-x-2 py-2 px-4 border-b border-gray-200">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-4 h-4 text-blue-500 rounded"
      />
      <span
        className={
          task.completed ? "line-through text-gray-400" : "text-gray-800"
        }
      >
        {task.title}
      </span>
    </li>
  );
}
