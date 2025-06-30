import { motion } from "framer-motion";
import {
  Quote,
  User,
  Briefcase,
  GraduationCap,
  Building,
  Users,
  Lightbulb,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function TestimonialsSection() {
  const navigate = useNavigate();

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
      color: "from-blue-500 to-cyan-400",
      bgPattern: "bg-blue-50",
    },
    {
      icon: <User className="h-6 w-6 text-white" />,
      title: "Mid-Career Switchers",
      description:
        "Navigate career transitions confidently with personalized upskilling and role simulations.",
      benefits: [
        "Transition planning",
        "Skills gap analysis",
        "Role simulations",
        "Portfolio building",
      ],
      color: "from-green-500 to-emerald-400",
      bgPattern: "bg-green-50",
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "EdTech & HR Institutions",
      description:
        "Enhance your programs with AI-powered career services and student success tools.",
      benefits: [
        "White-label platform",
        "Student analytics",
        "Employer partnerships",
        "Outcome tracking",
      ],
      color: "from-purple-500 to-pink-400",
      bgPattern: "bg-purple-50",
    },
    {
      icon: <Building className="h-6 w-6 text-white" />,
      title: "Enterprise Leaders",
      description:
        "Transform workforce development with intelligent L&D and internal mobility solutions.",
      benefits: [
        "Talent pipeline",
        "Skills mapping",
        "Succession planning",
        "Performance insights",
      ],
      color: "from-orange-500 to-red-400",
      bgPattern: "bg-orange-50",
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
      color: "from-teal-500 to-cyan-400",
      bgPattern: "bg-teal-50",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      title: "Founders & VCs",
      description:
        "Make smarter investment and hiring decisions with comprehensive talent intelligence.",
      benefits: [
        "Talent evaluation",
        "Market insights",
        "Investment analysis",
        "Due diligence",
      ],
      color: "from-indigo-500 to-purple-400",
      bgPattern: "bg-indigo-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6">
            Who Is It For?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gurukul Code serves diverse communities united by a shared vision:
            intelligent, purpose-driven growth in the age of AI
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((persona, index) => (
            <div
              key={persona.title}
              className={`group relative overflow-hidden rounded-2xl ${persona.bgPattern} p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in`}
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
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#036D9B]">
                    {persona.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-montserrat font-bold text-gray-900">
                    {persona.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mb-6 leading-relaxed text-[#F57E20]">
                  {persona.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {persona.benefits.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center text-sm text-gray-700"
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

        {/* CTA Section */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-blue/10 to-brand-cyan/10 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-montserrat font-bold text-gray-900 mb-4">
              Ready to Transform Your Journey?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of learners, professionals, and organizations already growing with Gurukul Code
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="bg-gradient-to-r from-brand-cyan to-brand-blue text-white px-8 py-3 rounded-full font-montserrat font-medium hover-scale"
                onClick={() => navigate("/coming-soon")}
              >
                Start Free Assessment
              </button>
              <button
                className="border border-brand-blue text-brand-blue px-8 py-3 rounded-full font-montserrat font-medium hover:bg-brand-blue hover:text-white transition-colors"
                onClick={() => navigate("/coming-soon")}
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
