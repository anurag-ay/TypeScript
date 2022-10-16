//Lec 1- Introduction

// In this section we are going to buil a simple api
// using node typeScript and express

//============================================================================================================================================================
//Lec 2- Executing TypeScript Code with Node

let x: number = 1;
console.log(x);
// Note: this code can't be executed because node is the
// .. execution engine for JavaScript code not Typescript
// so Here we have two options

// 1 . use typeScrip compiler to tranpile the .ts code to .js
// 2 . (preffered) use node Package called ts-node
// so npm init --yes
// npm i -D ts-node

// we can also install ts-node globally
//.. so that we can access it anywhere.

//============================================================================================================================================================
//Lec 3- Setting up an Express Project

// npm i express
// npm i -D typescript @types/node @types/express

// Note if we are going to give this project to the another developer
//.. we can't assume that they gonna have typescript installed globally on thier machine
// that's why we re-installed it locally again

// tsc --init

// index.ts
import express from "express";

const app = express();

app.listen(8000, () => console.log("Server started on port", 8000));

//============================================================================================================================================================
//Lec 4- Creating a Basic Route

// import express from "express";

// const app = express();

app.get("./", (req, res) => {
  res.send("hello world");
});
app.listen(8000, () => console.log("Server started on port", 8000));

//============================================================================================================================================================
//Lec 5- Creating a Router

// index.ts
// import express from "express";
// const app = express();

import remindersRouter from "./routers/reminder";

app.use("./reminder", remindersRouter);

app.get("./", (req, res) => {
  res.send("hello world");
});
app.listen(3000, () => console.log("Server started on port"));

// reminder.ts

import { Router } from "express";

const router = Router();

router.get("./", (req, res) => {
  res.send("List of reminders");
});

export default router;

//============================================================================================================================================================
//Lec 6- Parsing Request Bodies

// reminder.ts

import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
const router = Router();

router.get("/", (req, res) => {
  res.send("List of reminders");
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  res.json(title);
});

export default router;

// index.ts
import express from "express";
const app = express();

app.use(express.json());

import remindersRouter from "./routers/reminder";

app.use("/reminder", remindersRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => console.log("Server started on port"));

// new folder-> dtos
// create-reminder.ts
export default interface CreateReminderDto {
  title: string;
}

//============================================================================================================================================================
//Lec 7- Building an API

// reminder.ts
// import { Router } from "express";
// import CreateReminderDto from "../dtos/create-reminder";
// import Reminder from "../models/remider";
const router = Router();

const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.json(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto; // defining the type using interface
  const reminder = new Reminder(title); // instantiate reminders class and making an object
  reminders.push(reminder); // storing reminder in reminders array
  res.status(201).json(reminder); // json is used to send json object
});

export default router;

// index.ts
import express from "express";
const app = express();

app.use(express.json());

import remindersRouter from "./routers/reminder";

app.use("/reminder", remindersRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => console.log("Server started on port"));

// new folder models
// new file-> reminder.ts

export default class Reminder {
  id: number;
  isComplete: boolean;
  constructor(public title: string) {
    this.id = Date.now();
    this.isComplete = false;
  }
}

//============================================================================================================================================================
