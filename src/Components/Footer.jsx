import React from 'react'
import Styles from "./footer.module.css";

export default function Footer({completeTodo, totalTodos}) {
  return (
    <div className={Styles.footer}>
        <span className={Styles.item}>Total Todos : {totalTodos}</span>
      <span className={Styles.item}>Completed Todos : {completeTodo}</span>
    </div>
  )
}
