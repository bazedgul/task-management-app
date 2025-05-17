import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100,
    trim: true,
  },
  description: {
    type: String,
    maxlength: 500,
  },
  deadline: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do",
  },
}, {
  timestamps: true
});

export default mongoose.model("Task", taskSchema);
