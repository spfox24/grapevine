import { useState, useEffect } from 'react';
import './App.css';

import IndexPage from './pages/IndexPage/IndexPage';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';

import { Route, Switch } from 'react-router-dom';

import { fetchRecData } from './services/recService';

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
      <header className="App-header">
        <NavBar />
      </header>
    <Switch>
      <Route exact path='/' render={() =>
        <IndexPage 
        
        />
      } />
        <Route exact path='/login' render={() =>
        <LoginPage 
        
        />
      } />
        <Route exact path='/signup' render={() =>
        <SignupPage
        
        />
      } />
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
