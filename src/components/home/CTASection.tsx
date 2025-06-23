import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[#0F1026]">
      {/* Removed gradient background elements */}

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12 backdrop-blur-md border border-white/10 shadow-xl">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-balance text-[#036D9B]">
  Begin Your Learning Journey Today
</h2>

              <p className="text-lg text-foreground/70 mb-8 md:mb-10 text-balance max-w-2xl mx-auto">
                Join thousands of students who are transforming their careers through our AI-powered platform and mentorship program.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#F57E20] hover:bg-[#e76c0f] text-white shadow-lg"
                  onClick={() => navigate("/get-started")}
                >
                  Get Started for Free
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-[#F57E20] hover:bg-[#e76c0f] text-white shadow-lg"
                  onClick={() => navigate("/contact")}
                >
                  Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <p className="mt-6 text-sm text-foreground/60">
                No credit card required. Start with our free plan and upgrade anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
