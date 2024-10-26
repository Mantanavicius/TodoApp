import React, { useRef, useState } from "react";

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
    newTask(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
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
