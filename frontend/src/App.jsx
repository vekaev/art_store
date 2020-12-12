import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import {
  Main,
  About,
  EventsPage,
  Shop,
  Contact,
  Cart,
  PicturePage,
} from './containers/pages';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StoreProvider from './providers/StoreProvider';

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <StoreProvider>
      <Header />
      <Switch>
        <Route exact path='/about' component={About} />
        <main className='content'>
          <Route exact path='/' component={Main} />
          <Route path='/shop/:pictureId' component={PicturePage} />
          <Route exact path='/shop' component={Shop} />
          <Route path='/cart' component={Cart} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/events' component={EventsPage} />
        </main>
      </Switch>
      <Footer />
    </StoreProvider>
  );
}
