
import { motion } from "framer-motion";
import { Cpu, Server, Database, Monitor, BarChart3, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const journeySteps = [
  {
    layer: "LLM Foundation",
    stack: "Self-hosted GPT-4-class models",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-brand-blue to-brand-cyan"
  },
  {
    layer: "AI Agent System",
    stack: "LangChain, LangGraph",
    icon: <Server className="h-6 w-6" />,
    color: "from-brand-cyan to-brand-blue"
  },
  {
    layer: "RAG Engine",
    stack: "Pinecone + memory stores",
    icon: <Database className="h-6 w-6" />,
    color: "from-brand-blue to-brand-orange"
  },
  {
    layer: "UI/Delivery",
    stack: "React-based apps, chatbot UIs",
    icon: <Monitor className="h-6 w-6" />,
    color: "from-brand-orange to-brand-cyan"
  },
  {
    layer: "Monitoring",
    stack: "LangSmith, Grafana, Slack",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "from-brand-cyan to-brand-orange"
  },
  {
    layer: "Integration",
    stack: "LMS, CRM, ERP-ready",
    icon: <Link className="h-6 w-6" />,
    color: "from-brand-blue to-brand-cyan"
  }
];

export function CareerJourneySection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(86,199,223,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(245,126,32,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Built with Future-Focused AI Infrastructure
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Enterprise-grade technology stack designed for scale, security, and performance
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium">
            🔐 Your data. Your control. Your custom agents.
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {journeySteps.map((tech, index) => (
            <motion.div
              key={tech.layer}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${tech.color} text-white mb-4`}>
                {tech.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                {tech.layer}
              </h3>
              <p className="text-gray-300 text-sm">
                {tech.stack}
              </p>

              {/* Hover Effect */}
              <div className={`mt-4 h-1 bg-gradient-to-r ${tech.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold font-montserrat mb-2">99.9%</div>
            <div className="text-gray-300">Uptime Guarantee</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold font-montserrat mb-2">&lt; 200ms</div>
            <div className="text-gray-300">Average Response Time</div>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold font-montserrat mb-2">SOC 2</div>
            <div className="text-gray-300">Security Compliance</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button 
            className="bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-blue hover:to-brand-cyan text-white px-8 py-3 rounded-full font-montserrat font-medium hover:scale-105 transition-all duration-300"
            onClick={() => navigate('/coming-soon')}
          >
            Partner With Gurukul Code
          </button>
        </div>
      </div>
    </section>
  );
}
