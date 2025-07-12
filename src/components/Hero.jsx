import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white">Ask Anything.</span>{' '}
          <span className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
            Answer Everything.
          </span>{' '}
          <span className="text-white">Grow with</span>{' '}
          <span className="bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] bg-clip-text text-transparent">
            StackIt.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A modern Q&A platform built for{' '}
          <span className="text-[#00BFFF] font-medium">curious minds</span>{' '}
          and{' '}
          <span className="text-[#8A2BE2] font-medium">helpful communities</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Primary Button */}
          <Link 
            to="/ask"
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>Start Asking</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Secondary Button */}
          <Link 
            to="/browse"
            className="group relative w-full sm:w-auto px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-full transition-all duration-300 hover:bg-[#00BFFF] hover:text-[#0D0D0D] hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] flex items-center justify-center space-x-2"
          >
            <Search className="w-5 h-5" />
            <span>Browse Questions</span>
          </Link>
        </motion.div>

        {/* Feature Pills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { text: 'Real-time Answers', color: 'from-[#00BFFF] to-[#0080FF]' },
            { text: 'Expert Community', color: 'from-[#8A2BE2] to-[#9932CC]' },
            { text: 'Smart Search', color: 'from-[#00FFFF] to-[#00CED1]' }
          ].map((feature, index) => (
            <div
              key={index}
              className={`px-6 py-3 bg-gradient-to-r ${feature.color} bg-opacity-10 border border-opacity-30 rounded-full text-sm font-medium backdrop-blur-sm`}
            >
              <span className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: '50K+', label: 'Questions Asked' },
            { number: '25K+', label: 'Active Users' },
            { number: '95%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;