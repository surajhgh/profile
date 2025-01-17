import React, { useState } from "react";

// Portfolio items data
const portfolioItems = [
  {
    id: 1,
    category: "UI/UX Design",
    title: "Experience a new dimension of reality",
    image: "https://via.placeholder.com/300x200", // Replace with actual image URLs
  },
  {
    id: 2,
    category: "Branding Design",
    title: "Get your snacks delivered at your doorstep",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    category: "WordPress",
    title: "Welcome to the World of Extraordinary Travel",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    category: "Branding Design",
    title: "Mockups: iPhone 14 Pro",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 5,
    category: "UI/UX Design",
    title: "A collaborative workspace for modern teams",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 6,
    category: "WordPress",
    title: "Mockup Scene Generators Bundle",
    image: "https://via.placeholder.com/300x200",
  },
];

// Categories for filtering
const categories = ["All", "UI/UX Design", "Branding Design", "WordPress"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter items based on active category
  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 bg-gray-100 p-6" id="portfolio">
      <div className=" mx-auto text-center px-6">
        {/* Section Title */}
        <h4 className="text-sm font-semibold uppercase tracking-wide mb-2 text-blue-500">
          Our Projects
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Presenting My Design <br />
          <span className="text-blue-500">Portfolio and Case Studies</span>
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full font-medium border transition-all ${
                activeCategory === category
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-100"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
