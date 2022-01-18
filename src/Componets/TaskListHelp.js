import styles from './TaskList.module.css';

const TaskListHelp = () => {
    return (
        <>
            <h1 className={styles['no-task']}>No Tasks Found!</h1>
            <p className={styles['no-task-guide']}>
                Oops ! No task found. To begin, start by adding a new task by clicking on the 
                plus <i className="fas fa-plus-circle"></i> icon on the header section of the to-do-list.
                <br/>
                <br/>
                To delete, first select the task(s) you want to delete and then press the 
                minus <i className="fas fa-minus-circle"></i> icon on the header section of the to-do-list.
                <br/>
                <br/>
                To mark tasks as done, first select the task(s) and then press the 
                calender <i className={`far fa-calendar-check`}></i> icon on the header section of the to-do-list.
            </p>
        </>
    );
}

export default TaskListHelp;