import { memo, useState } from "react";
import { Mail, Send } from "lucide-react";
import {axiosInstance} from "../API/axios";

const NewsletterSection = memo(() => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimedEmail = email.trim();
    if (trimedEmail) {
      axiosInstance
        .post("/api/contact/subscribe", { email: trimedEmail })
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
      console.log("Newsletter subscription:");
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-main-200 py-12 sm:py-16 lg:py-20 poppins">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-main-100 rounded-3xl p-8 sm:p-10 lg:p-12 shadow-lg">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-yellow-500 rounded-full mb-4 sm:mb-6 mx-auto">
              <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
              Subscribe to our newsletter and get the latest deals, new menu
              items, and special offers delivered to your inbox.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-gray-300 focus:border-yellow-500 focus:outline-none text-gray-800 placeholder-gray-400 text-sm sm:text-base transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 whitespace-nowrap shadow-md hover:shadow-lg"
              >
                <span className="hidden sm:inline cursor-pointer">
                  Subscribe
                </span>
                <span className="sm:hidden cursor-pointer">Subscribe</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
            {isSubscribed && (
              <p className="mt-4 text-center text-green-600 font-medium text-sm sm:text-base">
                Thank you for subscribing! Check your inbox for confirmation.
              </p>
            )}
          </form>
          <p className="text-xs sm:text-sm text-gray-500 text-center mt-6 sm:mt-8">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
});

NewsletterSection.displayName = "NewsletterSection";
export default NewsletterSection;
