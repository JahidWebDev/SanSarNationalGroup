import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import logo from "../../Images/logo.png";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f0f14] text-white">

      {/* 🔶 Top Newsletter Banner */}
      <div className="bg-[#EA1D25] py-6 px-6 text-white">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <h2 className="text-2xl font-bold">Our Newsletter</h2>
          <p className="text-sm opacity-90">For Latest Update Subscribe Newsletter</p>
        </div>
      </div>

      {/* 🔶 Main Footer Content */}
      <div className="max-w-[1400px] mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ➤ Left Card */}
        <div className="bg-[#1b1b1b] p-10 rounded-2xl shadow-xl border border-[#EA1D25] w-full md:w-[420px] min-h-[520px]">
          <img src={logo} alt="Logo" className="h-20 mb-6" />
          <p className="text-gray-300 text-sm leading-relaxed">
            Competently are disseminate high-qualityfu whereas viral
            functionalities building engine user friendly markets through
          </p>

          <h3 className="text-lg font-semibold mt-10 mb-2">Contact Info</h3>
          <div className="w-20 h-[3px] bg-[#EA1D25] mb-5"></div>

          <div className="space-y-4 text-sm">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#EA1D25] text-xl" /> +880 1300-909361
            </p>
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#EA1D25] text-xl" /> +880 1751-140864
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#EA1D25] text-xl" />
              Fatullah, Narayanganj, Dhaka, Bangladesh.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8 text-white">
            <FaFacebookF className="w-10 h-10 p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-[#EA1D25] transition" />
            <FaLinkedinIn className="w-10 h-10 p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-[#EA1D25] transition" />
            <FaTwitter className="w-10 h-10 p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-[#EA1D25] transition" />
            <FaInstagram className="w-10 h-10 p-2 bg-gray-700 rounded-lg cursor-pointer hover:bg-[#EA1D25] transition" />
          </div>
        </div>

        {/* ➤ Quick Links */}
        <div className="w-full text-left ml-[30px]">
          <h3 className="text-2xl md:text-3xl font-semibold">Quick Links</h3>
          <div className="w-20 h-1 bg-orange-600 mt-2 mb-6"></div>

          <ul className="space-y-4 text-gray-300 text-base md:text-lg">
            <li className="hover:text-orange-500 cursor-pointer">About Us</li>
            <li className="hover:text-orange-500 cursor-pointer">Team</li>
            <li className="hover:text-orange-500 cursor-pointer">Testimonials</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* ➤ Our Services */}
        <div className="w-full text-left ml-[30px]">
          <h3 className="text-2xl md:text-3xl font-semibold">Our Services</h3>
          <div className="w-20 h-1 bg-orange-600 mt-2 mb-6"></div>

          <ul className="space-y-4 text-gray-300 text-base md:text-lg">
            <li className="hover:text-orange-500 cursor-pointer">Construction</li>
            <li className="hover:text-orange-500 cursor-pointer">Architecture</li>
            <li className="hover:text-orange-500 cursor-pointer">Interior</li>
            <li className="hover:text-orange-500 cursor-pointer">Building Design</li>
            <li className="hover:text-orange-500 cursor-pointer">Real Estate</li>
          </ul>
        </div>

        {/* ➤ Map + Office */}
        <div>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.299684219251!2d90.42699937506987!3d23.73705328908922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b88d1d00e8b7%3A0x57d122fe2b5947a4!2sBanasree%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1701234567890"
            className="w-full h-96 rounded-lg border-0 shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <h3 className="text-lg font-semibold mt-4">Corporate Office:</h3>
          <p className="text-gray-300 text-sm mt-1">
            Rampura Banasree, Dhaka, Bangladesh.
          </p>
        </div>

      </div>

      {/* 🔶 Bottom Bar */}
      <div className="border-t border-gray-700 py-6 text-gray-400 text-sm">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left">
          <p>
            This Website Design by{" "}
            <span className="text-orange-600 font-semibold">Jahid Hossen</span>
          </p>

          <div className="flex justify-center md:justify-end gap-6 mt-2 md:mt-0">
            <span className="cursor-pointer hover:text-orange-500">Privacy Policy</span>
            <span className="cursor-pointer hover:text-orange-500">Supports</span>
          </div>
        </div>
      </div>

      {/* 🔼 Scroll to Top Button */}
<button
  onClick={scrollToTop}
  className={`fixed bottom-6 right-6 z-50 bg-orange-600 text-white 
    w-12 h-12 rounded-full flex items-center justify-center shadow-lg 
    transition-all duration-300 hover:bg-orange-600
    ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
>
  <span className="text-xl leading-none mt-1">⌃</span>
</button>



    </footer>
  );
};

export default Footer;
