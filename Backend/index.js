import express from "express"
import dotenv from "dotenv";
import cors  from "cors";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/task.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Error Handler
app.use(errorHandler);

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
