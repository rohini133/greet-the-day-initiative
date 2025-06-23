import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();
  
  const fadeUpItem = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const gradientText = {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
   <section className="relative overflow-hidden pt-16 pb-4 md:pt-40 md:pb-12 lg:pt-48 lg:pb-16 bg-[#0F1026]">

      {/* Decorative background elements */}
      <div className="absolute inset-0 hero-pattern opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
        {/* <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div> */}
        {/* <motion.div 
          className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        ></motion.div> */}
      </div>

      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpItem}>
            <motion.div 
              className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
              animate={floatAnimation}
            >
              <motion.span 
                className="mr-2 h-2 w-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.span>
              Transforming Career Paths With AI
            </motion.div>
          </motion.div>

          <motion.h1   
  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-balance"
  variants={fadeUpItem}
  style={{
    backgroundImage: "linear-gradient(45deg, #036D9B, #036D9B, #036D9B)",  // 👈 solid-color gradient
    backgroundSize: "200% auto",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}
  animate={gradientText}
>
  Empowering Sustainable Career Growth  with AI
</motion.h1>  
          <motion.p 
            className="text-lg md:text-xl text-foreground/70 mb-8 md:mb-10 max-w-2xl mx-auto text-balance"
            variants={fadeUpItem}
          >
            Gurukul Code combines ancient teaching methods with cutting-edge AI to create personalized learning experiences that adapt to your needs and career goals.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeUpItem}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto px-8 py-6 text-base bg-[#F57E20] hover:bg-[#e76c0f] text-white shadow-lg"
                onClick={() => navigate("/get-started")}
              >
                Get Started for Free
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto px-8 py-6 text-base group"
                onClick={() => navigate("/explore-courses")}
              >
                Know More 
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="container mx-auto px-4 md:px-6 mt-16 md:mt-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {/* Trusted by brands (currently commented out) */}
      </motion.div>
    </section>
  );
}
