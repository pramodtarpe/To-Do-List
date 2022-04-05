import React, { useState } from 'react';

import NewTask from './Componets/NewTask';
import TaskList from './Componets/TaskList';
import TaskHeader from './Componets/TaskHeader/TaskHeader';
import TaskHelper from './Componets/TaskHelper/TaskHelper';

function App() {
  const [overlay, setOverlay] = useState(false);
  const [info, setInfo] = useState(false);

  const taskOverlayHandler = (val) => {
    val = (val===true ? val : false)
    setOverlay(val);
    if(info){
      setInfo(false);
    }
  }
  const infoDisplayHandler = () => {
    setInfo(prevState => !prevState);
  }

  return (
    <div>
      <TaskHeader onOverlay={taskOverlayHandler} onTaskHelper={infoDisplayHandler} />
      {overlay && <NewTask onOverlay={taskOverlayHandler} />}
      <TaskList/>
      {info && <TaskHelper onTaskHelper={infoDisplayHandler} />}
    </div>
  );
}

export default App;
