import { useState } from "react"
import { SiCachet } from "react-icons/si";
import {BsTrash3} from "react-icons/bs";

interface list {
    id: number;
    taskName: string;
    completed: boolean;
}

export const AddTask = () => {

    const [task, setTask] = useState("");
    const [list, setList] = useState<list[]>([]);

    const addTask = ()=>{
        const newTask = {
            id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
            taskName: task,
            completed: false
        }
        setList([...list, newTask]);
    }

    const deleteTask = (id: number) => {
       setList(list.filter((task) => task.id !== id));
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
    </div>
    <div className="taskList">
    {list?.map((task) => {
        return (
        <div>
            <h5 key={task.id} style={{color: task.completed ? "green" : "white"}}>{task.taskName}</h5>
            {task && (<div><button onClick={()=>deleteTask(task.id)}><BsTrash3/></button><button onClick={()=>updateTask(task.id)}><SiCachet/></button></div>)}
        </div>);
    })}
    </div>
    </div>
}