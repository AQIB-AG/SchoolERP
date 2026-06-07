import "dotenv/config";
import express from "express";
import cors from "cors";
import { contactRouter } from "./routes/contact.js";

const app = express();
const PORT = Number(process.env.PORT) || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:3000";

app.use(
  cors({
    origin: [FRONTEND_URL, "http://127.0.0.1:3000"],
    methods: ["GET", "POST", "OPTIONS"],
  }),
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "schoolerp-backend" });
});

app.use("/api/contact", contactRouter);

app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`[SchoolERP Backend] Running at http://localhost:${PORT}`);
});
