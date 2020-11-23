import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { onePaintingQuery } from '../../../queries/queries';

import styles from './Shop.module.scss';
import { Slider, GoBackBtn } from '../../../components/Components';
import { LINKS } from '../../../utils/constants';

export default function PicturePage({ AddToCart }) {
  const { picureId } = useParams();
  const { loading, error, data } = useQuery(onePaintingQuery, {
    variables: { id: picureId },
  });

  if (loading) return 'Loading';
  if (!data?.painting || error) return 'Error';

  const { painting } = data;
  console.log(painting);
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
          <div className={styles.pricePart}></div>
          <p className={styles.description}>{painting?.Depiction}</p>
        </div>
      </section>
    </>
  );
}
