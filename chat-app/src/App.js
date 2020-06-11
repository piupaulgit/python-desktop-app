import React from 'react';
import './App.css';
import Titlebar from './components/titlebar';
const ipc = electron.ipcRenderer;
function App() {

  function sayHello() {
    ipc.send('open-error-dialog')
  }
  return (
    <div className="App">
      <Titlebar></Titlebar>
      <button oncclickon={sayHello}></button>
    </div>
  );
}

export default App;
