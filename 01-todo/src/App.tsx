import { useState, useEffect } from "react";
import { ToDoList } from "./components/ToDoList";
import { Input } from "./components/Input";
import { Task } from "./Task";
import { Statistics } from "./components/Statistics";
import styles from "./styles/App.module.scss";

export function App() {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks") as string)
      : [
          {
            id: 1,
            text: "Take out the trash",
            done: true,
          },
          {
            id: 2,
            text: "Grocery shopping",
            done: false,
          },
          {
            id: 3,
            text: "Learn React",
            done: false,
          },
        ]
  );
  const [tab, setTab] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleItemDelete = (id: number) => {
    setTasks(tasks.filter((task: Task) => task.id !== id));
  };

  const handleItemDone = (id: number) => {
    const updatedTasks = tasks.map((task: Task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const handleNewTask = (data: string) => {
    const updatedTasks = [
      ...tasks,
      { id: tasks.length + 1, text: data, done: false },
    ];
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.AppContainer}>
      <div className={styles.App}>
        <header className={styles.Header}>
          <span>To-Do</span>
        </header>
        <div className={styles.Tabs}>
          <button
            onClick={() => {
              setTab("all");
            }}
            style={
              tab === "all" ? { backgroundColor: "#000", color: "#fff" } : {}
            }
          >
            All
          </button>
          <button
            onClick={() => setTab("done")}
            style={
              tab === "done" ? { backgroundColor: "#000", color: "#fff" } : {}
            }
          >
            Done
          </button>
          <button
            onClick={() => setTab("notDone")}
            style={
              tab === "notDone"
                ? { backgroundColor: "#000", color: "#fff" }
                : {}
            }
          >
            Not completed
          </button>
        </div>
        <ToDoList
          tasks={
            tab === "all"
              ? tasks
              : tab === "done"
              ? tasks.filter((task: Task) => task.done)
              : tasks.filter((task: Task) => !task.done)
          }
          deleteItem={handleItemDelete}
          checkItem={handleItemDone}
        />
        <Input newTask={handleNewTask} />
        <Statistics tasks={tasks} />
        <button
          onClick={() => setTasks(tasks.filter((task: Task) => !task.done))}
        >
          Delete All Completed Todos
        </button>
      </div>
    </div>
  );
}
