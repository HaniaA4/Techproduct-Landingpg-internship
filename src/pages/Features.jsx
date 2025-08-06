import React from "react";
import { Card, CardContent } from "../components/Card";
import { Cloud, Shield, Zap, Users, Smartphone, Globe } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "Real-time Sync",
    description: "Your files sync instantly across all devices with conflict resolution built-in."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "End-to-end encryption and SOC 2 compliance to keep your data safe."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized sync algorithms ensure your files are available in milliseconds."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share workspaces and collaborate in real-time with your entire team."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Native apps for iOS and Android with full offline capability."
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Files served from the edge for the fastest access anywhere in the world."
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-4 text-3xl md:text-5xl">
            Everything you need to stay in sync
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl">
            Powerful features designed for modern teams who need their data accessible everywhere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-none bg-transparent">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2 text-xl">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Features;