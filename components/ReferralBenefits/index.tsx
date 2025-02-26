'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ReferralBenefits = () => {
  // Sample program data - replace with your actual data
  const allPrograms = [
    {
      id: 1,
      name: 'Data Science Bootcamp',
      category: 'data science',
      referrerBonus: '$500',
      referreeBonus: '20% discount',
    },
    {
      id: 2,
      name: 'UX Design Professional',
      category: 'design',
      referrerBonus: '$400',
      referreeBonus: '15% discount',
    },
    {
      id: 3,
      name: 'Full Stack Development',
      category: 'development',
      referrerBonus: '$600',
      referreeBonus: '25% discount',
    },
    {
      id: 4,
      name: 'Product Management Certification',
      category: 'product management',
      referrerBonus: '$450',
      referreeBonus: '20% discount',
    },
    {
      id: 5,
      name: 'Digital Marketing Master',
      category: 'marketing',
      referrerBonus: '$350',
      referreeBonus: '15% discount',
    },
    {
      id: 6,
      name: 'Business Analytics',
      category: 'data science',
      referrerBonus: '$500',
      referreeBonus: '20% discount',
    },
    {
      id: 7,
      name: 'Agile Project Management',
      category: 'product management',
      referrerBonus: '$450',
      referreeBonus: '20% discount',
    },
    {
      id: 8,
      name: 'Cybersecurity Expert',
      category: 'technology',
      referrerBonus: '$700',
      referreeBonus: '25% discount',
    },
    {
      id: 9,
      name: 'Cloud Computing Specialist',
      category: 'technology',
      referrerBonus: '$650',
      referreeBonus: '20% discount',
    },
    {
      id: 10,
      name: 'Mobile App Development',
      category: 'development',
      referrerBonus: '$550',
      referreeBonus: '20% discount',
    },
    {
      id: 11,
      name: 'Artificial Intelligence',
      category: 'data science',
      referrerBonus: '$800',
      referreeBonus: '30% discount',
    },
    {
      id: 12,
      name: 'Frontend Development',
      category: 'development',
      referrerBonus: '$500',
      referreeBonus: '20% discount',
    },
    {
      id: 13,
      name: 'Backend Development',
      category: 'development',
      referrerBonus: '$550',
      referreeBonus: '20% discount',
    },
    {
      id: 14,
      name: 'Product Design',
      category: 'design',
      referrerBonus: '$400',
      referreeBonus: '15% discount',
    },
    {
      id: 15,
      name: 'Product Analytics',
      category: 'product management',
      referrerBonus: '$475',
      referreeBonus: '20% discount',
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAllPrograms, setShowAllPrograms] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Filter programs based on selected category
  const filteredPrograms =
    selectedCategory === 'all'
      ? allPrograms
      : allPrograms.filter((program) => program.category === selectedCategory);

  // Limit displayed programs based on showAllPrograms state
  const displayedPrograms = showAllPrograms
    ? filteredPrograms
    : filteredPrograms.slice(0, 10);

  // Get unique categories for filter buttons
  const categories = [
    'all',
    ...new Set(allPrograms.map((program) => program.category)),
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What are the Referral Benefits?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Earn amazing rewards for yourself and your friends when you refer
            them to our programs. The more you refer, the more you earn!
          </p>
        </motion.div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAllPrograms(false);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Programs Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-700"
                >
                  Program
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-700"
                >
                  Referrer Bonus
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-700"
                >
                  Referee Bonus
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {displayedPrograms.map((program) => (
                <tr
                  key={program.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {program.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <span className="text-green-600 font-semibold">
                      {program.referrerBonus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <span className="text-blue-600 font-semibold">
                      {program.referreeBonus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Show More Button */}
        {filteredPrograms.length > 10 && !showAllPrograms && (
          <div className="text-center mb-8">
            <button
              onClick={() => setShowAllPrograms(true)}
              className="px-5 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Show More
            </button>
          </div>
        )}

        {/* Refer Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Refer Now
          </button>
        </motion.div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-xl overflow-hidden relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Refer a Friend
                </h3>
                <p className="text-gray-600 mb-6">
                  Fill in the details below to refer a friend and earn rewards!
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Friend's Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your friend's name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Friend's Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your friend's email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Select Program
                    </label>
                    <select
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a program</option>
                      {allPrograms.map((program) => (
                        <option key={program.id} value={program.id}>
                          {program.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Add a personal message to your friend"
                      rows={3}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Submit Referral
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReferralBenefits;
