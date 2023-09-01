import React, {useState} from 'react';
import styles from './TodoList.module.css'

function TodoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    return (
        <div className={styles.todoWrap}>
            <h1 className={styles.todoTitle}>To-Do List</h1>
            <div className={styles.todoCreate}>
                <input
                    className={styles.todoInput}
                    type="text"
                    placeholder="Введите задачу"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className={styles.todoButton} onClick={addTask}>Добавить</button>
            </div>
            <div className={styles.todoList}>
                <div className={styles.todoLiWrap}>
                    <ol>
                        {tasks.map((task, index) => (<li className={styles.todoLi} key={index}>{task}</li>))}
                    </ol>
                </div>
            </div>
        </div>);
}

export default TodoList;
