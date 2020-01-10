import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header'
import Footer from '../src/components/footer/footer'
import SimpleSlider from './components/carousel/carousel';
import Item from './components/item/item';
import ItemList from './components/items/item-list';
import Profile from './components/profile/profile'
import Auth from './components/auth/auth';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className='content'>
        <Switch>
          <Route path='/home' component={ItemList} />
          <Route path='/profile' component={Profile} />
          <Route path='/login' component={Auth} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
