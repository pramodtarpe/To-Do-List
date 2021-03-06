import React, { useContext, useState } from "react";
import { AppContext } from '../../store/app-context';

import './TaskForm.css'

const hashId = (string) => {
    let MOD = 18446744073709551617;
    let hash = 0;
    if (string.length === 0) return hash;
    for (let i = 0; i < string.length; i++) {
        let char = string.charCodeAt(i);
        hash = ((hash*257) + (char)) % MOD;
    }
    return hash;
}

const TaskForm = (props) => {
    const ctx = useContext(AppContext);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    const [taskName, setTaskName] = useState('');
    const [taskDate, setTaskDate] = useState(today);
    const [isTitleValid, setIsTitleValid] = useState(false);
    
    const formHandler = (event) => {
        event.preventDefault();
        if(taskName.trim().length === 0){
            setIsTitleValid(true);
            setTaskName('Title is empty');
            setTimeout(()=>{
                setTaskName('')
                setIsTitleValid(false);
            },2000);
            return;
        }
        const date2 = new Date();
        const Difference_In_Time = (new Date(taskDate)).getTime() - (new Date(date2.toLocaleDateString()).getTime());
        const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        const taskId = hashId(taskName);
        // task object is created below for new item
        const taskObj = {
            id:taskId,
            taskTitle: taskName,
            taskDaysLeft: parseInt(Difference_In_Days),
            isMarked:false,
            isDone:false
        };

        for(let obj of ctx.toDoList){
            if(obj.id === taskId){
                setIsTitleValid(true);
                setTaskName('Task already exits');
                setTimeout(()=>{
                    setTaskName('')
                    setIsTitleValid(false);
                },2000);
                return;
            }
        }
        ctx.onNewTasK(taskObj);
        setTaskName('');
        setTaskDate(today);
        props.onClose(false);
    }

    const taskNameChangeHandler = (event) => {
        setTaskName(event.target.value);
    }
    const taskDateChangeHandler = (event) => {
        setTaskDate(event.target.value)
    }

    return (
        <div className='form-container'>
            <form onSubmit={formHandler}>   
                <div className='form-input__control'>
                    <div>
                        <label forhtml="taskname">Task name</label>
                        <input 
                            className={`${isTitleValid ? 'invalid-task-title':'' }`}
                            id="taskname" 
                            type="text" 
                            value={taskName} 
                            placeholder="Enter title here" 
                            onChange={taskNameChangeHandler}>
                        </input>
                    </div>
                    <div>
                        <label forhtml="taskdate">Due date</label>
                        <input id="taskdate" type="date" min={taskDate} value={taskDate} onChange={taskDateChangeHandler}></input>
                    </div>
                </div>
                <div className='btn'>
                    <button className={`btn-tag ${isTitleValid ? 'btn-disabled':'btn-tag-hover'}`} disabled={isTitleValid} type="submit"><h1>Add</h1></button>
                </div>
            </form>
        </div>
    );
}

export default TaskForm;