
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Page from './Page';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
  <Routes>
        <Route path="/" element={<Page/>} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        </Routes>
</BrowserRouter>
  );
}

export default App;
