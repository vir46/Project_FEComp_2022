import logo from './logo.svg';
import './App.css';
import Spacevid from './sky.mp4';

function App() {
  return (
    <div className="App">
      <div onContextMenu={e => e.preventDefault()}>
      <video 
        class="videobackgroundspace"
        autoplay="true"
        loop="true"
        muted="false"
        poster="https://www.youtube.com/watch?v=dQw4w9WgXcQ"

      >
        <source src={Spacevid} type="video/mp4" oncontextmenu="return false;" />
      </video>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
