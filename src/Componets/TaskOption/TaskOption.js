import { useContext } from "react";

import { AppContext } from '../../store/app-context';
import TaskFilter from "./TaskFilter";
import TaskSort from "./TaskSort";
import Card from "../UI/Card";
import './TaskOption.css'

export const sortFilterList = (obj, list) => {
    if(obj.fval === 'mark-as-done'){
        list = list.filter(e => e.isDone === true);
    }
    else if(obj.fval === 'not-yet-done'){
        list = list.filter(e => e.isDone === false)
    }
    if(obj.sval === 'name'){
        list.sort((a, b) => (a.taskTitle.toLowerCase() < b.taskTitle.toLowerCase()) ? -1 : 1)
    }
    else if(obj.sval === 'days-left'){
        list.sort((a, b) => (+a.taskDaysLeft < +b.taskDaysLeft) ? -1 : +1)
    }
    return list;
}

const TaskOption = (props) => {
    const ctx = useContext(AppContext);

    const taskOptionHandler = (obj) => {
        ctx.onTaskOption(obj);
    }

    return (
        <Card className="task-option-card"> 
            <TaskFilter onTaskOption={taskOptionHandler}/>
            <TaskSort onTaskOption={taskOptionHandler}/>
        </Card>
    );
}

export default TaskOption;