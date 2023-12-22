import React from "react";
import styles from "./DeviceCard.module.css";

const DeviceCard = ({ data, id, url }) => {
  const { devicename, maintainer } = data;
  return (
    <div className={styles.card} key={id}>
      <img
        className={styles.card__image}
        src="/assets/images/left-hole.png"
        alt="device"
      />
      <div className={styles.card__content}>
        <p className={styles.card__content__title}>{devicename}</p>
        <p className={styles.card__content__text}>By {maintainer}</p>
      </div>
      <button className={styles.card__button}><a href={url}>Download</a></button>
    </div>
  );
};

export default DeviceCard;
