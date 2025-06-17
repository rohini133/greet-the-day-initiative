import { motion } from "framer-motion";

export function VisionSection() {
  const fadeInUpVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="py-16 bg-[#0F1026] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-display font-bold mb-6"
              animate={{ 
                textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 10px rgba(89, 86, 213, 0.2)", "0px 0px 0px rgba(0,0,0,0)"] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              About Gurukul Code
            </motion.h2>
          </motion.div>
          
          <motion.div
            className="glass-card rounded-xl p-8 md:p-10 shadow-lg relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background elements */}
            <motion.div 
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5" 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/5" 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.p 
              className="text-lg text-foreground/80 mb-6 relative z-10"
              variants={fadeInUpVariants}
            >
              Gurukul Code is a pioneering platform reimagining the journey of career development through a modern revival of the timeless Gurukulam tradition, emphasizing mentorship, wisdom, and experiential learning. Designed to meet the demands of today's workforce, the platform combines AI-driven tools, expert guidance, top-tier industry strategies, and hands-on practical learning to foster sustainable, purposeful, and future-ready careers.
            </motion.p>
            <motion.p 
              className="text-lg text-foreground/80 relative z-10"
              variants={fadeInUpVariants}
            >
              Rooted in the principles of personalized mentorship, Gurukul Code is enhanced by advanced learning methodologies and integrated knowledge-sharing, guiding individuals smoothly along dynamic career paths. With tailored assessments and practical mentorship, it offers a pathway to true career mastery.
            </motion.p>
            
            <motion.div 
              className="mt-8 border-t border-border pt-8 relative z-10"
              variants={fadeInUpVariants}
              animate={pulseAnimation}
            >
              <motion.h3 
                className="text-2xl font-display font-bold mb-4"
                animate={{ 
                  color: ["hsl(var(--primary))", "hsl(var(--foreground))", "hsl(var(--primary))"] 
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Our Vision
              </motion.h3>
              <motion.p 
                className="text-lg text-foreground/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                To redefine the journey toward sustainable career mastery by seamlessly integrating practical knowledge, mentorship, and AI-driven insights, creating a community where individuals unlock their true potential, navigate the evolving business landscape with confidence, and achieve meaningful professional growth that impacts both their lives and society at large.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
