import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onEditClick, onStatusChange }) {
  return (
    <div className="flex flex-col items-center">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEditClick={onEditClick}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}

export default TaskList;



