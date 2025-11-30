require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./route/authRoutes");
const courseRoutes = require("./route/courseRoutes");

const app = express();

// middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

connectDB();

// test
app.get("/", (req, res) => {
    res.json({ message: "backend is running well!" });
});

// auth
app.use("/api/auth", authRoutes);

// courses
app.use("/api/courses", courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
