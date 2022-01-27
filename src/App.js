import './App.css';
import PersonalStats from './components/PersonalStats';
import Login from "./components/Login";
import React, { useState } from 'react';

const pages = {
  login : <Login/>,
  personalStats : <PersonalStats/>,
};

function App() {

  const [logged, setLogged] = useState(false);

  const CurrentPage = function() {
    if (logged === false) {
      return(
      <Login logged={logged} setLogged={setLogged}/>
      );

    } else {
      return <h2>Another Page</h2>;
    }
  };

  return (
    <div className='main-container'>
      <CurrentPage/>  
    </div>
  );
}

export default App;