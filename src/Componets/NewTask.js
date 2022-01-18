import Card from './UI/Card';
import TaskForm from './TaskForm/TaskForm';
import classes from './NewTask.module.css';

const NewTask = (props) => {
    const formHandler = (taskObj) => {
        props.onSaveNewTask(taskObj);
    }
    const closeHandler = () => {
        props.onNewTask(false);
    }

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onNewTask} ></div>
            <Card className={classes['task-form-container']}>
                <TaskForm onClose={closeHandler} onSaveTaskForm={formHandler} toDoList={props.allTasks}/>
            </Card>
        </div>
    );
}

export default NewTask;