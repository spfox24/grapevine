import { useState, useEffect } from 'react';
import { fetchRecData } from './services/recService';
import './App.css';
import Logo from './img/gvlogo.png';

import { Route, Switch } from 'react-router-dom';

function App() {
  
  const [ recs, setRecs ] = useState([]);


  useEffect(() => {
    getRecs()
  }, [])

  async function getRecs() {
    const data = await fetchRecData();
    setRecs(data);
  }

  return (
    <div className="App">
      <Switch>
      <header className="App-header">
        <nav className="navbar">
           <img src={Logo} alt="logo" className="nav-logo" />
        </nav>
      </header>
      


      <footer className="App-footer">
        Copyright 2021
      </footer>
      </Switch>
    </div>
  );
}

export default App;
