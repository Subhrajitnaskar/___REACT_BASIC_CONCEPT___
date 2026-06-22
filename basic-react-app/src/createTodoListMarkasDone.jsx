import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([
        { task: "sample-task", id: uuidv4(), isDone:false },
    ]);

    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id)
        );
    };

    // let upperCaseAll = () => {
    //     let newArr = todos.map((todo) => {
    //         return {
    //             ...todo,
    //         };
    //     });
    //     console.log(newArr);
    // };

    // let upperCaseAll = () => {
    //     setTodos (
    //         todos.map((todo) => {
    //             return {
    //                 ...todo,
    //                 task: todo.task.toUpperCase(),
    //             };
    //         })
    //     );
    // };

    let markAllDone = () => {
        setTodos((todos) => (
            todos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            })
        ));
    };

    let MarkasDone = (id) => {
        // console.log("one");
         setTodos((todos) => (
            todos.map((todo) => {
            if(todo.id == id) {
                     return {
                    ...todo,
                    isDone: true,
                };
            } else {
                return todo;
            }
                
            })
        ));

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
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {} }>
                            {todo.task}
                            </span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>
                            delete
                        </button>
                         <button onClick={() => MarkasDone(todo.id)}>
                           Mark As Done
                        </button>
                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={markAllDone}>Mark All as Done</button>
        </div>
    );
}