import { useState } from "react";

import TaskFilter from "./TaskFilter";
import TaskSort from "./TaskSort";
import Card from "../UI/Card";
import './TaskOption.css'

export const filterList = (obj, list) => {
    if(obj.fval === 'mark-as-done'){
        list = list.filter(e => e.isDone === true);
    }
    else if(obj.fval === 'not-yet-done'){
        list = list.filter(e => e.isDone === false)
    }
    return list;
}
export const sortList = (obj, list) => {
    if(obj.sval === 'name'){
        list.sort((a, b) => (a.taskTitle.toLowerCase() < b.taskTitle.toLowerCase()) ? -1 : 1)
    }
    else if(obj.sval === 'days-left'){
        list.sort((a, b) => (+a.taskDaysLeft < +b.taskDaysLeft) ? -1 : +1)
    }
    return list;
}

const TaskOption = (props) => {
    const [taskOptionValue, setTaskOptionValue] = useState({fval:'all', sval:'newest-first'});

    const taskOptionHandler = (obj) => {
        setTaskOptionValue((prevState) => ({...prevState, ...obj}));
        props.onTaskOptionObject({...taskOptionValue, ...obj});
    }

    return (
        <Card className="task-option-card"> 
            <TaskFilter onTaskOption={taskOptionHandler}/>
            <TaskSort onTaskOption={taskOptionHandler}/>
        </Card>
    );
}

export default TaskOption;