import React from 'react';
import styles from './MainMobile.module.scss';
import {Image, UnderImgLinks} from "../../../components/Components";

export const SliderIntro = ({title, link, img, additionalImg, description}) => (

    <div className={styles.sliderPage}>
        <div className={styles.imgPart}>
            {img ? <Image src={img}/> : <img src={additionalImg} alt={title}/>}
        </div>
        <div className={styles.textPart}>
            <UnderImgLinks className={styles.textPart_title} to={link}>
                {title}
            </UnderImgLinks>
            <p>{description}</p>
        </div>
    </div>
)
