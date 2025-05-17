import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchTasksAPI,
  createTaskAPI,
  updateTaskAPI,
  deleteTaskAPI,
} from './taskAPI';

export const fetchTasks = createAsyncThunk('tasks/fetch', async (query = '') => {
  const res = await fetchTasksAPI(query);
  return res.data.data;
});

export const createTask = createAsyncThunk('tasks/create', async (data) => {
  const res = await createTaskAPI(data);
  return res.data.data;
});

export const updateTask = createAsyncThunk('tasks/update', async ({ id, data }) => {
  const res = await updateTaskAPI(id, data);
  return res.data.data;
});

export const deleteTask = createAsyncThunk('tasks/delete', async (id) => {
  await deleteTaskAPI(id);
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
    error: null,
    filter: 'All',
    search: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.tasks.unshift(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(t => t._id === action.payload._id);
        if (index !== -1) state.tasks[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(t => t._id !== action.payload);
      });
  },
});

export const { setFilter, setSearch } = taskSlice.actions;
export default taskSlice.reducer;
