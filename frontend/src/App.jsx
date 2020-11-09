import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./containers/pages/Main";
import About from "./containers/pages/About";
import Event from "./containers/pages/Event";
import Shop from "./containers/pages/Shop";
import Contact from "./containers/pages/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./containers/pages/Cart";
import { useQuery } from "@apollo/client";
import { paintingsQuery } from "./queries/queries";

export default function App() {
  const { loading, error, data } = useQuery(paintingsQuery);

  const [cart, setNewCart] = useState([]);
  const [paintingList, setPaintingList] = useState([]);

  const AddToCart = (value) => {
    if (!cart.find((item) => item.id === value.id)) {
      setNewCart([...cart, value]);
    } else {
      removeFromCart(value);
    }
  };

  useEffect(() => {
    if (localStorage.hasOwnProperty("cart")) {
      const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
      //TODO: Create checking for existing cart item in database list
      setNewCart(cartFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (data && cart.length) {
      const newList = data.paintings.map((item) => {
        if (cart.find((cart) => cart.id === item.id)) {
          return { ...item, choosen: true };
        }
        return item;
      });
      setPaintingList(newList);
    } else if (data && data.paintings) {
      setPaintingList(data.paintings);
    }
  }, [data]);

  const removeFromCart = (card) => {
    if (
      paintingList.find((item) => item.id === card.id) &&
      cart.find((item) => item.id === card.id)
    ) {
      const newCart = cart.filter((item) => item.id !== card.id);
      setNewCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));

      const newList = paintingList.map((item) => {
        if (cart.find((cart) => cart.id === item.id)) {
          return { ...item, choosen: false };
        }
        return item;
      });
      setPaintingList(newList);
    }
  };

  useEffect(() => {
    if (paintingList && cart.length) {
      const newList = paintingList.map((item) => {
        if (cart.find((cart) => cart.id === item.id)) {
          return { ...item, choosen: true };
        }
        return item;
      });
      setPaintingList(newList);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <>
      <Header cart={cart} />
      <main className="content">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/events" component={Event} />
          <Route
            path="/shop"
            component={() => (
              <Shop
                AddToCart={AddToCart}
                paintings={paintingList}
                paintingsError={error}
              />
            )}
          />
          <Route path="/contact" component={Contact} />
          <Route
            path="/cart"
            component={() => (
              <Cart cart={cart} removeFromCart={removeFromCart} />
            )}
          />
          {/*<Redirect to='/'/>*/}
        </Switch>
      </main>
      <Footer />
    </>
  );
}
