import React from 'react';
import styles from './Error.module.scss'
import {LINKS} from "../../utils/constants";
import {NavLink} from "react-router-dom";

export const Error = ({message = 'Strona, której szukasz nie została odnaleziona', code = 404}) => {
    return (
        <div className={styles.error}>
            <b>{code}</b>
            <p>{message}</p>
            <NavLink to={LINKS.home}>Wróć do strony głównej</NavLink>
            <div className={styles.imgPart}><img src={'/img/img_404.svg'} alt={'hands'}/></div>
        </div>
    )
}
