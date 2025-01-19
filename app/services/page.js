"use client"
import { Shield, Calendar, Dog, UserCheck, Store, Video, Hotel, GraduationCap, ChevronRight, Menu, X } from 'lucide-react';

const ServicePage = () => {
  const services = [
    {
      title: "Dog Protection Services",
      icon: <Shield className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Personal Protection Dogs, Property Guard Dogs, and Security Training Services for enhanced protection."
    },
    {
      title: "Dog Training Programs",
      icon: <GraduationCap className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "From Basic Obedience Training to Advanced Guard Training, plus Behavioral Adjustment Training."
    },
    {
      title: "Breeding and Sales",
      icon: <Dog className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Well-bred German Shepherds and Boerboel puppies for sale, with certifications and health guarantees."
    },
    {
      title: "Consultation and Advice",
      icon: <UserCheck className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Expert guidance on breed selection, dog training, and protection dog care."
    },
    {
      title: "Dog Care Products and Accessories",
      icon: <Store className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Leashes, harnesses, protective vests, training equipment, and breed-specific diets."
    },
    {
      title: "Online Resources",
      icon: <Video className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Training guides, videos, articles, and a community forum for dog owners."
    },
    {
      title: "Dog Boarding and Care",
      icon: <Hotel className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Secure boarding services with specialized care for protection dogs."
    },
    {
      title: "Events and Demonstrations",
      icon: <Calendar className="w-12 h-12 text-blue-600 group-hover:text-white transition-colors" />,
      description: "Live training demonstrations, workshops, and breed meetups."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">


      {/* Hero Section */}
      <div className="pt-16 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Our Services
          </h1>
          <p className="mt-3 text-lg sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Offering a wide range of specialized protection dog services, training programs, and more.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

export default ServicePage;
