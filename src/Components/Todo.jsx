import { useState } from "react"
import Form from "./Form"
import TodoList from "./TodoList"
import Footer from "./Footer"

export default function Todo() {
    const [todoList, setTodoList] = useState([])
    const completeTodo = todoList.filter((todo) => todo.done).length;
    const totalTodos = todoList.length
    
    return (
    <div >
       <Form todoList={todoList} setTodoList={setTodoList}/>
        <TodoList todoList={todoList} setTodoList={setTodoList}/>
        <Footer completeTodo={completeTodo} totalTodos={totalTodos}/>
        
    </div>
  )
}
