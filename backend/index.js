// server/index.js

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dbConnect = require("./server/configs/database");
const contactRoutes = require("./server/routes/contactRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS config — better for production
app.use(cors({
    origin: process.env.CLIENT_URL || "*", // you can set your frontend URL in .env
    credentials: true,
}));

// Connect to DB
dbConnect();

// Routes
app.use("/api/v1/contact", contactRoutes);

// Health check route
app.get("/", (req, res) => {
    res.send("Portfolio API is running");
});

// 404 fallback
app.use("*", (req, res) => {
    res.status(404).json({ success: false, message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
