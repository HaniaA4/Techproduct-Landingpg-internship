import React from 'react';
import './App.css';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import CTA from './pages/CTA';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ThemeToggle />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
