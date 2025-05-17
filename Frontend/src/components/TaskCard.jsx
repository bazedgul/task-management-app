import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../features/tasks/taskSlice';


const statusColors = {
  'To Do': 'bg-blue-100 text-blue-800',
  'In Progress': 'bg-yellow-100 text-yellow-800',
  'Done': 'bg-green-100 text-green-800',
};

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task._id));
    }
  };

  const handleStatusChange = (e) => {
    dispatch(updateTask({ id: task._id, data: { status: e.target.value } }));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 mb-4 transition-all hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{task.title}</h2>
        {task.isOverdue && (
          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Overdue</span>
        )}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{task.description}</p>
      {task.deadline && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
      )}
      <div className="flex items-center justify-between">
        <select
          value={task.status}
          onChange={handleStatusChange}
          className={`text-sm px-2 py-1 rounded ${statusColors[task.status]} border-none`}
        >
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 hover:scale-105 text-white px-3 py-1 rounded-lg transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
