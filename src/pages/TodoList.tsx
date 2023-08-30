import { useState } from "react";
import { SiCachet } from "react-icons/si";
import {BsTrash3} from "react-icons/bs";

interface list {
    id: number;
    taskName: string;
    completed: boolean;
    isEditting: boolean;
}

export const AddTask = () => {

    const [task, setTask] = useState("");
    const [taskValue, setTaskValue] = useState("");
    const [list, setList] = useState<list[]>([]);

    const addTask = ()=>{
        const newTask = {
            id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
            taskName: task,
            completed: false,
            isEditting: false
        }
        setList([...list, newTask]);
    }

    const deleteTask = (id: number) => {
       setList(list.filter((task) => task.id !== id));
    }
    const deleteAllTasks = () => {
        setList([]);
    }
    const isEditTask = (id: number) => {
        setList(list.map((task)=> task.id === id ?
         {...task, isEditting: !task.isEditting} : task
        ))
    }
    const cancelEdit = (id:number) => {
        setList(list.map((task)=> task.id === id ?
         {...task, isEditting: !task.isEditting} : task
        ))
    }

    const editTask = (id:number) => {
        setList(list.map((task)=> task.id === id ?
         {...task, taskName: taskValue, isEditting: !task.isEditting} : task
        ))
    }

    const updateTask = (id: number) => {
        setList(list.map((task) => {
            if (task.id === id) {
                return {...task, completed: !task.completed}
            }
            else {
              return task;
            }
        }))
    }

    return <div className="todoApp">
        <h1>Make Your Own "TO DO LIST" Now! ˚ʚ♡ɞ˚</h1>
        <div className="addTask">
    <input type="text" placeholder="Add Task..." onChange={(e)=>{ setTask(e.target.value)}}/>
    <button onClick={addTask}>Add</button>
    <button onClick={deleteAllTasks}>Delete All</button>
    
    </div>
    <div className="taskList">
    {list?.map((task) => (
        task.isEditting ? (<div><input type="text" placeholder={task.taskName} onChange={(e)=>{ setTaskValue(e.target.value)}}/>
    <button onClick={()=>editTask(task.id)}>Edit</button><button onClick={()=>cancelEdit(task.id)}>Cancel</button></div>) : (<div>
        
            <h5 key={task.id} style={{color: task.completed ? "green" : "white"}}>{task.taskName}</h5>
            {task && (<div><button onClick={()=>deleteTask(task.id)}><BsTrash3/></button>
            <button onClick={()=>updateTask(task.id)}><SiCachet/></button>
            <button onClick={()=>isEditTask(task.id)}>Edit</button></div>)}
        </div>)
    ))}
    </div>
    </div>
}
