//import React from "react";
import Button from "../components/Button";
import ThemeToggle from '../components/ThemeToggle';
import { BrainCircuit } from "lucide-react"; 

export function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <BrainCircuit className="h-8 w-8 text-primary" /> {/* Icon */}
          <span className="font-medium text-lg">Nurosync</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('pricing')} 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
          >
            Pricing
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" className="hidden sm:inline-flex text-sm font-medium">
            Sign In
          </Button>
          <Button className="text-sm font-medium">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;