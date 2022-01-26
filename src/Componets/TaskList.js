import React, { useContext } from 'react';
import Card from './UI/Card';
import TaskItem from './TaskItem';
import TaskListHelp from './TaskListHelp';
import TaskOption from './TaskOption/TaskOption';
import styles from './TaskList.module.css';
import { AppContext } from '../store/app-context';

const TaskList = (props) => {
    const ctx = useContext(AppContext);

    return (
        <React.Fragment>
            <TaskOption />
            <Card  className={styles["task-list-card"]}>
                <div className={styles['task-list-container']}>
                    {
                        ctx.toDoList.length === 0 ? 
                        <TaskListHelp />
                        : 
                        ctx.filteredTodos.map( e => <TaskItem 
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