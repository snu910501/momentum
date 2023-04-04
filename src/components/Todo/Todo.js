import {useState} from 'react';
import styles from './Todo.module.css';

const Todo = (props) => {

  const [enteredInput, setEnteredInput] = useState('');

  function inputChangeHandler(event) {
    setEnteredInput(event.target.value)
  }

  function submitHandler(event){
    event.preventDefault();
    props.getTodoHandler(enteredInput);
    setEnteredInput('');
  }

  return (
    <form onSubmit={submitHandler} className={styles.todo}>
      <label>What is your main focus for today?</label>
      <input type="text" value={enteredInput} onChange={inputChangeHandler}></input>
    </form>
  );
};

export default Todo;