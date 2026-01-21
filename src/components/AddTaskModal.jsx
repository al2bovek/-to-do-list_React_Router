function AddTaskModal({
  taskTitle,
  setTaskTitle,
  priority,
  setPriority,
  isFormValid,
  onAdd,
  onClose,
}) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-125 bg-white rounded-xl p-8 flex flex-col gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[24px] font-medium">Add Task</h2>
          <button onClick={onClose}>✖</button>
        </div>

        <label>
          <p className="my-2.5 font-medium text-gray-600 text-[18px]">Task</p>
          <input
            className="w-full h-11.25 px-5 border-2 text-gray-700 rounded-xl"
            type="text"
            placeholder="Type your task here..."
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </label>

        <label>
          <p className="my-2.5 font-medium text-gray-600 text-[18px]">
            Priority
          </p>
          <div className="flex gap-2.5">
            <button
              type="button"
              className={`px-4 py-2 w-20 rounded-xl border text-sm transition cursor-pointer ${priority === "high"
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-transparent text-red-600 border-red-600"
                }`}
              onClick={() => setPriority("high")}
            >
              High
            </button>

            <button
              type="button"
              className={`px-4 py-2 w-24 rounded-xl border text-sm transition cursor-pointer ${priority === "medium"
                  ? "bg-yellow-400 text-white border-yellow-400"
                  : "bg-transparent text-yellow-500 border-yellow-500"
                }`}
              onClick={() => setPriority("medium")}
            >
              Medium
            </button>

            <button
              type="button"
              className={`px-4 py-2 w-20 rounded-xl border text-sm transition cursor-pointer ${priority === "low"
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-transparent text-green-600 border-green-600"
                }`}
              onClick={() => setPriority("low")}
            >
              Low
            </button>
          </div>
        </label>

        <div className="flex justify-end">
          <button
            type="button"
            disabled={!isFormValid}
            onClick={() => {
              onAdd();
              onClose();
            }}
            className={`px-8 py-3 rounded-xl font-medium transition ${isFormValid
                ? "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
