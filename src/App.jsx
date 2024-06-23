import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Page from './Page';
import About from './components/About';
import Contact from './components/Contact';
import Article from './components/Article';
import ApaItuPaprika from './components/Article/ApaItuPaprika';

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/article" element={<Article/>} />
        <Route path="/article/apa-itu-paprika" element={<ApaItuPaprika/>} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        </Routes>
</BrowserRouter>
  );
}

export default App;
