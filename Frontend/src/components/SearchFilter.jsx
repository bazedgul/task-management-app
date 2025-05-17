import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, setFilter, setSearch } from '../features/tasks/taskSlice';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const { filter, search } = useSelector(state => state.tasks);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
    dispatch(fetchTasks(`?search=${e.target.value}&status=${filter}`));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
    dispatch(fetchTasks(`?search=${search}&status=${e.target.value}`));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search tasks..."
        className="px-3 py-2 border rounded dark:bg-gray-700 w-full md:w-1/2"
      />
      <select
        value={filter}
        onChange={handleFilterChange}
        className="px-3 py-2 border rounded dark:bg-gray-700 w-full md:w-1/4"
      >
        <option value="All">All</option>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
};

export default SearchFilter;
