import { Button } from "../components/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Badge } from "../components/Badge";
import { Check } from "lucide-react";

const plans = [
	{
		name: "Personal",
		price: "$9",
		period: "/month",
		description: "Perfect for individuals and freelancers",
		features: [
			"50GB sync storage",
			"5 connected devices",
			"Basic file sharing",
			"Mobile apps",
			"Email support",
		],
		cta: "Start Free Trial",
		popular: false,
		action: "trial",
	},
	{
		name: "Team",
		price: "$29",
		period: "/month",
		description: "Ideal for small to medium teams",
		features: [
			"500GB sync storage",
			"Unlimited devices",
			"Advanced sharing & permissions",
			"Team collaboration tools",
			"Priority support",
			"Version history",
		],
		cta: "Start Free Trial",
		popular: true,
		action: "trial",
	},
	{
		name: "Enterprise",
		price: "Custom",
		period: "",
		description: "For large organizations with custom needs",
		features: [
			"Unlimited storage",
			"SSO integration",
			"Advanced security controls",
			"Custom integrations",
			"24/7 dedicated support",
			"SLA guarantee",
		],
		cta: "Contact Sales",
		popular: false,
		action: "contact",
	},
];

export function Pricing() {
	const handlePlanAction = (plan) => {
		if (plan.action === "trial") {
			console.log(`Starting free trial for ${plan.name} plan`);
		} else {
			console.log("Contacting sales team");
		}
	};

	return (
		<section id="pricing" className="py-16 md:py-24">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="font-bold mb-4 text-3xl md:text-5xl">
						Simple, transparent pricing
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto text-xl">
						Choose the plan that fits your needs. Upgrade or downgrade at any
						time.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{plans.map((plan, index) => (
						<Card
							key={index}
							className={`relative bg-card border border-border rounded-lg shadow p-0 transition hover:shadow-lg hover:scale-[1.03] ${
								plan.popular ? "border-primary shadow-lg scale-105" : ""
							}`}
						>
							{plan.popular && (
								<Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 font-medium">
									Most Popular
								</Badge>
							)}
							<CardHeader className="text-center pb-8">
								<CardTitle className="font-medium text-2xl">
									{plan.name}
								</CardTitle>
								<div className="mt-4">
									<span className="font-bold text-4xl">{plan.price}</span>
									<span className="text-muted-foreground">
										{plan.period}
									</span>
								</div>
								<p className="text-muted-foreground mt-2">
									{plan.description}
								</p>
							</CardHeader>
							<CardContent className="space-y-4">
								<ul className="space-y-3">
									{plan.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-center">
											<Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
											<span className="text-sm">{feature}</span>
										</li>
									))}
								</ul>
								<Button
									className="w-full mt-6 font-medium"
									variant={plan.popular ? "default" : "outline"}
									size="lg"
									onClick={() => handlePlanAction(plan)}
								>
									{plan.cta}
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
export default Pricing;