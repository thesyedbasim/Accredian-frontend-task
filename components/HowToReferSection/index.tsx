import React from 'react';
import Image from 'next/image';

const HowToReferSection = () => {
  const steps = [
    {
      id: 1,
      title: 'Fill Referral Form',
      description:
        'Enter your details and your friend@rsquo; information in our simple referral form.',
      icon: '/icons/form-icon.svg',
    },
    {
      id: 2,
      title: "We'll Reach Out",
      description:
        "We'll contact your friend with all the course information they need.",
      icon: '/icons/contact-icon.svg',
    },
    {
      id: 3,
      title: 'Earn Rewards',
      description:
        'Once your friend enrolls, both of you receive exciting benefits and rewards.',
      icon: '/icons/reward-icon.svg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900">
            How Do I Refer?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Referring your friends and family is quick and easy. Just follow
            these simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line between steps */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="relative z-10 bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Step Number */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  {step.id}
                </div>

                <div className="flex flex-col items-center text-center mt-4 space-y-4">
                  {/* Icon */}
                  <div className="p-3 bg-indigo-50 rounded-full">
                    <div className="w-12 h-12 relative">
                      <Image
                        src={step.icon}
                        alt={`Step ${step.id}`}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-indigo-600 font-semibold mb-4">
            It@rsquo; that simple! Start referring today and unlock amazing
            rewards.
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition duration-300 ease-in-out">
            Start Referring
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToReferSection;
