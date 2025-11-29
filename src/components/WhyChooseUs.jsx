import { memo } from "react";
import { Shield, Clock, Truck, Heart } from "lucide-react";

const WhyChooseUs = memo(() => {
  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Every meal is carefully prepared with the freshest ingredients and highest quality standards.",
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description:
        "Get your favorite meals delivered to your doorstep in no time. Fast, reliable service guaranteed.",
    },
    {
      icon: Heart,
      title: "Healthy Options",
      description:
        "Wide variety of nutritious meals catering to all dietary preferences and health needs.",
    },
    {
      icon: Truck,
      title: "Easy Ordering",
      description:
        "Simple, intuitive ordering process. Browse, select, and enjoy your meal in just a few clicks.",
    },
  ];

  return (
    <section className="bg-main-100 py-20 sm:py-16  lg:py-20 poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We're committed to providing you with the best food experience
            possible
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-main-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-6 xl:p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500 rounded-full mb-4 sm:mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

WhyChooseUs.displayName = "WhyChooseUs";
export default WhyChooseUs;
