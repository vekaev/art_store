import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Main from './containers/pages/Main/Main';
import About from './containers/pages/About';
import EventsPage from './containers/pages/Event/Event';
import Shop from './containers/pages/Shop';
import Contact from './containers/pages/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './containers/pages/Cart';
import { useQuery } from '@apollo/client';
import { allPaintingsQuery, allEventsQuery } from './queries/queries';
import PicturePage from './containers/pages/Shop/picturePage';
import moment from 'moment';

export default function App() {
  const [store, setStore] = useState({
    cart: [],
    paintingList: [],
  });
  const { cart, paintingList } = store;
  const { pathname } = useLocation();
  const [sortedEvents, setSortedEvents] = useState([]);
  const fetchedPaintings = useQuery(allPaintingsQuery);
  const fetchedEvents = useQuery(allEventsQuery);

  useEffect(() => {
    if (fetchedEvents?.data?.events) {
      const sorted = fetchedEvents?.data?.events
        ?.slice()
        .filter((item) => {
          if (
            moment(item.date).format('YYYYMMDD') >= moment().format('YYYYMMDD')
          ) {
            return item;
          }
        })
        .sort(
          (a, b) =>
            moment(a.date).format('YYYYMMDD') -
            moment(b.date).format('YYYYMMDD')
        );
      setSortedEvents(sorted);
    }
  }, [fetchedEvents?.data?.events]);

  //SCROLL ON TOP OF THE PAGE AFTER ROUTING
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const AddToCart = (id) => {
    const painting = paintingList.find((item) => item.id === id);
    const checkForExistingCart = cart.find((item) => item.id === id);

    if (!checkForExistingCart && painting) {
      const newPaintingList = paintingList.map((item) => {
        if (item.id === id || checkForExistingCart) {
          return { ...item, chosen: true };
        }
        return item;
      });

      setStore({
        cart: [...cart, painting],
        paintingList: newPaintingList,
      });
      localStorage.setItem('cart', JSON.stringify([...cart, painting]));
    } else {
      removeFromCart(id);
    }
  };

  const removeFromCart = (id) => {
    const painting = paintingList.find((item) => item.id === id);
    const checkForExistingCart = cart.find((item) => item.id === id);

    if (painting && checkForExistingCart) {
      const newCart = cart.filter((item) => item.id !== id);

      const newList = paintingList.map((item) => {
        if (item.id === id) {
          return { ...item, chosen: false };
        }
        return item;
      });

      setStore({
        cart: newCart,
        paintingList: newList,
      });

      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  useEffect(() => {
    let newPaintingList = [];
    let newPaintingCart = [];

    if (fetchedPaintings?.data && fetchedPaintings?.data.paintings) {
      newPaintingList = fetchedPaintings.data?.paintings;
      if (localStorage.hasOwnProperty('cart')) {
        const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'));

        newPaintingCart = cartFromLocalStorage.map((cartItem) => {
          const idx = newPaintingList.findIndex(
            (item) => item?.id === cartItem?.id
          );
          if (idx !== -1) return cartItem;
        });

        newPaintingList = newPaintingList.map((item) => {
          if (newPaintingCart.find((cartItem) => item?.id === cartItem?.id)) {
            return { ...item, chosen: true };
          } else {
            return { ...item, chosen: false };
          }
        });
      }

      setStore({
        cart: newPaintingCart,
        paintingList: newPaintingList,
      });
    }
  }, [fetchedPaintings.data]);

  return (
    <>
      <Header cart={cart} />
      <main className='content'>
        <Switch>
          <Route
            exact
            path='/'
            component={() => (
              <Main events={sortedEvents} paintings={paintingList} />
            )}
          />
          <Route path='/about' component={About} />
          <Route
            path='/events'
            component={() => (
              <EventsPage events={sortedEvents} error={fetchedEvents?.error} />
            )}
          />
          <Route
            path='/shop/:pictureId'
            component={() => <PicturePage cart={cart} AddToCart={AddToCart} />}
          />
          <Route
            path='/shop'
            component={() => (
              <Shop
                AddToCart={AddToCart}
                paintings={paintingList}
                paintingsError={fetchedEvents.error}
              />
            )}
          />
          <Route path='/contact' component={Contact} />
          <Route
            path='/cart'
            component={() => (
              <Cart cart={cart} removeFromCart={removeFromCart} />
            )}
          />
          <Redirect to='/' />
        </Switch>
      </main>
      <Footer />
    </>
  );
}
