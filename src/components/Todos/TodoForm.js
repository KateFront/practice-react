import {useState} from "react";
import styles from'./TodoForm.module.css';
import Button from "../UI/Button";

const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input value={text}
                       placeholder={"Enter new todo"}
                       onChange={(e) => setText(e.target.value)}
                />
                <Button title={"Submit"} type={'submit'}>Submit</Button>
            </form></div>

    );
};

export default TodoForm;