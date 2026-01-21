 function DeleteTaskModal({ onConfirm, onCancel }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      onClick={onCancel}
    >
      <div
        className="bg-white rounded-2xl w-130 p-10 flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[22px] font-semibold text-center">
          Are you sure you want to delete this task?
        </h2>

        <div className="flex justify-center gap-6">
          <button
            onClick={onConfirm}
            className="bg-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-purple-700 transition"
          >
            Delete
          </button>

          <button
            onClick={onCancel}
            className="border border-gray-300 px-8 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteTaskModal;
