import { useState } from 'react';
import { getUser, logout } from './services/userService';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';

import IndexPage from './pages/IndexPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EditPage from './pages/EditPage';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';


function App(props) {
  
  const [ userState, setUserState ] = useState({
    user: getUser()
  });

  function handleSignupOrLogin() {
    setUserState({
      user: getUser()
    })
  }

  function handleLogout() {
    logout();

    setUserState({ user: null });

    props.history.push('/');
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar 
          handleLogout={handleLogout}
          user={userState.user}
        />
      </header>
      <main>
        <Switch>
          <Route exact path='/edit/:id'>
            <EditPage 
            {...props}
            />
          </Route>
          <Route exact path='/' render={props =>
          <IndexPage 
        
          />
          } />
          <Route exact path='/dashboard' render={props =>
            userState.user ? 
          <DashboardPage 
          {...props}
          />
          :
          <Redirect to="/login" />
          } />
          <Route exact path='/login' render={props =>
          <LoginPage 
            {...props}
            handleSignupOrLogin={handleSignupOrLogin} 
          />
          } />
          <Route exact path='/signup' render={props =>
          <SignupPage
            {...props}
            handleSignupOrLogin={handleSignupOrLogin} 
          />
          } />
        </Switch>

        </main>
        <Footer />
    </div>
  );
}

export default withRouter(App);
