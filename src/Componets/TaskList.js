import Card from './UI/Card';
import TaskItem from './TaskItem';

import './TaskList.css';

const TaskList = (props) => {
    const toDoList = props.allTasks;
    const isSelected = (taskTitle) => {
        props.onSaveSelected(taskTitle);
    }
    let renderItem = toDoList.map( e => <TaskItem onSelected={isSelected} key={`${e.id}`} title={e.taskTitle} daysLeft={e.taskDaysLeft} /> );
    if(toDoList.length === 0){
        renderItem = <h1 className='no-task'>No Tasks Found!</h1>
    }
    return (
        <Card>
            <div className='task-list-container'>
                {renderItem}
            </div>
        </Card>
    ); 
}

export default TaskList;