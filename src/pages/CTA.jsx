
import { Button } from "../components/Button";
import { ArrowRight, Check } from "lucide-react";

export function CTA() {
  const handleStartTrial = () => {
    console.log("Starting free trial from CTA");
    // In a real app, this would redirect to signup
  };

  const handleScheduleDemo = () => {
    console.log("Scheduling demo");
    // In a real app, this would open a calendar booking widget
  };

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-bold mb-6 text-3xl md:text-5xl">
            Ready to sync your world?
          </h2>
          <p className="opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed text-xl">
            Join over 50,000 teams who trust Nurosync to keep their data perfectly synchronized. 
            Start your free trial today—no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="secondary" 
              className="font-medium px-8 py-3 text-lg"
              onClick={handleStartTrial}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="font-medium px-8 py-3 text-lg"
              onClick={handleScheduleDemo}
            >
              Schedule Demo
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-90 text-sm">
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              <span className="font-medium">14-day free trial</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              <span className="font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA;