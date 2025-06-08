"use client"
import React from "react";
import { motion } from "framer-motion";

const FreelanceProject = () => {
  const testimonial =
    "Parag delivered an amazing, responsive, and SEO-friendly website for our old age home. Highly professional and easy to work with!";

  return (
    <motion.section
      className="mt-[10vh] scroll-mt-28 max-w-sm mx-auto px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      id="testimonial"
    >
      <h2 className="text-3xl font-medium capitalize text-center mb-2">Testimonials</h2>
      <p className="text-center text-gray-600 mb-8 font-bold">What Our Client Says</p>

      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
        <img
          src="/logo.jpeg"
          alt="Shrimahalaxmi Old Age Home Logo"
          className="w-36 h-36 rounded-full object-cover mb-4 shadow-md"
        />
        <a
          href="https://www.shrimahalaxmioldagehome.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold mb-6"
        >
          Shrimahalaxmi Old Age Home
        </a>
        <p className="text-gray-700 italic max-w-xs">
          "{testimonial}"
        </p>
        <p className="mt-4 font-semibold text-gray-900">— Trust Member</p>
      </div>
    </motion.section>
  );
};

export default FreelanceProject;
