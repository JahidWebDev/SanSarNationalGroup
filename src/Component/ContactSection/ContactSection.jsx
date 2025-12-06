import React from "react";
import { FaPaperPlane } from "react-icons/fa";
const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-[#0f0f14]  py-40">
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
  );
};

export default ContactSection;
