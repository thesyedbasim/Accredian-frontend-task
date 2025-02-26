import React, { useState, FormEvent, ChangeEvent } from 'react';

interface ReferralFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  referrerName: string;
  referrerEmail: string;
  referrerPhone: string;
  refereeName: string;
  refereeEmail: string;
  refereePhone: string;
  courseName: string;
}

interface FormErrors {
  referrerName?: string;
  referrerEmail?: string;
  referrerPhone?: string;
  refereeName?: string;
  refereeEmail?: string;
  refereePhone?: string;
  courseName?: string;
}

const ReferralFormModal: React.FC<ReferralFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    refereeName: '',
    refereeEmail: '',
    refereePhone: '',
    courseName: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.referrerName)
      newErrors.referrerName = 'Your name is required';
    if (!formData.referrerEmail) {
      newErrors.referrerEmail = 'Your email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) {
      newErrors.referrerEmail = 'Email is invalid';
    }
    if (!formData.referrerPhone)
      newErrors.referrerPhone = 'Your phone number is required';

    if (!formData.refereeName)
      newErrors.refereeName = "Friend's name is required";
    if (!formData.refereeEmail) {
      newErrors.refereeEmail = "Friend's email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail)) {
      newErrors.refereeEmail = 'Email is invalid';
    }
    if (!formData.refereePhone)
      newErrors.refereePhone = "Friend's phone number is required";

    if (!formData.courseName) newErrors.courseName = 'Please select a course';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is changed
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/referrals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Handle success
          console.log('Referral submitted successfully');
          onClose();
        } else {
          // Handle error
          console.error('Failed to submit referral');
        }

        // For now, just log and close
        console.log('Form submitted:', formData);
        onClose();
      } catch (error) {
        console.error('Error submitting referral:', error);
      }
    }
  };

  const courses: string[] = [
    'Product Management',
    'UX Design',
    'Full Stack Development',
    'Data Science',
    'Digital Marketing',
    'AI & Machine Learning',
  ];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        ></div>

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Refer a Friend
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Fill out the form below to refer your friend to our courses.
                  Both of you will receive special benefits!
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  {/* Referrer's Information */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">
                      Your Information
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label
                          htmlFor="referrerName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="referrerName"
                          id="referrerName"
                          value={formData.referrerName}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-md border ${
                            errors.referrerName
                              ? 'border-red-300'
                              : 'border-gray-300'
                          } shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.referrerName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.referrerName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="referrerEmail"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Your Email *
                        </label>
                        <input
                          type="email"
                          name="referrerEmail"
                          id="referrerEmail"
                          value={formData.referrerEmail}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-md border ${
                            errors.referrerEmail
                              ? 'border-red-300'
                              : 'border-gray-300'
                          } shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.referrerEmail && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.referrerEmail}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="referrerPhone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Your Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="referrerPhone"
                          id="referrerPhone"
                          value={formData.referrerPhone}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-md border ${
                            errors.referrerPhone
                              ? 'border-red-300'
                              : 'border-gray-300'
                          } shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.referrerPhone && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.referrerPhone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Friend's Information */}
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">
                      Friend's Information
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label
                          htmlFor="refereeName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Friend's Name *
                        </label>
                        <input
                          type="text"
                          name="refereeName"
                          id="refereeName"
                          value={formData.refereeName}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-md border ${
                            errors.refereeName
                              ? 'border-red-300'
                              : 'border-gray-300'
                          } shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.refereeName && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.refereeName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="refereeEmail"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Friend's Email *
                        </label>
                        <input
                          type="email"
                          name="refereeEmail"
                          id="refereeEmail"
                          value={formData.refereeEmail}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-md border ${
                            errors.refereeEmail
                              ? 'border-red-300'
                              : 'border-gray-300'
                          } shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.refereeEmail && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.refereeEmail}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="refereePhone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Friend's Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="refereePhone"
                          id="refereePhone"
                          value={formData.refereePhone}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-md border ${
                            errors.refereePhone
                              ? 'border-red-300'
                              : 'border-gray-300'
                          } shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                        />
                        {errors.refereePhone && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.refereePhone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label
                      htmlFor="courseName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Recommended Course *
                    </label>
                    <select
                      id="courseName"
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border ${
                        errors.courseName ? 'border-red-300' : 'border-gray-300'
                      } shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                    {errors.courseName && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.courseName}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Submit Referral
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralFormModal;
