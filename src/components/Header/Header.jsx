import React from 'react'
import styles from './Header.module.css'

const Header = ({ page, setPage }) => {
    return (
        <header>
            <nav class={styles.navbar}>
                <div class={styles.navbar__logo}>PixelBlaster-OS</div>
                <ul class={styles.navbar__list}>
                    <li class={styles.navbar__item} onClick={() => { setPage(1)}}>About</li>
                    <li class={styles.navbar__item} onClick={() => { setPage(2)}}>Team</li>
                    <li class={styles.navbar__item} onClick={() => { setPage(3)}}>Downloads</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header