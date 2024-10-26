import { ToDoItem } from "./ToDoItem";
import styles from "../styles/todoList.module.scss";

interface ToDoListProps {
  tasks: {
    id: number;
    text: string;
    done: boolean;
  }[];
  deleteItem: (id: number) => void;

  checkItem: (id: number) => void;
}

export function ToDoList({ tasks, deleteItem, checkItem }: ToDoListProps) {
  return (
    <div className={styles.ToDoList}>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <ToDoItem
              id={task.id}
              text={task.text}
              done={task.done}
              deleteItem={deleteItem}
              checkItem={checkItem}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
