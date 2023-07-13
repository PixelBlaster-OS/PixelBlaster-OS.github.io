import React from 'react'
import styles from './Home.module.css'

const Home = () => {
    return (
            <div className={styles.card}>
                <div className={`${styles.content} ${styles.content__text}`}>
                    <div className={styles.text}>
                        <h1 className={styles.content__title}>What is PixelBlaster OS ?</h1>
                        <p className={styles.content__description}>PixelBlaster OS is a free and open-source operating system based on Android. It is a community-driven project that is aimed to bring the best Android experience to your device.</p>
                    </div>
                </div>
                <div className={`${styles.content} ${styles.content__image}`}>
                    <img className={styles.image} src="/assets/images/phone.png" alt="PixelBlaster OS" />
                </div>
            </div>
    )
}

export default Home