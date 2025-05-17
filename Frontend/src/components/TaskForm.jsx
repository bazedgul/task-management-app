import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../features/tasks/taskSlice';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    status: 'To Do',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || formData.title.length > 100) {
      return setError('Title is required and must be under 100 characters.');
    }
    if (formData.description.length > 500) {
      return setError('Description must be under 500 characters.');
    }
    setError(null);
    dispatch(createTask(formData));
    setFormData({ title: '', description: '', deadline: '', status: 'To Do' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4 bg-gray-50 dark:bg-gray-800 p-4 rounded">
      <h2 className="text-xl font-semibold">Create New Task</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Task Title"
        className="w-full px-3 py-2 border rounded dark:bg-gray-700"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        rows="3"
        className="w-full px-3 py-2 border rounded dark:bg-gray-700"
      ></textarea>
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        className="px-3 py-2 border rounded dark:bg-gray-700"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-700 hover:scale-105 transition-transform duration-150"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;