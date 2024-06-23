import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Page from './Page';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Article from './components/Article';
import ApaItuPaprika from './components/Article/ApaItuPaprika';
import KenapaMembeliPaprikaKami from './components/Article/KenapaMembeliPaprikaKami';

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/article" element={<Article/>} />
        <Route path="/article/apa-itu-paprika" element={<ApaItuPaprika/>} />
        <Route path="/article/kenapa-membeli-paprika-kami" element={<KenapaMembeliPaprikaKami/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        </Routes>
</BrowserRouter>
  );
}

export default App;
