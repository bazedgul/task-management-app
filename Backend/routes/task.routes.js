import express from "express";
const tasksRouter = express.Router();

import {
  createTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

tasksRouter.post("/", createTask);
tasksRouter.get("/", getAllTasks);
tasksRouter.put("/:id", updateTask);
tasksRouter.delete("/:id", deleteTask);

export default tasksRouter;
