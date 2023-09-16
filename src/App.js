import React from 'react';
import NavBar from './component/NavBar/NavBar';
import {original,action} from './urls'
import './App.css';
import Banner from './component/Banner/Banner';
import RowPost from './component/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        <Banner/>
        <RowPost url={original} title='NetFlix Originals'/>
        <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
