import React, { useContext } from 'react';
import { AppContext } from '../../store/app-context';

import styles from './TaskHelper.module.css';

export default function TaskHelper(props) {
  const ctx = useContext(AppContext);
  const totalTasks = ctx.toDoList.length;
  let completedTasks = 0;
  let incompletedTasks = 0;
  for(let item of ctx.toDoList){
    if(item.isDone){
      completedTasks++;
    }
    else{
      incompletedTasks++;
    }
  }

  return (
      <div className={styles['task-helper-container']}>
        <div onClick={props.onTaskHelper}>
          <i  className={`fas fa-times-circle ${styles['btn-close']}`}  />
        </div>
        <div>
          <h3 className={styles["task-helper-text-selection"]} >{totalTasks} Total Tasks</h3>
          <h3 className={styles["task-helper-text-selection"]} >{completedTasks} Completed Tasks</h3>
          <h3 className={styles["task-helper-text-selection"]} >{incompletedTasks} Incompleted Tasks</h3>
        </div>
      </div>
  );
}
