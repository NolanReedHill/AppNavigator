import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Components/Homepage/Layout';
import AppWeather from './Components/Weather/AppWeather';
import TriviaApp from './Components/Trivia/TriviaApp';
import News from './Components/News/News';

export default function App() {
  return (
    <>
    <h1>Nolan's App Navigator</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Layout/>}>
          <Route path="weather" element= {<AppWeather/>}/>
          <Route path="trivia" element= {<TriviaApp/>}/>
          <Route path="news" element= {<News/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);