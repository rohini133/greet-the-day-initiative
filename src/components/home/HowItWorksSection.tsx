
import { motion } from "framer-motion";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Self-Assess",
      description: "Quick AI-driven quiz → Career Fit Score",
      details: "Get personalized insights into your strengths, interests, and career alignment through our comprehensive assessment."
    },
    {
      number: "02", 
      title: "Explore & Experiment",
      description: "Role simulations, live briefs, peer pods",
      details: "Dive into real-world scenarios and collaborate with peers to understand different career paths and opportunities."
    },
    {
      number: "03",
      title: "Build & Validate",
      description: "Projects, resumes, and interview prep",
      details: "Create tangible outcomes through hands-on projects while preparing for your career transition with expert guidance."
    },
    {
      number: "04",
      title: "Launch & Grow",
      description: "Referrals, momentum tracking, lifelong learning",
      details: "Transition into your new career with placement support and continue growing through our lifelong learning ecosystem."
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-[#0F1026] ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/70 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your journey from career discovery to professional success in four strategic stages.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground text-xl font-bold flex items-center justify-center mb-4">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
              <p className="text-primary font-medium mb-3">{step.description}</p>
              <p className="text-foreground/70 text-sm">{step.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
