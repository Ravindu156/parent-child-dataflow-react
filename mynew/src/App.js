import logo from './logo.svg';
import './App.css';
import Child from './Childcom';
import {useState} from 'react';
import Childcom from './Childcom';

function App() {
  const [childname,setChildname]=useState("Default");
  const receiveName=(name)=>{
    setChildname(name);
  }
  return (
    <div className="App">
      <h2>Hello React I'm Parent</h2>
      <Childcom setfun={receiveName}></Childcom>
      <p>Parent:My child said:{childname}</p>
    </div>
  );
}

export default App;
