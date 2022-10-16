import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import RemiderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";
import { title } from "process";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  // note: we can't use the async with this reminder
  // so we have to create it else where ex-> loadReminder
  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };

  const removeRemider = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addRemider(title);
    setReminders([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <RemiderList items={reminders} onRemoveReminder={removeRemider} />
    </div>
  );
}

export default App;
