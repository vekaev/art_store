import React from 'react';
import styles from './Event.module.scss';
import {Image} from '../../../components/Components';
import moment from 'moment';
import ShowMoreText from 'react-show-more-text';
import {useStore} from '../../../providers/StoreProvider';
import {Error} from "../../../components/Error/Error";

const EventCard = ({info}) => {
    // moment(info.date).calendar().split(' ')[0] --> TODAY or date
    return (
        <li className={styles.event}>
            <div className={styles.imgWrapper}>
                <Image src={info?.img?.url}/>
            </div>

            <ul className={styles.infoList}>
                <li>
                    <h2>{info?.title}</h2>
                </li>
                <li className={styles.timeWrapper}>
                    <b className={styles.title}>Kiedy?</b>
                    <p className={styles.info}>{moment(info.date).format('LL')}</p>
                    <p className={styles.time}>{moment(info.date).format('LT')}</p>
                </li>
                {info?.place && (
                    <li>
                        <b className={styles.title}>Gdzie?</b>
                        <p className={styles.info}>{info?.place}</p>
                    </li>
                )}
                {info?.event_type?.title && (
                    <li>
                        <b className={styles.title}>Typ:</b>
                        <p className={styles.info}>{info?.event_type?.title}</p>
                    </li>
                )}
                {info?.description && (
                    <li className={styles.description}>
                        <b className={styles.title}>Co?</b>
                        <ShowMoreText
                            keepNewLines
                            className={styles.info}
                            anchorClass={styles.showMoreBtn}
                            more={<span>Czytaj więcej</span>}
                            less={<span className={styles.showLess}>Czytaj mniej</span>}
                        >
                            {info?.description}
                        </ShowMoreText>
                    </li>
                )}
            </ul>
        </li>
    );
};

export default function Event() {
    const {events} = useStore();
    if (events.length === 0) return <Error code={'Ooops!'} message={'Coś poszło nie tak'}/>
    return (
        <main className='content'>
            <ul className={styles.eventList}>
                {events?.map((item, idx) => (
                    <EventCard key={idx} info={item}/>
                ))}
            </ul>
        </main>
    );
}
