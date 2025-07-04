
import { motion } from "framer-motion";
import {
  GraduationCap,
  RefreshCw,
  Building2,
  Users,
  Briefcase,
  TrendingUp,
} from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      title: "Students & Early Professionals",
      description:
        "Discover your path, build job-ready skills, and launch your career with AI-powered guidance.",
      benefits: [
        "Career discovery",
        "Skill acceleration",
        "Job preparation",
        "Mentorship matching",
      ],
      color: "from-[#40C7E8] to-[#0077B6]",
      bgPattern: "bg-white border border-gray-200",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-white" />,
      title: "Mid-Career Switchers",
      description:
        "Navigate career transitions confidently with personalized upskilling and role simulations.",
      benefits: [
        "Transition planning",
        "Skills gap analysis",
        "Role simulations",
        "Portfolio building",
      ],
      color: "from-[#40C7E8] to-[#0077B6]",
      bgPattern: "bg-white border border-gray-200",
    },
    {
      icon: <Building2 className="h-6 w-6 text-white" />,
      title: "EdTech & HR Institutions",
      description:
        "Enhance your programs with AI-powered career services and student success tools.",
      benefits: [
        "White-label platform",
        "Student analytics",
        "Employer partnerships",
        "Outcome tracking",
      ],
      color: "from-[#40C7E8] to-[#0077B6]",
      bgPattern: "bg-white border border-gray-200",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Enterprise Leaders",
      description:
        "Transform workforce development with intelligent L&D and internal mobility solutions.",
      benefits: [
        "Talent pipeline",
        "Skills mapping",
        "Succession planning",
        "Performance insights",
      ],
      color: "from-[#40C7E8] to-[#0077B6]",
      bgPattern: "bg-white border border-gray-200",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-white" />,
      title: "Freelancers & Consultants",
      description:
        "Scale your expertise and build authority with AI-powered content and client tools.",
      benefits: [
        "Personal branding",
        "Client acquisition",
        "Service optimization",
        "Market intelligence",
      ],
      color: "from-[#40C7E8] to-[#0077B6]",
      bgPattern: "bg-white border border-gray-200",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "Founders & VCs",
      description:
        "Make smarter investment and hiring decisions with comprehensive talent intelligence.",
      benefits: [
        "Talent evaluation",
        "Market insights",
        "Investment analysis",
        "Due diligence",
      ],
      color: "from-[#40C7E8] to-[#0077B6]",
      bgPattern: "bg-white border border-gray-200",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-lexend font-bold mb-6 bg-gradient-to-r from-[#40C7E8] to-[#0077B6] bg-clip-text text-transparent">
            Who Is It For?
          </h2>
          <p className="text-xl font-lexend text-gray-600 max-w-3xl mx-auto">
            Gurukul Code serves diverse communities united by a shared vision:
            intelligent, purpose-driven growth in the age of AI
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((persona, index) => (
            <div
              key={persona.title}
              className={`group relative overflow-hidden rounded-2xl ${persona.bgPattern} p-8 hover:shadow-xl transition-all duration-500 animate-fade-in shadow-sm`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon + Title in Same Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r ${persona.color}`}>
                    {persona.icon}
                  </div>
                  <h3 className="text-xl font-lexend font-bold text-gray-900">
                    {persona.title}
                  </h3>
                </div>

                {/* Description */}
                <p className={`mb-6 font-lexend leading-relaxed bg-gradient-to-r ${persona.color} bg-clip-text text-transparent`}>
                  {persona.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {persona.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center text-sm font-lexend text-gray-700"
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${persona.color} mr-3`}
                      ></div>
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Hover Line */}
                <div
                  className={`mt-6 h-1 bg-gradient-to-r ${persona.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
