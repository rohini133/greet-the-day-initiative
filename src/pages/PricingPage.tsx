import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, BarChart2, Users, Briefcase } from "lucide-react";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  const plans = [
    {
      name: "Starter",
      price: isAnnual ? "₹0" : "₹0",
      description: "Perfect for individual exploration",
      features: [
        "Basic career assessment",
        "3 career path suggestions",
        "General industry insights",
        "Email support",
        "Monthly progress reports"
      ],
      cta: "Get Started",
      popular: false,
      icon: <BarChart2 className="w-6 h-6" />
    },
    {
      name: "Professional",
      price: isAnnual ? "₹999/mo" : "₹999/mo",
      description: "For serious career development",
      features: [
        "Advanced AI assessment",
        "Unlimited career suggestions",
        "Personalized roadmap",
        "Skill gap analysis",
        "Priority support",
        "Interview preparation tools",
        "Bi-weekly coaching sessions"
      ],
      cta: "Start Free Trial",
      popular: true,
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Unlimited assessments",
        "Team analytics dashboard",
        "Dedicated success manager",
        "Custom integration",
        "HRIS system integration",
        "On-site training",
        "24/7 premium support",
        "Talent retention analysis"
      ],
      cta: "Contact Sales",
      popular: false,
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="container mx-auto py-32 px-4 md:px-6 space-y-16 bg-[#0F1026]">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
          <Briefcase className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that works best for your career journey. All plans include our core features.
        </p>
        
        {/* Toggle Switch */}
        <div className="flex justify-center items-center space-x-4 py-6">
          <span className={`text-lg ${!isAnnual ? "text-primary font-medium" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <div 
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-14 h-7 bg-gray-700 rounded-full cursor-pointer"
          >
            <div className={`absolute top-1 w-5 h-5 bg-primary rounded-full transition-transform ${
              isAnnual ? "left-8" : "left-1"
            }`}></div>
          </div>
          <div className="flex items-center">
            <span className={`text-lg ${isAnnual ? "text-primary font-medium" : "text-muted-foreground"}`}>
              Annual
            </span>
            <span className="ml-2 px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
              Save 20%
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`rounded-xl p-8 relative overflow-hidden ${
              plan.popular 
                ? "border-2 border-primary bg-gradient-to-b from-[#0F1026] to-[#1a1c3f]" 
                : "bg-[#171934]"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  MOST POPULAR
                </div>
              </div>
            )}
            
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-lg mr-4">
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
            </div>
            
            <div className="mb-8">
              <div className="text-4xl font-bold mb-2">{plan.price}</div>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>
            
            <ul className="space-y-4 mb-10">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button
              size="lg"
              className={`w-full ${
                plan.popular 
                  ? "bg-[#F57E20] hover:bg-[#e86e10] text-white" 
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </section>

      {/* Comparison Section */}
      <section className="bg-[#171934] rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-12">Feature Comparison</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left pb-6">Features</th>
              <th className="pb-6">Starter</th>
              <th className="pb-6">Professional</th>
              <th className="pb-6">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["AI Career Assessment", "Basic", "Advanced", "Premium"],
              ["Career Suggestions", "3/month", "Unlimited", "Unlimited"],
              ["Personalized Roadmap", "❌", "✅", "✅"],
              ["Skill Gap Analysis", "❌", "✅", "✅"],
              ["Interview Prep Tools", "❌", "✅", "✅"],
              ["1-on-1 Coaching", "❌", "2 sessions", "Unlimited"],
              ["Support", "Email", "Priority", "24/7 Dedicated"],
              ["Team Management", "❌", "❌", "✅"],
            ].map(([feature, ...plans], idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-[#1a1c3f]" : ""}>
                <td className="py-4 px-4">{feature}</td>
                {plans.map((value, i) => (
                  <td key={i} className="text-center py-4">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              question: "Can I change plans later?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be prorated based on your billing cycle."
            },
            {
              question: "Do you offer discounts for students?",
              answer: "Absolutely! We offer 50% discount for students with valid academic email. Contact our support team for verification."
            },
            {
              question: "How secure is my data?",
              answer: "We use bank-grade encryption and comply with all major data protection regulations. Your data is never sold or shared with third parties."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-[#171934] rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="bg-[ rounded-xl p-8 text-center">
        <Briefcase className="w-12 h-12 mx-auto text-primary mb-4" />
        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Our enterprise plan offers customized features for teams and organizations with special requirements.
        </p>
        <Button 
          size="lg" 
          className="bg-[#F57E20] hover:bg-[#e86e10] text-white"
        >
          Request Custom Quote
        </Button>
      </section>
    </div>
  );
};

export default PricingPage;