import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { onePaintingQuery } from '../../../queries/queries';

import styles from './Shop.module.scss';
import {
  Slider,
  GoBackBtn,
  AddToCartBtn,
} from '../../../components/Components';
import { LINKS } from '../../../utils/constants';
import { useStore } from '../../../providers/StoreProvider';

export default function PicturePage() {
  const { AddToCart, cart } = useStore();
  const { pictureId } = useParams();
  const { loading, error, data } = useQuery(onePaintingQuery, {
    variables: { id: pictureId },
  });

  if (loading) return 'Loading';
  if (!data?.painting || error) return 'Error';

  const { painting } = data;

  return (
    <>
      <div className={styles.titlePart}>
        <GoBackBtn className={styles.goBack} href={LINKS.shop}>
          Wróć do sklepu
        </GoBackBtn>
        <h2 className={styles.title}>{painting.Name}</h2>
      </div>
      <section className={styles.intro}>
        <div className={styles.slider}>
          <Slider imgArray={painting?.img} />
        </div>
        <div className={styles.info}>
          <div className={styles.pricePart}>
            {painting?.price && (
              <p className={styles.price}>{painting?.price} zł</p>
            )}
            <AddToCartBtn
              inCart={cart?.find((item) => item?.id === pictureId)}
              onClick={() => AddToCart(pictureId)}
            >
              do koszyka
            </AddToCartBtn>
          </div>
          <p className={styles.description}>{painting?.Depiction}</p>
        </div>
      </section>
    </>
  );
}
