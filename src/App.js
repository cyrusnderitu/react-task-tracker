import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';
import './index.css';
import { useEffect } from 'react';

function App() {
 
    const [showTasks, setShowTasks] = useState(false) // State for showing form to input new task or false to not show
    const [tasks, setTasks]= useState([])

    function deleteTask(id){
        setTasks(tasks.filter((task)=> task.id !== id)) // Function filters the tasks once the Times icon is clicked to only show tasks with id that are not
                                                        //equal to the id of the object that has been clicked
    }
    function handleChange(id){
        setTasks(tasks.map((task)=>
            task.id === id ? {...task, reminder: !task.reminder}: task)) // This check if the given mapped task id is equal to the id parameter
                                                                         // If its true, then it converts the reminder to opposite
    }
    function updateTask(taskDetails){
        const id = Math.floor(Math.random() * 50) + 1
        var newTask = {id, ...taskDetails}
        setTasks([...tasks, newTask])
    }
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    useEffect(()=>{
        const retrivedTasks = JSON.parse(localStorage.getItem('tasks'))
        setTasks(retrivedTasks)
    }, [])

    function show(){
        setShowTasks((prevState)=> {
            return !prevState
        })
    }

return (
    <div className="container">
        <Navbar show={show}/> {/*The Navbar takes in a function of {show} that changes with every click from false to true with a btn*/}
        {showTasks && <Form onAdd={updateTask}/>}

        {/* The Below Code checks length of tasks to tell if there is available tasks, which if there is none
        its will show no tasks to shohw otherwise it will show the Task Custom component */}

        {tasks ? <Tasks tasks={tasks} onDelete={deleteTask} change={handleChange}/> : <h4>No Tasks to Show</h4>}
    </div>
);
}

export default App;
