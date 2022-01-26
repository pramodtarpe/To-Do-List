import { useState } from 'react';
import './TaskOption.css';

const TaskFilter = (props) => {
    const [sortFilterValue, setSortFilterValue] = useState('newest-first');

    const sortHandler = (event) => {
        setSortFilterValue(event.target.value);
        props.onTaskOption({sval:event.target.value});
    }

    return (
        <div className='task-sort-container'>
            <label className="option-label" forhtml="taskfilter">Sort</label>
            <select id="task-sort" value={sortFilterValue} onChange={sortHandler}>
                <option value="name">Name</option>
                <option value="days-left">Days left</option>
                <option value="newest-first">Newest first</option>
            </select>
        </div>
    );
}

export default TaskFilter;