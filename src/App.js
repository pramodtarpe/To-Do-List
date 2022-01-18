import React, { useState } from 'react';

import NewTask from './Componets/NewTask';
import TaskList from './Componets/TaskList';
import TaskHeader from './Componets/TaskHeader/TaskHeader';

function App() {
  const [toDoList, setToDoList] = useState([{taskTitle:"Learn React", taskDaysLeft:13, isMarked:false, isDone:false}]);
  const [overlay, setOverlay] = useState(false);

  const newTaskHandler = (taskObj) => {
    setToDoList( prev => [taskObj, ...prev]);
  }
  const selectedHandler = (taskTitle) => {
    const selectedList = [...toDoList];
    for(let obj of selectedList){
      if(obj.taskTitle === taskTitle){
        obj.isMarked = !obj.isMarked;
      }
    }
    setToDoList(selectedList);
  }
  const taskOverlayHandler = (val) => {
    val = (val===true ? val : false)
    setOverlay(val);
  }
  const deleteHandler = (toDoList) => {
    setToDoList(toDoList);
  }
  const markAsDoneHandler = (toDoList) => {
    setToDoList(toDoList);
  }

  return (
    <div>
      <TaskHeader onNewTask={taskOverlayHandler} onDeletedMarked={deleteHandler} onMarkAsDone={markAsDoneHandler} allTasks={toDoList} />
      {overlay && <NewTask onNewTask={taskOverlayHandler} onSaveNewTask={newTaskHandler} allTasks={toDoList} />}
      <TaskList onSaveSelected={selectedHandler} allTasks={toDoList} />
    </div>
  );
}

export default App;
