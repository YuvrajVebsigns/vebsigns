import React from "react";

const AIConsultingOverview = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="order-1 md:order-1 w-full">
          {/* Subtitle */}
          <p className="text-blue-600 text-[21px] font-semibold uppercase tracking-wide">
            Overview
          </p>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl uppercase font-bold text-gray-900 mt-2 mb-6">
            Transforming Visual Data with AI-Powered Computer Vision
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            AI-powered computer vision is redefining how organizations interpret
            and act on visual data. By enabling machines to see, analyze, and
            understand images and video, businesses can automate visual
            inspections, enhance monitoring, and make faster, more accurate
            decisions in real time.
          </p>

          <p className="text-gray-700 text-base leading-relaxed mb-8">
            Our computer vision solutions integrate seamlessly with existing
            systems, cameras, and edge devices to deliver end-to-end visual
            intelligence. From object detection and facial recognition to
            quality inspection, video analytics, and behavior tracking, we help
            organizations improve operational efficiency, strengthen security,
            and reduce manual effort. With over 5+ years of experience, we build
            scalable, production-ready solutions for industries such as
            manufacturing, healthcare, retail, logistics, and smart
            infrastructure. Our approach emphasizes accuracy, performance,
            secure deployment, and real-world usability— ensuring AI adoption
            delivers measurable business impact.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 mt-8">
            {/* Stat 1 */}
            <div className="border-t border-gray-300 pt-4">
              <p className="text-gray-500 text-sm">Serving the industry for</p>
              <h3 className="text-5xl sm:text-7xl font-normal text-blue-600">
                6+
              </h3>
              <p className="text-gray-600 mt-2">Years of Excellence</p>
            </div>

            {/* Stat 2 */}
            <div className="border-t border-gray-300 pt-4">
              <p className="text-gray-500 text-sm">
                Projects Successfully Completed
              </p>
              <h3 className="text-5xl sm:text-7xl font-normal text-blue-600">
                85+
              </h3>
              <p className="text-gray-600 mt-2">
                Vision-Driven Solutions Delivered
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className=" justify-center items-center order-2 md:order-2 w-full mt-8 md:mt-0 hidden md:flex">
          <img
            src="/assets/HomePage/arrow3.svg"
            alt="AI Consulting"
            className="w-full max-w-lg object-contain scale-x-[-1]" // flips horizontally
          />
        </div>
      </div>
    </section>
  );
};

export default AIConsultingOverview;
