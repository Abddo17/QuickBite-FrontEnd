import HeroSection from "../components/Hero";
import FoodSection from "../components/FoodSection.jsx";
import FoodSlider from "../components/HomeSliders/FoodSlider.jsx";
import FeaturedFoods from "../components/FeaturedFood.jsx";
import StorePromo from "../components/promo.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import NewsletterSection from "../components/NewsletterSection.jsx";

export const HomePage = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <HeroSection />
      <FoodSection />
      <FoodSlider />
      <FeaturedFoods />
      <WhyChooseUs />
      <StorePromo />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;
