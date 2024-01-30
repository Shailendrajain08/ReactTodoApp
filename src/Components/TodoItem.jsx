import Styles from "./todoItem.module.css";

export default function TodoItem({ item, todoList, setTodoList }) {
  function handleDelete(item) {
    setTodoList(todoList.filter((todo) => todo !== item));
  }

  function handleClick(item) {
    setTodoList(todoList.map((todo) => todo.name === item ? {...todo, done: !todo.done}: todo)
   )
  } 

  const className = item.done ? Styles.completed : "";
  return (
    <div className={Styles.item}>
      <div className={Styles.itemName}>
        <span className={className} onClick={()=>handleClick(item.name)}>{item.name}</span>

        <span>
          <button
            className={Styles.deleteButton}
            onClick={() => handleDelete(item)}
          >
            X
          </button>
        </span>
      </div>

      <hr className={Styles.line} />
    </div>
  );
}
