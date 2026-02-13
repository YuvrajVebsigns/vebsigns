import React from "react";

const AIConsultingSection = () => {
  return (
    <section className="bg-[#F3F945]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div
          className="flex flex-col justify-center items-center text-center p-8 sm:p-12 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/HomePage/map.png')",
          }}
        >
          <h2 className="text-[120px] sm:text-[160px] md:text-[192px] font-normal text-[#15042E] leading-none">
            5
            <span className="text-[50px] sm:text-[65px] md:text-[80px] align-top">
              +
            </span>
          </h2>
          <p className="mt-4 text-gray-900 text-base sm:text-lg md:text-lg max-w-md">
            Drawing from 5+ years of industry knowledge, we understand the
            frequent concerns global customers face at the start of their
            transformation.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center p-8 sm:p-12 text-center md:text-left">
          <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
            AI-powered computer vision enables systems to interpret images and
            video in real time, transforming visual data into actionable
            insights. By automating object detection, tracking, quality
            inspection, and visual analytics, organizations can improve
            accuracy, enhance safety, and streamline operations. Our end-to-end
            services cover data annotation, model training, system integration,
            and large-scale deployment, with flexible customization to fit
            existing platforms and business workflows.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIConsultingSection;
