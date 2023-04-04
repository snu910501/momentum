import { useState } from "react";
import styles from "./TodoList.module.css";
import TodoItem from './TodoItem';

const TodoList = (props) => {

  return (
    <div className={styles["todo-list"]}>
      {props.items.map((todo) => {
        return (
          <div onClick={onFinishHandler}>
            <TodoItem todo={todo}></TodoItem>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
