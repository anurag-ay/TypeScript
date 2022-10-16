import axios from "axios";
import Reminder from "../models/reminder";

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

export default new ReminderService();
