import React,{ useState, useEffect } from 'react';
import Card from './UI/Card';
import TaskItem from './TaskItem';
import TaskListHelp from './TaskListHelp';
import TaskOption, {filterList, sortList} from './TaskOption/TaskOption';
import styles from './TaskList.module.css';

const TaskList = (props) => {
    const [taskOptionObject, setTaskOptionObject] = useState({fval:'all', sval:'newest-first'});
    const [filteredSortedList, setFilteredSortedList] = useState(props.allTasks);

    const isSelected = (taskTitle) => {
        props.onSaveSelected(taskTitle);
    }
    const taskOptionObjectHandler = (obj) => {
        setTaskOptionObject({...taskOptionObject, ...obj});
        obj = {...taskOptionObject, ...obj};
        let toDoList = [...props.allTasks];
        toDoList = filterList(obj, toDoList);
        toDoList = sortList(obj, toDoList);    
        setFilteredSortedList(toDoList);
    }
    useEffect(() => {
        let toDoList = [...props.allTasks];
        toDoList = filterList(taskOptionObject, toDoList);
        toDoList = sortList(taskOptionObject, toDoList);
        setFilteredSortedList(toDoList);
    }
    ,[props.allTasks]);

    return (
        <React.Fragment>
            <TaskOption onTaskOptionObject={taskOptionObjectHandler}/>
            <Card  className={styles["task-list-card"]}>
                <div className={styles['task-list-container']}>
                    {
                        props.allTasks.length === 0 ? 
                        <TaskListHelp />
                        : 
                        filteredSortedList.map( e => <TaskItem 
                            onSelected={isSelected}
                            key={`${e.id}`}
                            title={e.taskTitle}
                            daysLeft={e.taskDaysLeft} 
                            isDone={e.isDone}
                            isMarked={e.isMarked}
                        />)
                    }
                </div>
            </Card>
        </React.Fragment>
    ); 
}

export default TaskList;