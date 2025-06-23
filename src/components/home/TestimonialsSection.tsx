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
    <section className="py-20 md:py-16 bg-[#0F1026]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.h2 
  className="text-3xl md:text-4xl font-display font-bold mb-8 text-[#036D9B]"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  Trusted By
</motion.h2>

        </div>

        {/* Trusted Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trustedByCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
              <p className="text-foreground/70">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Card - remains unchanged */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="rounded-2xl p-8 md:p-12 backdrop-blur-md border border-white/10 shadow-xl text-center bg-[#0F1026]">
            <svg className="h-8 w-8 text-primary mb-6 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl md:text-2xl font-medium text-white mb-6">
              "{testimonial.content}"
            </blockquote>
            <div>
              <div className="font-semibold text-lg text-white">{testimonial.author}</div>
              <div className="text-foreground/60">{testimonial.role}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
