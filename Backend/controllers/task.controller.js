import Task from "../models/task.model.js";
import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";

// Helper: Check duplicate title in same status
const isDuplicateTitle = async (title, status, excludeId = null) => {
  const query = { title, status };
  if (excludeId) query._id = { $ne: excludeId };
  const existing = await Task.findOne(query);
  return !!existing;
};

export const createTask = async (req, res, next) => {
  try {
    const { title, description, deadline, status } = req.body;

    if (!title || title.length > 100) {
      return next(new ApiError(400, "Title is required and must be under 100 characters."));
    }

    if (description && description.length > 500) {
      return next(new ApiError(400, "Description must be under 500 characters."));
    }

    const duplicate = await isDuplicateTitle(title, status || "To Do");
    if (duplicate) {
      return next(new ApiError(409, "Duplicate title in same status group."));
    }

    const task = await Task.create({ title, description, deadline, status });
    res.status(201).json(new ApiResponse(201, task, "Task created"));
  } catch (err) {
    next(err);
  }
};

export const getAllTasks = async (req, res, next) => {
  try {
    const { status, search } = req.query;

    let filter = {};
    if (status && ["To Do", "In Progress", "Done"].includes(status)) {
      filter.status = status;
    }

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    const tasks = await Task.find(filter).sort({ updatedAt: -1 });

    const enhanced = tasks.map(task => {
      const isOverdue = task.deadline && new Date(task.deadline) < new Date();
      return { ...task._doc, isOverdue };
    });

    res.json(new ApiResponse(200, enhanced, "Tasks fetched"));
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, deadline, status } = req.body;

    const task = await Task.findById(id);
    if (!task) return next(new ApiError(404, "Task not found"));

    if (title) {
      if (title.length > 100) return next(new ApiError(400, "Title too long"));
      const duplicate = await isDuplicateTitle(title, status || task.status, id);
      if (duplicate) return next(new ApiError(409, "Duplicate title in same status"));
      task.title = title;
    }

    if (description && description.length > 500)
      return next(new ApiError(400, "Description too long"));

    if (description !== undefined) task.description = description;
    if (deadline !== undefined) task.deadline = deadline;
    if (status) task.status = status;

    await task.save();
    res.json(new ApiResponse(200, task, "Task updated"));
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await Task.findByIdAndDelete(id);
    if (!task) return next(new ApiError(404, "Task not found"));

    res.json(new ApiResponse(200, task, "Task deleted"));
  } catch (err) {
    next(err);
  }
};
