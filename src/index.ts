import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: process.env.EMAIL || "email",
    current_datetime: new Date().toISOString(),
    github_url:
      process.env.REPOSITORY || "https://github.com/yourusername/your-repo"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
