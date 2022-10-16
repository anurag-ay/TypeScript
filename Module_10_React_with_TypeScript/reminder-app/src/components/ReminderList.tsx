import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  // it requires List of remiders
  // so need to create the interface for reminder

  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function RemiderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          {item.title}
          <button
            onClick={() => onRemoveReminder(item.id)}
            className="btn btn-outline-danger mx-2 rounded-pill"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default RemiderList;
