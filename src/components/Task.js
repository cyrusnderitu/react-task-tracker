import React from 'react'
import {FaTimes} from 'react-icons/fa'

export const Task = ({task, onDelete, change}) => {
    return (
        <div className={`task-task ${task.reminder ? 'reminder' : ""}`} onDoubleClick={()=>change(task.id)}>
            <h3 className="task-title">
                {task.message} 
                <FaTimes style={{color: 'red', position: 'absolute', right: '15px'}} className='times-icon' onClick={()=>onDelete(task.id)}/>
            </h3>
            <p className="task-time">{task.day}</p>
        </div>
    )
}


