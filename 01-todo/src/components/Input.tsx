import React, { useRef, useState } from "react";
import styles from "../styles/Input.module.scss";

interface InputProps {
  newTask: (value: string) => void;
}

export function Input({ newTask }: InputProps) {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    text && newTask(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.Input}>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => handleChange(e)}
        placeholder="Add a new task..."
        value={text}
      />
      <button type="submit">Add</button>
    </form>
  );
}
