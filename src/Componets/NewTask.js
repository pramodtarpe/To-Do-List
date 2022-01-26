import ReactDOM from 'react-dom';
import Card from './UI/Card';
import TaskForm from './TaskForm/TaskForm';
import classes from './NewTask.module.css';

const NewTask = (props) => {
    const formHandler = (taskObj) => {
        props.onSaveNewTask(taskObj);
    }
    const overlayHandler = () => {
        props.onOverlay(false);
    }

    return (
        ReactDOM.createPortal(
            <div className={classes['new-task-container']}>
                <div className={classes.backdrop} onClick={overlayHandler} ></div>
                <Card className={classes['task-form-container']}>
                    <TaskForm onClose={overlayHandler} onSaveTaskForm={formHandler} toDoList={props.allTasks}/>
                </Card>
            </div>,
            document.getElementById('overlay')
        )
    );
}

export default NewTask;