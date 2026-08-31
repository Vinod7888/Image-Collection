
// import React from "react";

// const images = [
//   "https://i.pinimg.com/1200x/71/95/8e/71958e5503af754384a4c19c74e12252.jpg",
//   "https://i.pinimg.com/736x/38/89/b2/3889b254c4a63fa0551d0c5a6444667d.jpg",
//   "https://i.pinimg.com/1200x/8c/36/42/8c36421ac18a2906710dc0add1526168.jpg",
//   "https://i.pinimg.com/736x/3f/30/1a/3f301a9a90ed9dd22735c7980184648f.jpg",
//   "https://i.pinimg.com/1200x/0d/83/cc/0d83cc0d0312aa346d262213a833f5b3.jpg",
//   "https://i.pinimg.com/1200x/b6/9b/f4/b69bf4ad10b20143d922ab33bf8ed342.jpg",
// ];

// const Gallery = () => {
//   return (
//     <section
//       id="gallery"
//       className="min-h-screen text-white px-6 py-20 overflow-hidden scroll-mt-24"
//     >
//       {/* Heading */}
//       <div className="text-white mt-20 text-center">
//         <h1 className="text-4xl tracking-[0.1em] font-semibold uppercase">
//           ǤȺŁŁɆɌɎ
//         </h1>

//         <p className="md:w-90 w-70 font-serif text-sm pt-5 pb-5 mx-auto capitalize tracking-widest">
//           Step into Spider-Man's world through iconic moments,
//           breathtaking visuals, and unforgettable adventures.
//         </p>
//       </div>

//       {/* Masonry Layout */}
//       <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className="group relative overflow-hidden rounded-3xl border border-red-900/50"
//           >
//             <img
//               src={img}
//               alt={`Gallery ${index + 1}`}
//               className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Bottom Quote */}
//       <div className="text-center mt-24">
//         <h2 className="text-3xl md:text-5xl font-bold uppercase">
//           "With Great Power
//           <span className="text-red-600">
//             {" "}
//             Comes Great Responsibility.
//           </span>
//           "
//         </h2>
//       </div>
//     </section>
//   );
// };

// export default Gallery;




import React, { useState, useEffect } from "react";
import {
  Heart,
  Share2,
  Download,
  X
} from "lucide-react";
import axios from "axios";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [liked, setLiked] = useState({});
  const [filter, setFilter] = useState("All");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:4000/website/spider/gallery/view");
        if (response.data.status === 1) {
          // Transform backend data to match frontend structure
          const formattedImages = response.data.GetAllImages.map((img, index) => ({
            id: img._id,
            src: img.image,
            title: img.title,
            category: img.category,
            desc: img.description,
            brand: img.brand
          }));
          setImages(formattedImages);
        } else {
          setError("Failed to load images");
        }
      } catch (err) {
        setError(err.message || "Error fetching images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  // Get unique categories
  const categories = ["All", ...new Set(images.map(img => img.category))];
  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const toggleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Loading state
  if (loading) {
    return (
      <section className="min-h-screen px-4 sm:px-6 lg:px-16 py-12 sm:py-20 bg-[#BF0201] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading Gallery...</p>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="min-h-screen px-4 sm:px-6 lg:px-16 py-12 sm:py-20 bg-[#BF0201] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg mb-2">⚠️ {error}</p>
          <p className="text-gray-400 text-sm">Please try again later</p>
        </div>
      </section>
    );
  }

  // No images state
  if (images.length === 0) {
    return (
      <section className="min-h-screen px-4 sm:px-6 lg:px-16 py-12 sm:py-20 bg-[#BF0201] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-300 text-lg mb-2">No images available</p>
          <p className="text-gray-400 text-sm">Check back later for new content</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-16 py-12 sm:py-20 bg-[#BF0201] text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block mb-4">
          <div className="w-12 h-12 mx-auto text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-widest uppercase inline-block relative">
          <span className="relative">
            Gallery
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></span>
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-gray-400 text-sm sm:text-base px-4">
          Step into Spider-Man's world through iconic moments, breathtaking
          visuals, and unforgettable adventures.
        </p>

        {/* Filter Buttons */}
        {categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors ${filter === cat
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/50"
                    : "bg-gray-900 text-gray-400 hover:bg-gray-800 border border-red-900/30"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="relative group rounded-xl overflow-hidden bg-gray-900 border border-red-900/30 cursor-pointer"
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-red-600 rounded-full">
                  {image.category}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(image.id);
                  }}
                  className="p-1.5 bg-black/50 backdrop-blur-sm rounded-full hover:bg-red-600 transition-colors"
                >
                  <Heart
                    size={14}
                    className={liked[image.id] ? "fill-red-600 text-red-600" : "text-white"}
                  />
                </button>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{image.title}</h3>
              <p className="text-gray-300 text-sm opacity-80">{image.desc}</p>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-red-600/0 group-hover:border-red-600/80 transition-all duration-300 rounded-tl-lg"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-red-600/0 group-hover:border-red-600/80 transition-all duration-300 rounded-br-lg"></div>

            {/* Image number */}
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold text-red-400 border border-red-900/50">
              #{String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl shadow-red-600/30 border border-red-900/50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2.5 bg-black/80 hover:bg-red-600 rounded-full text-white transition-colors backdrop-blur-sm border border-red-900/50"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 h-64 md:h-[70vh] bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain md:object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
                  }}
                />
              </div>

              <div className="md:w-1/3 p-6 flex flex-col justify-center bg-gradient-to-b from-gray-900 to-black">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-red-600 rounded-full">
                    {selectedImage.category}
                  </span>
                  {selectedImage.brand && (
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-gray-800 rounded-full text-gray-300">
                      {selectedImage.brand}
                    </span>
                  )}
                  <button
                    onClick={() => toggleLike(selectedImage.id)}
                    className="p-2 bg-gray-800 hover:bg-red-600 rounded-full transition-colors"
                  >
                    <Heart
                      size={18}
                      className={liked[selectedImage.id] ? "fill-red-600 text-red-600" : "text-white"}
                    />
                  </button>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {selectedImage.desc}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full text-white transition-colors"
                    onClick={() => {
                      // Download functionality
                      const link = document.createElement('a');
                      link.href = selectedImage.src;
                      link.download = selectedImage.title || 'image';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    <Download size={16} />
                    Download
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-full text-white transition-colors"
                    onClick={() => {
                      // Share functionality
                      if (navigator.share) {
                        navigator.share({
                          title: selectedImage.title,
                          text: selectedImage.desc,
                          url: selectedImage.src,
                        }).catch(() => { });
                      } else {
                        // Fallback - copy to clipboard
                        navigator.clipboard.writeText(selectedImage.src);
                        alert('Image URL copied to clipboard!');
                      }
                    }}
                  >
                    <Share2 size={16} />
                    Share
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-red-900/30">
                  <div className="text-xs text-gray-500">
                    <span className="text-red-400">ID: #{selectedImage.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quote */}
      <div className="text-center mt-16 sm:mt-20">
        <div className="relative inline-block">
          <div className="absolute -inset-8 bg-gradient-to-r from-red-600/20 via-transparent to-red-600/20 blur-3xl"></div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight relative">
            <span className="text-white">With Great Power</span>
            <br className="sm:hidden" />
            <span className="relative inline-block mt-2">
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                Comes Great Responsibility.
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent"></span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Gallery;