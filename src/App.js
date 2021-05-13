import './App.css';
import Carouselator from './Carousel';
// import CarouselatorTwo from './CarouselTwo';

// const mockedVideoPreviews = [
//   {
//     title: 'MS und Familienplanung Immuntherapien bei MS in ...',
//     completedTime: '2:42',
//     tag: 'episode 4',
//   },
//   {
//     title: 'MS und Familienplanung MS-Aktivität in der Schwangerschaft und danach',
//     completedTime: '1:30',
//     tag: 'episode 3',
//   },
//   {
//     title: 'Unter der Lupe – Können wir für Alzheimer von der MS lernen?',
//     completedTime: '0:46',
//     tag: 'episode 2',
//   },
//   {
//     title: 'Wechselwirkungen in der MS Therapie - Klinik und Pharmakologie',
//     completedTime: '3:23',
//     tag: 'episode 1',
//   },
//   {
//     title: 'Impfen bei MS zu Coronazeiten',
//     completedTime: '1:14',
//     tag: 'episode 5',
//   },
//   {
//     title: 'MS bei Kindern und im Alter',
//     completedTime: '0:42',
//     tag: 'episode 6',
//   },
// ];

// const mockedCards = [
//   {
//     title: 'Neurogenium Aktuell',
//     score: 4.5,
//     tag: 'webinar',
//     follow: 7,
//   },
//   {
//     title: 'Experten-Interviews zur SMA',
//     score: 4.7,
//     tag: 'interviews',
//     follow: 5,
//   },
//   {
//     title: 'Nusinersen – Wirksamkeit bei 5q-SMA ist keine Frage des Alters?',
//     score: 4.1,
//     tag: 'symposium',
//     follow: 9,
//   },
//   {
//     title: 'Lesen und Lesen lassen',
//     score: 4.0,
//     tag: 'explainer',
//     follow: 3,
//   },
// ];

function App () {
  return (
    <div className="App">
      <div
        className="grey"
        style={{height: 72, width: '100vw', backgroundColor: '#F2F2F2'}}
      />
      <Carouselator
        title="Zuletzt angesehen"
        total="Alle zeigen (6)"
        data="vids"
      />
      <Carouselator
        title="Neu auf BiogenLinc"
        total="Alle zeigen (4)"
        data="cards"
      />

    </div>
  );
}

export default App;
