import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Main from './containers/pages/Main';
import About from './containers/pages/About';
import Event from './containers/pages/Event';
import Shop from './containers/pages/Shop';
import Contact from './containers/pages/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './containers/pages/Cart';
import { useQuery } from '@apollo/client';
import { allPaintingsQuery } from './queries/queries';
import PicturePage from './containers/pages/Shop/picturePage';

export default function App() {
  const [store, setStore] = useState({
    cart: [],
    paintingList: [],
  });

  const { cart, paintingList } = store;

  const { error, data } = useQuery(allPaintingsQuery);
  const { pathname } = useLocation();

  //SCROLL ON TOP OF THE PAGE AFTER ROUTING
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const AddToCart = (id) => {
    const painting = paintingList.find((item) => item.id === id);
    const checkForExistinCart = cart.find((item) => item.id === id);

    if (!checkForExistinCart) {
      const newPaintingList = paintingList.map((item) => {
        if (item.id === id || checkForExistinCart) {
          return { ...item, choosen: true };
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
    const checkForExistinCart = cart.find((item) => item.id === id);

    if (painting && checkForExistinCart) {
      const newCart = cart.filter((item) => item.id !== id);

      const newList = paintingList.map((item) => {
        if (item.id === id) {
          return { ...item, choosen: false };
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

    if (data && data.paintings) {
      newPaintingList = data?.paintings;
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
            return { ...item, choosen: true };
          } else {
            return { ...item, choosen: false };
          }
        });
      }

      setStore({
        cart: newPaintingCart,
        paintingList: newPaintingList,
      });
    }
  }, [data]);

  return (
    <>
      <Header cart={cart} />
      <main className='content'>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/events' component={Event} />
          <Route
            path='/shop/:picureId'
            component={() => <PicturePage AddToCart={AddToCart} />}
          />
          <Route
            path='/shop'
            component={() => (
              <Shop
                AddToCart={AddToCart}
                paintings={paintingList}
                paintingsError={error}
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
