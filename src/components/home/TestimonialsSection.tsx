
import { motion } from "framer-motion";
import {
  GraduationCap,
  User,
  Building,
} from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      title: "Students",
      description:
        "Discover your path, build job-ready skills, and launch your career with AI-powered guidance and personalized mentorship.",
      benefits: [
        "Career discovery & self-assessment",
        "Skill acceleration & job preparation",
        "Mentorship matching & guidance",
        "Portfolio building & networking",
      ],
      color: "from-blue-500 to-cyan-400",
      bgPattern: "bg-white border border-gray-200",
    },
    {
      icon: <User className="h-6 w-6 text-white" />,
      title: "Early Career Professionals",
      description:
        "Navigate career transitions, advance your expertise, and scale your professional impact with intelligent career tools.",
      benefits: [
        "Career transition & advancement planning",
        "Skills gap analysis & upskilling",
        "Personal branding & client acquisition",
        "Performance insights & market intelligence",
      ],
      color: "from-green-500 to-emerald-400",
      bgPattern: "bg-white border border-gray-200",
    },
    {
      icon: <Building className="h-6 w-6 text-white" />,
      title: "Institutions/EdTech & Enterprises",
      description:
        "Transform workforce development and enhance educational programs with AI-powered career services and talent intelligence.",
      benefits: [
        "White-label platform & student analytics",
        "Talent pipeline & workforce development",
        "Employer partnerships & succession planning",
        "Investment analysis & talent evaluation",
      ],
      color: "from-purple-500 to-pink-400",
      bgPattern: "bg-white border border-gray-200",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-lexend font-bold mb-6" style={{ color: '#F57E20' }}>
            Who Is It For?
          </h2>
          <p className="text-xl font-lexend text-gray-600 max-w-3xl mx-auto">
            Gurukul Code serves diverse communities united by a shared vision:
            intelligent, purpose-driven growth in the age of AI
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
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
                  <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-[#036D9B]">
                    {persona.icon}
                  </div>
                  <h3 className="text-xl font-lexend font-bold text-gray-900">
                    {persona.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mb-6 font-lexend leading-relaxed text-[#F57E20]">
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
