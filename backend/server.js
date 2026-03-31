console.log("Running server...");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// import route
const contactRoutes = require("./routes/contactRoutes");

// use route
app.use("/contact", contactRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server working 🚀");
});

// start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});