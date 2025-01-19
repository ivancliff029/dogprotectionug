"use client"
import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
            {/* Navigation */}
            <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Shield className="w-8 h-8 text-blue-600" />
                            <Link href="/" className="ml-2 text-xl font-bold">Dog Protection Ug</Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
                            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
                            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
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
                            <Link href="/services" className="block px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">Services</Link>
                            <Link href="/about" className="block px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">About</Link>
                            <Link href="/contact" className="block px-3 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md">Contact</Link>
                            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-800 py-6">
                <div className="max-w-7xl mx-auto text-center text-gray-900 dark:text-white">
                    <p>&copy; 2025 Dog Protection Ug. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
