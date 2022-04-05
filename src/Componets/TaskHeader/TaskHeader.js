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
    const infoHandler = () => {
        props.onTaskHelper();
    }

    return (
        <Card className="task-header-card">
            <div className='header-container'>
                <h1 className='header-title'>TO - DO LIST</h1>
                <div className='header-button-container'>
                    <button className='header-button' type='button' onClick={newTaskHandler} >
                        <div>
                            <i title="Add new task" className="fas fa-plus-circle"></i>
                        </div>
                    </button>
                    <button className='header-button' type='button' onClick={deleteHandler} >
                        <div>
                            <i title="Delete selected tasks" className="fas fa-minus-circle"></i>
                        </div>
                    </button>
                    <button className='header-button' type='button' onClick={markAsDoneHandler} >
                        <div>
                            <i title="Mark selected as done" className="far fa-calendar-check"></i>
                        </div>
                    </button>
                    <button className='header-button' type='button' onClick={infoHandler}>
                        <div>
                            <i title="More info" className="fas fa-info-circle"></i>
                        </div>
                    </button>
                </div>
            </div>
        </Card>
    );
}

export default TaskHeader;