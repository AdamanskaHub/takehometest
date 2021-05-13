import React from 'react';
import styles from './CarouselItem.module.css';

function CarouselItem (props) {
  return (
    <div className={styles.container}>

      <div className={styles.top}>
        <img src="/vid.png" alt={props.title} />
        <div className={styles.episodebox}>
          <span className={styles.episodeboxText}>{props.tag}</span>
        </div>
        <div className={styles.durationbox}>
          <span className={styles.durationboxText}>
            {props.completedTime}
          </span>
        </div>
        <div className={styles.bar} />
        <div className={styles.barGreen} />

      </div>
      <p className={styles.bottom}>
        {props.title}
      </p>

    </div>
  );
}

export default CarouselItem;
