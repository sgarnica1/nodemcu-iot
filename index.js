if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// express server on port 3000
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// CORS
const cors = require("cors");
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200,
  })
);

// MIDDLEWARE
app.use(express.json());

// Connect to MySQL
require("./src/sql/config");
app.listen(port, () => console.log(`App listening on port ${port}!`));


// Routes
const indexRouter = require("./src/routes/index");
app.use("/data", indexRouter);
app.get("/", (req, res) => res.status(200).json({ message: "NodeMCU IoT Project" }));
