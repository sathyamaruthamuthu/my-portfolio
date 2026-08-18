import React from 'react';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skills from './components/projects/Skills';
import Projects from './components/projects/Projects';
import './App.css';

function App() {
  
  return (
    
      <div className="App">
        <header className="App-header">
          <Portfolio />
        </header>
        <Skills />
        <Projects />
        <Contact />
      </div>
    
  );
}

export default App;
