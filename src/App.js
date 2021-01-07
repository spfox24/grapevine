import { useState, useEffect } from 'react';
import './App.css';

import IndexPage from './pages/IndexPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

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
      <main>
        <Switch>
          <Route exact path='/' render={props =>
          <IndexPage 
        
          />
          } />
          <Route exact path='/dashboard' render={props =>
          <DashboardPage 
        
          />
          } />
          <Route exact path='/login' render={props =>
          <LoginPage 
            {...props}
          />
          } />
          <Route exact path='/signup' render={props =>
          <SignupPage
            {...props}
          />
          } />
        </Switch>

        </main>
        <Footer />
    </div>
  );
}

export default App;
