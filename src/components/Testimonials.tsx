import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Tasty Trail has transformed our weeknight dinners. No more stressing about what to cook - just delicious meals ready in minutes!",
    author: "Sarah M.",
    role: "Busy parented by two",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    quote:
      "The quality and taste of these meals is incredible. It's like having a personal chef without the expense. I'm a customer for life!",
    author: "James L.",
    role: "Working professional",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    quote:
      "As someone who loves good food but hates grocery shopping, Tasty Trail is a game-changer. Fresh, homestyle meals with zero effort.",
    author: "Emily K.",
    role: "Graduate student/Youtuber",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    quote:
      "The meals remind me of my grandmother's cooking - comfort food with a modern twist. I love the seasonal menu changes!",
    author: "Michael R.",
    role: "Food enthusiast",
    image: "https://i.pravatar.cc/100?img=4",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-primary">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Customers Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6">
            <Quote className="h-12 w-12 text-primary opacity-30" />
          </div>

          <div className="bg-background rounded-2xl p-10 shadow-xl border border-border relative z-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: current === index ? 1 : 0,
                  x: current === index ? 0 : 20,
                  position: current === index ? "relative" : "absolute",
                }}
                transition={{ duration: 0.5 }}
                className="text-center"
                style={{
                  display: current === index ? "block" : "none",
                }}
              >
                <p className="text-xl md:text-2xl italic mb-8 text-foreground">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-primary">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-lg">
                    {testimonial.author}
                  </h4>
                  <p className="text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
