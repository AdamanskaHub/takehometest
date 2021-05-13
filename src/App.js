import './App.css';
import Carouselator from './Carousel';

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
