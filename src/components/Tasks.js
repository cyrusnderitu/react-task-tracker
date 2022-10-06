import React from 'react'
import { Task } from './Task'

export const Tasks = ({tasks, onDelete, change}) => {

    const tasksElement = tasks.map((task)=>{
        return(
            <Task
                key={task.id} 
                task={task} 
                onDelete={onDelete}
                change={change}
            />
    )
    })
    return (
        <div className='task-field'>
            {tasksElement}
        </div>
    )
}


