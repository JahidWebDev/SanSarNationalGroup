import { useState } from "react";
import { motion } from "framer-motion";
import { FaBox, FaOilCan } from "react-icons/fa";

import img1 from "../../Images/view-more-product.png";
import img2 from "../../Images/view more product02.png";
import img3 from "../../Images/view-MoreProduct.png";
import img4 from "../../Images/view-More product.png";

export const products = [
  {
    title: "Fixit Mix-WPR",
    desc: "High-range water reducing & waterproofing agent...",
    category: "Building Materials",
    btn: "Inquire Now",
    icon: FaBox,
    image: img1,
    bg: "bg-gray-100",
  },
  {
    title: "NATIONAL Exterior Sealer",
    desc: "Durable exterior protection against dampness...",
    category: "Building Materials",
    btn: "Inquire Now",
    icon: FaBox,
    image: img2,
    bg: "bg-gray-100",
  },
  {
    title: "4T Motor Bike Oil",
    desc: "Semi-synthetic formula for superior engine protection...",
    category: "Engine Oil",
    btn: "Order Details",
    icon: FaOilCan,
    image: img3,
    bg: "bg-red-50",
  },
  {
    title: "Diesel/Petrol Engine Oil",
    desc: "Fully synthetic heavy-duty engine oil...",
    category: "Engine Oil",
    btn: "Order Details",
    icon: FaOilCan,
    image: img4,
    bg: "bg-red-50",
  },
];

const categories = ["All", "Building Materials", "Engine Oil"];

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((item) => item.category === activeTab);

  return (
    <section className="bg-[#fffcf9] py-32">
      <div className="max-w-[1440px] mx-auto px-6 text-center">

       {/* Top Title */}
<div className="max-w-[1440px] mx-auto mb-8 text-left">
  <h4 className="text-sm tracking-[4px] text-orange-600 font-semibold mb-4">
    OUR PRODUCTS
  </h4>

  <h2 className="text-4xl max-w-[800px] md:text-5xl font-extrabold text-[#0A1A2F] mb-10">
    We have all Building Materials & Engine Oil Products
  </h2>

  <p className="text-gray-600 max-w-[600px]">
    In 2023, NATIONAL started its journey as a pioneer in the construction
    chemicals industry in Bangladesh. Our main goal is to create an
    advanced future in construction.
  </p>
</div>


        {/* FILTER TABS */}
        <div className="flex gap-4 justify-end mb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`
                px-6 py-2 rounded-[6px] border 
                transition-all duration-300 text-sm font-semibold
                ${
                  activeTab === cat
                    ? "bg-orange-600 text-white border-orange-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="
                group relative bg-white p-6
                rounded-2xl border border-gray-200 
                shadow-lg hover:shadow-2xl
                transition-all duration-500 
                hover:border-orange-600
                cursor-pointer overflow-hidden
                flex flex-col justify-between
                w-full h-[480px]
              "
            >
              {/* Soft Glow */}
              <div
                className="
                  absolute inset-0 bg-orange-600/10 
                  opacity-0 group-hover:opacity-100 
                  blur-2xl transition duration-500
                "
              ></div>

              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Image / Icon */}
                  <div
                    className={`
                      w-full h-60 rounded-xl flex items-center justify-center mb-6
                      ${item.bg}
                      transition-all duration-500
                      group-hover:scale-105
                    `}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-auto object-contain transition-all duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <item.icon
                        className="
                          text-6xl text-gray-700 
                          transition-colors duration-500
                          group-hover:text-orange-600
                        "
                      />
                    )}
                  </div>

                  {/* Category */}
                  <h4 className="text-xs font-semibold text-orange-600 mb-1 tracking-wide text-left">
                    {item.category.toUpperCase()}
                  </h4>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-[#0A1A2F] mb-2 transition-colors duration-500 group-hover:text-[#EA1D25]  text-left">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3 text-left">
                    {item.desc}
                  </p>
                </div>

                {/* Button */}
           <button className="
  w-full py-2 rounded-[6px] 
  bg-orange-600 text-white font-semibold text-sm 
  border border-transparent        /* default no border */
  hover:bg-orange-700 hover:border-white
  transition-all duration-300
">
  {item.btn}
</button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductSection;
