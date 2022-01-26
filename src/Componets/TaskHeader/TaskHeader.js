import { useContext } from 'react';
import { AppContext } from '../../store/app-context';
import Card from '../UI/Card';
import './TaskHeader.css';

const TaskHeader = (props) => {
    const ctx = useContext(AppContext);

    const deleteHandler = () => {
        ctx.onDelete();
    }
    const newTaskHandler = () => {
        props.onOverlay(true);
    }
    const markAsDoneHandler = () => {
        ctx.onMarkedAsDone();
    }

    return (
        <Card className="task-header-card">
            <div className='header-container'>
                <h1 className='header-title'>TO - DO LIST</h1>
                <div className='header-button-container'>
                    <button className='header-button' type='button' onClick={newTaskHandler} >
                        <i title="Add new task" className="fas fa-plus-circle"></i>
                    </button>
                    <button className='header-button' type='button' onClick={deleteHandler} >
                        <i title="Delete selected tasks" className="fas fa-minus-circle"></i>
                    </button>
                    <button className='header-button' type='button' onClick={markAsDoneHandler} >
                        <i title="Mark selected as done" className="far fa-calendar-check"></i>
                    </button>
                </div>
            </div>
        </Card>
    );
}

export default TaskHeader;