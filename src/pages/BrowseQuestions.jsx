import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, ArrowUp, ArrowDown, MessageCircle, Eye, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const BrowseQuestions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'newest');
  const [filterBy, setFilterBy] = useState(searchParams.get('filter') || 'all');

  // Mock data for questions
  const questions = [
    {
      id: 1,
      title: "How to implement authentication in React with JWT tokens?",
      description: "I'm building a React application and need to implement user authentication using JWT tokens. What's the best approach for storing and managing tokens securely?",
      author: "john_dev",
      votes: 15,
      answers: 8,
      views: 234,
      tags: ["react", "jwt", "authentication", "security"],
      createdAt: "2 hours ago",
      isAnswered: true
    },
    {
      id: 2,
      title: "Best practices for CSS Grid vs Flexbox in 2025?",
      description: "When should I use CSS Grid over Flexbox? I'm confused about which layout method to choose for different scenarios.",
      author: "css_ninja",
      votes: 23,
      answers: 12,
      views: 456,
      tags: ["css", "grid", "flexbox", "layout"],
      createdAt: "4 hours ago",
      isAnswered: true
    },
    {
      id: 3,
      title: "How to optimize React app performance for large datasets?",
      description: "My React application is becoming slow when rendering large lists of data. What are the best optimization techniques?",
      author: "performance_guru",
      votes: 31,
      answers: 6,
      views: 789,
      tags: ["react", "performance", "optimization", "virtualization"],
      createdAt: "1 day ago",
      isAnswered: false
    },
    {
      id: 4,
      title: "Understanding TypeScript generics with practical examples",
      description: "I'm struggling to understand TypeScript generics. Can someone explain with real-world examples?",
      author: "ts_learner",
      votes: 18,
      answers: 15,
      views: 567,
      tags: ["typescript", "generics", "types"],
      createdAt: "2 days ago",
      isAnswered: true
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic here
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
    setSearchParams({ sort: newSort, filter: filterBy });
  };

  const handleFilterChange = (newFilter) => {
    setFilterBy(newFilter);
    setSearchParams({ sort: sortBy, filter: newFilter });
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Browse <span className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Discover questions from our community and share your knowledge
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors duration-200"
            />
          </form>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filterBy === 'all'
                    ? 'bg-[#00BFFF] text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Questions
              </button>
              <button
                onClick={() => handleFilterChange('unanswered')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filterBy === 'unanswered'
                    ? 'bg-[#00BFFF] text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Unanswered
              </button>
              <button
                onClick={() => handleFilterChange('answered')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filterBy === 'answered'
                    ? 'bg-[#00BFFF] text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Answered
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#00BFFF]"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="votes">Most Votes</option>
                <option value="answers">Most Answers</option>
                <option value="views">Most Views</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Questions List */}
        <div className="space-y-6">
          {questions.map((question, index) => (
            <motion.div
              key={question.id}
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-[#00BFFF]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Vote and Stats */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 text-center lg:text-left min-w-[120px]">
                  <div className="flex items-center space-x-1">
                    <ArrowUp className="w-4 h-4 text-gray-400" />
                    <span className="text-lg font-semibold text-white">{question.votes}</span>
                    <ArrowDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{question.answers}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Eye className="w-4 h-4" />
                    <span className="text-sm">{question.views}</span>
                  </div>
                </div>

                {/* Question Content */}
                <div className="flex-1">
                  <Link 
                    to={`/question/${question.id}`}
                    className="block group"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00BFFF] transition-colors duration-200">
                      {question.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {question.description}
                    </p>
                  </Link>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {question.tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/tags?tag=${tag}`}
                        className="px-3 py-1 bg-[#00BFFF]/10 text-[#00BFFF] text-sm rounded-full hover:bg-[#00BFFF]/20 transition-colors duration-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span>Asked by <span className="text-[#00BFFF]">{question.author}</span></span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{question.createdAt}</span>
                      </div>
                    </div>
                    {question.isAnswered && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                        Answered
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200">
            Load More Questions
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default BrowseQuestions;