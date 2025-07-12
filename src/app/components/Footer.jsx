import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#121212] border-t border-gray-800/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent mb-4">
              StackIt
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              A modern Q&A platform built for curious minds and helpful communities. 
              Ask questions, share knowledge, and grow together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/browse" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-200">
                  Browse Questions
                </Link>
              </li>
              <li>
                <Link to="/ask" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-200">
                  Ask a Question
                </Link>
              </li>
              <li>
                <Link to="/tags" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-200">
                  Tags
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-200">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00BFFF] transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 StackIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;