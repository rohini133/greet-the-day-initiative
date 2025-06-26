
import React from 'react';
import { Building, Shield, Cog, Users, ArrowRight, CheckCircle } from 'lucide-react';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Brain } from "lucide-react";
import { AIAssessmentModal } from "@/components/assessment/AIAssessmentModal";
import { useEffect } from "react";

const Enterprise = () => {
  const solutions = [
    {
      icon: <Building className="h-8 w-8" />,
      title: "Enterprise Integration",
      description: "Seamlessly integrate with your existing enterprise systems and workflows"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Security",
      description: "Enterprise-grade security with SOC 2 compliance and data encryption"
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business needs"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Management",
      description: "Comprehensive tools for managing and scaling your team's AI capabilities"
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40% through AI automation",
    "Scale your team's capabilities without proportional hiring",
    "Ensure compliance with industry regulations and standards",
    "Access 24/7 priority support and dedicated success managers",
    "Custom training and onboarding for your entire organization"
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
              <span className="gradient-text">Enterprise AI</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Scale your business with enterprise-grade AI solutions built for security, compliance, and performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="bg-gradient-to-r from-brand-blue to-brand-orange text-white px-8 py-3 font-montserrat font-medium hover-scale">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 font-montserrat font-medium">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI platform designed to meet the complex needs of large organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={solution.title}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-brand-blue to-brand-cyan text-white mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-dark mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-brand-dark/5 to-brand-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-8">
                  Enterprise Benefits
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-blue to-brand-cyan p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-montserrat font-bold mb-6">
                  Ready to Transform Your Enterprise?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Let's discuss how our AI solutions can revolutionize your business operations and drive growth.
                </p>
                <Button className="bg-white text-brand-blue hover:bg-gray-100 font-montserrat font-medium px-6 py-3 hover-scale">
                  Get Enterprise Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Enterprise;
