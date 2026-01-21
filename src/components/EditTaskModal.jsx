 import { useState } from "react";

function EditTaskModal({ task, onClose, onSave }) {
  const [title, setTitle] = useState(task.title);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [progress, setProgress] = useState(task.progress ?? 0);

  const handleSave = () => {
    onSave({
      ...task,
      title,
      priority,
      status,
      progress: Number(progress),
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-120 p-8 rounded-xl flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold">Edit Task</h2>

        <label>
          <p className="font-medium text-gray-600">Title</p>
          <input
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <p className="font-medium text-gray-600">Priority</p>
          <select
            className="w-full border p-2 rounded"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>

        <label>
          <p className="font-medium text-gray-600">Status</p>
          <select
            className="w-full border p-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
        </label>

        <label>
          <p className="font-medium text-gray-600">Progress</p>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            className="w-full"
          />
          <p className="text-sm mt-1">{progress}%</p>
        </label>

        <div className="flex justify-end gap-4">
          <button
            className="px-6 py-2 bg-gray-200 rounded"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="px-6 py-2 bg-purple-600 text-white rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;
