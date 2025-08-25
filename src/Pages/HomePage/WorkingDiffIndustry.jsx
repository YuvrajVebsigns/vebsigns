import React from "react";

const WorkingDiffIndustry = () => {
    return (
        <section className="bg-yellow-300 py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-lg text-black">

                {/* Left Side */}
                <p className="font-medium mb-3 sm:mb-0 text-center sm:text-left">
                    Has experience working with different industries:

                </p>

                {/* Right Side (Links) */}
                <nav className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 text-base sm:text-lg">
                    <a href="#" className="hover:underline">
                        Digital Health
                    </a>
                    <a href="#" className="hover:underline">
                        Financial
                    </a>
                    <a href="#" className="hover:underline">
                        E-Commerce
                    </a>
                    <a href="#" className="hover:underline">
                        Technology
                    </a>
                </nav>
            </div>
        </section>
    );
};

export default WorkingDiffIndustry;
