import React, {useState} from 'react'

export const Form = ({onAdd}) => {

    const [task, setTask] = useState({
        message: "",
        day: "",
        reminder: false
    })

    function performChange(event){
        const {name, value, type, checked} = event.target
        setTask((prevState)=>{
            return{
               ...prevState,
                [name]: type === 'checkbox'? checked : value
            }
        })
    }
    function stateChange(){
        setTask((initialState)=>{
            return{
                ...initialState,
                reminder: !initialState.reminder
            }
        })
    }

    const onSubmit = (e)=>{
        e.preventDefault()

        if(!task.message){
            alert('Please Type in a Task')
            return
        }
        onAdd(task)
        setTask({
            message: '',
            day: '',
            reminder: false
        })
    }


    return (
        <form className='form-field' onSubmit={onSubmit}>
            <input 
            type="text" 
            name="message" 
            className='input-field'
            placeholder='Add Task' 
            value={task.message}
            onChange={performChange}
            required
            />

            <input 
            type="text" 
            name="day"
            className='input-field'
            placeholder='Add Day & Time'
            value={task.day}
            onChange={performChange}
            required
            />

            <label htmlFor="checking">
                Save as Reminder 
                <input 
                    type="checkbox" 
                    id="checking" 
                    checked={task.reminder}
                    onChange={stateChange}
            />
            </label>


            <input type="submit" value="Save Task" className="btn"/>
        </form>
    )
}

