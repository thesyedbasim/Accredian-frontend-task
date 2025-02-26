'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <span className="flex items-center">
                  <Image
                    src="/logo.webp"
                    alt="Company Logo"
                    width={120}
                    height={40}
                    className="cursor-pointer"
                  />
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/courses"
                className="border-transparent text-gray-500 hover:border-indigo-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Courses
              </Link>
              <Link
                href="/about"
                className="border-transparent text-gray-500 hover:border-indigo-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="border-transparent text-gray-500 hover:border-indigo-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="border-transparent text-gray-500 hover:border-indigo-500 hover:text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link href="/login">
              <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                Login
              </span>
            </Link>
            <Link href="/register">
              <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Sign Up
              </span>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/courses"
              className="text-gray-600 hover:bg-gray-50 hover:text-indigo-600 block pl-3 pr-4 py-2 text-base font-medium"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:bg-gray-50 hover:text-indigo-600 block pl-3 pr-4 py-2 text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:bg-gray-50 hover:text-indigo-600 block pl-3 pr-4 py-2 text-base font-medium"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:bg-gray-50 hover:text-indigo-600 block pl-3 pr-4 py-2 text-base font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-3">
              <Link href="/login">
                <span className="block px-4 py-2 text-base font-medium text-indigo-600 hover:text-indigo-800">
                  Login
                </span>
              </Link>
              <Link href="/register">
                <span className="block px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                  Sign Up
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
