import React, { useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProducts,
  selectProductsStatus,
} from "../selectors/ProductsSelectors";
import { fetchProducts } from "../features/productsSlice";
import { useNavigate } from "react-router-dom";
import { topRightArrow } from "../constants";

const FeaturedFoods = memo(() => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const featuredProducts = products?.filter((product) =>
    [
      "Grilled Chicken Sandwich",
      "Spaghetti Bolognese",
      "Veggie Supreme Pizza",
      "Philly Cheesesteak",
    ].includes(product.nom)
  );

  const handleProductClick = (produitId) => {
    navigate(`/product/${produitId}`);
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-main-100 flex justify-center items-center poppins">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-gray-300 border-t-main-200" />
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="bg-main-100 p-4 text-main-100">
        Failed to load products.
      </div>
    );
  }

  return (
    <div className="bg-main-100 py-8 sm:py-12 lg:py-16 poppins mb-[-90px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 mb-6 sm:mb-8 text-center">
          Featured Foods
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {featuredProducts.slice(0, 4).map((product) => (
            <div
              key={product.produitId}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 hover:shadow-xl transition-shadow duration-300 group"
            >
              <img
                src={product.imageUrl}
                alt={product.nom}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-3 sm:px-4 py-4 sm:py-5 md:py-6 mx-2 sm:mx-3 mb-2 sm:mb-3 backdrop-blur-md bg-gray-500/30 rounded-2xl sm:rounded-3xl">
                <div className="flex items-center justify-between gap-2 sm:gap-3">
                  <h3 className="text-main-100 font-normal text-sm sm:text-base md:text-lg lg:text-xl line-clamp-2 flex-1 pr-2">
                    {product.nom}
                  </h3>

                  {/* Arrow Button - Positioned inside overlay */}
                  <button
                    onClick={() => handleProductClick(product.produitId)}
                    className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-yellow-500 hover:bg-main-300 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center shadow-lg"
                    aria-label={`View ${product.nom} details`}
                  >
                    <img
                      src={topRightArrow}
                      alt="Details"
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain"
                      loading="lazy"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

FeaturedFoods.displayName = "FeaturedFoods";
export default FeaturedFoods;
