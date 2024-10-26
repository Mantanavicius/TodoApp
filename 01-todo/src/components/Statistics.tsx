import { Task } from '../Task';
import styles from "./Statistics.module.scss";

interface StatisticsProps {
    tasks: Task[];
}

export function Statistics ({ tasks } : StatisticsProps) {
  return (
    <div className={styles.Statistics}>
      {tasks.length} todos (
      {tasks.length - tasks.filter((task: Task) => task.done).length}{" "}
      incomplete, {tasks.filter((task: Task) => task.done).length} done)
    </div>
  );
}
