const server = require("express")();
const express = require("express");
const mongoose = require("mongoose");
const { todoRouter } = require("./routers/todoRouter");
const cors = require("cors");
const PORT = 3000;
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json({ limit: "30mb" }));
server.use("/show", todoRouter);

mongoose
  .connect(
    "mongodb+srv://dken:123456test@cluster0.qmozril.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to Database");
    server.listen(PORT, () => {
      console.log("Server is listening on port: " + PORT);
    });
  })
  .catch((err) => console.log(err));
