import React, { useState } from 'react';

import NewTask from './Componets/NewTask';
import TaskList from './Componets/TaskList';
import TaskHeader from './Componets/TaskHeader/TaskHeader';

function App() {
  const [overlay, setOverlay] = useState(false);

  const taskOverlayHandler = (val) => {
    val = (val===true ? val : false)
    setOverlay(val);
  }

  return (
    <div>
      <TaskHeader onOverlay={taskOverlayHandler}/>
      {overlay && <NewTask onOverlay={taskOverlayHandler} />}
      <TaskList/>
    </div>
  );
}

export default App;
