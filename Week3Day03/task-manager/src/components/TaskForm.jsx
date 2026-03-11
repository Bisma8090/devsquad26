// TaskForm.jsx
import { useState } from "react";
import api from "../services/api";

function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    if (!title) return;
const token = localStorage.getItem("jwtToken");

await api.post(
  "/tasks",
  { title },
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);    setTitle("");
    refresh();
  };

  return (
    <div className="w-[380px] p-10 rounded-2xl backdrop-blur-md bg-white/10 border border-white/40 text-white mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Add Task</h2>

      <form onSubmit={addTask} className="space-y-4">
        <input
          type="text"
          placeholder="New Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-transparent border-b border-white outline-none py-2 placeholder-white"
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskForm;