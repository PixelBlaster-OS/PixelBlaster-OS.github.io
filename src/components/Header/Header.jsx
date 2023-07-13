import React from 'react'
import styles from './Header.module.css'

const Header = ({ page, setPage, darkMode, setDarkMode }) => {

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navbar__logo} onClick={
                    () => {
                        toggleDarkMode()
                    }
                }>PixelBlaster-OS</div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item} onClick={() => { setPage(1)}}>About</li>
                    <li className={styles.navbar__item} onClick={() => { setPage(2)}}>Team</li>
                    <li className={styles.navbar__item} onClick={() => { setPage(3)}}>Downloads</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header