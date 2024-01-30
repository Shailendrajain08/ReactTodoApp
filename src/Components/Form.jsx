import { useState } from "react";
import Styles from "./form.module.css";

export default function Form({ todoList, setTodoList }) {
  //   const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form className={Styles.todoForm} onSubmit={handleSubmit}>
        <div className={Styles.inputContainer}>
          <input
            className={Styles.modernInput}
            type="text"
            onChange={(e) => setTodo({name:e.target.value,done:false})}
            value={todo.name}
            placeholder="Enter Todo Items Here ..."
          />
          <button className={Styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
