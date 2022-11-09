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

// Connect to MongoDB
const mongoose = require("mongoose");
const db = mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
db.then(() => {
  app.listen(port, () => console.log(`App listening on port ${port}!`));
}).catch((err) => console.log(err));

app.get("/", (req, res) => res.send("IoT Project"));
