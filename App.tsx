import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Blog />
      </main>
      <FooterCTA />
    </div>
  );
}

export default App;