import TodoItem from "./TodoItem"
import Styles from './todoList.module.css'

export default function TodoList({todoList, setTodoList}) {
    const sortedTodos = todoList.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  return (
    <div className={Styles.list}>
      {sortedTodos.map((item) => (
            <TodoItem key={item.name} item = {item} todoList={todoList} setTodoList={setTodoList}/>
            ))}
    </div>
  )
}
