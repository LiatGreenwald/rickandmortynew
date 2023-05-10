import React from 'react';

import './App.css';
import Header from './Components/Layout/Header/Header';
import Menu from './Components/Layout/Menu/Menu';
import Main from './Components/Layout/Main/Main';

function App() {
  return (
    <div className="App">
   <Menu/> 
     <Header/>
    <Main/>
    </div>
  );
}

export default App;
