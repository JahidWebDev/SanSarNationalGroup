import React, { useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Project Completed" },
  { value: "10K+", label: "Happy Customers" },
  { value: "13+", label: "Expert Engineers" },
  { value: "9.4★", label: "Avg Clients Rating" },
];


const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("who");

  const tabs = [
    { id: "who", label: "WHO WE ARE" },
    { id: "mission", label: "OUR MISSION" },
    { id: "vision", label: "OUR VISION" },
    { id: "values", label: "VALUES" },
  ];

  const content = {
    who: `NATIONAL produces and supplies various types of Concrete Admixtures and construction chemicals. NATIONAL ensures customer satisfaction and meets the demands of the construction industry.`,
    mission: `Our mission is to be a leading and innovative provider of high-quality Concrete Admixtures and construction chemicals, contributing to advancement and sustainability in the construction sector.`,
    vision: `Our vision is to continuously push the boundaries of research and development, staying at the cutting edge of technology and materials to deliver groundbreaking admixtures.`,
    values: `Customer satisfaction is our priority. We focus on personalized solutions, exceptional service, and trusted long-term relationships through reliable technical support.`,
  };

  return (
  <section>
       <section className="bg-[#fffefc] text-black py-40">
      <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT CONTENT */}
      <div className="text-left w-full">

  {/* SMALL TITLE */}
  <h4 className="text-orange-600 text-sm tracking-[4px] font-semibold mb-3">
    ABOUT NATIONAL GROUP
  </h4>

  {/* MAIN TITLE */}
  <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
    Build Your Full Projects <br /> Management
  </h2>

  {/* DESCRIPTION */}
  <p className="text-gray-700 leading-relaxed mb-10 max-w-[600px]">
    Monotonectally pontificate multidisciplinary methodologies through 24/7 e-business. 
    Conveniently develop future-proof niches.
  </p>

  {/* TABS */}
     <section className="text-left py-4">
      {/* Tabs */}
 <div className="flex gap-10 text-lg font-semibold mb-10 flex-wrap">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className="relative pb-2 group cursor-pointer"
    >
      {/* Label */}
      <span
        className={`transition-colors duration-300 ${
          activeTab === tab.id
            ? "text-black"
            : "text-gray-600 group-hover:text-orange-600"
        }`}
      >
        {tab.label}
      </span>

      {/* Underline */}
      <span
        className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300
        ${activeTab === tab.id ? "w-full" : "w-0 group-hover:w-full"}`}
      ></span>
      <span className="absolute left-0 -bottom-[2px] h-[2px] w-full bg-gray-200"></span>
    </button>
  ))}
</div>


      {/* CONTENT (with fade + slide animation) */}
      <div
        key={activeTab}
        className="text-[18px] leading-8 text-gray-700 max-w-[650px] 
        animate-fadeInUp"
      >
        {content[activeTab]}
      </div>
    </section>

  {/* PROGRESS BARS */}
  <div className="mt-10">
    <div className="flex justify-between mb-2">
      <span className="font-semibold">Constructions</span>
      <span>90%</span>
    </div>
    <div className="w-full h-2 bg-gray-300 rounded-full">
      <div className="h-full bg-orange-600 rounded-full w-[90%]"></div>
    </div>
  </div>

  <div className="mt-6 mb-8">
    <div className="flex justify-between mb-2">
      <span className="font-semibold">Lubricant</span>
      <span>60%</span>
    </div>
    <div className="w-full h-2 bg-gray-300 rounded-full">
      <div className="h-full bg-orange-600 rounded-full w-[60%]"></div>
    </div>
  </div>

  {/* BUTTON */}
  <button className="px-8 cursor-pointer py-3 bg-black text-white rounded-xl font-medium hover:bg-[#EA1D25] hover:text-black transition duration-300">
            Read More →
          </button>

</div>


        {/* RIGHT SIDE VIDEO */}
        <div className="bg-gray-100 rounded-2xl flex flex-col items-center justify-center p-10 border border-gray-200">
          <div className="bg-orange-600 w-20 h-20 rounded-full flex items-center justify-center cursor-pointer">
            <div
              className="w-0 h-0 
              border-t-[12px] border-t-transparent
              border-b-[12px] border-b-transparent
              border-l-[18px] border-l-white ml-1"
            ></div>
          </div>

          <p className="mt-6 text-gray-700 text-sm tracking-wide">
            Watch Our Corporate Video
          </p>
        </div>

      </div>



    </section>
  <section className="w-full bg-[#0f0f14]  py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* ⭐ SEO Friendly Title (Centered) */}
        <div className="text-center mb-16">
          <h4 className="text-sm text-orange-600  tracking-[6px] mb-2">
            Our Achievements
          </h4>

          <h2 className="text-5xl md:text-5xl font-extrabold text-white mb-6">
            Trusted Excellence in Every Project We Deliver
          </h2>

        
        </div>

        {/* ⭐ Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="
                group relative p-12 bg-black backdrop-blur-xl
                border border-gray-800 rounded-2xl shadow-lg 
                hover:shadow-2xl transition-all duration-500 
                text-center overflow-hidden hover:-translate-y-2 
                cursor-default hover:border-[#EA1D25]
                hover:shadow-[0_0_25px_#EA1D2580]
              "
            >
              {/* Glow Shadow on Hover */}
              <div
                className="
                  absolute inset-0 pointer-events-none transition-all 
                  duration-500 opacity-0 group-hover:opacity-100
                  group-hover:shadow-[0_0_40px_#EA1D2580] rounded-2xl
                "
              ></div>

              {/* Number */}
              <h2
                className="
                  relative text-5xl font-extrabold text-orange-600 
                  mb-4 tracking-tight transition-all duration-500
                  group-hover:text-[#EA1D25] group-hover:scale-110
                "
              >
                {item.value}
              </h2>

              {/* Label */}
              <p
                className="
                  relative text-lg font-medium text-gray-400 
                  transition-colors duration-500 
                  group-hover:text-[#EA1D25]
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  </section>
    
  );
};

export default AboutSection;
