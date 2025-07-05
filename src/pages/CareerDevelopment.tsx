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
  Rocket,
  Shield,
  TrendingUp,
  Globe,
  Clock,
  Heart,
  Lightbulb,
  Trophy,
  UserCheck
} from 'lucide-react';

const CareerDevelopment = () => {
  const heroFeatures = [
    { icon: <Brain className="h-5 w-5" style={{ color: '#0C7DA7' }} />, text: "AI-Powered Insights" },
    { icon: <Target className="h-5 w-5" style={{ color: '#0C7DA7' }} />, text: "Personalized Paths" },
    { icon: <Rocket className="h-5 w-5" style={{ color: '#0C7DA7' }} />, text: "Career Acceleration" }
  ];

  const coreFeatures = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Self-Discovery Engine",
      subtitle: "Know Yourself Deeply",
      description: "Advanced AI-powered hyper personalized  assessments system, strengths analysis, and interest profiling to uncover your unique professional DNA and hidden potential.",
      features: ["Personality Deep-Dive", "Strengths Mapping", "Interest Profiling", "Values Assessment"],
      color: "#0C7DA7"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Smart Career Matching",
      subtitle: "Find Your Perfect Fit",
      description: "Intelligent algorithms analyze thousands of career paths to match you with opportunities that align perfectly with your profile, goals, and market demand.",
      features: ["Career Path Analysis", "Market Demand Insights", "Role Compatibility", "Growth Projections"],
      color: "#0C7DA7"
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Skill Development Pathways",
      subtitle: "Learn What Matters",
      description: "Personalized learning journeys with industry-relevant courses, certifications, and hands-on projects designed to accelerate your professional growth.",
      features: ["Custom Learning Paths", "Industry Certifications", "Hands-on Projects", "Progress Tracking"],
      color: "#0C7DA7"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Job-Ready Toolkit",
      subtitle: "Land Your Dream Role",
      description: "Complete preparation suite including resume optimization, interview mastery, salary negotiation, and professional networking strategies.",
      features: ["Resume AI Optimization", "Interview Coaching", "Salary Negotiation", "Network Building"],
      color: "#0C7DA7"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "assessment",
      description: "Complete comprehensive assessments to understand your unique profile",
      icon: <UserCheck className="h-8 w-8" />,
      color: "#0C7DA7"
    },
    {
      step: "02", 
      title: "awareness",
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
    { icon: <Trophy className="h-6 w-6" style={{ color: '#0C7DA7' }} />, title: "92% Career Satisfaction", description: "Users report higher job satisfaction within 6 months" },
    { icon: <TrendingUp className="h-6 w-6" style={{ color: '#0C7DA7' }} />, title: "65% Salary Increase", description: "Average salary improvement after program completion" },
    { icon: <Clock className="h-6 w-6" style={{ color: '#0C7DA7' }} />, title: "3x Faster Transitions", description: "Accelerated career change compared to traditional methods" },
    { icon: <Heart className="h-6 w-6" style={{ color: '#0C7DA7' }} />, title: "Work-Life Balance", description: "Find careers that align with your lifestyle goals" }
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
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Hero Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-800 mb-8 animate-fade-in">
              <Zap className="h-5 w-5 mr-2" style={{ color: '#0C7DA7' }} />
              <span className="text-sm font-medium">AI-Powered Career Intelligence</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-5xl md:text-7xl font-lexend font-bold mb-8 animate-fade-in" style={{ color: '#0C7DA7', animationDelay: '200ms' }}>
              Transform Your Career Journey
              {/* <span className="block" style={{ color: '#0C7DA7' }}> */}
                
              {/* </span> */}
            </h2>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
              Discover your ideal career path with AI-powered insights, personalized learning, and expert guidance. Join a growing community of ambitious professionals accelerating their career growth </p>
            {/* Hero Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
              {heroFeatures.map((feature, index) => (
                <div key={index} className="flex items-center px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
                  {feature.icon}
                  <span className="ml-2 text-sm font-medium" style={{ color: '#0C7DA7' }}>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '800ms' }}>
              <Button className="text-white px-8 py-4 text-lg font-lexend font-semibold hover-scale shadow-2xl" style={{ backgroundColor: '#F57E20' }}>
                Start Your journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="border-2 px-8 py-4 text-lg font-lexend font-semibold backdrop-blur-sm bg-transparent hover:text-white" style={{ borderColor: '#0C7DA7', color: '#0C7DA7' }} onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0C7DA7'} onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}>
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4 px-4 py-2" style={{ backgroundColor: '#0C7DA7', color: 'white' }}>Core Platform Features</Badge>
            <h2 className="text-4xl md:text-5xl font-lexend font-bold text-slate-900 mb-6">
              Your Complete Career Intelligence Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four integrated systems working together to accelerate your professional growth and career transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {coreFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover-scale animate-fade-in bg-white"
                style={{ 
                  animationDelay: `${index * 200}ms`,
                  border: `2px solid #F57E20`
                }}
              >
                <CardHeader className="relative">
                  <div className="inline-flex p-3 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: feature.color }}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-lexend font-bold text-slate-900 mb-2">
                    {feature.title}
                  </CardTitle>
                  <div className="text-sm font-semibold mb-4" style={{ color: '#0C7DA7' }}>
                    {feature.subtitle}
                  </div>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: '#0C7DA7' }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-4 px-4 py-2 text-white" style={{ backgroundColor: '#0C7DA7' }}>Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-lexend font-bold text-slate-900 mb-6">
              Your Journey to Career Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step methodology that has helped thousands transform their careers
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={step.step}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg text-white" style={{ backgroundColor: step.color }}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs font-bold text-slate-900">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-lexend font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Results Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-4 px-4 py-2" style={{ backgroundColor: '#0C7DA7', color: 'white' }}>Proven Results</Badge>
              <h2 className="text-4xl md:text-5xl font-lexend font-bold text-slate-900 mb-6">
                Real Impact, Real Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform delivers measurable outcomes that transform careers and lives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {outcomes.map((outcome, index) => (
                <Card 
                  key={outcome.title}
                  className="text-center p-8 border shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in bg-white"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex p-4 rounded-full mb-6" style={{ backgroundColor: '#0C7DA7' }}>
                    {outcome.icon}
                  </div>
                  <h3 className="text-2xl font-lexend font-bold text-slate-900 mb-3">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-600">{outcome.description}</p>
                </Card>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.name}
                  className="p-8 border shadow-lg bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" style={{ color: '#0C7DA7' }} />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
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
