import { useContext } from 'react';
import { AppContext } from '../store/app-context';
import './TaskItem.css'

const TaskItem = (props) => {
    const ctx = useContext(AppContext);
    const taskItemHandler = (event) => {
        event.stopPropagation();
        ctx.onSelect(props.title);
    }

    let renderTaskItem = <p>{props.title} render task item</p>;
    if(props.isDone){
        renderTaskItem = (
            <div className={`task-item-container task-item-container-done ${props.isMarked && "task-item-container-done-selected"}`} onClick={taskItemHandler}>
            <div className='task-item-checkbox'>
                <i className="fas fa-check-double" style={props.isMarked ? {fontSize:'1rem',color:'white'} : {visibility:'hidden'}}></i>
            </div>
            <div className='task-data-container'>
                <div className='task-title'>
                    {props.title}
                </div>
                <div className='task-btn-container'>
                    <div className='task-item-days-left'>{"Done"}</div>
                </div>
            </div>
        </div>
        );
    }
    else{
        renderTaskItem = (
            <div className={`task-item-container ${props.isMarked &&  "task-item-container-selected"}`} onClick={taskItemHandler}>
            <div className='task-item-checkbox'>
                <i className="fas fa-check-circle checkbox" style={props.isMarked ? {} : {visibility:'hidden'}} ></i>
            </div>
            <div className='task-data-container'>
                <div className='task-title'>
                    {props.title}
                </div>
                <div className='task-btn-container'>
                    <div className='task-item-days-left'>{props.daysLeft + " Days left"}</div>
                </div>
            </div>
        </div>
        );
    }
    return renderTaskItem;
}

export default TaskItem;