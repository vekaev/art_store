import React from 'react';
import styles from './MainMobile.module.scss';
import {Image, UnderImgLinks} from "../../../components/Components";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from "swiper";
import {MAIN_PAGE_TEXT} from "./text";
import {LINKS} from "../../../utils/constants";
SwiperCore.use([Pagination]);

export const IntroMobile = ({events, paintings}) => {
    return (
        <div className={styles.introMobile}>
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
            >
                <SwiperSlide>
                    <SliderIntro
                        title={MAIN_PAGE_TEXT.about.title}
                        description={MAIN_PAGE_TEXT.about.description}
                        additionalImg={MAIN_PAGE_TEXT.about.img}
                        link={LINKS.about}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderIntro
                        title={MAIN_PAGE_TEXT.events.title}
                        description={MAIN_PAGE_TEXT.events.description}
                        img={events[0]?.img?.url}
                        additionalImg={MAIN_PAGE_TEXT.events.img}
                        link={LINKS.events}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderIntro
                        title={MAIN_PAGE_TEXT.shop.title}
                        description={MAIN_PAGE_TEXT.shop.description}
                        img={paintings[0]?.img[0]?.url}
                        additionalImg={MAIN_PAGE_TEXT.shop.img}
                        link={LINKS.shop}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}


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

