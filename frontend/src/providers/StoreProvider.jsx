import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { allEventsQuery, allPaintingsQuery } from '../queries/queries';
import moment from 'moment';

const StoreContext = React.createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export default function StoreProvider({ children }) {
  const [store, setStore] = useState({
    cart: [],
    paintings: [],
  });
  const { cart, paintings } = store;
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

  const AddToCart = (id) => {
    const painting = paintings.find((item) => item.id === id);
    const checkForExistingCart = cart.find((item) => item.id === id);

    if (!checkForExistingCart && painting) {
      const newPaintingList = paintings.map((item) => {
        if (item.id === id || checkForExistingCart) {
          return { ...item, chosen: true };
        }
        return item;
      });

      setStore({
        cart: [...cart, painting],
        paintings: newPaintingList,
      });
      localStorage.setItem('cart', JSON.stringify([...cart, painting]));
    } else {
      removeFromCart(id);
    }
  };

  const removeFromCart = (id) => {
    const painting = paintings.find((item) => item.id === id);
    const checkForExistingCart = cart.find((item) => item.id === id);

    if (painting && checkForExistingCart) {
      const newCart = cart.filter((item) => item.id !== id);

      const newList = paintings.map((item) => {
        if (item.id === id) {
          return { ...item, chosen: false };
        }
        return item;
      });

      setStore({
        cart: newCart,
        paintings: newList,
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
        paintings: newPaintingList,
      });
    }
  }, [fetchedPaintings.data]);

  return (
    <StoreContext.Provider
      value={{
        cart,
        paintings,
        events: sortedEvents,
        removeFromCart,
        AddToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
