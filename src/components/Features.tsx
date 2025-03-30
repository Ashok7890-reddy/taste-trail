
import { motion } from "framer-motion";
import { Clock, Heart, UtensilsCrossed, Truck, Leaf, BadgePercent } from "lucide-react";

const features = [
  {
    icon: <UtensilsCrossed className="h-10 w-10 text-primary" />,
    title: "Chef-Crafted Recipes",
    description: "Our meals are created by professional chefs with a focus on flavor and nutrition."
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Ready in Minutes",
    description: "Just heat and serve! Enjoy a home-cooked meal in less than 10 minutes."
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Made with Love",
    description: "Every meal is prepared with care, just like you would make at home for your family."
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Free Delivery",
    description: "Scheduled deliveries right to your door at no additional cost."
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Fresh Ingredients",
    description: "We source local, seasonal ingredients for the best taste and quality."
  },
  {
    icon: <BadgePercent className="h-10 w-10 text-primary" />,
    title: "Flexible Plans",
    description: "Choose between weekly or monthly subscription with no long-term commitment."
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-secondary text-primary">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Home-Cooked Goodness, Without the Hassle
          </h2>
          <p className="text-lg text-muted-foreground">
            We bring the comfort of home cooking to your table, with none of the shopping, 
            prepping, or cleanup. Just real, delicious food.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-background rounded-2xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-secondary/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
