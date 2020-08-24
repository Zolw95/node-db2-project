const express = require("express");
const server = express();
const dotenv = require("dotenv");
const db = require("./data/dbConfig");
const vehicleRouter = require("./routers/vehicleRouter");

server.use(express.json());
server.use(vehicleRouter);

// Connect to database
db();

// Load env vars
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 4000;

server.get("/", (req, res) => {
  res.send(`API Running`);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = server;
