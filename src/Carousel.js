import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from './CarouselItem';
import CarouselItemTwo from './CarouselItemTwo';
import styles from './Carousel.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 1464, min: 1128},
    items: 3,
  },
  desktop: {
    breakpoint: {max: 1128, min: 762},
    items: 2,
  },
  tablet: {
    breakpoint: {max: 762, min: 396},
    items: 2,
  },
  mobile: {
    breakpoint: {max: 396, min: 0},
    items: 2,
  },
};

const BtnGrp = ({next, previous}) => {
  return (
    <div className={styles.btnGrp}>
      <div className={styles.btnArrow} onClick={previous}>
        <FontAwesomeIcon className={styles.chevron} icon={faChevronLeft} />
      </div>
      <div className={styles.btnArrow} onClick={next}>
        <FontAwesomeIcon className={styles.chevron} icon={faChevronRight} />

      </div>
    </div>
  );
};

const vids = [
  {
    title: 'MS und Familienplanung Immuntherapien bei MS in ...',
    completedTime: '2:42',
    tag: 'episode 4',
  },
  {
    title: 'MS und Familienplanung MS-Aktivität in der Schwangerschaft und danach',
    completedTime: '1:30',
    tag: 'episode 3',
  },
  {
    title: 'Unter der Lupe – Können wir für Alzheimer von der MS lernen?',
    completedTime: '0:46',
    tag: 'episode 2',
  },
  {
    title: 'Wechselwirkungen in der MS Therapie - Klinik und Pharmakologie',
    completedTime: '3:23',
    tag: 'episode 1',
  },
  {
    title: 'Impfen bei MS zu Coronazeiten',
    completedTime: '1:14',
    tag: 'episode 5',
  },
  {
    title: 'MS bei Kindern und im Alter',
    completedTime: '0:42',
    tag: 'episode 6',
  },
];

const cards = [
  {
    title: 'Neurogenium Aktuell',
    score: 4.5,
    tag: 'webinar',
    follow: 7,
  },
  {
    title: 'Experten-Interviews zur SMA',
    score: 4.7,
    tag: 'interviews',
    follow: 5,
  },
  {
    title: 'Nusinersen – Wirksamkeit bei 5q-SMA ist keine Frage des Alters?',
    score: 4.1,
    tag: 'symposium',
    follow: 9,
  },
  {
    title: 'Lesen und Lesen lassen',
    score: 4.0,
    tag: 'explainer',
    follow: 3,
  },
];

const Carouselator = props => {
  return (
    <div className={styles.maxer}>
      <div className={styles.topTitles}>
        <span className={styles.showTitle}>{props.title}</span>
        <span className={styles.total}>{props.total}</span>
      </div>

      {props.data === 'vids'
        ? <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
            infinite={true}
            swipeable={true}
            removeArrowOnDeviceType={['mobile', 'tablet']}
            arrows={false}
            customButtonGroup={<BtnGrp />}
          >

            {vids.map (vid => {
              return (
                <CarouselItem
                  title={vid.title}
                  tag={vid.tag}
                  completedTime={vid.completedTime}
                />
              );
            })}
          </Carousel>
        : <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
            infinite={true}
            swipeable={true}
            removeArrowOnDeviceType={['mobile', 'tablet']}
            arrows={false}
            customButtonGroup={<BtnGrp />}
          >

            {cards.map (card => {
              return (
                <CarouselItemTwo
                  title={card.title}
                  tag={card.tag}
                  score={card.score}
                  follow={card.follow}
                />
              );
            })}
          </Carousel>}

    </div>
  );
};

export default Carouselator;
