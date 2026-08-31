// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [mobileMenu, setMobileMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const links = [
//     { name: "GᗩᒪᒪEᖇY", href: "#gallery" },
//     { name: "Şp໐tliງht", href: "#spotlight" },
//     { name: "𝙲𝙾𝙻𝙻𝙴𝙲𝚃𝙸𝙾𝙽𝚂", href: "#collections" },
//     { name: "СОПТДСТ", href: "#contact" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${scrolled
//             ? "bg-white/60 backdrop-blur-2xl backdrop-saturate-150 shadow-lg border-b border-white/20"
//             : "bg-transparent"
//           }`}
//       >
//         <div
//           className={`max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-700 ease-in-out ${scrolled
//               ? "py-4 text-red-700"
//               : "py-6 text-white"
//             }`}
//         >
//           {/* Logo */}
//           <a
//             href="#"
//             className="text-xl md:text-2xl font-semibold tracking-[5px] transition-colors duration-500"
//           >
//             I҉M҉A҉G҉E҉ W҉O҉R҉L҉D҉
//           </a>

//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex items-center gap-10 text-sm font-medium tracking-wider">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   className="relative transition-all duration-300 hover:opacity-80
//                   after:absolute after:left-0 after:-bottom-1
//                   after:h-[2px] after:w-0
//                   after:bg-current
//                   after:transition-all
//                   after:duration-300
//                   hover:after:w-full"
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Button */}
//           <button
//             onClick={() => setMobileMenu(!mobileMenu)}
//             className={`lg:hidden transition-all duration-500 ${scrolled ? "text-red-700" : "text-white"
//               }`}
//           >
//             {mobileMenu ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenu ? "max-h-80 py-6" : "max-h-0"
//             } bg-white/70 backdrop-blur-2xl`}
//         >
//           <ul className="flex flex-col gap-6 px-6 text-red-700 font-medium tracking-wide">
//             {links.map((link) => (
//               <li key={link.name}>
//                 <a
//                   href={link.href}
//                   onClick={() => setMobileMenu(false)}
//                   className="block transition hover:translate-x-2 duration-300"
//                 >
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }



import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "GᗩᒪᒪEᖇY", href: "#gallery" },
    { name: "Şp໐tliງht", href: "#spotlight" },
    { name: "𝙲𝙾𝙻𝙻𝙴𝙲𝚃𝙸𝙾𝙽𝚂", href: "#collections" },
    { name: "СОПТДСТ", href: "#contact" },
  ];

  useEffect(() => {
    const handleWindowScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleWindowScroll();
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  // Smooth Scroll Function
  const handleScroll = (id) => {
    document.body.classList.add("blur-scroll");

    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setTimeout(() => {
      document.body.classList.remove("blur-scroll");
    }, 500);

    setMobileMenu(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${scrolled
        ? "bg-white/80 backdrop-blur-xl shadow-md"
        : "bg-transparent"
        }`}
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between transition-all duration-500 ${scrolled
          ? "py-4 text-red-700"
          : "py-6 text-white"
          }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleScroll("body")}
          className="text-xl font-semibold tracking-widest"
        >
          I҉M҉A҉G҉E҉ W҉O҉R҉L҉D҉
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-md font-medium tracking-wide">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(link.href)}
                className="relative transition duration-300 hover:opacity-70
                after:absolute after:left-0 after:-bottom-1
                after:w-0 after:h-[2px]
                after:bg-current
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? "text-red-700" : "text-white"
            }`}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenu
          ? "max-h-80 py-5 bg-white/90 backdrop-blur-xl"
          : "max-h-0"
          }`}
      >
        <ul className="flex flex-col px-6 gap-5 text-red-700 text-sm font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(link.href)}
                className="w-full text-left transition hover:translate-x-2 duration-300"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}