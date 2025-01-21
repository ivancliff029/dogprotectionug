"use client"
import React, { useState, useEffect } from 'react';
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
  X,
  Check,
  Star,
  Phone,
  Mail,
  MapPin,
  Award,
  Target
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeShowcase, setActiveShowcase] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Elite Protection Dogs",
      icon: <Shield />,
      description: "Professionally trained German Shepherds and Belgian Malinois for executive and family protection"
    },
    {
      title: "Tactical Training",
      icon: <GraduationCap />,
      description: "Advanced K9 training programs including threat detection and neutralization"
    },
    {
      title: "Security Breeding",
      icon: <Dog />,
      description: "World-class breeding program focusing on temperament and working abilities"
    },
    {
      title: "Security Consultation",
      icon: <UserCheck />,
      description: "Comprehensive security assessments and personalized protection plans"
    }
  ];

  const features = [
    "24/7 Handler Support",
    "International Security Standards",
    "Certified Training Programs",
    "Lifetime Training Guarantee"
  ];

  const testimonials = [
    {
      text: "The level of training and professionalism exceeded our expectations. Our protection dog has become an invaluable part of our security team.",
      author: "James Wilson",
      role: "Security Director"
    },
    {
      text: "Their expertise in protection dog training is unmatched. The ongoing support and guidance have been exceptional.",
      author: "Sarah Martinez",
      role: "Private Client"
    }
  ];

  const showcaseDogs = [
    {
      name: "Zeus",
      breed: "German Shepherd",
      age: "3 years",
      specialization: "Executive Protection",
      certifications: ["IPO3", "PSA2", "Advanced Patrol"],
      image: "/img/german.jpeg",
      stats: [
        { label: "Protection Score", value: "98%" },
        { label: "Obedience Level", value: "Advanced" },
        { label: "Track Record", value: "Perfect" }
      ],
      description: "Zeus is our premier executive protection dog, trained in multiple scenarios including threat detection and neutralization. His calm demeanor and lightning-fast response make him ideal for high-security environments."
    },
    {
      name: "Axel",
      breed: "Belgian Malinois",
      age: "2.5 years",
      specialization: "Tactical Response",
      certifications: ["PSA3", "Advanced Detection", "Urban Protection"],
      image: "/img/belgian.jpg",
      stats: [
        { label: "Protection Score", value: "96%" },
        { label: "Obedience Level", value: "Expert" },
        { label: "Track Record", value: "Exceptional" }
      ],
      description: "Axel excels in tactical response scenarios, combining agility with precision. His advanced training in urban environments makes him perfect for complex security situations."
    },
    {
      name: "Nova",
      breed: "Dutch Shepherd",
      age: "3.5 years",
      specialization: "Family Protection",
      certifications: ["IPO2", "Advanced Obedience", "Family Safety"],
      image: "/img/belgian.jpg",
      stats: [
        { label: "Protection Score", value: "95%" },
        { label: "Obedience Level", value: "Elite" },
        { label: "Track Record", value: "Outstanding" }
      ],
      description: "Nova specializes in family protection, combining gentle behavior around children with decisive action when threats are detected. Her balanced temperament makes her an ideal family guardian."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Shield className="w-10 h-10 text-blue-700" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Dog Protection Ug</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['Services', 'Dogs', 'Training', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
                Request Consultation
              </button>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-gray-700 dark:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
              <div className="px-4 py-2 space-y-1">
                {['Services', 'Dogs', 'Training', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    {item}
                  </a>
                ))}
                <button className="w-full mt-2 bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-lg font-medium transition-colors">
                  Request Consultation
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90 z-10" />
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-32 sm:py-48">
          <div className="text-center space-y-8">
            <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
              Elite Protection Dogs <br />
              <span className="text-blue-400">For Uncompromising Security</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-300">
              World-class protection dogs trained to the highest international standards.
              Securing families and assets with exceptional K9 capabilities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-medium transition-all hover:shadow-lg">
                Schedule Consultation
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium backdrop-blur-sm transition-all">
                View Our Dogs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24" id="services">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Professional Protection Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Comprehensive security solutions through elite training
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
                {React.cloneElement(service.icon, {
                  className: "w-8 h-8 text-blue-700 group-hover:text-white transition-colors"
                })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Elite Dogs Showcase */}
      <div className="bg-gray-100 dark:bg-gray-800" id="dogs">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Elite Protection Dogs
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
              Meet our highly trained security specialists
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={showcaseDogs[activeShowcase].image}
                  alt={showcaseDogs[activeShowcase].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-4">
                <div className="flex justify-between items-center">
                  {showcaseDogs[activeShowcase].stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                      <p className="font-bold text-blue-700 dark:text-blue-400">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {showcaseDogs[activeShowcase].name}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                    {showcaseDogs[activeShowcase].specialization}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                  <span>{showcaseDogs[activeShowcase].breed}</span>
                  <span>•</span>
                  <span>{showcaseDogs[activeShowcase].age}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {showcaseDogs[activeShowcase].description}
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">Certifications</h4>
                <div className="flex flex-wrap gap-2">
                  {showcaseDogs[activeShowcase].certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm flex items-center"
                    >
                      <Award className="w-4 h-4 mr-1" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                {showcaseDogs.map((dog, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveShowcase(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeShowcase === index
                        ? 'bg-blue-700 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {dog.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-blue-700" id="training">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Why Choose Our Protection Dogs?
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Check className="w-6 h-6 text-blue-300" />
                    </div>
                    <span className="text-lg text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src="/api/placeholder/800/600"
                  alt="Training demonstration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Client Testimonials
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gray-900" id="contact">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to Enhance Your Security?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
              <div className="flex flex-col items-center space-y-2">
                <Phone className="w-8 h-8 text-blue-400" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="w-8 h-8 text-blue-400" />
                <span className="text-white">contact@k9shield.com</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="w-8 h-8 text-blue-400" />
                <span className="text-white">Los Angeles, CA</span>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Tell us about your security needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-8 h-8 text-blue-700" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">K9 Shield</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Professional protection dog training and security services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Protection Dogs</li>
                <li>Training Programs</li>
                <li>Security Breeding</li>
                <li>Consultations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="border-t dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>© 2025 K9 Shield. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;