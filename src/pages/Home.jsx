import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Users, MessageCircle, Award, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Connect with knowledgeable professionals and enthusiasts from around the world.'
    },
    {
      icon: MessageCircle,
      title: 'Real-time Answers',
      description: 'Get quick, accurate responses to your questions from our active community.'
    },
    {
      icon: Award,
      title: 'Quality Content',
      description: 'Upvote system ensures the best answers rise to the top for everyone to see.'
    },
    {
      icon: Zap,
      title: 'Smart Search',
      description: 'Find exactly what you\'re looking for with our intelligent search and tagging system.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
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

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/ask"
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Asking</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link 
              to="/browse"
              className="group relative w-full sm:w-auto px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-full transition-all duration-300 hover:bg-[#00BFFF] hover:text-[#0D0D0D] hover:shadow-[0_0_20px_rgba(0,191,255,0.3)] flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Browse Questions</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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

      {/* Why StackIt Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">StackIt</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of developers, designers, and curious minds sharing knowledge and solving problems together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 hover:border-[#00BFFF]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.1)] group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <benefit.icon className="w-12 h-12 text-[#00BFFF] group-hover:text-[#8A2BE2] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00BFFF] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-12 rounded-2xl bg-gradient-to-r from-[#00BFFF]/10 to-[#8A2BE2]/10 border border-[#00BFFF]/20 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our community today and discover the power of collaborative learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/ask"
                className="px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,191,255,0.5)] hover:scale-105"
              >
                Ask Your First Question
              </Link>
              <Link 
                to="/login"
                className="px-8 py-4 border-2 border-[#00BFFF] text-[#00BFFF] font-semibold rounded-full transition-all duration-300 hover:bg-[#00BFFF] hover:text-[#0D0D0D]"
              >
                Create Account
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;