import { CheckCircle2 } from "lucide-react";

const processSteps = [
    "Discovery & Research",
    "Strategy & Planning",
    "Design & Prototyping",
    "Development",
    "Testing & Launch",
];

export default function ProcessSteps() {
    return (
        // <section className="py-20 bg-gradient-to-r from-[#0D003B] to-[#101C4E]">
        //   <div className="max-w-6xl mx-auto px-6 text-center">
        //     {/* Heading */}
        //     <h3 className="text-4xl text-white font-bold mb-14 text-gray-900">
        //       Our Process
        //     </h3>

        //     {/* Steps */}
        //     <div className="relative flex flex-col md:flex-row md:justify-between md:items-start">
        //       {/* Connecting line */}
        //       <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-30 rounded-full"></div>

        //       {processSteps.map((step, index) => (
        //         <div
        //           key={index}
        //           className="relative z-10 flex flex-col items-center text-center md:w-1/5 group"
        //         >
        //           {/* Number circle */}
        //           <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white flex items-center justify-center font-bold shadow-lg transition-transform duration-300 group-hover:scale-110">
        //             {index + 1}
        //           </div>

        //           {/* Card */}
        //           <div className="mt-6 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-4 w-40 md:w-auto transition duration-300 hover:shadow-2xl">
        //             <CheckCircle2 className="mx-auto mb-2 text-blue-500" size={28} />
        //             <p className="font-semibold text-gray-800 text-sm md:text-base">
        //               {step}
        //             </p>
        //           </div>
        //         </div>
        //       ))}
        //     </div>

        //     {/* Description */}
        //     <p className="mt-12 text-white max-w-3xl mx-auto text-lg">
        //       A lean, iterative process that ensures every decision aligns with your
        //       <span className="font-semibold text-blue-600"> business goals</span>.
        //     </p>
        //   </div>
        // </section>
        <section class="bg-transparent mt-10">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="max-w-2xl mx-auto text-center">
                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Our Process</h2>
                    {/* <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p> */}
                </div>

                <div class="relative mt-12 lg:mt-20">
                    <div class="absolute inset-x-0 hidden xl:px-22 top-2 md:block md:px-2 lg:px-2">
                        <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>

                    <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-5 gap-x-1">
                        <div>
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span class="text-xl font-semibold text-gray-700"> 1 </span>
                            </div>
                            <h3 class="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Discover</h3>
                        </div>

                        <div>
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span class="text-xl font-semibold text-gray-700"> 2 </span>
                            </div>
                            <h3 class="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Define</h3>
                        </div>

                        <div>
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span class="text-xl font-semibold text-gray-700"> 3 </span>
                            </div>
                            <h3 class="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Design </h3>
                        </div>
                        <div>
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span class="text-xl font-semibold text-gray-700"> 4 </span>
                            </div>
                            <h3 class="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Test</h3>
                        </div>
                        <div>
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                <span class="text-xl font-semibold text-gray-700"> 5 </span>
                            </div>
                            <h3 class="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">Optimize</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
