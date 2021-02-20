import React from 'react';
import {Link} from 'react-router-dom';
import {AddToCartBtn, Image} from '../../components/Components';
import styles from './PaintingsList.module.scss';
import {LINKS} from "../../utils/constants";
import {Error} from "../../components/Error/Error";

const LoadingCard = () => {
    return <li>Hello</li>;
};

const PaintingCard = React.memo(({card, addToCart}) => {
    console.log(card)
    if (!card) return;

    return (
        <li className={styles.card}>
            <Link to={LINKS.shop + '/' + card?.id}>
                <Image className={styles['card-img']} src={card.img && card?.img[0].url}/>
                <p className={styles.title}>{card?.name}</p>
                {card.author && <p className={styles.info}>{card?.author?.name}</p>}
                {card.size && <b className={styles.type}>{card?.size?.title}</b>}
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

export const PaintingsList = ({data, addToCart}) => {
    if (data.length === 0) return <Error code={'Ooops!'} message={'Coś poszło nie tak'}/>;

    return (
        <>
            <ul className={styles['card-list']}>
                {data.length > 0
                    ? data.map((paint, idx) => {
                        return (
                            <PaintingCard key={idx} card={paint} addToCart={addToCart}/>
                        );
                    })
                    : new Array(9).fill({}).map((_, idx) => {
                        return <LoadingCard key={idx}/>;
                    })}
            </ul>
        </>
    );
};
