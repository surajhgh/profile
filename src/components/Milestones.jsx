import React from "react";

const milestones = [
  {
    value: "8300+",
    description: "Figma ipsum component variant main layer. Hand.",
  },
  {
    value: "100%",
    description: "Figma ipsum component variant main layer. Union.",
  },
  {
    value: "3.5K",
    description: "Figma ipsum component variant main layer.",
  },
  {
    value: "240+",
    description: "Figma ipsum component variant main layer.",
  },
];

const Milestones = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#2a1b3d] to-[#44318d] text-white">
      <div className="container mx-auto text-center px-6">
        {/* Section Title */}
        <h4 className="text-sm font-semibold uppercase tracking-wide mb-2">
          Our Milestones
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          What sets our studio apart for your projects?
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-white text-blue-500 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <span className="text-4xl font-extrabold mb-2">{milestone.value}</span>
              <p className="text-center text-sm font-medium">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
