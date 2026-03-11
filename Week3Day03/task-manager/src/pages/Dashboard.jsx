// TaskList.jsx
import { useEffect, useState } from "react";
import api from "../services/api";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="w-[380px] p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/40 text-white mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Tasks</h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="flex justify-between items-center bg-white/10 p-3 rounded-md"
          >
            <p>{task.title}</p>
            <button
              onClick={() => deleteTask(task._id)}
              className="text-red-500 font-semibold hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
        {tasks.length === 0 && (
          <p className="text-center text-white/60">No tasks yet!</p>
        )}
      </div>
    </div>
  );
}

export default TaskList;