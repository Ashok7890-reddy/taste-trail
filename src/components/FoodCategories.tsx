import { Link } from "react-router-dom";
import { Coffee, Sandwich, CookingPot } from "lucide-react";
import { motion } from "framer-motion";

const FoodCategories = () => {
  const categories = [
    {
      id: "tiffins",
      name: "Tiffins",
      icon: <Coffee className="h-10 w-10 text-primary" />,
      description: "Start your day with our freshly prepared breakfast items",
      link: "/food/tiffins",
    },
    {
      id: "lunch",
      name: "Lunch",
      icon: <Sandwich className="h-10 w-10 text-primary" />,
      description:
        "Delicious and nutritious midday meals for your busy schedule",
      link: "/food/lunch",
    },
    {
      id: "dinner",
      name: "Dinner",
      icon: <CookingPot className="h-10 w-10 text-primary" />,
      description: "End your day with our flavorful homemade dinner options",
      link: "/food/dinner",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 bg-cover"
      style={{
        backgroundImage: "url('/food category.jpeg')",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-orange-500">
            Explore Our Food Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-white">
            From breakfast to dinner, we've got all your meals covered with our
            homemade goodness
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={category.link} className="block h-full">
                <div className="bg-card h-full rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center flex flex-col items-center border border-border/50">
                  <div className="bg-secondary/50 p-4 rounded-full mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                  <div className="mt-6 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">
                    Explore Options
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategories;
