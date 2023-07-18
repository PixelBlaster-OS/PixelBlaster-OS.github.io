import React from "react";
import styles from "./Header.module.css";
import { AnimatePresence, motion } from 'framer-motion'

const Header = ({ page, setPage, darkMode, setDarkMode }) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav class={styles.navbar}>
        <div
          class={styles.navbar__logo}
          onClick={() => {
            toggleDarkMode();
          }}
        >
          PixelBlaster-OS
        </div>
        <ul className={styles.navbar__list}>
          <li
            class={styles.navbar__item}
            onClick={() => {
              setPage(1);
            }}
          >
            About
          </li>
          <li
            class={styles.navbar__item}
            onClick={() => {
              setPage(2);
            }}
          >
            Team
          </li>
          <li
            class={styles.navbar__item}
            onClick={() => {
              setPage(3);
            }}
          >
            Downloads
          </li>
        </ul>

        {/* hamburger-menu */}
        <div className={styles.hamburger__icon}>
          <img
            src="/assets/images/hamburger.svg"
            alt="hamburger-menu"
            className={styles.hamburger__icon__img}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>

      <AnimatePresence>
        {showMenu && (
          <motion.div 
          key="header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
              delay: 0,
              duration: 0.5
          }}  className={styles.hamburger__menu}>
            <span
              className={styles.mobile__menu__item}
              onClick={() => {
                setPage(1);
                setShowMenu(false);
              }}
            >
              About
            </span>
            <span
              className={styles.mobile__menu__item}
              onClick={() => {
                setPage(2);
                setShowMenu(false);
              }}
            >
              Team
            </span>
            <span
              className={styles.mobile__menu__item}
              onClick={() => {
                setPage(3);
                setShowMenu(false);
              }}
            >
              Downloads
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
