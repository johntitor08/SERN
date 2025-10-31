import express from "express";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/users", userRouter);

// Test Supabase connection
app.get("/api/health", async (req, res) => {
  try {
    // Simple query to test connection
    const { data, error } = await supabase
      .from("users")
      .select("count")
      .limit(1);

    if (error) throw error;

    res.status(200).json({
      message: "Server is running",
      database: "Supabase connected successfully",
    });
  } catch (error) {
    console.error("Supabase connection error:", error);
    res.status(500).json({
      message: "Server is running",
      database: "Supabase connection failed",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Supabase URL: ${process.env.SUPABASE_URL}`);
});

export default app;
