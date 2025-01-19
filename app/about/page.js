"use client"
import React, { useState } from 'react';
import { Shield, User, Info, Calendar, Menu, X, ChevronRight} from 'lucide-react';

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
     

      {/* Hero Section */}
      <div className="pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className=" mt-10 text-4xl font-extrabold text-blue-600 sm:text-5xl md:text-6xl">
            About Us
          </h1>
          <p className="mt-4 text-xl sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            We provide expert protection dog services, including training, breeding, and consultation to secure your home and loved ones.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Our Story
          </h2>
          <p className="mt-4 text-xl">
            At Dog Protection Ug, our mission is to provide high-quality personal protection dogs that are expertly trained for home and family safety. We believe in the importance of security, and we are dedicated to offering the best services to meet the needs of our clients.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white">
            <div className="flex flex-col items-center text-center">
              <Info className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />
              <h3 className="mt-4 text-lg font-medium group-hover:text-white transition-colors">
                Our Vision
              </h3>
              <p className="mt-2 group-hover:text-blue-100 transition-colors">
                To be the leading provider of professional protection dog services, recognized for quality, trust, and commitment.
              </p>
            </div>
          </div>

          <div className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white">
            <div className="flex flex-col items-center text-center">
              <User className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />
              <h3 className="mt-4 text-lg font-medium group-hover:text-white transition-colors">
                Our Mission
              </h3>
              <p className="mt-2 group-hover:text-blue-100 transition-colors">
                We are dedicated to protecting families and properties by providing professionally trained protection dogs that offer peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Join Us on Our Mission</span>
            <span className="block text-blue-200">Partner with us for your safety needs.</span>
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

export default AboutPage;
