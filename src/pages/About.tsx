import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Code,
  Heart,
  Users,
  Zap,
  Shield,
  Globe,
  Target,
  Brain,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const coreValues = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Human-Centric AI",
      description: "Technology should amplify human potential, not replace it. Our AI systems are designed to empower, guide, and inspire individual growth."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ethical Intelligence",
      description: "We build AI with transparency, fairness, and accountability at its core, ensuring every recommendation serves the individual's best interests."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Inclusive Growth",
      description: "Career success shouldn't depend on privilege or access. We democratize opportunity through intelligent, accessible career guidance."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Continuous Evolution",
      description: "In a rapidly changing world, we stay ahead of industry shifts to provide the most relevant and forward-thinking career intelligence."
    }
  ];

  const impactStats = [
    { number: "100K+", label: "Lives Transformed" },
    { number: "1000+", label: "Partner Organizations" },
    { number: "98%", label: "Career Success Rate" },
    { number: "50+", label: "Countries Reached" }
  ];

  const founderStory = [
    "Born from the realization that traditional career counseling couldn't keep pace with the AI revolution",
    "Founded by technologists who experienced firsthand the gap between education and industry reality",
    "Built on the principle that every individual deserves personalized, intelligent career guidance",
    "Committed to creating technology that serves humanity's highest potential"
  ];

  const ourApproach = [
    {
      step: "01",
      title: "Deep Understanding",
      description: "We start by truly understanding you - your strengths, values, aspirations, and unique circumstances."
    },
    {
      step: "02",
      title: "Intelligent Matching",
      description: "Our AI analyzes thousands of career paths to find opportunities perfectly aligned with your profile."
    },
    {
      step: "03",
      title: "Personalized Roadmap",
      description: "Receive a custom career plan with specific skills, experiences, and connections you need to succeed."
    },
    {
      step: "04",
      title: "Continuous Support",
      description: "As you grow and the world evolves, our AI adapts your plan to keep you on the path to fulfillment."
    }
  ];
  
  return (
    <div className="min-h-screen">
      
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(245,126,32,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(3,109,155,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in">
              Pioneering the <span className="gradient-text">Future of Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Where artificial intelligence meets human ambition to unlock extraordinary career possibilities
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 font-montserrat font-medium hover-scale">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-brand-orange text-white rounded-lg mr-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-montserrat font-bold text-brand-dark">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  To democratize access to intelligent career guidance that adapts to each individual's unique journey. We believe every person deserves the opportunity to discover, develop, and deploy their talents in ways that create both personal fulfillment and positive impact.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through the power of ethical AI, we're building a world where career decisions are informed by deep self-knowledge, market intelligence, and continuous learning.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-brand-cyan text-white rounded-lg mr-4">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-montserrat font-bold text-brand-dark">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  A future where every individual has access to personalized, intelligent career guidance that evolves with them throughout their professional journey. Where career success is defined not just by traditional metrics, but by alignment with personal values and contribution to society.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We envision a world where AI amplifies human potential, making career fulfillment accessible to everyone, regardless of background or circumstance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-brand-orange/10 via-brand-cyan/10 to-brand-blue/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-brand-dark mb-4">Our Global Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Transforming careers and lives across the globe through intelligent career guidance</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-montserrat font-bold text-brand-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values shape every decision, every feature, and every interaction within our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-brand-orange to-brand-cyan text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              How We Transform Careers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach combines deep personalization with intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourApproach.map((step, index) => (
              <div 
                key={step.step}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-orange to-brand-cyan text-white rounded-full flex items-center justify-center font-montserrat font-bold text-xl mx-auto">
                    {step.step}
                  </div>
                  {index < ourApproach.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-brand-orange to-brand-cyan"></div>
                  )}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-dark mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-8">
                  Why We Started Gurukul Code
                </h2>
                <div className="space-y-6">
                  {founderStory.map((story, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg leading-relaxed">{story}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-orange/10 to-brand-cyan/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-montserrat font-bold text-brand-dark mb-6">
                  Join Our Movement
                </h3>
                <p className="text-gray-600 mb-6">
                  Be part of the AI-powered career revolution. Whether you're starting your journey or ready to make a change, we're here to guide you toward your most fulfilling path.
                </p>
                <div className="space-y-4">
                  <Button className="bg-gradient-to-r from-brand-orange to-brand-cyan text-white font-montserrat font-medium px-6 py-3 hover-scale w-full">
                    Start Your Journey
                  </Button>
                  <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-montserrat font-medium px-6 py-3 w-full">
                    Partner With Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue to-brand-cyan">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              Ready to Shape Your Future?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands who've discovered their path through intelligent career guidance. Your extraordinary career starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-montserrat font-medium px-8 py-3 hover-scale">
                Begin Assessment
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-montserrat font-medium px-8 py-3">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
