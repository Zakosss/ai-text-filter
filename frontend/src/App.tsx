//import { useState } from 'react'
import { Header } from './components';
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import WordList from './pages/wordList'
import WordsSingle from './pages/wordSingle'
import About from './pages/about'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WordList />} />
        <Route path="/word-check" element={<WordsSingle />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
