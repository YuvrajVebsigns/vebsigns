import React from "react";

const stats = [
  {
    title: "Of companies claim AI as a strategic business priority",
    percentage: "83",
    description:
      "Save time and money by automating and optimising routine processes and tasks",
  },
  {
    title: "Interactions were responded to by chatbots",
    percentage: "85",
    description:
      "Make faster business decisions based on outputs from cognitive technologies",
  },
  {
    title: "Improved business efficiency with AI",
    percentage: "42",
    description:
      "Grow expertise by enabling analysis and offering intelligent advice and support",
  },
];

const BeneficialResults = () => {
  return (
  <section className="relative bg-[#0b0225] py-20 text-white">
    <div className="max-w-7xl mx-auto px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-left">
        BENEFICIAL RESULTS
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-gray-700 md:divide-y-0 md:divide-x">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`
              px-6 py-8 text-center 
              md:text-left 
              ${index !== stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-700' : ''}
            `}
          >
            <p className="text-gray-300 mb-4 text-lg">{stat.title}</p>
            <div className="text-6xl font-bold text-yellow-300">
              {stat.percentage}
              <span className="text-3xl">%</span>
            </div>
            <p className="text-gray-400 mt-4">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

};

export default BeneficialResults;
