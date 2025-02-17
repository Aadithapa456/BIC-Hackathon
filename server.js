require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./backend/config/dbConnect");
const PORT = process.env.PORT || 3500;

connectDB();

// middleware for cors
app.use(cors({ origin: "*" }));

// built-in middleware for json
app.use(express.json());

// middleware for cookie-parser
// app.use(cookieParser());

app.use("/api/test", require("./backend/routes/test"));
app.use("/api/users", require("./backend/routes/users"));
app.use("/api/auth", require("./backend/routes/auth"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB ...");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
