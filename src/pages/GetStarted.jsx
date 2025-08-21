import React from "react";
import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/Card";
import { ThemeToggle } from "../components/ThemeToggle";
import { ArrowLeft, CheckCircle } from "lucide-react";

export function GetStarted({ onBack, onSignIn }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <Button
          variant="ghost"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </div>
      
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
          </div>
          <CardTitle>Get Started with Nurosync</CardTitle>
          <CardDescription>
            Create your account and start your free trial today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button className="w-full" onClick={onSignIn}>
              Start Free Trial
            </Button>
            <div className="border-t pt-6 mt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Button
                  variant="link"
                  className="p-0 h-auto text-sm font-medium"
                  onClick={onSignIn}
                >
                  Sign In
                </Button>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default GetStarted;