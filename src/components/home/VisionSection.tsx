
import React from 'react';
import { ArrowRight, Users, BookOpen, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VisionSection = () => {
  const navigate = useNavigate();
 
  const platforms = [
    {
      title: "Career Development",
      subtitle: "AI-Powered Career Intelligence",
      description: "Transform your career with personalized AI guidance, skill assessments, and intelligent mentorship matching.",
      icon: <Users className="h-8 w-8" />,
      href: "/coming-soon",
      features: ["Self-Discovery Engine", "AI Career Assistant", "Skill Accelerator", "Job-Ready Toolkit"]
    },
    {
      title: "FinCode",
      subtitle: "Finance Intelligence Platform",
      description: "Complete finance ecosystem with AI agents, education, and automation for professionals and institutions.",
      icon: <BookOpen className="h-8 w-8" />,
      href: "/coming-soon",
      features: ["AI Agent Suite", "EdTech Programs", "CFO-as-a-Service", "Robo-Advisory Engine"]
    },
    {
      title: "Let's Advance",
      subtitle: "Content Creation & Community Network",
      description: "Raw, relatable content and collaborative programs that bridge career confusion with career clarity.",
      icon: <Briefcase className="h-8 w-8" />,
      href: "/coming-soon",
      features: ["Multi-Format Content", "Community Programs", "Career Truth Stories", "Innovation Labs"]
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] relative overflow-hidden font-lexend">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h4 className="text-4xl md:text-5xl font-lexend mb-6 text-black">
            Smart AI tools to guide and fast-track your career journey
          </h4>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-orange/10 to-brand-cyan/10 rounded-full text-brand-dark font-medium">
            🚀 Purpose-driven growth powered by ethical AI
          </div>
        </div>

        {/* Platform Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, index) => (
            <div 
              key={platform.title}
              className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-8 hover:shadow-xl transition-all duration-500 animate-fade-in shadow-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#40C7E8] to-[#0077B6] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-gradient-to-r from-[#40C7E8] to-[#0077B6] rounded-xl text-white">
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-lexend font-bold text-brand-dark">
                    {platform.title}
                  </h3>
                </div>

                {/* Content aligned with title */}
                <div className="ml-16">
                  {/* Subtitle */}
                  <p className="bg-brand-orange bg-clip-text text-transparent font-lexend font-bold mb-4">
                    {platform.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-black font-lexend mb-6 leading-relaxed">
                    {platform.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {platform.features.map((feature, idx) => (
                       <div key={idx} className="flex items-center text-sm font-lexend text-black">
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => navigate(platform.href)}
                    className="inline-flex items-center bg-gradient-to-r from-[#40C7E8] to-[#0077B6] bg-clip-text text-transparent font-lexend font-semibold hover:opacity-80 transition-opacity group"
                  >
                    Explore Platform
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Line */}
                <div className="mt-6 h-1 bg-gradient-to-r from-[#40C7E8] to-[#0077B6] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
