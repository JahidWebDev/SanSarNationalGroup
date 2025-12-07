import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import img1 from "../../Images/organization-logo1.png"
import img2 from "../../Images/organization-logo2.png"
import img3 from "../../Images/organization-logo3.png"
import img4 from "../../Images/organization-logo4.png"
import img5 from "../../Images/organization-logo5.png"
import img6 from "../../Images/organization-logo6.png"
import img7 from "../../Images/organization-logo7.png"
import img8 from "../../Images/organization-logo8.png"


const ContactSection = () => {

  return (
   <section>
     <section  className="w-full bg-[#0f0f14]  py-40">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
{/* LEFT FORM */}
<div className="bg-white shadow-xl rounded-xl p-10 min-h-[420px]">
  <h2 className="text-2xl font-bold mb-8">Speak to Our Sales Team</h2>

  <form className="space-y-5">
    {/* Full Name */}
    <input
      type="text"
      placeholder="Full Name"
      className="w-full border border-gray-300 rounded-md px-5 py-4 focus:outline-none"
    />

    {/* Phone + Email */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <input
        type="text"
        placeholder="Phone Number"
        className="w-full border border-gray-300 rounded-md px-5 py-4 focus:outline-none"
      />
      <input
        type="email"
        placeholder="Work Email"
        className="w-full border border-gray-300 rounded-md px-5 py-4 focus:outline-none"
      />
    </div>

    {/* Message */}
    <textarea
      placeholder="Describe your needs (product, quantity, location...)"
      rows="5"
      className="w-full border border-gray-300 rounded-md px-5 py-4 focus:outline-none"
    ></textarea>

    {/* Submit Button */}
   <button
  type="submit"
  className="w-full bg-[#EA1D25] hover:bg-[#e53935] text-white font-semibold py-4 rounded-[7px] transition flex items-center justify-center gap-2"
>
  Submit Request <FaPaperPlane className="text-lg" />
</button>
  </form>
</div>

{/* RIGHT TESTIMONIAL */}
<div className="min-h-[420px]">
  <p className=" text-orange-600 tracking-[4px] text-sm font-semibold  mb-3">
    SUCCESS STORIES
  </p>

  <h2 className="text-4xl font-bold text-white mb-8">
    Hear from Our Loyal Clients
  </h2>

  <div className="bg-black/40 border border-orange-600  text-white rounded-xl p-10 shadow-lg min-h-[350px]">
    <div className="text-6xl font-bold mb-4 text-orange-600">❝</div>

    <p className="text-lg leading-relaxed mb-8">
      “National Group’s admixture is unmatched. The delivery logistics were
      flawless, and the technical support provided by their engineers was
      invaluable for our major city project.”
    </p>

    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-white text-[#0288d1] rounded-full flex items-center justify-center font-semibold">
        TS
      </div>

      <div>
        <h4 className="font-semibold text-lg text-orange-600">Jahid Hossen</h4>
        <p className="text-sm opacity-90">
          MERN Stack Developer
        </p>
      </div>
    </div>
  </div>
</div>



      </div>
 
    </section>
         <section className="py-16 bg-[#fffcf9]">
  <div className="max-w-[1200px] mx-auto text-center px-6">
    
    {/* Heading */}
    <h1 className="text-2xl md:text-3xl font-bold mb-10">
      Recognized & Certified by GOVT & other Prestigious Organization
    </h1>

    {/* Logo Images */}
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
      <img src={img1} alt="" className="h-16 object-contain" />
      <img src={img2} alt="" className="h-16 object-contain" />
      <img src={img3} alt="" className="h-16 object-contain" />
      <img src={img4} alt="" className="h-16 object-contain" />
      <img src={img5}alt="" className="h-16 object-contain" />
      <img src={img6} alt="" className="h-16 object-contain" />
      <img src={img7} alt="" className="h-16 object-contain" />
      <img src={img8} alt="" className="h-16 object-contain" />
    </div>

  </div>
</section>
   </section>
    
  );
};

export default ContactSection;
