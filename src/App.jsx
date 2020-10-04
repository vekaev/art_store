import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import EventPage from './pages/EventPage';
import ShopPage from './pages/ShopPage';
import CooperationPage from './pages/CooperationPage';
import ContactPage from './pages/ContactPage';
import Header from './containers/Header';
import Footer from './containers/Footer';

export default function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/events' component={EventPage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/cooperation' component={CooperationPage} />
          <Route path='/contact' component={ContactPage} />
          <Redirect to='/' />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}
