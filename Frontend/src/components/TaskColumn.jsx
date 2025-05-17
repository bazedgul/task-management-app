import React from "react";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, tasks }) => {
  return (
    <div className="w-full md:w-1/3">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center italic mt-4">
          No tasks in this column
        </p>
      ) : (
        tasks.map((task) => <TaskCard key={task._id} task={task} />)
      )}
    </div>
  );
};

export default TaskColumn;
