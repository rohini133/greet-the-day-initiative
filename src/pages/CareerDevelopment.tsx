import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  BookOpen, 
  Target, 
  Briefcase, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Award, 
  Zap,
  Brain,
  Bot,
  Rocket,
  Shield,
  TrendingUp,
  Globe,
  Clock,
  Heart,
  Lightbulb,
  Trophy,
  UserCheck,
  BarChart3,
  DollarSign,
  Scale
} from 'lucide-react';

const CareerDevelopment = () => {
  const heroFeatures = [
    { icon: <Brain className="h-5 w-5" style={{ color: '#0C7DA7' }} />, text: "Personalized career intelligence based on your unique profile" },
    { icon: <Target className="h-5 w-5" style={{ color: '#0C7DA7' }} />, text: "AI-powered insights that adapt to market trends" },
    { icon: <Rocket className="h-5 w-5" style={{ color: '#0C7DA7' }} />, text: "Ethical AI that puts your agency and privacy first" }
  ];

  const modules = [
    {
      id: "discovery",
      icon: <Brain className="h-8 w-8" />,
      title: "Self-Discovery Engine",
      subtitle: "Understand yourself to lead your future",
      description: "Your gateway to lifelong career intelligence. Blends neuroscience, psychometrics, and behavioral analytics into a holistic profile.",
      features: [
        "Personality & Cognitive Profiling",
        "Values & Motivation Elicitation", 
        "Burnout & Energy Baseline",
        "Career Fit Score™",
        "Role Profiling"
      ],
      color: "from-brand-blue to-brand-cyan"
    },
    {
      id: "assistant",
      icon: <Bot className="h-8 w-8" />,
      title: "AI Career Assistant",
      subtitle: "Your conversational partner for growth decisions",
      description: "GPT-4 Turbo-powered agent built on RAG pipeline with memory, reflection, and role awareness.",
      features: [
        "Real-time Dialogue",
        "Next Best Step Engine",
        "Dynamic Role Simulation",
        "Opportunity Radar"
      ],
      color: "from-brand-cyan to-brand-blue"
    },
    {
      id: "accelerator",
      icon: <BookOpen className="h-8 w-8" />,
      title: "Skill Accelerator",
      subtitle: "Learn what matters, when it matters, with who matters",
      description: "Adaptive, modular skill-building engine that unites content, community, and competency.",
      features: [
        "Adaptive Learning Paths",
        "Mentor-Led Studios",
        "Micro-Certifications",
        "Live Capstone Hackathons"
      ],
      color: "from-brand-blue to-brand-cyan"
    },
    {
      id: "toolkit",
      icon: <Briefcase className="h-8 w-8" />,
      title: "Job-Ready Toolkit",
      subtitle: "Show up smarter, sharper, and confidently job-ready",
      description: "Convert skills and aspirations into career outcomes with comprehensive preparation tools.",
      features: [
        "AI Resume Builder",
        "LinkedIn Optimizer",
        "Mock Interview Simulator",
        "FitScore™ Role Matching",
        "Negotiation Playbooks"
      ],
      color: "from-brand-cyan to-brand-blue"
    },
    {
      id: "portfolio",
      icon: <Award className="h-8 w-8" />,
      title: "Portfolio & Validation Hub",
      subtitle: "Proof-of-work becomes your personal brand",
      description: "Credible, digital-first platform for showcasing verified outputs, not just inputs.",
      features: [
        "Auto-Generated Portfolio Sites",
        "Blockchain-Authenticated Ledger",
        "Peer Review & Community Upvotes"
      ],
      color: "from-brand-blue to-brand-cyan"
    },
    {
      id: "mentorship",
      icon: <Users className="h-8 w-8" />,
      title: "Coaching & Mentorship Network",
      subtitle: "Grow with those who've walked the path before you",
      description: "Structured mentorship and scalable coaching programs embedded within your journey.",
      features: [
        "AI-Matched Mentors",
        "Leadership Pods",
        "Communication & Conflict Clinics",
        "Emotional Intelligence Workouts",
        "Nudging & Habit Formation"
      ],
      color: "from-brand-cyan to-brand-blue"
    },
    // {
    //   id: "wellness",
    //   icon: <Heart className="h-8 w-8" />,
    //   title: "Career Health & Life Design",  
    //   subtitle: "Sustainability is not just environmental — it's professional",
    //   description: "Beyond skills and salaries to design purposeful, regenerative careers.",
    //   features: [
    //     "Burnout Early Warning System",
    //     "Quarterly Impact Dashboard",
    //     "Work-Life-Purpose Integration",
    //     "Long-Term Reflection Journal"
    //   ],
    //   color: "from-brand-blue to-brand-cyan"
    // }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment",
      description: "Complete comprehensive assessments to understand your unique profile",
      icon: <UserCheck className="h-8 w-8" />,
      color: "#0C7DA7"
    },
    {
      step: "02", 
      title: "Awareness",
      description: "AI algorithms identify your optimal career paths and opportunities",
      icon: <Target className="h-8 w-8" />,
      color: "#0C7DA7"
    },
    {
      step: "03",
      title: "Exploration",
      description: "Follow personalized learning pathways to build required skills",
      icon: <BookOpen className="h-8 w-8" />,
      color: "#0C7DA7"
    },
    {
      step: "04",
      title: "Launch",
      description: "Execute your career transition with our comprehensive toolkit",
      icon: <Rocket className="h-8 w-8" />,
      color: "#0C7DA7"
    }
  ];

  const outcomes = [
    { 
      icon: <Briefcase className="h-8 w-8" />, 
      title: "92% Career Satisfaction", 
      description: "Users report higher job satisfaction within 6 months",
      iconColor: "#3B82F6", // Blue
      hoverColor: "hover:border-blue-300 hover:bg-blue-50"
    },
    { 
      icon: <DollarSign className="h-8 w-8" />, 
      title: "65% Salary Increase", 
      description: "Average salary improvement after program completion",
      iconColor: "#14B8A6", // Teal
      hoverColor: "hover:border-teal-300 hover:bg-teal-50"
    },
    { 
      icon: <Zap className="h-8 w-8" />, 
      title: "3x Faster Transitions", 
      description: "Accelerated career change compared to traditional methods",
      iconColor: "#8B5CF6", // Purple
      hoverColor: "hover:border-purple-300 hover:bg-purple-50"
    },
    { 
      icon: <Heart className="h-8 w-8" />, 
      title: "Work-Life Balance", 
      description: "Find careers that align with your lifestyle goals",
      iconColor: "#10B981", // Green
      hoverColor: "hover:border-green-300 hover:bg-green-50"
    }
  ];

  const testimonials = [
    {
      name: "Rohini Satale",
      role: "Software Developer at Gurukul Code",
      quote: "Starting with Gurukul Code as a learner, I was guided through every step of my career journey — from discovering AI careers to landing a role within the same platform. It's more than a learning space; it's a launchpad",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      role: "Product Manager at Microsoft",
      quote: "The personalized learning pathway was game-changing. Every skill I learned directly contributed to landing my dream job.",
      rating: 5
    }
  ];

  return (
    <div className="bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] min-h-screen font-lexend">
      {/* Enhanced Hero Section - Reduced padding */}
      <section className="pt-20 pb-12 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Hero Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-800 mb-6 animate-fade-in">
              <Zap className="h-5 w-5 mr-2" style={{ color: '#0C7DA7' }} />
              <span className="text-sm font-medium">AI-Powered Career Intelligence</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-5xl md:text-7xl font-lexend font-bold mb-6 animate-fade-in" style={{ color: '#0C7DA7', animationDelay: '200ms' }}>
              Empowering Sustainable Career Growth
            </h2>

            {/* Subheadline */}
            {/* <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
               </p> */}
            {/* Hero Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
              {heroFeatures.map((feature, index) => (
                <div key={index} className="flex items-center px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
                  {feature.icon}
                  <span className="ml-2 text-sm font-medium" style={{ color: 'black' }}>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '800ms' }}>
              <Button className="text-white px-8 py-4 text-lg font-lexend font-semibold hover-scale shadow-2xl" style={{ backgroundColor: 'brand-orange' }}>
                Start Your journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              {/* <Button className="border-2 px-8 py-4 text-lg font-lexend font-semibold backdrop-blur-sm bg-transparent hover:text-white" >
                Watch Demo
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section - Reduced padding */}
       <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-brand-dark mb-6">
              Intelligent Modules for Complete Career Mastery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each module is designed to work seamlessly together, creating a comprehensive ecosystem for your professional growth
            </p>
          </div>

          <div className="space-y-12">
            {modules.map((module, index) => (
              <div 
                key={module.id}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${module.color} text-white mb-6`}>
                    {module.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-brand-dark mb-3">
                    Module {index + 1}: {module.title}
                  </h3>
                  <p className="text-brand-blue font-semibold text-lg mb-4 italic">
                    "{module.subtitle}"
                  </p>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    {module.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-montserrat font-semibold text-brand-dark mb-3">Key Features:</h4>
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-brand-cyan mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className={`bg-gradient-to-br ${module.color} p-8 rounded-2xl text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <div className="text-6xl opacity-20 mb-4">{module.icon}</div>
                      <h4 className="text-xl font-montserrat font-bold mb-4">Experience {module.title}</h4>
                      <p className="opacity-90 mb-6">
                        See how this module transforms your career journey with intelligent, personalized guidance.
                      </p>
                      <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-medium">
                        Try Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Flow Section - Reduced padding */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            {/* <Badge className="mb-4 px-4 py-2 text-white" style={{ backgroundColor: '#0C7DA7' }}>Our Process</Badge> */}
            <h2 className="text-4xl md:text-5xl font-lexend font-bold text-slate-900 mb-4">
              Your Journey to Career Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven  methodology that has helped professionals across industries transform their careers.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Enhanced Container with Background */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
              <div className="grid md:grid-cols-4 gap-6 relative">
                {processSteps.map((step, index) => (
                  <div 
                    key={step.step}
                    className="text-center animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Enhanced Icon with Embedded Number */}
                    <div className="relative mb-3">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg text-white hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer group relative" style={{ backgroundColor: step.color }}>
                        {/* Step Number embedded in icon */}
                        <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg" style={{ backgroundColor: '#F57E20' }}>
                          {step.step}
                        </div>
                        
                        <div className="group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Enhanced Connector Arrow */}
                      {index < processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-[#F57E20] to-[#0C7DA7] animate-pulse">
                          <ArrowRight className="h-5 w-5 absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-3 animate-bounce" style={{ color: '#F57E20' }} />
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-lexend font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Results Section - Reduced padding and updated colors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              {/* <Badge className="mb-4 px-4 py-2" style={{ backgroundColor: '#0C7DA7', color: 'white' }}>Proven Results</Badge> */}
              <h2 className="text-4xl md:text-5xl font-lexend font-bold text-slate-900 mb-4">
                Real Impact, Real Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform delivers measurable outcomes that transform careers and lives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {outcomes.map((outcome, index) => (
                <Card 
                  key={outcome.title}
                  className={`text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in bg-white ${outcome.hoverColor}`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    border: `2px solid #F68C1F`
                  }}
                >
                  <div className="flex justify-center mb-3">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: outcome.iconColor }}
                    >
                      {outcome.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-lexend font-bold text-slate-900 mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{outcome.description}</p>
                </Card>
              ))}
            </div>

            {/* Success Stories Heading */}
            <div className="text-center mb-4">
              <h2 className="text-3xl font-lexend font-bold text-slate-900">
                Success Stories
              </h2>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.name}
                  className="p-6 shadow-lg bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] animate-fade-in"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    border: `1px solid #F68C1F`
                  }}
                >
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" style={{ color: '#0C7DA7' }} />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-base italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerDevelopment;