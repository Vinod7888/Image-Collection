// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { Link } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import { EffectCoverflow } from 'swiper/modules';


// const New = [
//   {
//     image: "https://i.pinimg.com/736x/e7/82/2d/e7822de6a98067e6cd82d28927d2bdc2.jpg",
//     span: "Kareena Kapoor"
//     // <img src="" />
//     //     <span className='uppercase font-serif tracking-[0.1em]'></span>
//   },
//   {
//     image: "https://i.pinimg.com/736x/09/2f/71/092f713b798bbb323e1d1ebee7123df4.jpg",
//     span: "Jennifer Lopez"
//   },
//   {
//     image: "https://i.pinimg.com/1200x/f0/d1/0b/f0d10bad5151b7db0bdd30056fccc464.jpg",
//     span: "Ranveer Singh",
//   },
//   {
//     image: "https://i.pinimg.com/736x/b6/11/04/b6110483f9fc9be9daa6bc28f4a7fff9.jpg",
//     span: "Kim Kardashian"
//   },
//   {
//     image: "https://i.pinimg.com/736x/11/35/90/1135906efb6cc8d4804177e61237b7f6.jpg",
//     span: "Aishwarya Rai Bachchan"
//   },
//   {
//     image: "https://i.pinimg.com/736x/68/30/fd/6830fd48af4c18afd2e9054c14a766ce.jpg",
//     span: "Kriti Sanon"
//   },
//   {
//     image: "https://i.pinimg.com/736x/e4/81/ea/e481ea377ef9f735301bac41fd7bac77.jpg",
//     span: "Jhanvi Kapoor"
//   },
//   {
//     image: "https://i.pinimg.com/736x/c2/6d/4f/c26d4fde49959703937e1fdd61a4f98c.jpg",
//     span: "Vijay Varma"
//   },
//   {
//     image: "https://i.pinimg.com/736x/95/08/9f/95089f1f957e8126a6e88b61afed2a19.jpg",
//     span: "Ananya Panday"
//   },
// ]



// const Spotlight = () => {
//   return (
//     <>
//       <div
//         id="spotlight"
//         className='text-white mt-20 text-center scroll-mt-24'>
//         <h1 className='text-4xl tracking-[0.1em] font-semibold uppercase'>
//           ƗN SⱣØŦŁƗǤĦŦ
//         </h1>
//         <p className='md:w-90 w-70 font-serif text-white m-auto text-sm pt-5 pb-5 capitalize tracking-widest'>Discover the heroes, villains, and legends who shape the story of New York's friendly neighborhood Spider-Man.</p>
//       </div>
//       <div className='w-full  text-white text-center'>
//         <Swiper
//           effect={'coverflow'}
//           // grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={'auto'}
//           loop={true}
//           autoplay={{
//             delay: 2000,
//             disableOnInteraction: false, // keeps autoplay after user swipe
//           }}
//           coverflowEffect={{
//             rotate: 0,        // 🔥 reduce for clean look
//             stretch: 0,
//             depth: 120,
//             modifier: 2,
//             slideShadows: false, // cleaner like your image
//           }}
//           // pagination={{
//           //   clickable: true,
//           // }}
//           modules={[EffectCoverflow, Autoplay]}
//           className="mySwiper"
//         >

//           {New.map((item) => (
//             <SwiperSlide className='text-center' key={item.id}>
//               <img src={item.image} alt="" className='h-[400px] object-top  object-cover' />
//               {/* <span className='uppercase font-serif text-sm tracking-[0.1em]'>{item.span}</span> */}
//             </SwiperSlide>

//           ))}

//         </Swiper>


//         <Link to="/contact">

//           <button
//             onClick={() => toast.success("Registered", {
//               position: "top-right"
//             })}
//             className="font-serif tracking-[0.1em] mt-6 mb-2  border px-10 py-1 uppercase font-semibold hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
//           >
//             enquire
//           </button>
//         </Link>

//       </div>

//     </>
//   )
// }

// export default Spotlight




// Spotlight.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

// ✅ Swiper CSS
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Spotlight = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // ✅ Fetch images from backend
  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:4000/website/spider/gallery/view');
      if (response.data.status === 1) {
        setImages(response.data.GetAllImages || []);
      } else {
        toast.error('Failed to load images');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      toast.error('Error loading gallery');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // ✅ Loading State
  if (loading) {
    return (
      <div className="text-white text-center mt-20">
        <h1 className="text-4xl tracking-[0.1em] font-semibold uppercase">Loading Gallery...</h1>
      </div>
    );
  }

  // ✅ No Images State
  if (images.length === 0) {
    return (
      <div className="text-white text-center mt-20">
        <h1 className="text-4xl tracking-[0.1em] font-semibold uppercase">ƗN SⱣØŦŁƗǤĦŦ</h1>
        <p className="md:w-90 w-70 font-serif text-white m-auto text-sm pt-5 pb-5 capitalize tracking-widest">
          No images found in gallery. Please add some!
        </p>
      </div>
    );
  }

  return (
    <>
      <div
        id="spotlight"
        className="text-white mt-20 text-center scroll-mt-24"
      >
        <h1 className="text-4xl tracking-[0.1em] font-semibold uppercase">
          ƗN SⱣØŦŁƗǤĦŦ
        </h1>
        <p className="md:w-90 w-70 font-serif text-white m-auto text-sm pt-5 pb-5 capitalize tracking-widest">
          Discover the heroes, villains, and legends who shape the story of New York's friendly neighborhood Spider-Man.
        </p>
      </div>

      <div className="w-full text-white text-center relative px-4">
        {/* ✅ Slider Container - Center Focus */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* ✅ Custom Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center ml-2 md:ml-0"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300 flex items-center justify-center mr-2 md:mr-0"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* ✅ Main Swiper - Center Slide Focus */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            effect={'coverflow'}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2.5,
              slideShadows: true,
              scale: 0.85,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
            className="mySwiper !pb-12"
          >
            {images.map((item, index) => (
              <SwiperSlide 
                key={item._id} 
                className="!w-[280px] md:!w-[350px] lg:!w-[400px]"
              >
                <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500">
                  {/* ✅ Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[350px] md:h-[420px] object-cover object-center"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/1a1a2e/ffffff?text=Image+Not+Found';
                    }}
                  />

                  {/* ✅ Gradient Overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                    <h3 className="text-white font-bold text-lg truncate">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-300 font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                        {item.brand}
                      </span>
                      <span className="text-xs text-gray-400">{item.category}</span>
                    </div>
                  </div>

                  {/* ✅ Slide Counter Badge */}
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2.5 py-1 text-xs text-white font-mono border border-white/10">
                    {index + 1}/{images.length}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Active Index Indicator */}
          <div className="text-center mt-2">
            <span className="text-white/40 text-sm font-mono tracking-wider">
              {activeIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* ✅ Enquire Button */}
        <Link to="/contact">
          <button
            onClick={() =>
              toast.success('Registered', {
                position: 'top-right',
              })
            }
            className="font-serif tracking-[0.1em] mt-6 mb-2 border px-10 py-1 uppercase font-semibold hover:bg-white hover:text-black transition-all duration-500 cursor-pointer"
          >
            enquire
          </button>
        </Link>
      </div>
    </>
  );
};

export default Spotlight;