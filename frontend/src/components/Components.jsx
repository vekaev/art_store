import React from 'react';
import styles from './Components.module.scss';
import ImageGallery from 'react-image-gallery';
import {Link, NavLink, useHistory} from 'react-router-dom';

export const UnderImgLinks = ({className, children, to}) => {
    return (
        <Link className={`${styles.UnderImgLinks} ${className}`} to={to}>
            {children}
        </Link>
    );
};

export const LinkWrapper = ({href, className, children}) => {
    return (
        <a className={`${styles['LinkWrapper']} ${className}`} href={href}>
            {children}
        </a>
    );
};

export const Image = ({src, alt, className}) => (
    <img className={className} src={process.env.REACT_APP_BACKEND_URL + src} alt={alt}/>
)

export const Button = ({
                           type = 'button',
                           name = 'button',
                           children,
                           onClick,
                           size = 'small',
                           className,
                           disabled,
                           href,
                       }) => {
    if (href) {
        return (
            <NavLink
                to={href}
                className={`${styles['button']} ${styles[`${size}`]}  ${className}`}
            >
                {children}
            </NavLink>
        );
    }
    return (
        <button
            className={`${styles['button']} ${styles[`${size}`]} ${className}`}
            type={type}
            name={name}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export const Input = ({
                          required = false,
                          className,
                          value,
                          onChange,
                          placeholder,
                          name,
                          type = 'text',
                          textarea = false,
                      }) => {
    if (textarea) {
        return (
            <div className={`${styles.input} ${className}`}>
        <textarea
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            type={type}
        />
            </div>
        );
    }

    return (
        <div className={`${styles.input} ${className}`}>
            <input
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                type={type}
            />
        </div>
    );
};

export const Select = ({
                           name = 'select',
                           optionArray = [],
                           handleSelect,
                           placeholder = '',
                           className,
                           required = false,
                           defaultValue = false,
                       }) => {
    return (
        <div className={`${className} ${styles['select']}`}>
            <select
                value={defaultValue}
                required={required}
                placeholder={defaultValue && placeholder}
                name={name}
                onChange={handleSelect}
            >
                {!defaultValue && (
                    <option
                        defaultValue={defaultValue ? false : true}
                        disabled
                        value={''}
                    >
                        {placeholder}
                    </option>
                )}
                {optionArray.map((item, idx) => {
                    return (
                        <option
                            defaultValue={defaultValue === item.value}
                            key={idx}
                            value={item.value}
                        >
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export const GoBackBtn = ({href, className, children}) => {
    const history = useHistory();
    return (
        <div onClick={() => history.goBack()}  className={`${styles.goBackBtn} ${className}`}>
            {children}
        </div>
    );
};

export const Slider = ({imgArray}) => {
    const imgSet = imgArray.map(({url}) => {
        const imageUrl =
            process.env.NODE_ENV !== 'development'
                ? url
                : process.env.REACT_APP_BACKEND_URL + url;

        return {
            original: imageUrl,
            thumbnail: imageUrl,
        };
    });
    return (
        <ImageGallery
            additionalClass={styles['slider']}
            useBrowserFullscreen={false}
            showPlayButton={false}
            // showNav={false}
            showFullscreenButton={false}
            showThumbnails={imgArray?.length > 1}
            items={imgSet}
        />
    );
};

export const AddToCartBtn = ({onClick, className, inCart, children}) => {
    if (inCart) {
        return (
            <p
                className={`${styles.AddToCartBtn} ${styles.inCart} ${className}`}
                onClick={onClick}
            >
                dodane
            </p>
        );
    } else {
        return (
            <Button
                className={`${styles.AddToCartBtn} ${className}`}
                onClick={onClick}
            >
                {children || 'kupuję'}
            </Button>
        );
    }
};

// const SelectMe = (event) => {
//   let { name, value } = event.target;
//   console.log(value);
// };
//
// const options = [
//   {
//     name: 'Cena',
//     value: '1',
//   },
//   {
//     name: 'Hi2',
//     value: '2',
//   },
//   {
//     name: 'hi3',
//     value: '3',
//   },
//   {
//     name: 'hi4',
//     value: '4',
//   },
// ];
