
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from 'lucide-react';

export function CTASection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);

    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="rounded-2xl p-6 sm:p-10 md:p-12 bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] shadow-2xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-lexend font-bold mb-4 bg-gradient-to-r from-[#FFF4ED] via-[#F2FAFC] to-[#E8F3F9] bg-clip-text text-transparent">
                Stay Ahead of the Curve
              </h2>

              <p className="text-lg font-lexend text-gray-700 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Get exclusive insights on AI trends, career intelligence, and platform updates — delivered to your inbox weekly.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-md">
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-6 py-4 rounded-full bg-white border border-gray-300 text-gray-700 placeholder-gray-400 font-lexend focus:outline-none focus:ring-2 focus:ring-[#40C7E8]/40"
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-gradient-to-r from-[#40C7E8] to-[#0077B6] hover:opacity-90 text-white px-8 py-6 rounded-full font-lexend font-medium transition-opacity"
                    >
                      Subscribe
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                ) : (
                  <div className="flex items-center justify-center text-brand-dark py-4">
                    <CheckCircle className="h-6 w-6 mr-2 text-[#40C7E8]" />
                    <span className="font-lexend font-semibold text-xl">Thank you for subscribing!</span>
                  </div>
                )}

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-gray-700 font-lexend font-medium">
                  {[
                    "Weekly AI insights",
                    "Career intelligence",
                    "Early access features",
                  ].map((text, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#40C7E8] to-[#0077B6] rounded-full mr-2"></div>
                      {text}
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.p
                className="mt-8 font-lexend text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
               Join a growing community of professionals building their future with us.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
