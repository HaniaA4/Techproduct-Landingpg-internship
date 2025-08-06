import React from "react";
import Button from "../components/Button";
import { Play, ArrowRight } from "lucide-react";

export function Hero() {
  const handleStartTrial = () => {
    // In a real app, this would navigate to signup
    console.log("Starting free trial...");
  };

  const handleWatchDemo = () => {
    // In a real app, this would open a modal or navigate to demo
    console.log("Opening demo...");
  };

  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
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
              onClick={handleStartTrial}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-medium px-8 py-3 text-lg"
              onClick={handleWatchDemo}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-lg border bg-card p-2 shadow-2xl">
              <div className="aspect-video rounded-md bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-medium">Product Demo Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;