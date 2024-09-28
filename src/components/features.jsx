import React from "react";
import { FaLightbulb, FaVideo, FaCalendarAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb size={40} className="text-blue-500" />,
    title: "Idea & Script Generation",
    description:
      "Quickly brainstorm and generate engaging content ideas and scripts.",
  },
  {
    icon: <FaVideo size={40} className="text-purple-500" />,
    title: "Content Creation",
    description:
      "Create posts, videos, reels, and text-based content seamlessly.",
  },
  {
    icon: <FaCalendarAlt size={40} className="text-green-500" />,
    title: "Scheduling & Automation",
    description:
      "Schedule your posts across various platforms at optimal times automatically.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Features</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
