
import { motion } from "framer-motion";

const trustedByCategories = [
  {
    title: "Colleges",
    description: "Top educational institutions trust our platform"
  },
  {
    title: "Enterprises", 
    description: "Fortune 500 companies use our solutions"
  },
  {
    title: "Professionals",
    description: "Thousands of career changers and learners"
  }
];

const testimonial = {
  content: "Gurukul Code's predictive insights and mentor network cut our placement cycle in half.",
  author: "Campus Director",
  role: "Top Engineering College"
};

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-[#0F1026]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.h2 
            className="responsive-heading font-bold mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trusted By
          </motion.h2>
        </div>

        {/* Trusted Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {trustedByCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="text-center px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{category.title}</h3>
              <p className="text-foreground/70 text-sm sm:text-base">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="bg-card/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg text-center">
            <svg className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-4 sm:mb-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground mb-4 sm:mb-6 leading-relaxed">
              "{testimonial.content}"
            </blockquote>
            <div>
              <div className="font-semibold text-base sm:text-lg text-white">{testimonial.author}</div>
              <div className="text-foreground/60 text-sm sm:text-base">{testimonial.role}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
