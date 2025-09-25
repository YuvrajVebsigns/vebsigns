import React from 'react'

const PMAConsultingSection = () => {
  return (
    <div>
      <section className="bg-[#6FE4FC]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">

          {/* Left Side */}
          <div
            className="flex flex-col justify-center items-center text-center p-8 sm:p-12 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/HomePage/map.png')",
            }}
          >
            <h2 className="text-[120px] sm:text-[160px] md:text-[192px] font-normal text-[#15042E] leading-none">
              5<span className="text-[50px] sm:text-[65px] md:text-[80px] align-top">+</span>
            </h2>
            <p className="mt-4 text-gray-900 text-base sm:text-lg md:text-lg max-w-md">
              With 5+ years of expertise, we help businesses reduce downtime, optimize operations, and extend asset life through data-driven predictive maintenance solutions.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center p-8 sm:p-12 text-center md:text-left">

            <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
              Predictive maintenance leverages IoT sensors, machine learning, and analytics to anticipate equipment failures before they occur. Our services include real-time monitoring, anomaly detection, predictive modeling, and performance optimization.

            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PMAConsultingSection
