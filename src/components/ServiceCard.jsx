import React from "react";

const services = [
  {
    title: "Website / App Design UX / UI Design",
    description: "Creating Engaging Digital Experiences for Websites and Apps through UX/UI Design",
    link: "#",
    isHighlighted: false,
  },
  {
    title: "Strategic Marketing and Creative Content",
    description: "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    link: "#",
    isHighlighted: false,
  },
  {
    title: "Multivendor eCommerce Website Solutions",
    description: "Unlocking the World of Multivendor eCommerce Websites",
    link: "#",
    isHighlighted: false,
  },
  {
    title: "Another Service Example",
    description: "Brief description for another service here.",
    link: "#",
    isHighlighted: false,
  },
  {
    title: "Strategic Marketing and Creative Content",
    description: "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    link: "#",
    isHighlighted: false,
  },
  {
    title: "Multivendor eCommerce Website Solutions",
    description: "Unlocking the World of Multivendor eCommerce Websites",
    link: "#",
    isHighlighted: false,
  },
  {
    title: "Another Service Example",
    description: "Brief description for another service here.",
    link: "#",
    isHighlighted: false,
  },
  {
    title: "Strategic Marketing and Creative Content",
    description: "Elevating Brands and Engagement through Strategic Marketing and Creative Content",
    link: "#",
    isHighlighted: false,
  },
  {
    title: "Multivendor eCommerce Website Solutions",
    description: "Unlocking the World of Multivendor eCommerce Websites",
    link: "#",
    isHighlighted: false,
  },
  {
    title: "Another Service Example",
    description: "Brief description for another service here.",
    link: "#",
    isHighlighted: false,
  },
];

const ServiceCard = () => {
  return (
    <section className="py-16 px-8 bg-gray-100" id='service'>
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-4">
          Exploring My Design <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-600 mb-12">
          We transform your ideas into a distinctive web project that both
          inspires you and captivates your customers.
        </p>

        {/* Horizontal Scrollable Flex Row */}
        <div className="flex overflow-x-auto gap-6 scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[300px] h-auto p-6 rounded-lg shadow-lg transition transform hover:scale-105 ${
                service.isHighlighted
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 border border-gray-200 hover:shadow-2xl"
              }`}
            >
              {/* Card Content */}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <a
                href={service.link}
                className={`inline-block text-sm font-medium ${
                  service.isHighlighted ? "text-white" : "text-blue-500"
                }`}
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
