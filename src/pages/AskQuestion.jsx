import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, X, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const AskQuestion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: []
  });
  const [currentTag, setCurrentTag] = useState('');
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

  const handleAddTag = (e) => {
    e.preventDefault();
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim()) && formData.tags.length < 5) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length < 10) {
      newErrors.title = 'Title must be at least 10 characters';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 30) {
      newErrors.description = 'Description must be at least 30 characters';
    }
    
    if (formData.tags.length === 0) {
      newErrors.tags = 'At least one tag is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Question submitted:', formData);
      // Redirect to the question detail page or browse page
      navigate('/browse');
    }
  };

  const suggestedTags = ['javascript', 'react', 'css', 'html', 'typescript', 'node.js', 'python', 'api'];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ask a <span className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">Question</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Get help from our community of developers and experts
          </p>
        </motion.div>

        {/* Tips */}
        <motion.div 
          className="mb-8 p-6 bg-[#00BFFF]/10 border border-[#00BFFF]/20 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-start space-x-3">
            <HelpCircle className="w-6 h-6 text-[#00BFFF] mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Writing a good question</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Be specific and clear about your problem</li>
                <li>• Include relevant code snippets or examples</li>
                <li>• Mention what you've already tried</li>
                <li>• Use appropriate tags to help others find your question</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-lg font-semibold text-white mb-3">
              Question Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., How to implement authentication in React?"
              className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                errors.title ? 'border-red-500' : 'border-gray-700 focus:border-[#00BFFF]'
              }`}
            />
            {errors.title && (
              <p className="mt-2 text-red-400 text-sm">{errors.title}</p>
            )}
            <p className="mt-2 text-gray-400 text-sm">
              Be specific and imagine you're asking a question to another person
            </p>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-lg font-semibold text-white mb-3">
              Question Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={8}
              placeholder="Provide more details about your question. Include what you've tried, expected results, and any error messages..."
              className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 resize-vertical ${
                errors.description ? 'border-red-500' : 'border-gray-700 focus:border-[#00BFFF]'
              }`}
            />
            {errors.description && (
              <p className="mt-2 text-red-400 text-sm">{errors.description}</p>
            )}
            <p className="mt-2 text-gray-400 text-sm">
              Include all the information someone would need to answer your question
            </p>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-lg font-semibold text-white mb-3">
              Tags * (up to 5)
            </label>
            
            {/* Current Tags */}
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 bg-[#00BFFF]/20 text-[#00BFFF] rounded-full text-sm"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-2 hover:text-red-400 transition-colors duration-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Add Tag Input */}
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag(e)}
                placeholder="Add a tag..."
                disabled={formData.tags.length >= 5}
                className="flex-1 px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors duration-200 disabled:opacity-50"
              />
              <button
                type="button"
                onClick={handleAddTag}
                disabled={!currentTag.trim() || formData.tags.length >= 5}
                className="px-4 py-2 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {errors.tags && (
              <p className="mb-2 text-red-400 text-sm">{errors.tags}</p>
            )}

            {/* Suggested Tags */}
            <div>
              <p className="text-gray-400 text-sm mb-2">Suggested tags:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      if (!formData.tags.includes(tag) && formData.tags.length < 5) {
                        setFormData(prev => ({
                          ...prev,
                          tags: [...prev.tags, tag]
                        }));
                      }
                    }}
                    disabled={formData.tags.includes(tag) || formData.tags.length >= 5}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] hover:scale-105"
            >
              Post Your Question
            </button>
            <button
              type="button"
              onClick={() => navigate('/browse')}
              className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default AskQuestion;