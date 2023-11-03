import {useState} from 'react';
import './App.css';
import Data from './data/data.jsx';

function randomInteger(min, max) {
  // it will generate a random integer between min and max, both included
  return Math.floor(Math.random() * max - min + 1) + min;
}

function App() {
  const [randomTheme, setRandomTheme] = useState(`rgb(${randomInteger(0, 255)},${randomInteger(0, 255)},${randomInteger(0, 255)})`);
  const [randomQuote, setRandomQuote] = useState(Data[randomInteger(0,171)]);
  root.style.setProperty('--theme-color', randomTheme);
  function handleNewQuote() {
    setRandomTheme(`rgb(${randomInteger(0, 255)},${randomInteger(0, 255)},${randomInteger(0, 255)})`);
    setRandomQuote(Data[randomInteger(0, 171)]);
  }
  return (
    <div id="container" className="d-flex flex-column justify-content-center align-items-center p-2">
      <div id="quote-box" className="col-sm-10 col-md-8 col-lg-6 bg-white text-center rounded mb-2 p-3 p-md-5">
      <div id="quote">
          <svg id="double-apostrophe"
          fill={randomTheme} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
          <p id="text" className="d-inline fs-3">{randomQuote.quote}</p>
        </div>
        <p id="author" className="text-end fs-5 fw-light">- {randomQuote.author}</p>
        <div id="buttons" className="d-flex justify-content-between align-items-center">
          <div id="share-buttons">
            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent('"' + randomQuote.quote + '"\n- ' + randomQuote.author)}`} target="_blank" id="whatsapp-quote" className="rounded text-white fs-5 px-2 py-1">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </a>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + randomQuote.quote + '"\n- ' + randomQuote.author)}`} target="_blank" id="tweet-quote" className="rounded text-white fs-5 ms-2 px-2 py-1">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            </a>
          </div>
          <button id="new-quote" className="rounded text-white fs-5 px-2 border-0" onClick={handleNewQuote}>New Quote</button>
        </div>
      </div>
      <div id="footer" className="fs-6 text-white">
        Made by <a href="https://atharvko.web.app/" target="_blank" className="text-white">Atharv</a>
      </div>
    </div>
  );
}

export default App;