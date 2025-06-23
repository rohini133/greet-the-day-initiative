
import { motion } from "framer-motion";
import { Brain, Briefcase, Search, School } from "lucide-react";
import { cn } from "@/lib/utils";

const journeySteps = [
  {
    icon: Brain,
    title: "AI Assessment",
    description: "Comprehensive evaluation of personal interests, skills, personality traits, values, and career goals.",
    details: [
      "Personal Interests and Passions",
      "Skills and Aptitudes",
      "Personality Traits",
      "Values and Work Preferences",
      "Career Motivation and Goals"
    ],
    colorClass: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
  },
  {
    icon: School,
    title: "Career Awareness",
    description: "Educational programs to broaden understanding of career opportunities and professional development.",
    details: [
      "Education on Diverse Opportunities",
      "Career Research Methodology",
      "Soft/Professional Skill Development",
      "Conferences and Networking Events",
      "Personalized Mentorship"
    ],
    colorClass: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
  },
  {
    icon: Search,
    title: "Career Path Exploration",
    description: "Guided exploration of potential career paths with AI assistance and expert mentorship.",
    details: [
      "AI Assistant and Career Counseling",
      "Curriculum Planning and Assignments",
      "Industry Research and Career Clubs",
      "Extracurricular Activities",
      "Training Workshops and Talks"
    ],
    colorClass: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
  },
  {
    icon: Briefcase,
    title: "Career Preparation",
    description: "Practical skill development and hands-on experience to prepare for successful career entry and growth.",
    details: [
      "AI-assisted Training and Support",
      "Entry-level and Advanced Training Modules",
      "Practical Experience through Projects",
      "Internship Opportunities",
      "Job Placement Assistance"
    ],
    colorClass: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
  }
];

export function CareerJourneySection() {
  return (
    <section className="py-20 md:py-32 bg-[#0F1026]">

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
         <motion.h2 
  className="text-3xl md:text-4xl font-display font-bold mb-4 text-primary"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Empowering Sustainable Career Growth<br />Using AI Insights
</motion.h2>


          <motion.p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our comprehensive career journey framework guides you through each stage of professional development, combining AI technology with personalized mentorship.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-card rounded-xl p-8 shadow-md hover-scale"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-6", step.colorClass)}>
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4">{step.title}</h3>
              <p className="text-foreground/70 mb-6">{step.description}</p>
              
              <ul className="space-y-2">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
