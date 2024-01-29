import { useState } from "react"
import TodoItem from "./TodoItem"

export default function Todo() {
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setTodoList([...todoList,todo])
        setTodo("")
    } 
    return (
    <div >
        <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
                <button type="submit">Add</button>
        </form>
        {todoList.map((item) => (
            <TodoItem key={item} item = {item}/>
            ))}
    </div>
  )
}
