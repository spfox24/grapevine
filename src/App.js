import { useState } from 'react';
import { getUser, logout } from './services/userService';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';

import IndexPage from './pages/IndexPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EditPage from './pages/EditPage';
import MoviesPage from './pages/Movies/MoviesPage';
import MovieDetailPage from './pages/Movies/MovieDetailPage/MovieDetailPage';
import ShowsPage from './pages/Shows/ShowsPage';
import ShowDetailPage from './pages/Shows/ShowDetailPage/ShowDetailPage';
import BooksPage from './pages/Books/BooksPage';
import BookDetailPage from './pages/Books/BookDetailPage/BookDetailPage';


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
          key={NavBar}
        />
      </header>
      <main>
        <Switch>
        <Route exact path='/books' render={props =>
            <BooksPage 
            {...props}
            key={BooksPage}
            />
          } />
        <Route exact path='/books/:id' render={props => 
            <BookDetailPage 
            {...props}
            key={BookDetailPage}
            />
          } />
          <Route exact path='/shows' render={props => 
            <ShowsPage 
            {...props}
            key={ShowsPage}
            />
          } />
          <Route exact path='/shows/:id' render={props =>
            <ShowDetailPage 
            {...props}
            key={ShowDetailPage}
            />
          } />
          <Route exact path='/movies' render={props =>
            <MoviesPage 
            {...props}
            key={MoviesPage}
            />
          } />
          <Route exact path='/movies/:id' render={props => 
            <MovieDetailPage 
            {...props}
            key={MovieDetailPage}
            />
          } />
          <Route exact path='/edit/:id' render={props =>
            <EditPage 
            {...props}
            key={EditPage}
            />
          } />
          <Route exact path='/' render={props =>
            <IndexPage 
            {...props}
            key={IndexPage}
            />
          } />
          <Route exact path='/dashboard' render={props =>
            userState.user ? 
            <DashboardPage 
            {...props}
            key={DashboardPage}
            />
          :
          <Redirect to="/login" />
          } />
          <Route exact path='/login' render={props =>
            <LoginPage 
              {...props}
              handleSignupOrLogin={handleSignupOrLogin} 
              key={LoginPage}
            />
          } />
          <Route exact path='/signup' render={props =>
            <SignupPage
              {...props}
              handleSignupOrLogin={handleSignupOrLogin} 
              key={SignupPage}
            />
          } />
        </Switch>

        </main>
        <Footer />
    </div>
  );
}

export default withRouter(App);
