import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../features/tasks/taskSlice';
import TaskForm from '../components/TaskForm';
import TaskColumn from '../components/TaskColumn';
import SearchFilter from '../components/SearchFilter';

const Home = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector(state => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const grouped = {
    'To Do': [],
    'In Progress': [],
    'Done': [],
  };
  tasks.forEach(task => grouped[task.status]?.push(task));

  return (
    <div>
      <TaskForm />
      <SearchFilter />
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-6">
          <TaskColumn title="To Do" tasks={grouped['To Do']} />
          <TaskColumn title="In Progress" tasks={grouped['In Progress']} />
          <TaskColumn title="Done" tasks={grouped['Done']} />
        </div>
      )}
    </div>
  );
};

export default Home;
