// import React from 'react'


// const Collection = [

//   {"img":"https://i.pinimg.com/736x/11/c5/ca/11c5ca53445655041cb0ca531af71cb2.jpg",
//     "Type":"PORTRAITS"
//   },
//   {"img":"https://i.pinimg.com/736x/da/a7/7f/daa77f76b5a1290a13da2f73c1ba9b5b.jpg",
//     "Type":"ARCHITECTURE"
//   },
//   {"img":"https://i.pinimg.com/1200x/62/c0/0c/62c00c150a4a411e24624226fcc8e53b.jpg",
//     "Type":"NATURE"
//   },
//   {"img":"https://i.pinimg.com/1200x/04/2b/7a/042b7ac561bd4309e10683e88e1191bd.jpg",
//     "Type":"CONCEPT"
//   },
//   {"img":"https://i.pinimg.com/736x/11/c5/ca/11c5ca53445655041cb0ca531af71cb2.jpg",
//     "Type":"PORTRAITS"
//   },
//   {"img":"https://i.pinimg.com/736x/da/a7/7f/daa77f76b5a1290a13da2f73c1ba9b5b.jpg",
//     "Type":"ARCHITECTURE"
//   },
//   {"img":"https://i.pinimg.com/1200x/62/c0/0c/62c00c150a4a411e24624226fcc8e53b.jpg",
//     "Type":"NATURE"
//   },
//   {"img":"https://i.pinimg.com/1200x/04/2b/7a/042b7ac561bd4309e10683e88e1191bd.jpg",
//     "Type":"CONCEPT"
//   },
//   {"img":"https://i.pinimg.com/736x/11/c5/ca/11c5ca53445655041cb0ca531af71cb2.jpg",
//     "Type":"PORTRAITS"
//   },
//   {"img":"https://i.pinimg.com/736x/da/a7/7f/daa77f76b5a1290a13da2f73c1ba9b5b.jpg",
//     "Type":"ARCHITECTURE"
//   },
//   {"img":"https://i.pinimg.com/1200x/62/c0/0c/62c00c150a4a411e24624226fcc8e53b.jpg",
//     "Type":"NATURE"
//   },
//   {"img":"https://i.pinimg.com/1200x/04/2b/7a/042b7ac561bd4309e10683e88e1191bd.jpg",
//     "Type":"CONCEPT"
//   },

// ]
// const Collections = () => {
//   const data = Collection.map((item) => {
//     item.Type == "POTRAITS" || item.Type == "ARCHITECTURE" || item.Type == "NATURE" || item.Type == "CONCEPT"
//   })
//   return (

//     <div>

//   <div className='text-white mt-20 text-center'>
//           <h1 className='text-4xl tracking-[0.1em] font-semibold uppercase'>
//             𝙲𝙾𝙻𝙻𝙴𝙲𝚃𝙸𝙾𝙽𝚂
//           </h1>
//           <p className='md:w-90 w-70 font-serif  text-[#c2bfbf] m-auto text-sm pt-5 pb-5 capitalize tracking-widest'>Step into Spider-Man's world through iconic moments, breathtaking visuals, and unforgettable adventures.</p>
//         </div>

//     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
//       {Collection.map((item, index) => (
//         <div key={index} className='relative'>  
//           <img
//             src={item.img}
//             alt={item.Type}               
//             className='w-full h-64 object-cover rounded-lg shadow-md'
//           />
//           <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg'>    

//             {item.Type}            

//           </div>  



//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Collections;


import { useState, useEffect, useMemo } from "react";
import axios from 'axios';

export default function Collections() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/website/spider/category/collections');
        if (response.data.status === 1) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const categoryNames = useMemo(() => {
    return ["All", ...categories.map(cat => cat.categoryname)];
  }, [categories]);

  const filteredCategories = useMemo(() => {
    if (activeCategory === "All") return categories;
    return categories.filter(cat => cat.categoryname === activeCategory);
  }, [activeCategory, categories]);

  if (loading) {
    return (
      <section className="relative py-24 px-5 sm:px-8 overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto text-center text-white">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="collections" className="relative py-24 px-5 sm:px-8 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className='text-white mt-20 text-center'>
          <h1 className='text-4xl tracking-[0.1em] font-semibold uppercase'>ȻØŁŁɆȻŦƗØŊS</h1>
          <p className='md:w-90 w-70 font-serif text-white m-auto text-sm pt-5 pb-5 capitalize tracking-widest'>
            Step into Spider-Man's world through iconic moments, breathtaking visuals, and unforgettable adventures.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categoryNames.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                  ? "bg-white text-red-700"
                  : "bg-transparent text-white border border-white/50 hover:bg-white/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredCategories.map((category) => (
            <div key={category._id} className="group relative rounded-xl overflow-hidden bg-white shadow-lg cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image || 'https://via.placeholder.com/400x500?text=No+Image'}
                  alt={category.categoryname}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-4 px-3">
                <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-widest">
                  {category.categoryname}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}