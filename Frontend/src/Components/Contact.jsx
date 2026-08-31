import React, { useRef } from "react";
import { motion } from "framer-motion";
// import axios from "axios";
import {
  FaPenAlt,
  FaRegStar,
  FaClock,
  FaUserFriends,
  FaHeart,
  FaComment,
  FaExternalLinkAlt,
  FaPlane,
  FaHotel,
  FaGlobe,
  FaUsers,
  FaSuitcase,
  FaShieldAlt,
  FaLanguage,
  FaHeadset,
} from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { IoIosSave } from "react-icons/io";

// Comment links data
const commentLinks = [
  {
    platform: "TripAdvisor",
    url: "https://www.tripadvisor.com/UserReview-g304551-d12345678",
    icon: "fa-brands fa-tripadvisor",
    color: "hover:bg-[#00A680]",
  },
  {
    platform: "Google Reviews",
    url: "https://g.page/r/CfGHjklmnopqrst/review",
    icon: "fa-brands fa-google",
    color: "hover:bg-[#4285F4]",
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/hitakshiholidays/reviews",
    icon: "fa-brands fa-facebook",
    color: "hover:bg-[#1877F2]",
  },
  {
    platform: "Trustpilot",
    url: "https://www.trustpilot.com/review/hitakshiholidays.com",
    icon: "fa-brands fa-trustpilot",
    color: "hover:bg-[#00B67A]",
  },
];

export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const messageRef = useRef(null);
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      Name: nameRef.current.value,
      Email: emailRef.current.value,
      Number: numberRef.current.value,
      Message: messageRef.current.value,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );
      alert(response.data.message);
      nameRef.current.value = "";
      emailRef.current.value = "";
      numberRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (


    <div className="w-full">
      {/* ================= HERO BANNER ================= */}
      <div className='text-white mt-20 text-center'>
        <h1 className='text-4xl tracking-[0.1em] font-semibold uppercase'>
          ȻØ₦₮₳Ȼ₮
        </h1>

        <p className='md:w-90 w-70 font-serif text-white m-auto text-sm pt-5 pb-5 capitalize tracking-widest'>
          Reach out from any corner of the city — whether it's a question, collaboration, or just a friendly hello from a fellow hero.
        </p>
      </div>


      {/* ================= CONTACT SECTION ================= */}
      <section
       id="contact"
      className="py-20 px-6 md:px-12 scroll-mt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="max-w-325 mx-auto bg-transparent rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 bg-white">
            {/* ================= LEFT SCENERY BANNER ================= */}
            <div className="relative min-h-87.5 lg:min-h-full">
              <img
                src="https://i.pinimg.com/originals/a7/1c/2c/a71c2c697a090c8676ea150317ac9d72.png"
                alt="Scenery"
                className="absolute inset-0 w-full h-full object-contain"
              />

              {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Let's Connect
                  </h2>

                  <p className="text-lg leading-relaxed max-w-md">
                    Have a project in mind? Looking for a collaboration? We'd be
                    happy to discuss your ideas.
                  </p>
                </div>
              </div> */}
            </div>

            {/* ================= RIGHT CONTACT FORM ================= */}
            <div className="p-8 md:p-12 lg:p-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text- mb-8 uppercase tracking-[0.15em]">
                ǤɆ₮ ł₦{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-800 drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]">
                  ₮ØɄȻⱧ
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  ref={nameRef}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 font-bold outline-none"
                />

                <input
                  type="email"
                  ref={emailRef}
                  placeholder="Email Address"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 font-bold outline-none"
                />

                <input
                  type="number"
                  ref={numberRef}
                  placeholder="Phone Number"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 font-bold outline-none"
                />

                <textarea
                  rows="6"
                  ref={messageRef}
                  placeholder="Message"
                  required
                  className="w-full p-4 rounded-xl border border-gray-300 font-bold outline-none"
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 text-lg font-bold cursor-pointer text-white bg-gradient-to-r from-[#ff3131] via-[#d90429] to-[#7a0000] rounded-xl shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:shadow-[0_0_35px_rgba(255,0,0,0.8)] transition-all duration-300 uppercase tracking-[0.15em]"
                >
                  ₴Ɇ₦Đ ₥Ɇ₴₴₳₲Ɇ
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comment Link Section */}

      {/* <div className=" py-16">
        <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <FaComment className="text-[#FF681A] text-xl" />
              <span className="text-white font-semibold tracking-wide">
                Share Your Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Leave a <span className="text-[#FF681A]">Comrent</span> Link
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              Your feedback helps us improve. Share your journey with us on
              these platforms and inspire fellow travelers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commentLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl ${link.color} hover:scale-105 cursor-pointer`}
              >
                <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <i
                  className={`${link.icon} text-5xl text-white/80 group-hover:text-white transition-colors duration-300 mb-4 block`}
                ></i>
                <h3 className="text-xl font-bold text-white mb-2">
                  {link.platform}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  Write a Review
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-[#FF681A] text-sm font-medium">
                  <span>Share Comrent</span>
                  <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>


          <div className="w-full h-125 rounded-lg overflow-hidden mt-20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7111.8894621739455!2d75.7675466570635!3d26.968649504547933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5b5802e8e19%3A0x33647bd269df110e!2sHitakshi%20Holidays%20%7C%20DMC%20Rajasthan%2C%20Uttarakhand%2C%20Himachal%20Pradesh%20%7C%20Best%20Travel%20Agency%20In%20Jaipur%20%7C%20Tour%20%26%20Travels!5e0!3m2!1sen!2sin!4v1781698603185!5m2!1sen!2sin"
              width="100%"
              height="87%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pixelgenix IT Solution Location"
              className="mx-auto mt-5 rounded-lg"
            ></iframe>
          </div>
        </div>
      </div> */}
    </div>
  );
}
