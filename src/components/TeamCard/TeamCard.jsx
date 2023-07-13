import React from 'react'
import styles from './TeamCard.module.css'

const TeamCard = ({ data }) => {
    const { name, xda, github, telegram, role, tagline } = data;
    return (
        <div className={styles.card}>
                <div className={styles.content__details}>
                    <img className={styles.content__details__image} src={`${github}.png`} />
                    <div className={styles.content__details__text}>
                        <div>
                            <span className={styles.content__details__text__name}>{name}</span>
                            <p className={styles.content__details__text__role}>{role}</p>
                        </div>
                        <div className={styles.content__details__text__socials}>
                            <a href={xda}>
                                <img src="/assets/images/xda.svg" alt="XDA Developers" />
                            </a>
                            <a href={github}>
                                <img src="/assets/images/github.svg" alt="GitHub" />
                            </a>
                            <a href={telegram}>
                                <img src="/assets/images/telegram.svg" alt="Telegram" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.content__tagline}>
                    <span className={styles.content__tagline__text}>{tagline}</span>
                </div> 
        </div>
    )
}

export default TeamCard