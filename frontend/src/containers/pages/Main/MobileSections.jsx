import React, {useState} from 'react';
import styles from './MainMobile.module.scss';
import {Image} from "../../../components/Components";


const SliderIntro = ({title, link, img, description}) => (
    <div className={styles.sliderPage}>
        <Image/>
        <div className={styles.slider}></div>
    </div>
)
