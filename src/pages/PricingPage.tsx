import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, BarChart2, Users, Briefcase } from "lucide-react";
import {  ArrowRight } from "lucide-react";

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
      price: "$29",
      period: "/month",
      description: "Perfect for individuals getting started with AI-powered career development",
      features: [
        "Personal AI career coach",
        "Basic skill assessments",
        "Access to learning resources",
        "Community support",
        "Monthly progress reports"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "For professionals serious about accelerating their career growth",
      features: [
        "Everything in Starter",
        "Advanced AI insights",
        "1-on-1 mentorship sessions",
        "Priority support",
        "Custom learning paths",
        "Interview preparation",
        "Salary negotiation tools"
      ],
      cta: "Choose Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for organizations and teams",
      features: [
        "Everything in Professional",
        "Team management tools",
        "Custom integrations",
        "Dedicated success manager",
        "Advanced analytics",
        "Custom training programs",
        "24/7 priority support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
     
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(86,199,223,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(245,126,32,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in">
              Choose Your <span className="gradient-text">Success Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Flexible pricing designed to grow with your career and business needs
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium animate-fade-in" style={{ animationDelay: '400ms' }}>
              🎯 30-day money-back guarantee on all plans
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in ${
                  plan.popular ? 'border-2 border-brand-cyan transform scale-105' : 'border border-gray-200'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-brand-cyan to-brand-blue text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-montserrat font-bold text-brand-dark mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-montserrat font-bold text-brand-blue">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-brand-cyan flex-shrink-0 mt-0.5 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-montserrat font-medium py-3 hover-scale ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-cyan text-white' 
                        : 'bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
                    }`}
                  >
                    {plan.cta}
                    {plan.name !== 'Enterprise' && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-12">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-montserrat font-semibold text-brand-dark mb-3">
                  Can I switch plans anytime?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-montserrat font-semibold text-brand-dark mb-3">
                  Is there a free trial?
                </h3>
                <p className="text-gray-600">
                  All paid plans come with a 14-day free trial. No credit card required to start.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-montserrat font-semibold text-brand-dark mb-3">
                  What's included in Enterprise?
                </h3>
                <p className="text-gray-600">
                  Enterprise plans are customized based on your needs. Contact us for a personalized quote.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-montserrat font-semibold text-brand-dark mb-3">
                  Do you offer refunds?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer a 30-day money-back guarantee on all plans if you're not satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;