import { useState } from 'react';

import './TaskOption.css'

const TaskFilter = (props) =>{
    const [taskFilterValue, setTaskFilterValue] = useState('all');

    const filterHandler = (event) => {
        setTaskFilterValue(event.target.value);
        props.onTaskOption({fval:event.target.value});
    }

    return (
        <div className="task-filter-container">
            <label className='option-label' forhtml="taskfilter">Filter</label>
            <select id="task-filter" value={taskFilterValue} onChange={filterHandler}>
                <option value="all" >All</option>
                <option value="mark-as-done" >Mark as done</option>
                <option value="not-yet-done" >Not yet done</option>
            </select>
        </div>
    );
}

export default TaskFilter;