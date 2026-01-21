import { useEffect, useState } from "react";
import addButton from "../assets/plus.png";
import TaskList from "../components/TaskList";
import AddTaskModal from "../components/AddTaskModal";
import EditTaskModal from "../components/EditTaskModal";
import DeleteTaskModal from "../components/DeleteTaskModal";

function HomePage() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/task");
      if (!response.ok) throw new Error(`Response ${response.ok}`);
      const data = await response.json();
      setTasks(data.reverse());
    } catch (err) {
      setError(`${err.message}  "check json-server connection"`);
      console.log(err);
      // alert(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const createTask = async () => {
    try {
      const response = await fetch("http://localhost:3000/task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: taskTitle,
          priority,
          status: "To Do",
          progress: 0,
        }),
      });

      if (response.ok) {
        await getData();
        setTaskTitle("");
        setPriority("");
      }
    } catch (err) {
      setError(`${err.message}  ""`);
      console.log(err);
      // alert(err.message);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await fetch(
        `http://localhost:3000/task/${updatedTask.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedTask),
        }
      );

      if (response.ok) {
        await getData();
      }
    } catch (err) {
      setError(`${err.message}  ""`);
      console.log(err);
      // alert(err.message);
    }
  };

  const deleteTask = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/task/${taskToDelete}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        await getData();
      }
    } catch (err) {
      setError(`${err.message}  ""`);
      console.log(err);
      // alert(err.message);
    }
  };

  const handleStatusChange = (updatedTask) => {
    updateTask(updatedTask);
  };

  const handleEditClick = (task) => {
    setTaskToEdit(task);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setTaskToDelete(id);
    setShowDeleteModal(true);
  };

  const isFormValid = taskTitle.trim() !== "" && priority !== "";

  return (
    <div className="mt-6">
      <div className="flex justify-evenly items-center pb-6">
        <h2 className="text-3xl font-semibold">To Do List</h2>

        <button
          className="border-2 text-white font-medium border-purple-600 bg-purple-600 px-4 py-2.5 rounded-xl hover:bg-purple-700 transition cursor-pointer flex gap-3 items-center"
          onClick={() => setShowAddModal(true)}
        >
          <img className="w-4 h-4" src={addButton} alt="" />Add Task
        </button>
      </div>

      {error && (
        <p className="text-red-500 mb-4 text-2xl">Error: {error}</p>
      )}

      <TaskList
        tasks={tasks}
        onDelete={handleDeleteClick}
        onEditClick={handleEditClick}
        onStatusChange={handleStatusChange}
      />

      {showAddModal && (
        <AddTaskModal
          taskTitle={taskTitle}
          setTaskTitle={setTaskTitle}
          priority={priority}
          setPriority={setPriority}
          isFormValid={isFormValid}
          onAdd={createTask}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {showEditModal && taskToEdit && (
        <EditTaskModal
          task={taskToEdit}
          onClose={() => setShowEditModal(false)}
          onSave={updateTask}
        />
      )}

      {showDeleteModal && (
        <DeleteTaskModal
          onConfirm={async () => {
            await deleteTask();
            setShowDeleteModal(false);
          }}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
}

export default HomePage;
