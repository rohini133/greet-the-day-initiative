
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Rocket, Users, Lightbulb, Target, ArrowRight, CheckCircle, Mic, Video, FileText, TrendingUp, BookOpen, Award } from 'lucide-react';

const LetsAdvance = () => {
  const contentPillars = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "General Content",
      items: ["Insights & Trends", "News and Updates", "AI-Driven Analysis", "Digital Transformation", "Thought Leadership"]
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Knowledge Content", 
      items: ["How-To Guides", "Case Studies", "Best Practices", "Industry Deep-Dives", "Expert Interviews"]
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Career Development",
      items: ["Certification Courses", "Micro-Masters", "Advanced Programs", "Skill Assessments", "Mentorship Programs"]
    }
  ];

  const contentFormats = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Audio Content",
      description: "Raw conversations, career stories, and industry insights through podcasts and audio series"
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Video Content",
      description: "Visual storytelling, expert interviews, and behind-the-scenes career journeys"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Written Content",
      description: "In-depth articles, case studies, and thought leadership pieces that drive awareness"
    }
  ];

  const programs = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Innovation Labs",
      description: "Hands-on experience with cutting-edge technologies and methodologies"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaborative Projects",
      description: "Work with diverse teams on real-world challenges and solutions"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Idea Incubation",
      description: "Transform your innovative ideas into viable business solutions"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Goal Achievement",
      description: "Structured approach to reaching your personal and professional milestones"
    }
  ];

  const outcomes = [
    "Surface untold career struggles and breakthrough stories",
    "Build a network of like-minded innovators and industry leaders",
    "Access raw, multi-format content that drives career clarity",
    "Connect with Gurukul Code platform for real mentorship and preparation",
    "Transform career confusion into actionable direction and purpose"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(245,126,32,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(86,199,223,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6 animate-fade-in">
              Let's <span className="gradient-text">Advance</span> Together
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Content Creation & Community Network for Career Truth
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '300ms' }}>
              Igniting a cultural shift where career exploration is raw, relatable, and real — empowering every individual to confront their pain points, question their path, and find direction through truth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '400ms' }}>
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 font-montserrat font-medium hover-scale">
                Join the Movement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 font-montserrat font-medium">
                Explore Content
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-brand-orange/10 to-transparent p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-brand-orange text-white rounded-lg mr-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-montserrat font-bold text-brand-dark">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To surface the untold — the struggles, the switches, the sacrifices — and guide audiences toward actual change through Gurukul Code. In a world of noise, we spark clarity through real stories, street insights, and bold conversations.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-brand-cyan/10 to-transparent p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-brand-cyan text-white rounded-lg mr-4">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-montserrat font-bold text-brand-dark">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To build a content ecosystem that drives career awareness and exploration — capturing raw truths and meaningful insights across formats. Every insight leads toward action, connecting our audience to real mentorship and purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Formats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Multi-Format Content Creation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Raw, relatable content across audio, video, and text that bridges career confusion with career clarity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contentFormats.map((format, index) => (
              <div 
                key={format.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-brand-orange to-brand-cyan text-white mb-6">
                  {format.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-dark mb-4">
                  {format.title}
                </h3>
                <p className="text-gray-600">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Structured Content Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive content strategy covering industry insights, practical knowledge, and career development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contentPillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-brand-blue text-white rounded-lg mr-3">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-brand-dark">
                    {pillar.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-cyan/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Community Advancement Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond content creation - collaborative programs designed to accelerate your growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div 
                key={program.title}
                className="text-center p-6 rounded-xl bg-white hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-brand-blue to-brand-orange text-white mb-6">
                  {program.icon}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-brand-dark mb-4">
                  {program.title}
                </h3>
                <p className="text-gray-600">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-8">
                  What You'll Experience
                </h2>
                <div className="space-y-6">
                  {outcomes.map((outcome, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                      <p className="text-gray-700 text-lg">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-orange/10 to-brand-cyan/10 p-8 rounded-2xl">
                <h3 className="text-2xl font-montserrat font-bold text-brand-dark mb-6">
                  Ready to Find Your Direction?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let's Advance is not just a question — it's the start of your answer. Join our community of truth-seekers and career pioneers.
                </p>
                <Button className="bg-gradient-to-r from-brand-orange to-brand-cyan text-white font-montserrat font-medium px-6 py-3 hover-scale w-full mb-4">
                  Join Our Community
                </Button>
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-montserrat font-medium px-6 py-3 w-full">
                  Explore Gurukul Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LetsAdvance;
