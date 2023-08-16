import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTask, removeTask } from "../reducers/taskReducer"; 


const TaskList = () => {
    const {tasks} = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const handleToggle = (id) => {
        const taskToUpdate = tasks.find((task) => task.id === id);
        if (taskToUpdate) {
            dispatch(
                updateTask({
                    ...taskToUpdate,
                    completed: !taskToUpdate.completed,
                })
            );
        }
    };

    const handleDelete = (id) => {
        dispatch(removeTask(id));
    };

    return (
        <div>
            <ul>
                {tasks && tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleToggle(task.id)}
                        />
                        <span>{task.title}</span>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
