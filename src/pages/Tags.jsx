import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Hash } from 'lucide-react';
import { motion } from 'framer-motion';

const Tags = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for tags
  const allTags = [
    { name: 'javascript', count: 1234, description: 'For questions about JavaScript programming language' },
    { name: 'react', count: 987, description: 'For questions about React.js library and ecosystem' },
    { name: 'css', count: 856, description: 'For questions about Cascading Style Sheets' },
    { name: 'html', count: 743, description: 'For questions about HyperText Markup Language' },
    { name: 'typescript', count: 654, description: 'For questions about TypeScript programming language' },
    { name: 'node.js', count: 567, description: 'For questions about Node.js runtime environment' },
    { name: 'python', count: 543, description: 'For questions about Python programming language' },
    { name: 'api', count: 432, description: 'For questions about Application Programming Interfaces' },
    { name: 'authentication', count: 321, description: 'For questions about user authentication and authorization' },
    { name: 'database', count: 298, description: 'For questions about databases and data storage' },
    { name: 'performance', count: 276, description: 'For questions about application performance optimization' },
    { name: 'security', count: 254, description: 'For questions about application security' },
    { name: 'testing', count: 234, description: 'For questions about software testing' },
    { name: 'deployment', count: 198, description: 'For questions about application deployment' },
    { name: 'git', count: 187, description: 'For questions about Git version control system' },
    { name: 'docker', count: 165, description: 'For questions about Docker containerization' },
    { name: 'aws', count: 143, description: 'For questions about Amazon Web Services' },
    { name: 'mongodb', count: 132, description: 'For questions about MongoDB database' },
    { name: 'express', count: 121, description: 'For questions about Express.js framework' },
    { name: 'vue.js', count: 109, description: 'For questions about Vue.js framework' },
    { name: 'angular', count: 98, description: 'For questions about Angular framework' },
    { name: 'graphql', count: 87, description: 'For questions about GraphQL query language' },
    { name: 'redux', count: 76, description: 'For questions about Redux state management' },
    { name: 'webpack', count: 65, description: 'For questions about Webpack module bundler' }
  ];

  const filteredTags = allTags.filter(tag =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tag.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTagColor = (count) => {
    if (count > 800) return 'from-[#00BFFF] to-[#8A2BE2]';
    if (count > 400) return 'from-[#00FFFF] to-[#00BFFF]';
    if (count > 200) return 'from-[#8A2BE2] to-[#9932CC]';
    return 'from-gray-500 to-gray-600';
  };

  const getTagSize = (count) => {
    if (count > 800) return 'text-lg';
    if (count > 400) return 'text-base';
    return 'text-sm';
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
            Browse <span className="bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent">Tags</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Explore topics and find questions by category
          </p>
        </motion.div>

        {/* Search */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors duration-200"
            />
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mb-8 p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent mb-1">
                {allTags.length}
              </div>
              <div className="text-gray-400 text-sm">Total Tags</div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent mb-1">
                {allTags.reduce((sum, tag) => sum + tag.count, 0).toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm">Total Questions</div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] bg-clip-text text-transparent mb-1">
                {filteredTags.length}
              </div>
              <div className="text-gray-400 text-sm">Showing Tags</div>
            </div>
          </div>
        </motion.div>

        {/* Tags Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filteredTags.map((tag, index) => (
            <motion.div
              key={tag.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
            >
              <Link
                to={`/browse?tag=${tag.name}`}
                className="block p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-[#00BFFF]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.1)] group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Hash className="w-5 h-5 text-[#00BFFF] group-hover:text-[#8A2BE2] transition-colors duration-300" />
                    <h3 className={`font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300 ${getTagSize(tag.count)}`}>
                      {tag.name}
                    </h3>
                  </div>
                  <span className={`px-2 py-1 bg-gradient-to-r ${getTagColor(tag.count)} text-white text-xs rounded-full font-medium`}>
                    {tag.count}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {tag.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredTags.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Hash className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-400 mb-2">No tags found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </motion.div>
        )}

        {/* Popular Tags Cloud */}
        <motion.div 
          className="mt-16 p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Popular Tags Cloud
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.slice(0, 15).map((tag) => (
              <Link
                key={tag.name}
                to={`/browse?tag=${tag.name}`}
                className={`px-4 py-2 bg-gradient-to-r ${getTagColor(tag.count)} text-white rounded-full font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg ${getTagSize(tag.count)}`}
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tags;