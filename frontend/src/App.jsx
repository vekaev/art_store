import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './containers/pages/Main';
import About from './containers/pages/About';
import Event from './containers/pages/Event';
import Index from './containers/pages/Shop';

import Contact from './containers/pages/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './containers/pages/Cart';

export default function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 500px)' }} className='content'>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/events' component={Event} />
          <Route path='/shop' component={Index} />
          <Route path='/contact' component={Contact} />
          <Route path='/cart' component={Cart} />
          {/*<Redirect to='/'/>*/}
        </Switch>
      </main>
      <Footer />
    </>
  );
}
