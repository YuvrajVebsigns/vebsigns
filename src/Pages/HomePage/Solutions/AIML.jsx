// import React from "react";
// import { FaRobot, FaChalkboardTeacher, FaProjectDiagram } from "react-icons/fa";
// import { MdMoreHoriz } from "react-icons/md";

// const AIMLConsulting = () => {
//     return (
//         <section className="bg-gradient-to-b from-white to-blue-50 py-16">
//             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                 {/* Left Side: Image with Chat Bubbles */}
//                 <div className="relative flex justify-center">
//                     <img
//                         src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6" // Replace with your image
//                         alt="AI Consulting"
//                         className="rounded-2xl object-cover w-[30rem] h-[32rem] "
//                     />

//                     {/* Chat Bubble 1 */}
//                     <div className="absolute top-10 left-4 bg-white shadow-lg rounded-2xl px-4 py-2 text-sm flex items-center gap-2">
//                         <img
//                             src="https://randomuser.me/api/portraits/women/65.jpg"
//                             alt="user"
//                             className="w-6 h-6 rounded-full"
//                         />
//                         <p className="text-gray-800">I totally get it! We're here to change that. 😊</p>
//                     </div>

//                     {/* Chat Bubble 2 */}
//                     <div className="absolute bottom-12 left-4 bg-white shadow-lg rounded-2xl px-4 py-2 text-sm flex items-center gap-2">
//                         <img
//                             src="https://randomuser.me/api/portraits/men/32.jpg"
//                             alt="user"
//                             className="w-6 h-6 rounded-full"
//                         />
//                         <p className="text-gray-800">Say hello to hassle-free advice and genuine support! 🚀</p>
//                     </div>
//                 </div>

//                 {/* Right Side: Text and Buttons */}
//                 <div>
//                     <p className="text-sm uppercase tracking-wide text-gray-500">
//                         Capacitate your business with our tech expertise
//                     </p>
//                     <h3 className=" font-extrabold mt-6 text-6xl text-[#15042E]">WE PROVIDE</h3>
//                     <p className="mt-4 text-gray-700 text-lg">
//                         Have a project idea and need help implementing it? We’re here to
//                         consult you and share our knowledge to help you avoid all
//                         unnecessary pitfalls.
//                     </p>

//                     {/* Services Buttons */}
//                     <div className="flex flex-wrap gap-3 mt-6">
//                         <button className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 flex items-center gap-2">
//                             <FaRobot /> Machine Learning Solutions
//                         </button>
//                         <button className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 flex items-center gap-2">
//                             <FaChalkboardTeacher /> AI Consulting Services
//                         </button>
//                         <button className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 flex items-center gap-2">
//                             <FaProjectDiagram /> AI Model Training and Deployment
//                         </button>
//                         <button className="px-5 py-2 rounded-full bg-blue-100 text-blue-700 flex items-center gap-2">
//                             <MdMoreHoriz /> More...
//                         </button>
//                     </div>
//                     <div className=" border-gray-400 border-[1px] mt-10"></div>
//                     {/* Free Consultation Link */}
//                     <div className="mt-8">
//                         <a
//                             href="#"
//                             className="inline-flex items-center gap-2 text-blue-600 hover:underline text-lg"
//                         >
//                             Have a project idea and need Free Consultation →
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AIMLConsulting;


import React from "react";
import { FaRobot, FaChalkboardTeacher, FaProjectDiagram } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";

const AIMLConsulting = () => {
    return (
        <section className="bg-gradient-to-b from-white to-blue-50 py-10 sm:py-14 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
                {/* Left Side: Image with Chat Bubbles */}
                <div className="relative flex justify-center">
                    <img
                        src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
                        alt="AI Consulting"
                        className="rounded-2xl object-cover w-full max-w-md sm:max-w-lg md:w-[30rem] md:h-[32rem]"
                    />

                    {/* Chat Bubble 1 */}
                    <div className="absolute top-6 left-2 sm:top-10 sm:left-4 bg-white shadow-lg rounded-2xl px-3 sm:px-4 py-2 text-xs sm:text-sm flex items-center gap-2 max-w-[90%] sm:max-w-xs">
                        <img
                            src="https://randomuser.me/api/portraits/women/65.jpg"
                            alt="user"
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
                        />
                        <p className="text-gray-800">
                            I totally get it! We're here to change that. 😊
                        </p>
                    </div>

                    {/* Chat Bubble 2 */}
                    <div className="absolute bottom-8 left-2 sm:bottom-12 sm:left-4 bg-white shadow-lg rounded-2xl px-3 sm:px-4 py-2 text-xs sm:text-sm flex items-center gap-2 max-w-[90%] sm:max-w-xs">
                        <img
                            src="https://randomuser.me/api/portraits/men/32.jpg"
                            alt="user"
                            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
                        />
                        <p className="text-gray-800">
                            Say hello to hassle-free advice and genuine support! 🚀
                        </p>
                    </div>
                </div>

                {/* Right Side: Text and Buttons */}
                <div>
                    <p className="text-xs sm:text-sm uppercase tracking-wide text-gray-500">
                        Capacitate your business with our tech expertise
                    </p>
                    <h3 className="font-extrabold mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl text-[#15042E]">
                        WE PROVIDE
                    </h3>
                    <p className="mt-3 sm:mt-4 text-gray-700 text-base sm:text-lg">
                        Have a project idea and need help implementing it? We’re here to
                        consult you and share our knowledge to help you avoid all
                        unnecessary pitfalls.
                    </p>

                    {/* Services Buttons */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-6">
                        <button className="px-4 sm:px-5 py-2 rounded-full bg-blue-100 text-blue-700 flex items-center gap-2 text-sm sm:text-base">
                            <FaRobot /> Machine Learning Solutions
                        </button>
                        <button className="px-4 sm:px-5 py-2 rounded-full bg-blue-100 text-blue-700 flex items-center gap-2 text-sm sm:text-base">
                            <FaChalkboardTeacher /> AI Consulting Services
                        </button>
                        <button className="px-4 sm:px-5 py-2 rounded-full bg-blue-100 text-blue-700 flex items-center gap-2 text-sm sm:text-base">
                            <FaProjectDiagram /> AI Model Training and Deployment
                        </button>
                        <button className="px-4 sm:px-5 py-2 rounded-full bg-blue-100 text-blue-700 flex items-center gap-2 text-sm sm:text-base">
                            <MdMoreHoriz /> More...
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="border-gray-300 border mt-8 sm:mt-10"></div>

                    {/* Free Consultation Link */}
                    <div className="mt-6 sm:mt-8">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-blue-600 hover:underline text-base sm:text-lg"
                        >
                            Have a project idea and need Free Consultation →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIMLConsulting;
