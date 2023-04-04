import {useState} from 'react'
import styles from "./TodoItem.module.css";

const TodoItem = (props) => {
  const [isFinish, setIsFinish] = useState(false);

  function onFinishHandler() {
    if (isFinish == true) {
      setIsFinish(false);
    } else {
      setIsFinish(true);
    }
  }
  return (
    <div
      onClick={onFinishHandler}
      className={`${styles["todo-item"]} ${
        isFinish ? styles.finish : styles.unfinish
      }`}
    >
      {props.todo}
    </div>
  );
};

export default TodoItem;
