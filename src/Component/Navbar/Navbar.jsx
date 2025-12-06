import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaPinterest,
  FaFacebookF,
  FaTwitter,
  FaChevronDown,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

 const [hideTopBar, setHideTopBar] = useState(false);
const [showTopBarOnHover, setShowTopBarOnHover] = useState(false);

// Auto-hide on scroll
useEffect(() => {
  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
      setHideTopBar(true); // hide top bar
    } else {
      setHideTopBar(false); // show top bar
    }
    lastScroll = currentScroll;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <section>
      {/* FIXED HEADER WITH GLASS EFFECT */}
<header
  className="w-full text-white fixed top-0 left-0 z-50 transition-all duration-300"
  onMouseEnter={() => setShowTopBarOnHover(true)}
  onMouseLeave={() => setShowTopBarOnHover(false)}
>
  {/* ---------- TOP BAR ---------- */}
  <div
    className={`w-full bg-[#0D0D0D]/90 border-b border-gray-800 backdrop-blur-xl 
    transition-all duration-500
    ${
      hideTopBar && !showTopBarOnHover
        ? "-translate-y-full opacity-0"
        : "translate-y-0 opacity-100"
    }`}
  >
    <div className="max-w-[1792px] mx-auto flex justify-between items-center px-6 py-4">
      <div className="flex items-center text-sm space-x-8">
        <span className="flex items-center space-x-2">
          <FaPhoneAlt className="text-[#EA1D25] " />
          <p>+880 1302-095901</p>
        </span>
        <span className="flex items-center space-x-2">
          <FaEnvelope className="text-[#EA1D25] " />
          <p>nationalbd@gmail.com</p>
        </span>
      </div>

      <div className="flex items-center space-x-8 text-lg">
        <FaLinkedinIn className="hover:text-orange-500 text-[#EA1D25] transition" />
        <FaPinterest className="hover:text-orange-500 transition" />
        <FaFacebookF className="hover:text-orange-500 transition" />
        <FaTwitter className="hover:text-orange-500 transition" />
      </div>
    </div>
  </div>

  {/* ---------- MAIN NAVBAR ---------- */}
<section>
  <div 
  className={` w-full bg-[#0f0f14] border-b border-[#1c1c1c]/40 backdrop-blur-xl shadow-lg
    transition-all duration-500
    ${hideTopBar && !showTopBarOnHover ? "-mt-[60px]" : "mt-0 opacity-100"}
  `}
>
  <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">

    {/* LOGO */}
    <img src={logo} alt="Logo" className="h-18 object-contain" />

    {/* NAV MENU */}
  <nav className="hidden md:flex space-x-14 text-[15px] font-medium">
  {/* Home */}
  <button
    onClick={() => scrollToSection('home')}
    className="relative transition-all duration-300
               after:content-[''] after:absolute after:left-1/2 after:-bottom-0 after:h-[2px] after:w-0 after:bg-orange-600
               after:transition-all after:duration-300
               hover:after:left-0 hover:after:w-full cursor-pointer hover:text-[#EA1D25] "
  >
    Home
  </button>

  {/* About */}
  <button
    onClick={() => scrollToSection('about')}
    className="relative transition-all duration-300
               after:content-[''] after:absolute after:left-1/2 after:-bottom-0 after:h-[2px] after:w-0 after:bg-orange-600
               after:transition-all after:duration-300
               hover:after:left-0 hover:after:w-full cursor-pointer hover:text-[#EA1D25]"
  >
    About
  </button>

  {/* Dropdown */}
  <div className="relative group cursor-pointer">
    <div className="flex items-center gap-1 relative
                    after:content-[''] after:absolute after:left-1/2 after:-bottom-0 after:h-[2px] after:w-0 after:bg-orange-600
                    after:transition-all after:duration-300
                    group-hover:after:left-0 group-hover:after:w-full hover:text-[#EA1D25]">
      <span>Product</span>
      <FaChevronDown className="text-xs mt-[2px]" />
    </div>

   <div 
  className="absolute top-7 left-0 w-48 bg-orange-600/80 backdrop-blur-md text-white shadow-lg rounded-md 
             opacity-0 invisible group-hover:opacity-100 group-hover:visible 
             transition-all duration-300 z-50"
>
  <button 
    onClick={() => scrollToSection('product')} 
    className="block w-full text-left px-4 py-2 hover:text-black hover:bg-[#EA1D25]/80 transition-colors"
  >
    All Product
  </button>
  <button 
    onClick={() => scrollToSection('building-materials')} 
    className="block w-full text-left px-4 py-2 hover:text-black hover:bg-[#EA1D25]/80 transition-colors"
  >
    Building Materials
  </button>
  <button 
    onClick={() => scrollToSection('engine-oil')} 
    className="block w-full text-left px-4 py-2 hover:text-black hover:bg-[#EA1D25]/80 transition-colors"
  >
    Engine Oil
  </button>
  <button 
    onClick={() => scrollToSection('jaguar-lubricants')} 
    className="block w-full text-left px-4 py-2 hover:text-black hover:bg-[#EA1D25]/80 transition-colors"
  >
    Jaguar Lubricants
  </button>
</div>


  </div>

  {/* Certificate */}
  <button
    onClick={() => scrollToSection('certificate')}
    className="relative transition-all duration-300
               after:content-[''] after:absolute after:left-1/2 after:-bottom-0 after:h-[2px] after:w-0 after:bg-orange-600
               after:transition-all after:duration-300
               hover:after:left-0 hover:after:w-full cursor-pointer  hover:text-[#EA1D25]"
  >
    Certificate
  </button>

  {/* Contact */}
  <button
    onClick={() => scrollToSection('contact')}
    className="relative transition-all duration-300
               after:content-[''] after:absolute after:left-1/2 after:-bottom-0 after:h-[2px] after:w-0 after:bg-orange-600
               after:transition-all after:duration-300
               hover:after:left-0 hover:after:w-full cursor-pointer  hover:text-[#EA1D25]"
  >
    Contact
  </button>

  {/* News */}
  <button
    onClick={() => scrollToSection('news')}
    className="relative transition-all duration-300
               after:content-[''] after:absolute after:left-1/2 after:-bottom-0 after:h-[2px] after:w-0 after:bg-orange-600
               after:transition-all after:duration-300
               hover:after:left-0 hover:after:w-full cursor-pointer  hover:text-[#EA1D25]"
  >
    News
  </button>
</nav>



    {/* RIGHT SIDE BUTTON */}
    <div className="flex items-center ">
      <div className="flex items-center text-orange-500 font-semibold cursor-pointer">
        <span>Jaguar Lubricants Site</span>
        <GoArrowUpRight className="text-[20px]" />
      </div>
    </div>

    {/* MOBILE MENU ICON */}
    <div className="bg-[#EA1D25] w-11 h-11 flex items-center justify-center rounded-md shadow cursor-pointer">
      <div className="space-y-[5px]">
        <div className="w-6 h-[3px] bg-white rounded"></div>
        <div className="w-6 h-[3px] bg-white rounded"></div>
        <div className="w-6 h-[3px] bg-white rounded"></div>
      </div>
    </div>

  </div>
</div>
</section>

</header>

      {/* ----------------------- REMAINING SECTIONS (unchanged) ----------------------- */}
      {/* HERO + CARDS (your original code kept exactly same) */}
<section className="bg-[#0f0f14] text-white pt-[280px] pb-[130px]">
  <div className="max-w-[1440px] h-full mx-auto flex flex-col md:flex-row items-center gap-12 px-6">

    {/* LEFT SIDE */}
    <div className="md:w-1/2 space-y-6">

      {/* 🔥 Highlight Label Added */}
      <p className=" border border-[#EA1D25] text-white inline-block px-4 py-0.5  rounded-[16px] font-semibold text-lg shadow-md">
        SanSar National Group  Since 2023
      </p>

      <h1 className="text-4xl text-[#EA1D25] md:text-6xl font-extrabold leading-snug">
        NATIONAL GROUP
      </h1>

      <h2 className="text-2xl  md:text-3xl font-semibold leading-snug">
        One-Stop Solution For Concrete <br />
        Admixture & Damp Proof Water Sealer
      </h2>

      <p className="text-gray-300 text-lg max-w-md leading-relaxed">
        One of the pioneers in manufacturing concrete admixtures in Bangladesh 
        since 2023. Delivering high-quality products and trusted solutions for 
        the construction industry.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="bg-orange-600 cursor-pointer text-white px-6 py-3 rounded-xl shadow-md hover:bg-orange-700 transition">
          Explore Products →
        </button>

        <button className="border cursor-pointer border-gray-600 px-6 py-3 rounded-xl hover:bg-white/10 transition">
          Our Story
        </button>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="md:w-1/2">
      <div className="bg-[#0E1623] w-full h-[450px] rounded-2xl shadow-xl flex items-center justify-center text-gray-400 tracking-wide text-sm font-medium">
        INDUSTRIAL CONSTRUCTION VIDEO
      </div>
    </div>

  </div>
</section>
   
<section className="bg-[#0f0f14] pt-20 pb-70 text-white">
  <div className="max-w-[1440px] mx-auto px-6 text-left">
    
    {/* Section Header */}
    <h6 className="text-[#EA1D25] tracking-widest text-1xl mb-3">
      WHO WE ARE?
    </h6>
    <h1 className="text-4xl md:text-5xl font-extrabold mb-16">
      Top Construction in Bangladesh
    </h1>

    {/* Cards Wrapper */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

  {/* Card 1 */}
  <div className="group bg-black p-10 rounded-2xl border border-gray-800 hover:border-[#EA1D25] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#EA1D2580]">
    <div className="text-5xl font-extrabold text-[#EA1D25] mb-4">01</div>
    <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#EA1D25] transition-all">Expertise</h3>
    <p className="text-gray-400 mb-6">
      Experienced Workers compellingly foster B2B information through prospective mindshare brand.
    </p>
    <button className="text-[#EA1D25] font-semibold group-hover:underline transition-all">
      Read More →
    </button>
  </div>

  {/* Card 2 */}
  <div className="group bg-black p-10 rounded-2xl border border-gray-800 hover:border-[#EA1D25] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#EA1D2580]">
    <div className="text-5xl font-extrabold text-[#EA1D25] mb-4">02</div>
    <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#EA1D25] transition-all">5+ Years Experience</h3>
    <p className="text-gray-400 mb-6">
      Compellingly foster B2B information through prospective mindshare brand.
    </p>
    <button className="text-[#EA1D25] font-semibold group-hover:underline transition-all">
      Read More →
    </button>
  </div>

  {/* Card 3 */}
  <div className="group bg-black p-10 rounded-2xl border border-gray-800 hover:border-[#EA1D25] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#EA1D2580]">
    <div className="text-5xl font-extrabold text-[#EA1D25] mb-4">03</div>
    <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#EA1D25] transition-all">
      Award Winning Company
    </h3>
    <p className="text-gray-400 mb-6">
      Compellingly foster B2B information through prospective mindshare brand.
    </p>
    <button className="text-[#EA1D25] font-semibold group-hover:underline transition-all">
      Read More →
    </button>
  </div>

</div>

  </div>
</section>
      {/** EXACT CONTENT REMAINS SAME — not removed, not altered **/}
    </section>
  );
};

export default Navbar;
