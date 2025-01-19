"use client"
import React from 'react';
import { useState } from 'react';
import {
  Shield,
  Dog,
  GraduationCap,
  UserCheck,
  Store,
  Video,
  Hotel,
  Calendar,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Personal Protection Dogs",
      icon: <Shield className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Expertly trained dogs for family and personal protection"
    },
    {
      title: "Training Programs",
      icon: <GraduationCap className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "From basic obedience to advanced guard training"
    },
    {
      title: "Premium Breeding",
      icon: <Dog className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Quality German Shepherds and Boerboel puppies"
    },
    {
      title: "Expert Consultation",
      icon: <UserCheck className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Professional guidance for breed selection and training"
    },
    {
      title: "Equipment & Care",
      icon: <Store className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Premium protection dog gear and accessories"
    },
    {
      title: "Online Resources",
      icon: <Video className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Educational content and community support"
    },
    {
      title: "Specialized Boarding",
      icon: <Hotel className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Secure boarding services for protection dogs"
    },
    {
      title: "Events",
      icon: <Calendar className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Training demonstrations and breed meetups"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Dog Protection Ug</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/services" className="hover:text-blue-600 transition-colors">Services</a>
              <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/services" className="block px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">Services</a>
              <a href="/about" className="block px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">About</a>
              <a href="/contact" className="block px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">Contact</a>
              <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                    <span className="block">Professional Protection</span>
                    <span className="block text-blue-600">Dog Services</span>
                  </h1>
                  <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Expert training, breeding, and consultation for personal and property protection dogs. Your security is our priority.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700">
                        Get Started
                        <ChevronRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Section with Background Image */}
      <div className="w-full bg-cover bg-center h-64" style={{ backgroundImage: 'url("/img.jpg")' }}>
        <div className="h-full bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-white">Welcome to Dog Protection</h2>
          <h3 className="text-2xl text-blue-200 mt-4">Your Trusted Partner in Protection</h3>
          <h4 className="text-lg text-gray-300 mt-2">Training, Breeding, and Beyond</h4>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl">
            Comprehensive protection dog services tailored to your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="mt-4 text-lg font-medium group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 group-hover:text-blue-100 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Contact us today for a consultation.</span>
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

export default LandingPage;
