import React from 'react';
import styles from './Components.module.scss';


export const Image = ({src, alt, className}) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? src
      : process.env.REACT_APP_BACKEND_URL + src;

  return <img className={className} src={imageUrl} alt={alt}/>;
}

export const Button = ({
  type = 'button',
  name = 'button',
  children,
  onClick,
  size = 'small',
  className,
  disabled
}) => {
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

export const Select = ({ name = 'select', optionArray = [], handleSelect }) => {
  return (
    <div className={styles['select']}>
      <select name={name} onChange={handleSelect}>
        {optionArray.map((item, key) => {
          return (
            <option key={key} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
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
