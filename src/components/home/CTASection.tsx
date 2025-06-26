import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from 'lucide-react';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#0F1026] via-[#1a1c3d] to-[#2d3185] relative overflow-hidden">
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-card rounded-2xl p-8 md:p-12 backdrop-blur-md border border-white/20 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                Stay Ahead of the Curve
              </h2>

              <p className="text-lg text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto">
                Get exclusive insights on AI trends, career intelligence, and platform updates 
                delivered to your inbox every week.
              </p>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-[#F57E20] hover:bg-[#e76c0f] text-white px-8 py-6 rounded-full font-medium transition-colors"
                    >
                      Subscribe
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center text-white py-4">
                    <CheckCircle className="h-6 w-6 mr-2 text-[#F57E20]" />
                    <span className="font-medium text-xl">Thank you for subscribing!</span>
                  </div>
                )}

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-white/80">
                  <motion.div 
                    className="flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-2 h-2 bg-[#F57E20] rounded-full mr-2"></div>
                    Weekly AI insights
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-2 h-2 bg-[#F57E20] rounded-full mr-2"></div>
                    Career intelligence
                  </motion.div>
                  <motion.div 
                    className="flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="w-2 h-2 bg-[#F57E20] rounded-full mr-2"></div>
                    Early access features
                  </motion.div>
                </div>
              </div>

              <motion.p 
                className="mt-8 text-white/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Join 10,000+ professionals already growing with us
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}