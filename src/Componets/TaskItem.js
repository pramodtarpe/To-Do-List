import { useState } from 'react';
import './TaskItem.css'

const TaskItem = (props) => {
    const [isSelected, setSelected] = useState(false);

    const taskItemHandler = (event) => {
        event.stopPropagation();
        setSelected(isSelected^true);
        props.onSelected(props.title);
    }
    const editHandler = (event) => {
        event.stopPropagation();
        
    }
    
    return (
        <div className={`task-item-container ${isSelected && "task-item-container-selected"}`} onClick={taskItemHandler}>
            <div className='task-item-checkbox'>
                <i className="fas fa-check-circle checkbox" style={isSelected ? {} : {visibility:'hidden'}} ></i>
            </div>
            <div className='task-data-container'>
                <div className='task-title' style={!isSelected ? {} : {textDecoration:'underline'}} >
                    {props.title}
                </div>
                <div className='task-btn-container'>
                    <div className='edit-task-title' onClick={editHandler}>
                        <i className="fas fa-edit"></i>
                    </div>
                    <div className='task-item-days-left' type="button" >{props.daysLeft + " Days left"}</div>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;