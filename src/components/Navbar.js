import React from 'react'

export const Navbar = ({show, showTasks}) => {

    console.log(showTasks)
    return (
        <nav>
            <h2 className="nav-title">Task Tracker</h2>
            <button className="btn" 
                onClick={show} 
                style={{backgroundColor:`${showTasks ? 'red' : 'green'}`, border: 'none'}}
            >
                {showTasks ? 'Close' : 'Add'}
            </button>
        </nav>
    )
}