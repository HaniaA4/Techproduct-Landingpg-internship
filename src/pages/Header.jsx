import { useState } from "react";
import Button from "../components/Button";
import ThemeToggle from '../components/ThemeToggle';
import { BsCloudDownload } from "react-icons/bs";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      // Go to home with hash
      navigate(`/#${sectionId}`);
    } else {
      // Already on home, just scroll
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `#${sectionId}`);
      }
    }
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 relative">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleLogoClick}
        >
          <BsCloudDownload className="h-8 w-8 text-primary" />
          <span className="font-medium text-lg">Nurosync</span>
        </div>
        
        
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <button 
            onClick={() => handleNav('features')} 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
          >
            Features
          </button>
          <button 
            onClick={() => handleNav('pricing')} 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
          >
            Pricing
          </button>
          <button 
            onClick={() => handleNav('testimonials')} 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
          >
            Testimonials
          </button>
          
        </nav>

        {/* Right side: ThemeToggle and Burger for mobile */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              className="text-sm font-medium"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
            <Button className="text-sm font-medium" onClick={() => navigate("/getstarted")}>
              Get Started
            </Button>
          </div>
          {/* Burger icon for mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-t px-4 py-4 flex flex-col gap-4">
          <button onClick={() => handleNav('features')} className="text-muted-foreground hover:text-foreground text-base font-medium text-left">Features</button>
          <button onClick={() => handleNav('testimonials')} className="text-muted-foreground hover:text-foreground text-base font-medium text-left">Testimonials</button>
          <button onClick={() => handleNav('pricing')} className="text-muted-foreground hover:text-foreground text-base font-medium text-left">Pricing</button>
          <Button 
            variant="outline" 
            className="text-base font-medium"
            onClick={() => { setMenuOpen(false); navigate("/signin"); }}
          >
            Sign In
          </Button>
          <Button 
            className="text-base font-medium"
            onClick={() => { setMenuOpen(false); navigate("/getstarted"); }}
          >
            Get Started
          </Button>
        </nav>
      )}
    </header>
  );
}

export default Header;