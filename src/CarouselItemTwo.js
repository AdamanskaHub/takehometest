import React from 'react';
import styles from './CarouselItemTwo.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faCaretRight, faPlus} from '@fortawesome/free-solid-svg-icons';

function CarouselItem (props) {
  return (
    <div className={styles.container}>

      <div className={styles.top}>
        <img src="/circle.png" alt={props.title} className={styles.circle} />
        <div className={styles.typebox}>
          <span className={styles.typeboxText}>{props.tag}</span>
        </div>
        <div className={styles.stars}>
          <span className={styles.starsText}>
            {props.score}
          </span>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className={styles.play}>
          <FontAwesomeIcon
            className={styles.playTriangle}
            icon={faCaretRight}
          />
        </div>

      </div>

      <div className={styles.bottom}>
        <p className={styles.title}>
          {props.title}
        </p>

        <div className={styles.lastLine}>
          <span className={styles.folgen}>
            folgen {props.follow}
          </span>

          <div className={styles.plusBG}>
            <FontAwesomeIcon className={styles.plus} icon={faPlus} />
          </div>
        </div>

      </div>

    </div>
  );
}

export default CarouselItem;
