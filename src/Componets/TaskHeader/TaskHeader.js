import Card from '../UI/Card';
import './TaskHeader.css';

const TaskHeader = (props) => {
    const deleteHandler = () => {
        const toDoList = props.allTasks.filter( e => e.isMarked === false );
        props.onDeletedMarked(toDoList);
    }
    const newTaskHandler = () => {
        props.onNewTask(true);
    }

    return (
        <Card>
            <div className='header-container'>
                <h1 className='header-title'>TO - DO LIST</h1>
                <div className='header-button-container'>
                    <button className='header-button' type='button' onClick={newTaskHandler} >Add New Task</button>
                    <button className='header-button' type='button' onClick={deleteHandler} >Delete Selected</button>
                </div>
            </div>
        </Card>

    );
}

export default TaskHeader;