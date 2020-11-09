import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import Cart from "../Cart";

const Aside = ({ active, setAsideVisibility }) => {
  return (
    <aside
      onClick={() => setAsideVisibility(false)}
      className={`${styles.aside} ${active && styles.active}`}
    >
      <div className={styles.asideContent}>
        <Navigation includeCart={false} />
      </div>
    </aside>
  );
};

export default function Header({ cart }) {
  const [asideVisibility, setAsideVisibility] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div style={{ padding: 0 }} className="content">
          <div className={styles.logoPart}>
            <div className={styles.cartLogo}>
              <NavLink to="/cart">
                <Cart cart={cart} />
              </NavLink>
            </div>
            <NavLink to="/">
              <span className={styles.logoImg}></span>
            </NavLink>
            <div
              onClick={() => {
                setAsideVisibility(!asideVisibility);
              }}
              className={`
              ${styles["hamburger"]} 
              ${styles[asideVisibility && "active"]}`}
            >
              <span></span>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.navPart}>
            <Navigation cart={cart} />
          </div>
        </div>
      </header>
      <Aside active={asideVisibility} setAsideVisibility={setAsideVisibility} />
    </>
  );
}
