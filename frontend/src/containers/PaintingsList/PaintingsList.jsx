import React from 'react';
import { Link } from 'react-router-dom';
import { Image, AddToCartBtn } from '../../components/Components';
import styles from './PaintingsList.module.scss';

const LoadingCard = () => {
  return <li>Hello</li>;
};

const PaintingCard = React.memo(({ card, addToCart }) => {
  if (!card) return;

  return (
    <li className={styles.card}>
      <Link to={'/shop/' + card.id}>
        <Image className={styles['card-img']} src={card.img[0].url} />
        <p className={styles.title}>{card?.Name}</p>
        {card.author && <p className={styles.info}>{card?.author?.Name}</p>}
        {card.size && <b className={styles.type}>{card.size?.title}</b>}
      </Link>
      <footer>
        <AddToCartBtn
          className={styles['footer-btn']}
          inCart={card.chosen}
          onClick={() => addToCart(card.id)}
        />

        {card.price && (
          <p className={styles['footer-price']}>{card.price} zł</p>
        )}
      </footer>
    </li>
  );
});

export const PaintingsList = ({ data, addToCart }) => {
  if (data.length === 0) return `Error!`;

  return (
    <>
      <ul className={styles['card-list']}>
        {data.length > 0
          ? data.map((paint, idx) => {
              return (
                <PaintingCard key={idx} card={paint} addToCart={addToCart} />
              );
            })
          : new Array(9).fill({}).map((_, idx) => {
              return <LoadingCard key={idx} />;
            })}
      </ul>
    </>
  );
};
