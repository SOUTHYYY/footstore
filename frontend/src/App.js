import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header'
import Footer from '../src/components/footer/footer'
import Profile from './components/profile/profile'
import Login from './components/login/login';
import Home from './components/home/home'
import ItemCardContainer from './components/container-components/item-card-container'
import CatalogContainer from './components/container-components/catalog-container';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className='content'>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
          <Route path='/catalog' component={CatalogContainer} />
          <Route path='/item/:id'
            render={({ match }) => {
              const { id } = match.params
              return <ItemCardContainer id={id} />
            }} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
