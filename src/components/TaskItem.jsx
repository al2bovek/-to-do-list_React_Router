 import priorityStyle from "../utils/priorityStyle";

function TaskItem({ task, onDelete, onEditClick, onStatusChange }) {
  const handleStatusChange = (e) => {
    onStatusChange({ ...task, status: e.target.value });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="bg-gray-100 border-2 border-gray-400 flex items-center justify-between my-4 w-200 h-24 px-6 rounded-lg">
        <div className="flex flex-col w-full mr-6">
          <span className="text-base text-gray-500">Task</span>
          <p className="text-xl font-bold leading-tight">{task.title}</p>

          <div className="w-full bg-gray-300 h-2 rounded mt-2">
            <div
              className="bg-purple-600 h-2 rounded"
              style={{ width: `${task.progress || 0}%` }}
            />
          </div>
        </div>

        <div className="flex gap-6 items-center">
          <p
            className={`px-3 py-1 rounded border text-sm font-medium capitalize ${priorityStyle(
              task.priority
            )}`}
          >
            {task.priority}
          </p>

          <select
            className="border rounded px-2 py-1 text-sm"
            value={task.status}
            onChange={handleStatusChange}
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
<div className="flex justify-between gap-4 px-4 [&>button]:text-amber-600">
          <button
            className="cursor-pointer rounded-3xl w-8 h-8 hover:bg-fuchsia-50"
            onClick={() => onEditClick(task)}
          >
            Edit
          </button>

          <button
            className="hover:bg-red-400 rounded-3xl w-8 h-8 cursor-pointer"
            onClick={() => onDelete(task.id)}
          >
            Remove
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
