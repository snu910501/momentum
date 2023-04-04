import {useState} from 'react';

import styles from "./BackgroundItem.module.css";
import Clock from "../Clock/Clock";
import Todo from "../Todo/Todo";
import TodoList from '../Todo/TodoList'

const BackgroundItem = () => {

  const [todos, setTodos] = useState([]);

  function getTodo(enteredTodo) {
    setTodos([enteredTodo, ...todos])
    console.log('todos', todos);
  }

  return (
    <div className={styles["background-item"]}>
      <div className={styles["background-top"]}></div>
      <div className={styles["background-mid"]}>
        <Clock></Clock>
        <div>
          <Todo getTodoHandler={getTodo}></Todo>
        </div>
        <div>
          <TodoList items={todos}></TodoList>
        </div>
      </div>
      <div className={styles["background-bottom"]}></div>
    </div>
  );
};

export default BackgroundItem;
