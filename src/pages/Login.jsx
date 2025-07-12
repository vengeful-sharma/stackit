import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!formData.username.trim()) {
        newErrors.username = 'Username is required';
      } else if (formData.username.length < 3) {
        newErrors.username = 'Username must be at least 3 characters';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log(isLogin ? 'Login' : 'Register', formData);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      username: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-block mb-6">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">
              StackIt
            </h1>
          </Link>
          <h2 className="text-2xl font-bold text-white mb-2">
            {isLogin ? 'Welcome Back' : 'Join StackIt'}
          </h2>
          <p className="text-gray-400">
            {isLogin 
              ? 'Sign in to your account to continue' 
              : 'Create an account to start asking and answering questions'
            }
          </p>
        </motion.div>

        {/* Form */}
        <motion.div 
          className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username (Register only) */}
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Enter your username"
                    className={`w-full pl-10 pr-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                      errors.username ? 'border-red-500' : 'border-gray-700 focus:border-[#00BFFF]'
                    }`}
                  />
                </div>
                {errors.username && (
                  <p className="mt-1 text-red-400 text-sm">{errors.username}</p>
                )}
              </motion.div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={`w-full pl-10 pr-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                    errors.email ? 'border-red-500' : 'border-gray-700 focus:border-[#00BFFF]'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className={`w-full pl-10 pr-12 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                    errors.password ? 'border-red-500' : 'border-gray-700 focus:border-[#00BFFF]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-red-400 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password (Register only) */}
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm your password"
                    className={`w-full pl-10 pr-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-700 focus:border-[#00BFFF]'
                    }`}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-red-400 text-sm">{errors.confirmPassword}</p>
                )}
              </motion.div>
            )}

            {/* Forgot Password (Login only) */}
            {isLogin && (
              <div className="text-right">
                <a href="#" className="text-sm text-[#00BFFF] hover:text-[#0099CC] transition-colors duration-200">
                  Forgot your password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] hover:scale-105"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <button
              type="button"
              className="w-full py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </button>
          </form>

          {/* Toggle Mode */}
          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                onClick={toggleMode}
                className="text-[#00BFFF] hover:text-[#0099CC] font-medium transition-colors duration-200"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;