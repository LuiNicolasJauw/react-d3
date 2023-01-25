import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <Header list={list} setList={setList}/>
      <Content list={list}/>
    </div>
  );
}

export default App;
