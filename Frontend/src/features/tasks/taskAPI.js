import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchTasksAPI = (query = "") => axios.get(`${baseUrl}/tasks?${query}`);
export const createTaskAPI = (data) => axios.post(`${baseUrl}/tasks`, data);
export const updateTaskAPI = (id, data) => axios.put(`${baseUrl}/tasks/${id}`, data);
export const deleteTaskAPI = (id) => axios.delete(`${baseUrl}/tasks/${id}`);
