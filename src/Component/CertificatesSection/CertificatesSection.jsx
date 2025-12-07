import React from "react";

import pcnImg from "../../Images/PCN.jpg";
import pcnImgone from "../../Images/ISO.jpg";


export default function CertificatesSection() {
  const items = [
    {
      type: "image",
      icon: pcnImg,
      title: "BUET Certified Material Integrity",
      desc: "Approved by the Bangladesh University of Engineering and Technology (BUET) for meeting stringent construction material quality standards.",
    },
    {
      type: "image",
      icon: pcnImgone,
      title: "BCSIR Laboratory Validation",
      desc: "Tested and validated by the Bangladesh Council of Scientific and Industrial Research (BCSIR), ensuring chemical purity and effectiveness.",
    },
    {
      type: "image",
     icon: pcnImg,
      title: "International ISO Compliance",
      desc: "Operates under global ISO quality management systems to meet global regulatory requirements.",
    },
    {
      type: "image",
     icon: pcnImg,
      title: "International ISO Compliance",
      desc: "Operates under global ISO quality management systems to meet global regulatory requirements.",
    },
  ];

  return (
    <section  className="w-full py-35 bg-[#fffcf9]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm tracking-[4px] font-semibold text-orange-600 mb-4">
          UNWAVERING STANDARDS
        </p>

        <h2 className="text-5xl font-extrabold text-[#0A1A2F] leading-tight mb-4">
          Tested, Approved, and Trusted.
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl text-lg">
          Our products undergo extensive third-party evaluations to ensure unmatched quality and absolute confidence.
        </p>
<div className="grid md:grid-cols-2 gap-8 transition-transform group-hover:drop-shadow-[#EA1D25]">
  {items.map((item, index) => (
    <div
      key={index}
      className="rounded-2xl w-[600px] p-7 border border-orange-200 bg-white shadow-md 
                 hover:shadow-xl hover:border-orange-400 transition-all duration-300 group 
                 cursor-pointer hover:-translate-y-1 hover:scale-105"
    >
      <div className="rounded-2xl text-orange-600 w-fit mb-5 transition-transform">
        {item.type === "image" ? (
          <img
            src={item.icon}
            alt={item.title}
            className="w-[700px] border-[#c7c7c7] border-2 h-[600px] rounded-md"
          />
        ) : (
          item.icon
        )}
      </div>

      <h3 className="text-xl font-extrabold text-[#0A1A2F] mb-2">
        {item.title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-base">
        {item.desc}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
