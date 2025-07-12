import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Browse Questions', 
      href: '/browse', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'By Tag', href: '/browse?filter=tag' },
        { name: 'Most Answered', href: '/browse?sort=answers' },
        { name: 'Newest', href: '/browse?sort=newest' }
      ]
    },
    { name: 'Ask a Question', href: '/ask' },
    { name: 'Tags', href: '/tags' },
    { name: 'Login', href: '/login' }
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#121212]/90 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-[#121212]/70 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent hover:scale-105 transition-transform duration-200">
              StackIt
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <div key={item.name} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                  {item.hasDropdown ? (
                    <button
                      className={`px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center space-x-1 rounded-lg ${
                        isActive(item.href)
                          ? 'text-[#00BFFF] bg-[#00BFFF]/10'
                          : 'text-gray-300 hover:text-[#00BFFF] hover:bg-gray-800/50'
                      }`}
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                        isActive(item.href)
                          ? 'text-[#00BFFF] bg-[#00BFFF]/10'
                          : 'text-gray-300 hover:text-[#00BFFF] hover:bg-gray-800/50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div className={`absolute top-full left-0 mt-2 w-48 bg-[#121212]/95 backdrop-blur-md border border-gray-700/50 rounded-lg shadow-xl transition-all duration-200 ${
                      isDropdownOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}>
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-[#00BFFF] hover:bg-gray-800/50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-[#00BFFF] transition-colors duration-200 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#121212]/95 backdrop-blur-md">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                      isActive(item.href)
                        ? 'text-[#00BFFF] bg-[#00BFFF]/10'
                        : 'text-gray-300 hover:text-[#00BFFF] hover:bg-gray-800/50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1 mt-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-3 py-2 text-sm text-gray-400 hover:text-[#00BFFF] hover:bg-gray-800/50 transition-colors duration-200 rounded-lg"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;