
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
    { icon: <Brain className="h-5 w-5" />, text: "AI-Powered Insights" },
    { icon: <Target className="h-5 w-5" />, text: "Personalized Paths" },
    { icon: <Rocket className="h-5 w-5" />, text: "Career Acceleration" }
  ];

  const coreFeatures = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Self-Discovery Engine",
      subtitle: "Know Yourself Deeply",
      description: "Advanced AI-powered personality assessments, strengths analysis, and interest profiling to uncover your unique professional DNA and hidden potential.",
      features: ["Personality Deep-Dive", "Strengths Mapping", "Interest Profiling", "Values Assessment"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Smart Career Matching",
      subtitle: "Find Your Perfect Fit",
      description: "Intelligent algorithms analyze thousands of career paths to match you with opportunities that align perfectly with your profile, goals, and market demand.",
      features: ["Career Path Analysis", "Market Demand Insights", "Role Compatibility", "Growth Projections"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "Skill Development Pathways",
      subtitle: "Learn What Matters",
      description: "Personalized learning journeys with industry-relevant courses, certifications, and hands-on projects designed to accelerate your professional growth.",
      features: ["Custom Learning Paths", "Industry Certifications", "Hands-on Projects", "Progress Tracking"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Job-Ready Toolkit",
      subtitle: "Land Your Dream Role",
      description: "Complete preparation suite including resume optimization, interview mastery, salary negotiation, and professional networking strategies.",
      features: ["Resume AI Optimization", "Interview Coaching", "Salary Negotiation", "Network Building"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discover",
      description: "Complete comprehensive assessments to understand your unique profile",
      icon: <UserCheck className="h-8 w-8" />,
      color: "bg-blue-500"
    },
    {
      step: "02", 
      title: "Match",
      description: "AI algorithms identify your optimal career paths and opportunities",
      icon: <Target className="h-8 w-8" />,
      color: "bg-purple-500"
    },
    {
      step: "03",
      title: "Learn",
      description: "Follow personalized learning pathways to build required skills",
      icon: <BookOpen className="h-8 w-8" />,
      color: "bg-green-500"
    },
    {
      step: "04",
      title: "Launch",
      description: "Execute your career transition with our comprehensive toolkit",
      icon: <Rocket className="h-8 w-8" />,
      color: "bg-orange-500"
    }
  ];

  const outcomes = [
    { icon: <Trophy className="h-6 w-6" />, title: "92% Career Satisfaction", description: "Users report higher job satisfaction within 6 months" },
    { icon: <TrendingUp className="h-6 w-6" />, title: "65% Salary Increase", description: "Average salary improvement after program completion" },
    { icon: <Clock className="h-6 w-6" />, title: "3x Faster Transitions", description: "Accelerated career change compared to traditional methods" },
    { icon: <Heart className="h-6 w-6" />, title: "Work-Life Balance", description: "Find careers that align with your lifestyle goals" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Data Scientist at Google",
      quote: "The AI-powered insights revealed career paths I never considered. Within 8 months, I transitioned from marketing to data science.",
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
    <div className="min-h-screen bg-white">
      
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Hero Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8 animate-fade-in">
              <Zap className="h-5 w-5 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">AI-Powered Career Operating System</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              Transform Your
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Career Journey
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
              Discover your ideal career path with AI-powered insights, personalized learning, and expert guidance. Join thousands who've accelerated their professional growth.
            </p>

            {/* Hero Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
              {heroFeatures.map((feature, index) => (
                <div key={index} className="flex items-center px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white">
                  {feature.icon}
                  <span className="ml-2 text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '800ms' }}>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-montserrat font-semibold hover-scale shadow-2xl">
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-montserrat font-semibold backdrop-blur-sm">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">Core Platform Features</Badge>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-900 mb-6">
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
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <CardHeader className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-montserrat font-bold text-slate-900 mb-2">
                    {feature.title}
                  </CardTitle>
                  <div className="text-sm font-semibold text-blue-600 mb-4">
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
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-4 bg-blue-500 text-white px-4 py-2">Our Process</Badge>
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
              Your Journey to Career Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                    <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xs font-bold text-slate-900">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-white/30 to-transparent"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Results Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">Proven Results</Badge>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-slate-900 mb-6">
                Real Impact, Real Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform delivers measurable outcomes that transform careers and lives
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 bg-white">
              {outcomes.map((outcome, index) => (
                <Card 
                  key={outcome.title}
                  className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-6">
                    {outcome.icon}
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-slate-900 mb-3">
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
                  className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
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

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-8">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join thousands of professionals who've accelerated their careers with our AI-powered platform. Your transformation starts today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-10 py-4 text-lg font-montserrat font-semibold hover-scale shadow-2xl">
                Start Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-4 text-lg font-montserrat font-semibold backdrop-blur-sm">
                Schedule Personal Demo
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Free to start
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Results in 30 days
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                Money-back guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default CareerDevelopment;
