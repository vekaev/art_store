import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Button } from '../../components/Components';
import styles from './PaintingsList.module.scss';

const LoadingCard = () => {
  return <li>Hello</li>;
};

const PaintingCard = ({ card, AddToCart }) => {
  return (
    <li className={styles.card}>
      <Link to={'/shop/' + card.id}>
        <Image className={styles['card-img']} src={card.img[0].url} />
        <p className={styles.title}>{card?.Name}</p>
      </Link>
      <footer>
        <Button
          className={styles['footer-btn']}
          onClick={() => AddToCart(card.id)}
        >
          {card?.choosen ? 'dodane' : 'kupuję'}
        </Button>
        <p className={styles['footer-price']}>{card.price} zł</p>
      </footer>
    </li>
  );
};

export const PaintingsList = ({ data, error, AddToCart }) => {
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <>
      <ul className={styles['card-list']}>
        {data.length > 1
          ? data.map((paint, idx) => {
              return (
                <PaintingCard key={idx} card={paint} AddToCart={AddToCart} />
              );
            })
          : [{}, {}, {}, {}, {}, {}, {}, {}, {}].map((item, idx) => {
              return <LoadingCard key={idx} />;
            })}
      </ul>
    </>
  );
};
