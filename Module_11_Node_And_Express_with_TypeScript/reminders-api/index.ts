import express from "express";
const app = express();

app.use(express.json());

import remindersRouter from "./routers/reminder";

app.use("/reminder", remindersRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => console.log("Server started on port"));
