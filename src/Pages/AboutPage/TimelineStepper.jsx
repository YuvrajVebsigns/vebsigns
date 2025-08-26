import React, { useState } from "react";
import { motion } from "framer-motion";

const timelineData = [
    {
        year: 2010,
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/p5.jpg", // Replace
        description:
            "Data engineering services qualify businesses to harness the full potential of their data, gaining a competitive edge in today’s data-driven landscape. Expansive reach enables us to effectively serve owners, investors, developers, and financial institutions throughout.",
    },
    {
        year: 2013,
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/p5.jpg", // Replace
        description:
            "Expanded into new markets and introduced AI-powered automation tools, improving efficiency and customer experience.",
    },
    {
        year: 2014,
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/p5.jpg", // Replace
        description:
            "Launched enterprise solutions to help businesses scale globally with cloud-based infrastructure.",
    },
    {
        year: 2016,
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/p5.jpg", // Replace
        description:
            "Introduced advanced machine learning platforms for real-time analytics and predictions.",
    },
    {
        year: 2020,
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/p5.jpg", // Replace
        description:
            "Pivoted towards AI innovation, creating intelligent systems for multiple industries worldwide.",
    },
    {
        year: 2022,
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/p5.jpg", // Replace
        description:
            "Enhanced our platform with Generative AI solutions for personalized customer experiences.",
    },
    {
        year: 2024,
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/p5.jpg", // Replace
        description:
            "Became a global leader in data-driven decision-making tools, serving Fortune 500 clients.",
    },
];

const TimelineStepper = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeItem = timelineData[activeIndex];


    return (
        <section className="relative bg-[#0b0225] text-white py-20">
  <div className="w-full mx-auto px-6 text-center">
    {/* Heading */}
    <p className="text-blue-400 uppercase tracking-wide text-3xl sm:text-4xl">
      # Our Story
    </p>

    {/* Year and Content */}
    <div className="flex flex-col items-center mt-10 space-y-6">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <motion.img
            key={activeItem.year}
            src={activeItem.image}
            alt={activeItem.year}
            className="h-64 sm:h-80 md:h-96 lg:h-[20rem] rounded-xl rotate-[-4deg] shadow-lg w-full object-cover"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.05, 0.95, 1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        {/* Year and Description */}
        <div className="lg:w-1/2 w-full text-left">
          <h2 className="text-5xl sm:text-7xl md:text-[120px] lg:text-[180px] font-bold text-blue-400">
            {activeItem.year}
          </h2>
          <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-300">
            {activeItem.description}
          </p>
        </div>
      </div>
    </div>

    {/* Timeline Stepper */}
    <div className="mt-16 sm:mt-24 flex justify-center items-center relative overflow-x-auto">
      {/* Line behind dots */}
      <div className="absolute top-2 left-0 w-full h-[1px] bg-gray-700 z-0"></div>

      <div className="flex space-x-3 sm:space-x-16 md:space-x-28 z-10 px-6">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer flex-shrink-0"
            onClick={() => setActiveIndex(index)}
          >
            {/* Dot */}
            <div
              className={`w-5 h-5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-yellow-400 scale-100" : "bg-blue-400"
              }`}
            ></div>
            <p
              className={`mt-2 text-xs sm:text-sm ${
                index === activeIndex ? "text-yellow-400" : "text-gray-400"
              }`}
            >
              {item.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    );
};

export default TimelineStepper;
