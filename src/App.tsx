import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skills from './components/projects/Skills';
import Projects from './components/projects/Projects';
import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Portfolio />
        </header>
        <Skills />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
