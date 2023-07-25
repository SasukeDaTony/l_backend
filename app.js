const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())

app.get("/", (request, response) => {
    response.status(200).json({ data: "Service is running" });
  });
  