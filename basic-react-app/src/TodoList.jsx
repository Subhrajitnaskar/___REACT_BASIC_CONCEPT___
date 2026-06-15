import { useState } from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(["sample task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        console.log(event.target.value);
        setNewTodo(event.target.value);
    };

    return (
        <div>
            <input
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />

            <br />
            <button onClick={addNewTask}>Add Task</button>

            <br />
            <br />
            <br />

            <hr />
            <h4>Tasks Todo</h4>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}