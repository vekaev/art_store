import {useQuery} from '@apollo/client';
import React from 'react';
import {useParams} from 'react-router-dom';
import {onePaintingQuery} from '../../../queries/queries';

import styles from './Shop.module.scss';
import {AddToCartBtn, GoBackBtn, Image, Slider,} from '../../../components/Components';
import {LINKS} from '../../../utils/constants';
import {useStore} from '../../../providers/StoreProvider';

export default function PicturePage() {
    const {addToCart, cart} = useStore();
    const {pictureId} = useParams();
    const {loading, error, data} = useQuery(onePaintingQuery, {
        variables: {id: pictureId},
    });

    if (loading) return 'Loading';
    if (!data?.painting || error) return 'Error';

    const {painting} = data;

    return (
        <>
            <Painting painting={painting} addToCart={addToCart} cart={cart} pictureId={pictureId}/>
            {painting.author && <Authort author={painting.author}/>}
        </>

    );
}

const Painting = ({painting, addToCart, pictureId, cart}) => {
    return (
        <div className={styles.painting}>
            <div className={styles.titlePart}>
                <GoBackBtn className={styles.goBack} href={LINKS.shop}>
                    Wróć do sklepu<span className={styles.paintingName}>{painting.name}</span>
                </GoBackBtn>

            </div>
            <section className={styles.intro}>
                <div className={styles.slider}>
                    <h2 className={styles.title}>{painting.name}</h2>
                    <Slider imgArray={painting?.img}/>
                </div>
                <div className={styles.info}>
                    <div className={styles.pricePart}>
                        {painting?.price && (
                            <p className={styles.price}>{painting?.price} zł</p>
                        )}
                        <AddToCartBtn
                            inCart={cart?.find((item) => item?.id === pictureId)}
                            onClick={() => addToCart(pictureId)}
                        >
                            do koszyka
                        </AddToCartBtn>
                    </div>
                    <p className={styles.description}>{painting?.depiction}</p>
                </div>
            </section>
        </div>
    )
}

const Authort = ({author}) => {
    const {bio, avatar, name, facebook, email, tel} = author;
    console.log(author, avatar?.url)
    return (
        <section className={styles.author}>
            <div className={styles.textPart}>
                <b>{name}</b>
                <p>{bio}</p>
            </div>
            <div className={styles.imgPart}>
                <GoBackBtn className={styles.about_link} href={LINKS.shop}>
                    o artyście
                </GoBackBtn>
                <div className={styles.imgWrapper}>
                    {avatar?.url ?
                        <Image src={avatar?.url} alt={'avatar'}/> :
                        <img src={'/img/img_lobster.jpg'}/>
                    }
                </div>
            </div>
        </section>
    )
}
