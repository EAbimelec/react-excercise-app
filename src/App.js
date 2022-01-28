import './App.css';
import Login from "./components/Login";
import React, { useState } from 'react';
import HomePage from './components/HomePage';

function App() {

  const [logged, setLogged] = useState(false);

  const CurrentPage = function() {
    if (logged === false) {
      return(
      <Login logged={logged} setLogged={setLogged}/>
      );

    } else {
      return <HomePage/>;
    }
  };

  return (
    <div className='main-container'>
      <CurrentPage/>  
    </div>
  );
}

export default App;