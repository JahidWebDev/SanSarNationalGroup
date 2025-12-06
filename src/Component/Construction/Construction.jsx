import React from "react";
import img from "../../Images/Sunset-Construction-Silhouettes.png";

const Construction = () => {
  return (
  <section className="py-50 bg-[#fffefc]">
  <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

    {/* LEFT IMAGE */}
    <div className="md:w-[850px]">  {/* increased width from 850px → 900px */}
      <img
        src={img}
        alt="Construction"
        className="rounded-2xl shadow-xl w-full h-auto"  /* ensures image scales nicely */
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="md:w-1/2">
      <h3 className="text-[#EA1D25] tracking-[6px] text-sm font-semibold mb-3 mt-1.5">
        WHO WE ARE
      </h3>

      <h2 className="text-5xl md:text-6xl font-extrabold text-[#0A1A2F] mb-6"> {/* increased size */}
        Top Construction in Bangladesh
      </h2>

      <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-7"> {/* increased size */}
        National Construction stands as a beacon of excellence in the vibrant construction
        industry of Bangladesh. With a rich history and a commitment to delivering top-notch
        infrastructure solutions, this esteemed company has played a pivotal role in shaping
        the nation's urban and rural landscapes. National Construction's unwavering dedication
        to quality, innovation, and sustainability has positioned it as a leader in the
        construction sector.
      </p>

      {/* BUTTON */}
      <button className="px-8 cursor-pointer py-3 mb-2 bg-black text-white rounded-xl font-medium hover:bg-[#EA1D25] hover:text-black transition duration-300">
        Read More →
      </button>
    </div>

  </div>
</section>

  );
};

export default Construction;
