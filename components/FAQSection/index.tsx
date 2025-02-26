'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  // FAQ data
  const faqItems = [
    {
      question: 'How does the referral program work?',
      answer:
        'Our referral program is simple. Refer a friend to one of our courses using the referral form. Once they enroll in a course, both you and your friend will receive the respective rewards mentioned in the benefits section.',
    },
    {
      question: 'When will I receive my referral bonus?',
      answer:
        'Referral bonuses are processed within 30 days after your referred friend completes their enrollment and makes the full payment for the course.',
    },
    {
      question: 'Is there a limit to how many friends I can refer?',
      answer:
        'No, there is no limit! You can refer as many friends as you want and earn rewards for each successful referral.',
    },
    {
      question: 'What if my friend has already applied to a course?',
      answer:
        "To be eligible for the referral reward, your friend must be a new customer who hasn't previously applied to or enrolled in our courses.",
    },
    {
      question: 'How will my friend know I referred them?',
      answer:
        "Upon submission of the referral form, your friend will receive an email notification mentioning you as their referrer along with details about the course and the discount they're eligible for.",
    },
    {
      question: 'Can I refer someone to any course?',
      answer:
        'Yes, you can refer friends to any of our courses. Different courses may offer different reward amounts, as shown in the referral benefits table.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Got questions about our referral program? Find answers to the most
            commonly asked questions below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full text-left px-6 py-4 rounded-lg flex justify-between items-center transition-colors ${
                  activeIndex === index
                    ? 'bg-blue-50 text-blue-700 border-blue-100 border'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200'
                }`}
              >
                <span className="font-medium">{item.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {activeIndex === index && (
                <div className="px-6 py-4 bg-white border border-gray-200 border-t-0 rounded-b-lg">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
