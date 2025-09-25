import React from 'react'

const BMDMConsultingSection = () => {
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
              With 5+ years of expertise, we provide end-to-end solutions for large-scale IoT device manufacturing, deployment, and lifecycle management to ensure efficiency and reliability.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center p-8 sm:p-12 text-center md:text-left">

            <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
              Our services cover mass production of IoT devices, quality assurance, firmware installation, and secure device management. We enable organizations to scale operations while maintaining high standards of performance, compliance, and connectivity.

            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BMDMConsultingSection
