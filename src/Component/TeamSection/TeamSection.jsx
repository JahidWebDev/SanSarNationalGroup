import img1 from "../../Images/member01.jpeg";
import img2 from "../../Images/member02.jpeg";
import img3 from "../../Images/member01.jpeg";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function TeamSection() {
  const members = [
    {
      name: "Md. Sarwar Hossain",
      role: "CEO & Founder",
      img: img1,
    },
    {
      name: "Ferdous Ahmed",
      role: "Director of Jaguar Lubricants Ltd.",
      img: img2,
    },
    {
      name: "Jahid Hossain",
      role: "Sr. Graphic Designer of SanSar National Group",
      img: img3,
    },
  ];

  return (
    <section className="bg-[#0f0f14] py-27 text-white">
      <div className="text-center mb-16">
        <h4 className="text-sm   tracking-[4px] text-orange-600 font-semibold mb-4">
          Our Member
        </h4>
        <h2 className="text-4xl font-bold">
          Our Founder & Responsible Member
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {members.map((m, index) => (
          <div
            key={index}
            className="
              group 
              bg-black 
              rounded-xl 
              overflow-hidden 
              shadow-lg 
              border border-transparent
              transition-all 
              duration-300 
              hover:-translate-y-3 
              hover:border-[#EA1D25] 
              hover:shadow-[0_0_20px_rgba(255,140,0,0.4)] cursor-pointer
            "
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-full h-110 object-cover"
            />

            <div className="p-6 text-center">
              {/* Name – hover color change */}
              <h3 className="
                text-xl 
                font-bold 
                transition 
                duration-300 
                group-hover:text-orange-600
              ">
                {m.name}
              </h3>

              {/* Role – hover color orange */}
              <p className="
                text-sm 
                text-gray-300 
                mb-4 
                transition 
                duration-300 
                group-hover:text-orange-400
              ">
                {m.role}
              </p>

              {/* Bottom Icons – slide from bottom */}
              <div
                className="
                  flex 
                  items-center 
                  justify-center 
                  gap-6 
                  text-gray-200 
                  opacity-0 
                  translate-y-5 
                  group-hover:opacity-100 
                  group-hover:translate-y-0 
                  transition-all 
                  duration-500
                "
              >
              {/* Bottom Icons – slide from bottom */}
<div
  className="
    flex 
    items-center 
    justify-center 
    gap-6 
    text-gray-200 
    opacity-0 
    translate-y-5 
    group-hover:opacity-100 
    group-hover:translate-y-0 
    transition-all 
    duration-500
  "
>
  {/* LinkedIn */}
  <div className="group/icon p-2 bg-[#111] rounded-md transition hover:bg-orange-500">
    <FaLinkedinIn className="text-xl transition group-hover/icon:text-black" />
  </div>

  {/* Instagram */}
  <div className="group/icon p-2 bg-[#111] rounded-md transition hover:bg-orange-500">
    <FaInstagram className="text-xl transition group-hover/icon:text-black" />
  </div>

  {/* Facebook */}
  <div className="group/icon p-2 bg-[#111] rounded-md transition hover:bg-orange-500">
    <FaFacebookF className="text-xl transition group-hover/icon:text-black" />
  </div>
</div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
