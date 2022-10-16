// Lec 1- Introduction

// In this section we are going to talk about Building the React applications with typeScript

//=============================================================================================================================================
// Lec 2- Creating a React App with TypeScript

// Let see how we can create react project with typeScript
// prerequisite-> React

// npx create-react-app reminder-app --template typescript

//=============================================================================================================================================
// Lec 3- Adding Bootstrap

// npm i bootstrap

// add bootstrap in index.tsx
// import "bootstrap/dist/css/bootstrap.min.css";

// App.tsx

// function App() {
//   return (
//     <div className="App">
//       <button className="btn btn-primary">Click me</button>
//     </div>
//   );
// }

//=============================================================================================================================================
// Lec 4- Creating a Component - Title

// Now Lets create a component for showing the list of
//.. rimiders

// new folder-> components
// new file-> Reminder.tsx

interface ReminderListProps {
  // it requires List of remiders
  // so need to create the interface for reminder

  items: Reminder[];
}

// function RemiderList({ items }: ReminderListProps) {
//   return (
//     <ul>
//       {items.map((item) => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </ul>
//   );
// }

//new folder-> modeles
// new file-> reminder.ts

export default interface Reminder {
  id: number;
  title: string;
}

// App.tsx
const remiders: Reminder[] = [{ id: 1, title: "Remider 1" }];

// function App() {
//   return (
//     <div className="App">
//       <RemiderList items={remiders}></RemiderList>
//     </div>
//   );
// }

//=============================================================================================================================================
// Lec 5- Using the State Hook

Now Lets talk About the state management using the state hook

// App.tsx
// function App() {
//   const [reminders, setReminders] = useState<Reminder[]>([
//     { id: 1, title: "Remider 1" },
//   ]);

//   return (
//     <div className="App">
//       <RemiderList items={reminders}></RemiderList>
//     </div>
//   );
// }

//=============================================================================================================================================
// Lec 6- Calling the Backend

// in this we gonna use the fake backend service called
// Json Placeholder

// Note we are not gonna write all the code of calling the backend service
// in the same component it will be responsibility of other module

// new folder service
// new file-> remider.ts
// npm i axios -> for sending the http request to the backend

// import axios from "axios";
// import Reminder from "../models/reminder";

// axios comes with type definition file

class ReminderService {
  http = axios.create({
    // adding url of the backend
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders() {
    // get is the generic function
    const response = await this.http.get<Reminder[]>("/todos");
    // returning for state change
    return response.data;
  }

  async addRemider(title: string) {
    // pushing to the database
    const response = await this.http.post<Reminder>("/todo", { title });
    // returning for state change
    return response.data;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete("/todo/" + id);
    return response.data;
  }
}

// Note insted of returnig the whole class we are going to return the instance of this service
// so that we don't have to re-> instantiate it again and again

// export default new ReminderService();

//=============================================================================================================================================
// Lec 7- Using the Effect Hook

// Now our service is ready
// so lets use in the app module

// app.tsx

// import reminderService from "./servies/reminder";
// function App() {
//   const [reminders, setReminders] = useState<Reminder[]>([]);

//   // note: we can't use the async with this reminder
//   // so we have to create it else where ex-> loadReminder

//   useEffect(() => {
//     loadReminders();
//   }, []);

//   const loadReminders = async () => {
//     const reminders = await reminderService.getReminders();
//     setReminders(reminders);
//   };
//   return (
//     <div className="App">
//       <RemiderList items={reminders}></RemiderList>
//     </div>
//   );
// }

//=============================================================================================================================================
// Lec 8- Handling Events

// Now lets add the button for delete next to each reminder

// App.tsx
// function App() {
//   const [reminders, setReminders] = useState<Reminder[]>([]);

//   // note: we can't use the async with this reminder
//   // so we have to create it else where ex-> loadReminder
//   useEffect(() => {
//     loadReminders();
//   }, []);

//   const loadReminders = async () => {
//     const reminders = await reminderService.getReminders();
//     setReminders(reminders);
//   };

//   const removeRemider = (id: number) => {
//     setReminders(reminders.filter((reminder) => reminder.id !== id));
//   };

//   return (
//     <div className="App">
//       <RemiderList items={reminders} onRemoveReminder={removeRemider} />
//     </div>
//   );
// }

// ReminderList.tsx
// interface ReminderListProps {
//   // it requires List of remiders
//   // so need to create the interface for reminder

//   items: Reminder[];
//   onRemoveReminder: (id: number) => void;
// }

// function RemiderList({ items, onRemoveReminder }: ReminderListProps) {
//   return (
//     <ul className="list-group">
//       {items.map((item) => (
//         <li className="list-group-item" key={item.id}>
//           {item.title}
//           <button
//             onClick={() => onRemoveReminder(item.id)}
//             className="btn btn-outline-danger mx-2 rounded-pill"
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

//=============================================================================================================================================
// Lec 9- Building a Form

// Now lets create a form for adding the new reminder for this project

// components/ NewReminder.tsx
// function NewReminder(): JSX.Element {
//   const [title, setTitle] = useState("");
//   return (
//     <form>
//       <label htmlFor="title">Enter Reminder</label>
//       <input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         id="title"
//         type="text"
//         className="form-control"
//       />
//       <button type="submit" className="btn btn-primary rounded-pill my-3">
//         Add Reminder
//       </button>
//     </form>
//   );
// }

// render it in the App component

// //app.tsx

// function App() {
//   const [reminders, setReminders] = useState<Reminder[]>([]);

//   // note: we can't use the async with this reminder
//   // so we have to create it else where ex-> loadReminder
//   useEffect(() => {
//     loadReminders();
//   }, []);

//   const loadReminders = async () => {
//     const reminders = await reminderService.getReminders();
//     setReminders(reminders);
//   };

//   const removeRemider = (id: number) => {
//     setReminders(reminders.filter((reminder) => reminder.id !== id));
//   };

//   return (
//     <div className="App">
//       <NewReminder />
//       <RemiderList items={reminders} onRemoveReminder={removeRemider} />
//     </div>
//   );
// }

//=============================================================================================================================================
// Lec 10- Handling Form Submission

// app.tsx

// interface NewReminderProps {
//   onAddReminder: (title: string) => void;
// }

// function NewReminder({ onAddReminder }: NewReminderProps): JSX.Element {
//   const [title, setTitle] = useState("");

//   const submitForm = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!title) return;
//     onAddReminder(title);
//     setTitle("");
//   };

//   return (
//     <form onSubmit={submitForm}>
//       <label htmlFor="title">Enter Reminder</label>
//       <input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         id="title"
//         type="text"
//         className="form-control"
//       />
//       <button type="submit" className="btn btn-primary rounded-pill my-3">
//         Add Reminder
//       </button>
//     </form>
//   );
// }

// // NewReminder.tsx

// function App() {
//   const [reminders, setReminders] = useState<Reminder[]>([]);

//   // note: we can't use the async with this reminder
//   // so we have to create it else where ex-> loadReminder
//   useEffect(() => {
//     loadReminders();
//   }, []);

//   const loadReminders = async () => {
//     const reminders = await reminderService.getReminders();
//     setReminders(reminders);
//   };

//   const removeRemider = (id: number) => {
//     setReminders(reminders.filter((reminder) => reminder.id !== id));
//   };

//   const addReminder = async (title: string) => {
//     const newReminder = await reminderService.addRemider(title);
//     setReminders([newReminder, ...reminders]);
//   };

//   return (
//     <div className="App">
//       <NewReminder onAddReminder={addReminder} />
//       <RemiderList items={reminders} onRemoveReminder={removeRemider} />
//     </div>
//   );
// }

//=============================================================================================================================================
