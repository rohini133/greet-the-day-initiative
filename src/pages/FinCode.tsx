import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp, DollarSign, Shield, Brain, ArrowRight, CheckCircle, BookOpen, Users, Bot, Briefcase, PieChart } from 'lucide-react';

const FinCode = () => {
  const products = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "EdTech + Employability Suite",
      subtitle: "Become finance-ready, faster",
      description: "AI-curated learning & placement readiness for aspiring finance professionals",
      features: ["Career-Aligned Curriculum", "CFA-Inspired Bootcamps", "Resume + LinkedIn Optimizer", "Behavioral Interview Coach", "Finance Certification Paths"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Finance AI Agent Suite", 
      subtitle: "Replace manual research with AI co-pilots",
      description: "Autonomous AI agents that reduce hours of financial work into insights in seconds",
      features: ["AlphaSage Research Analyst", "TrendSeer Forecasting Engine", "FinModel Factory", "DealRoom Automator", "Save 10+ hours/week"]
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "CFO-as-a-Service",
      subtitle: "Strategic finance for MSMEs", 
      description: "Turn small business finance into a strategic advantage with AI automation",
      features: ["Cash Flow Automation", "Vendor & Credit Scoring", "Smart Pricing Suggestions", "Alerts & Dashboards", "Financial Health KPIs"]
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Robo-Advisory Engine",
      subtitle: "Democratizing wealth strategy",
      description: "AI-powered personal finance and investment advisory capabilities",
      features: ["Portfolio Generator", "Behavioral Nudging System", "Tax Optimization Engine", "Goal-Based Planning Bots", "Wealth Growth Tools"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Custom Solutions",
      subtitle: "For Institutions & Platforms",
      description: "Build your own finance intelligence layer with FinCode's modular stack",
      features: ["College & EdTech APIs", "Startup & Fintech Integration", "Enterprise L&D Modules", "Government & CSR Programs", "White-labeled Solutions"]
    }
  ];

  const aiAgents = [
    {
      name: "AlphaSage",
      role: "Company & Industry Research Analyst",
      description: "Pulls from filings, databases, market trends, SWOT insights, ESG scores"
    },
    {
      name: "TrendSeer", 
      role: "Forecasting & Indicator Engine",
      description: "Macro/microeconomic modeling, sentiment analysis, predictive dashboards"
    },
    {
      name: "FinModel Factory",
      role: "Automated Financial Modeling Suite", 
      description: "Generates DCFs, LBOs, 3-statement models, scenario planning"
    },
    {
      name: "DealRoom Automator",
      role: "Pitch Deck Intelligence Agent",
      description: "Transforms models + memos into banker-grade investment presentations"
    }
  ];

  const stats = [
    { number: "95%", label: "Model Accuracy" },
    { number: "10+", label: "Hours Saved Weekly" },
    { number: "5", label: "Product Suites" },
    { number: "24/7", label: "AI Agent Availability" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(245,126,32,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(86,199,223,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in">
              <span className="gradient-text">FinCode</span> — Finance Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Redefining Finance Learning, Research, and Execution with AI
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
              A next-gen suite of tools that blends financial education, role-specific career development, and intelligent automation into one integrated system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 font-montserrat font-medium hover-scale">
                Explore FinCode Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 font-montserrat font-medium">
                Build AI Valuation Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-montserrat font-bold text-brand-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Five Comprehensive Product Suites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From education to execution - complete finance intelligence ecosystem powered by AI
            </p>
          </div>

          <div className="space-y-12">
            {products.map((product, index) => (
              <div 
                key={product.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-brand-orange to-brand-cyan text-white rounded-lg mr-4">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-montserrat font-bold text-brand-dark">{product.title}</h3>
                      <p className="text-brand-orange font-medium">{product.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-6">{product.description}</p>
                  <div className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand-orange mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 p-8 rounded-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-6xl font-montserrat font-bold text-brand-blue mb-2">
                      {index + 1}
                    </div>
                    <p className="text-gray-600">Product Suite</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Spotlight */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Meet Your AI Finance Agents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Autonomous, prompt-driven AI agents that transform hours of work into seconds of insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiAgents.map((agent, index) => (
              <div 
                key={agent.name}
                className="bg-gradient-to-br from-brand-orange/5 to-brand-cyan/5 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-orange to-brand-cyan text-white rounded-lg flex items-center justify-center font-montserrat font-bold mr-4">
                    {agent.name.substring(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-brand-dark">{agent.name}</h3>
                    <p className="text-brand-blue font-medium text-sm">{agent.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              Ready to Experience AI-Powered Finance Intelligence?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Transform your financial workflow with FinCode's comprehensive suite of AI tools and educational programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-brand-blue hover:bg-gray-100 font-montserrat font-medium px-8 py-3 hover-scale">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-montserrat font-medium px-8 py-3">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinCode;
