'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ReferralFormModal from '../ReferralFormModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                <span className="block">Refer Your Friends</span>
                <span className="block text-indigo-600">
                  Earn Great Rewards
                </span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-md">
                Share the gift of knowledge with your friends and family. Both
                you and your referrals get exciting benefits when they enroll.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <span>Refer Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 shadow-sm transition duration-300 ease-in-out">
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <Image
                  src="/avatar-1.jpg"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/avatar-2.jpg"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/avatar-3.jpg"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>
              <p className="text-sm text-gray-600">
                Join{' '}
                <span className="font-semibold text-indigo-600">5,000+</span>{' '}
                others who have already shared and earned
              </p>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative h-64 md:h-96 lg:h-full">
            <Image
              src="/refer-hero-image.svg"
              alt="Refer and Earn Illustration"
              layout="fill"
              objectFit="contain"
              className="drop-shadow-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Referral Form Modal */}
      {isModalOpen && (
        <ReferralFormModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </section>
  );
};

export default HeroSection;
