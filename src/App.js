import React, { useState } from 'react';

import NewTask from './Componets/NewTask';
import TaskList from './Componets/TaskList';
import TaskHeader from './Componets/TaskHeader/TaskHeader';

function App() {
  const [toDoList, setToDoList] = useState([{taskTitle:"Learn React", taskDaysLeft:"13", isMarked:false}]);
  const [overlay, setOverlay] = useState(false);

  const newTaskHandler = (taskObj) => {
    setToDoList( prev => [taskObj, ...prev]);
  }
  const selectedHandler = (taskTitle) => {
    for(let obj of toDoList){
      if(obj.taskTitle === taskTitle){
        obj.isMarked ^= true;
      }
    }
    setToDoList(toDoList)
  }
  const taskOverlayHandler = (val) => {
    setOverlay(val);
  }
  const deleteHandler = (toDoList) => {
    setToDoList(toDoList);
  }

  return (
    <div>
      <TaskHeader onNewTask={taskOverlayHandler} onDeletedMarked={deleteHandler} allTasks={toDoList} />
      {overlay && <NewTask onNewTask={taskOverlayHandler} onSaveNewTask={newTaskHandler} allTasks={toDoList} />}
      <TaskList onSaveSelected={selectedHandler} allTasks={toDoList} />
    </div>
  );
}

export default App;
