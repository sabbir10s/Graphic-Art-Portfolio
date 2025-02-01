import React from "react";
import {
  FaRocket,
  FaDollarSign,
  FaUsers,
  FaFileAlt,
  FaRedo,
  FaThumbsUp,
} from "react-icons/fa";

const cardData = [
  {
    title: "Fast Turnaround Times",
    description:
      "We ensure your projects are completed on time without compromising quality. Quick logo designs or full branding packages, we deliver promptly.",
  },
  {
    title: "Affordable Pricing with Quality Assurance",
    description:
      "We offer competitive pricing without sacrificing creativity or attention to detail. Premium-quality designs at affordable rates.",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Your satisfaction is our top priority. We work closely with you, incorporating feedback to ensure the final product exceeds expectations.",
  },
  {
    title: "High-Quality and Print-Ready Files",
    description:
      "We provide high-resolution, print-ready, and editable files in various formats for flexibility across different mediums.",
  },
  {
    title: "Revisions and Ongoing Support",
    description:
      "We offer revisions to perfect your design and provide ongoing support for updates or additional design services.",
  },
  {
    title: "Trusted by Clients",
    description:
      "Our portfolio and client testimonials speak for themselves. We deliver high-quality and impactful designs across industries.",
  },
];

const icons = [FaRocket, FaDollarSign, FaUsers, FaFileAlt, FaRedo, FaThumbsUp];

const WhyChooseUs = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="text-primary text-lg uppercase font-semibold mb-2">
          Why
        </h3>
        <h2 className="text-4xl font-bold text-secondary mb-10">Choose Us</h2>
      </div>
      <div className="">
        {/* 2 columns on small devices and 3 columns on medium and larger devices */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
          {cardData.map((card, index) => {
            const IconComponent = icons[index];
            return (
              <div key={index} className="h-full">
                <div className="bg-white h-full rounded-lg shadow-sm hover:shadow-md border border-gray-200 hover:border-primary transition-all duration-300 p-6 flex flex-col items-center text-center">
                  {/* Icon size is controlled via responsive text size classes */}
                  <IconComponent className="text-primary mb-4 text-4xl md:text-5xl" />
                  <h3 className="text-sm md:text-xl font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 flex-grow text-xs md:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
