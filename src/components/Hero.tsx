import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.jpeg')",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-primary">
              Homemade Happiness Delivered
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Delicious Meals,
              <span className="text-primary"> From Our Home to Yours</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
              Subscribe to weekly or monthly meal plans and enjoy homemade,
              nutritious food delivered right to your doorstep. No shopping, no
              prep, just warmth in every bite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/plans">
                <Button size="lg" className="w-full sm:w-auto group">
                  Explore Meal Plans
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  How It Works
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/img.jpg"
                alt="Delicious home-cooked food"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-background rounded-xl shadow-xl p-4 glass-morph"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                      className="text-primary"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Trusted by</p>
                  <p className="font-semibold">2,000+ Families</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
