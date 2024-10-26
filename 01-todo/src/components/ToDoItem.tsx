import styles from "./todoItem.module.scss";

interface ToDoItemProps {
  id: number;
  text: string;
  done: boolean;
  deleteItem: (value: number) => void;
  checkItem: (value: number) => void;
}

export const ToDoItem = ({
  id,
  text,
  done,
  deleteItem,
  checkItem,
}: ToDoItemProps) => {

  const handleChange = () => {
    checkItem(id);
  };

  return (
    <div className={styles.todoItem}>
      <div className="todo-content">{text}</div>
      <input
        type="checkbox"
        checked={done}
        onChange={handleChange}
      />
      <button onClick={() => deleteItem(id)}>Delete</button>
    </div>
  );
};
