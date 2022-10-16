import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../models/remider";
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
