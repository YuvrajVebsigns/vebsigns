// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Plus } from "lucide-react";
// import { fetchBlogs } from "../../api/api";

// const RelatedPost = ({ currentCategories, currentSlug }) => {

//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const getBlogs = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const response = await fetchBlogs({ page: 1, limit: 10 });
//         console.log("Fetched blogs:", response.data);

//         // ✅ ensure blogs array exists
//         setBlogPosts(response.data.blogs || []);
//       } catch (err) {
//         console.error("Error fetching blogs:", err);
//         setError("Failed to load blogs.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     getBlogs();
//   }, []);

//   // Loading state
//   if (loading) {
//     return <p className="text-center mt-10">Loading blogs...</p>;
//   }

//   // Error state
//   if (error) {
//     return <p className="text-center mt-10 text-red-600">{error}</p>;
//   }

//   // No blogs found
//   if (blogPosts.length === 0) {
//     return <p className="text-center mt-10">No blogs found.</p>;
//   }

//   // Filter related posts
//   const relatedPosts = blogPosts.filter(
//     (post) =>
//       post.slug !== currentSlug && // Exclude current post
//       post.categories?.some((cat) => currentCategories.includes(cat)) // Match categories
//   );

//   if (relatedPosts.length === 0) {
//     return <div className="flex justify-center">
//       <img
//         src="/assets/HomePage/BLOGS NOT FOUND.svg"
//         alt="Blogs Not Found"
//         className="max-w-lg"
//       />
//     </div>;
//   }

//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       {/* Section Heading */}
//       {blogPosts.length > 0 ?
//         <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 relative inline-block">
//           RELATED POSTS
//           <span className="block w-12 h-1 bg-blue-500 mt-2 rounded"></span>
//         </h2> : null}


//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
//         {relatedPosts.map((post, index) => (
//           <Link key={index} to={`/blog/${post.slug}`} className="card">
//             {/* Blog Image */}
//             <div className="relative w-full">
//               <svg
//                 viewBox="0 0 350 180"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-full h-auto"
//                 preserveAspectRatio="xMidYMid slice"
//               >
//                 <defs>
//                   <pattern
//                     id={`imgPattern-${index}`}
//                     patternUnits="objectBoundingBox"
//                     width="1"
//                     height="1"
//                   >
//                     <image
//                       href={post.image}
//                       x="0"
//                       y="0"
//                       width="350"
//                       height="180"
//                       preserveAspectRatio="xMidYMid slice"
//                     />
//                   </pattern>
//                 </defs>

//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M350 15C350 6.71573 343.284 0 335 0H15C6.71573 0 0 6.71573 0 15V165C0 173.284 6.71573 180 15 180H275C283.284 180 290 173.284 290 165V135C290 126.716 296.716 120 305 120H335C343.284 120 350 113.284 350 105V15Z"
//                   fill={`url(#imgPattern-${index})`}
//                 />
//               </svg>

//               <button
//                 className="absolute bottom-0 right-1 bg-yellow-300 rounded-full p-3 shadow-md 
//               hover:bg-[#1B4BF0] hover:text-white transition-colors duration-300 group"
//               >
//                 <Plus
//                   className="w-7 h-7 transform transition-transform duration-300 group-hover:rotate-180"
//                   strokeWidth={1.5}
//                 />
//               </button>
//             </div>

//             {/* Blog Content */}
//             <h3 className="text-lg sm:text-xl font-semibold mt-2">{post.title}</h3>
//             <p className="text-sm sm:text-base text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
//           </Link>
//         ))}
//       </div>
//     </section>

//   );
// };

// export default RelatedPost;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { fetchBlogs } from "../../api/api";

const RelatedPost = ({ currentCategories, currentSlug }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetchBlogs({ page: 1, limit: 10 });
        setBlogPosts(response.data.blogs || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  // Loading / Error states
  if (loading) return <p className="text-center mt-10">Loading blogs...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;
  if (blogPosts.length === 0) return null; // nothing if no blogs at all

  // ✅ Filter related posts
  const relatedPosts = blogPosts.filter(
    (post) =>
      post.slug !== currentSlug &&
      post.categories?.some((cat) => currentCategories.includes(cat))
  );

  // ✅ If no related blogs, show nothing at all
  if (relatedPosts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 relative inline-block">
        RELATED POSTS
        <span className="block w-12 h-1 bg-blue-500 mt-2 rounded"></span>
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {relatedPosts.map((post, index) => (
          <Link key={index} to={`/blog/${post.slug}`} className="card">
            {/* Blog Image */}
            <div className="relative w-full">
              <svg
                viewBox="0 0 350 180"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <pattern
                    id={`imgPattern-${index}`}
                    patternUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <image
                      href={post.image}
                      x="0"
                      y="0"
                      width="350"
                      height="180"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </pattern>
                </defs>

                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M350 15C350 6.71573 343.284 0 335 0H15C6.71573 0 0 6.71573 0 15V165C0 173.284 6.71573 180 15 180H275C283.284 180 290 173.284 290 165V135C290 126.716 296.716 120 305 120H335C343.284 120 350 113.284 350 105V15Z"
                  fill={`url(#imgPattern-${index})`}
                />
              </svg>

              <button
                className="absolute bottom-0 right-1 bg-yellow-300 rounded-full p-3 shadow-md 
                  hover:bg-[#1B4BF0] hover:text-white transition-colors duration-300 group"
              >
                <Plus
                  className="w-7 h-7 transform transition-transform duration-300 group-hover:rotate-180"
                  strokeWidth={1.5}
                />
              </button>
            </div>

            {/* Blog Content */}
            <h3 className="text-lg sm:text-xl font-semibold mt-2">{post.title}</h3>
            <p className="text-sm sm:text-base text-gray-500">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedPost;
