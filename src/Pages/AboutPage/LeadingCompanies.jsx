import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/autoplay';






const awards = [
    {
        img: "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/a3-13.jpeg", // Replace with your image
        title: "AWARDS 2020",
        desc: "Best Use of Technology In Medical Tourism",
    },
    {
        img: "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/a4-13.jpeg", // Replace with your image
        title: "Best Of The Year Awards 2021",
        desc: "Best Use of Technology In Medical Tourism",
    },
    {
        img: "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/a1-13.jpeg", // Replace with your image
        title: "ECS Excellence Awards",
        desc: "Best Use of Technology In Medical Tourism",
    },
    {
        img: "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/a2-13.jpeg", // Replace with your image
        title: "Innovation Awards",
        desc: "Best Use of Technology In Medical Tourism",
    },
    {
        img: "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/a3-13.jpeg", // Replace with your image
        title: "AWARDS 2020",
        desc: "Best Use of Technology In Medical Tourism",
    },
    {
        img: "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/a4-13.jpeg", // Replace with your image
        title: "Best Of The Year Awards 2021",
        desc: "Best Use of Technology In Medical Tourism",
    },
    {
        img: "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/a1-13.jpeg", // Replace with your image
        title: "ECS Excellence Awards",
        desc: "Best Use of Technology In Medical Tourism",
    },
];

const LeadingCompanies = () => {

    return (
        <section className="bg-[#0b0225]  py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Container */}
                <div className="bg-[#faff4a] rounded-3xl py-12 px-6 shadow-lg text-center">
                    {/* Heading */}
                    <p className="text-[#1B4BF0] font-semibold text-[21px] uppercase tracking-wide">
                        Trusted By
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 uppercase">
                        Leading Companies
                    </h2>
                    <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                        From Fortune 5 companies to small and medium-sized businesses
                    </p>

                    {/* Awards Grid */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        // navigation
                        // pagination={{ clickable: true }}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="mt-10"
                    >
                        {awards.map((award, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition duration-300">
                                    <img
                                        src={award.img}
                                        alt={award.title}
                                        className="h-20 object-contain mb-4"
                                    />
                                    <p className="font-semibold text-gray-900 text-sm">{award.title}</p>
                                    <p className="text-gray-500 text-sm mt-2">{award.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default LeadingCompanies;
