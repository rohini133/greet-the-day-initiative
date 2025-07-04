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
      features: ["Career-Aligned Curriculum", "CFA-Inspired Bootcamps", "Resume + LinkedIn Optimizer", "Behavioral Interview Coach", "Finance Certification Paths"],
      agentName: "EduBot"
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Finance AI Agent Suite", 
      subtitle: "Replace manual research with AI co-pilots",
      description: "Autonomous AI agents that reduce hours of financial work into insights in seconds",
      features: ["AlphaSage Research Analyst", "TrendSeer Forecasting Engine", "FinModel Factory", "DealRoom Automator", "Save 10+ hours/week"],
      agentName: "FinBot"
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "CFO-as-a-Service",
      subtitle: "Strategic finance for MSMEs", 
      description: "Turn small business finance into a strategic advantage with AI automation",
      features: ["Cash Flow Automation", "Vendor & Credit Scoring", "Smart Pricing Suggestions", "Alerts & Dashboards", "Financial Health KPIs"],
      agentName: "CFOBot"
    },
    {
      icon: <PieChart className="h-8 w-8" />,
      title: "Robo-Advisory Engine",
      subtitle: "Democratizing wealth strategy",
      description: "AI-powered personal finance and investment advisory capabilities",
      features: ["Portfolio Generator", "Behavioral Nudging System", "Tax Optimization Engine", "Goal-Based Planning Bots", "Wealth Growth Tools"],
      agentName: "WealthBot"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Custom Solutions",
      subtitle: "For Institutions & Platforms",
      description: "Build your own finance intelligence layer with FinCode's modular stack",
      features: ["College & EdTech APIs", "Startup & Fintech Integration", "Enterprise L&D Modules", "Government & CSR Programs", "White-labeled Solutions"],
      agentName: "CustomBot"
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
    { label: "Model Accuracy" },
    { label: "Hours Saved Weekly" },
    { label: "Product Suites" },
    { label: "AI Agent Availability" }
  ];

  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9]/10 via-brand-cyan/10 to-brand-blue min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-lexend font-bold text-brand-dark mb-6 animate-fade-in">
              <span style={{ color: '#0C7DA7' }}>Fin</span><span style={{ color: '#F57E20' }}>Code</span> — Finance Intelligence
            </h1>
            <p className="text-xl md:text-2xl font-lexend text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Redefining Finance Learning, Research, and Execution with AI
            </p>
            <p className="text-lg font-lexend text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
              A next-gen suite of tools that blends financial education, role-specific career development, and intelligent automation into one integrated system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="text-white px-8 py-3 font-lexend font-medium hover-scale" style={{ backgroundColor: '#0C7DA7' }}>
                Explore FinCode Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-8 py-3 font-lexend font-medium" style={{ borderColor: '#0C7DA7', color: '#0C7DA7' }}>
                Build AI Valuation Model
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Model Accuracy", "Hours Saved Weekly", "Product Suites", "AI Agent Availability"].map((stat, index) => (
              <div 
                key={stat}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-lexend font-bold mb-2" style={{ color: '#0C7DA7' }}>
                  Advanced
                </div>
                <div className="text-gray-600 font-lexend text-sm md:text-base">
                  {stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#F57E20' }}>
              Five Comprehensive Product Suites
            </h2>
            <p className="text-xl font-lexend text-gray-600 max-w-3xl mx-auto">
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
                    <div className="p-3 text-white rounded-lg mr-4" style={{ backgroundColor: '#0C7DA7' }}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-lexend font-bold text-brand-dark">{product.title}</h3>
                      <p className="font-lexend font-medium" style={{ color: '#0C7DA7' }}>{product.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 font-lexend text-lg mb-6">{product.description}</p>
                  <div className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: '#0C7DA7' }} />
                        <span className="text-gray-600 font-lexend">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gray-50 border border-gray-200 p-8 rounded-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-3xl font-lexend font-bold mb-2" style={{ color: '#0C7DA7' }}>
                      {product.agentName}
                    </div>
                    <p className="text-gray-600 font-lexend">AI Agent</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Spotlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#F57E20' }}>
              Meet Your AI Finance Agents
            </h2>
            <p className="text-xl font-lexend text-gray-600 max-w-3xl mx-auto">
              Autonomous, prompt-driven AI agents that transform hours of work into seconds of insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {aiAgents.map((agent, index) => (
              <div 
                key={agent.name}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 text-white rounded-lg flex items-center justify-center font-lexend font-bold mr-4" style={{ background: `linear-gradient(135deg, #0C7DA7 0%, #56C7DF 100%)` }}>
                    {agent.name.substring(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-xl font-lexend font-bold text-brand-dark">{agent.name}</h3>
                    <p className="font-lexend font-medium text-sm" style={{ color: '#0C7DA7' }}>{agent.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 font-lexend">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-6" style={{ color: '#F57E20' }}>
              Ready to Experience AI-Powered Finance Intelligence?
            </h2>
            <p className="text-xl font-lexend text-gray-600 mb-8">
              Transform your financial workflow with FinCode's comprehensive suite of AI tools and educational programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="text-white font-lexend font-medium px-8 py-3 hover-scale" style={{ backgroundColor: '#0C7DA7' }}>
                Start Free Trial
              </Button>
              <Button variant="outline" className="font-lexend font-medium px-8 py-3" style={{ borderColor: '#0C7DA7', color: '#0C7DA7' }}>
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
