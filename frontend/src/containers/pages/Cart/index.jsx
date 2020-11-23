import React from 'react';
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import styles from './Cart.module.scss';
import { Button, Image } from '../../../components/Components';

const CartRouteLinks = () => {
  return (
    <div className={styles.CartRouteLinks}>
      <NavLink activeClassName={styles.ActiveLink} to={'/cart'}>
        Koszyk
      </NavLink>
      <NavLink activeClassName={styles.ActiveLink} to={'/cart/cashRegister'}>
        Kasa
      </NavLink>
      <NavLink
        activeClassName={styles.ActiveLink}
        to={'/cart/cashRegister/summary'}
      >
        Podsumowanie
      </NavLink>
      <NavLink
        activeClassName={styles.ActiveLink}
        to={'/cart/cashRegister/summary/finish'}
      >
        Koniec
      </NavLink>
    </div>
  );
};

const CartItem = ({ card, removeFromCart }) => {
  return (
    <li className={styles.cartCard}>
      <div className={styles.img}>
        <Image src={card.img[0].url} />
      </div>
      <div className={styles.infoList}>
        <p className={styles.Name}>{card?.Name}</p>
        <p className={styles.author}>{card?.author?.Name}</p>
        <p className={styles.price}>{card?.price} zł</p>
      </div>
      <span
        onClick={() => removeFromCart(card.id)}
        className={styles.crossBtn}
      ></span>
    </li>
  );
};

const CartList = ({ data, removeFromCart }) => {
  return (
    <ul className={styles.CartList}>
      {data?.map((item, index) => {
        return (
          <CartItem removeFromCart={removeFromCart} key={index} card={item} />
        );
      })}
    </ul>
  );
};

export default function Cart({ cart, removeFromCart }) {
  let match = useRouteMatch();
  let history = useHistory();
  // console.log(match);
  if (cart.length === 0) {
    return (
      <>
        <h2 className={styles.NothingTitle}>Twój koszyk jest pusty</h2>
        <Button
          onClick={() => {
            history.push('/shop');
          }}
        >
          Iść do sklepu
        </Button>
      </>
    );
  }

  const sumResult = cart.reduce(function (sum, item) {
    return sum + item?.price;
  }, 0);

  return (
    <>
      <CartRouteLinks />
      <p>{sumResult} zł</p>
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          component={() => (
            <CartList removeFromCart={removeFromCart} data={cart} />
          )}
        />
        <Route
          exact
          path={`${match.url}/cashRegister`}
          component={() => <h1>Helo</h1>}
        />
        <Redirect to={`${match}`} />
      </Switch>
    </>
  );
}
