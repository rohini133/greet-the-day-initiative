import { motion } from "framer-motion";
import { Award, BookOpen, Code, Heart, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="py-20 bg-[#0F1026] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 pt-16 pb-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            About Gurukul Code
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            Reimagining career development through the timeless Gurukulam tradition
          </p>
        </motion.div>
      </section>

      {/* Learning Journey Section */}
      <section className="py-16 bg-[ #0F1026] relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Your Learning Journey
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <BookOpen className="h-6 w-6 text-orange-400" />,
                title: "Learn",
                color: "text-orange-400",
                description:
                  "Acquire knowledge through structured guidance, expert mentorship, and personalized learning paths"
              },
              {
                icon: <Users className="h-6 w-6 text-blue-400" />,
                title: "Grow",
                color: "text-blue-400",
                description:
                  "Develop your skills through community engagement, practical application, and continuous feedback"
              },
              {
                icon: <Award className="h-6 w-6 text-green-400" />,
                title: "Succeed",
                color: "text-green-400",
                description:
                  "Achieve your career goals through strategic guidance, industry connections, and purpose-driven development"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="transition-all duration-300"
              >
                <Card className="h-full bg-[#1f203a] text-white border border-white/10 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <h3 className={`text-2xl font-bold mb-3 ${item.color}`}>{item.title}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[ #0F1026 ] py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl p-8 md:p-12 bg-[#15162d]"
            >
              <h2 className="text-3xl font-display font-bold mb-6">Our Vision</h2>
              <motion.p
                className="text-lg text-white/80 mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                To redefine the journey toward sustainable career mastery by seamlessly integrating practical knowledge, mentorship, and AI-driven insights...
              </motion.p>
              <h2 className="text-3xl font-display font-bold mt-12 mb-6">Our Mission</h2>
              <motion.p
                className="text-lg text-white/80"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Gurukul Code is a pioneering platform reimagining the journey of career development through a modern revival of the timeless Gurukulam tradition...
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#0F1026]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "Personalized Mentorship", description: "We believe in the power of one-on-one guidance..." },
              { icon: Zap, title: "AI-Powered Growth", description: "Leveraging artificial intelligence to deliver insights..." },
              { icon: Users, title: "Community Learning", description: "Building a supportive network where knowledge sharing..." },
              { icon: Code, title: "Practical Application", description: "Emphasizing hands-on experience..." },
              { icon: Award, title: "Continuous Development", description: "Fostering a mindset of lifelong learning..." },
              { icon: Heart, title: "Purpose-Driven Careers", description: "Guiding individuals towards meaningful growth..." },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-[#1f203a] rounded-xl p-6 text-white shadow-md hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-[#F57E20]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-[ #0F1026 ]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Our Learning Community
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Become part of a growing community dedicated to redefining career development through the perfect blend of traditional wisdom and modern technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-[#F57E20] hover:bg-[#e86e10] text-white text-lg px-6 py-3 rounded-xl">
              Start Your Journey Today
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
