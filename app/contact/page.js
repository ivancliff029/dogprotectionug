"use client"
import React, { useState } from 'react';
import { Shield, ChevronRight, Menu, X  } from 'lucide-react';


const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                    <span className="block">Contact Us</span>
                    <span className="block text-blue-600">We're here to help</span>
                  </h1>
                  <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Have questions? Get in touch with us to learn more about our services or schedule a consultation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl">
            We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-8 max-w-lg mx-auto">
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Send Message
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Company Info Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Our Location</h3>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
            Dog Protection Ug, 1234 Protection Lane, Kampala, Uganda
          </p>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Call us: +256 123 456 789
          </p>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Email: info@dogprotectionug.com
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Have any questions?</span>
            <span className="block text-blue-200">Reach out to us anytime.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-white text-blue-600 hover:bg-gray-50">
                Contact Us
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
