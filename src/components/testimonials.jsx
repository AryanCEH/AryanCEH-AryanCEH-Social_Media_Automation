// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aryan Chhetri",
    image: "/assets/user1.png", 
    feedback:
      "This tool has transformed the way I manage my social media. Highly recommended!",
  },
  {
    name: "Debjoyti Das",
    image: "/assets/user1.png",
    feedback:
      "Efficient, reliable, and user-friendly. My engagement has doubled since using this tool.",
  },
  {
    name: "Harsh Prakash",
    image: "/assets/user1.png",
    feedback:
      "A game-changer for content creators. The scheduling feature saves me so much time!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="w-full md:w-1/3 p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
