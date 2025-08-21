import Button from "../components/Button";
import { Play, ArrowRight } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel"; 
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ScrollToHashSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

export function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          
          
          <h1 className="font-bold tracking-tight mb-6 text-4xl md:text-6xl lg:text-7xl">
            Sync your data
            <span className="block text-primary">everywhere, instantly</span>
          </h1>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-xl">
            Nurosync keeps your data, workflows, and digital memory seamlessly aligned across all devices.
            Work seamlessly from anywhere with enterprise-grade security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="font-medium px-8 py-3 text-lg"
              onClick={() => navigate("/getstarted")}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <ScrollToHashSection />
      <Hero />
      
    </>
  );
}