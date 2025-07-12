import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowUp, ArrowDown, MessageCircle, Eye, Clock, Check, Star, Flag } from 'lucide-react';
import { motion } from 'framer-motion';

const QuestionDetail = () => {
  const { id } = useParams();
  const [newAnswer, setNewAnswer] = useState('');
  const [questionVote, setQuestionVote] = useState(0);
  const [answerVotes, setAnswerVotes] = useState({});

  // Mock data for the question
  const question = {
    id: parseInt(id),
    title: "How to implement authentication in React with JWT tokens?",
    description: `I'm building a React application and need to implement user authentication using JWT tokens. What's the best approach for storing and managing tokens securely?

Here's what I've tried so far:

\`\`\`javascript
// Login function
const login = async (email, password) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  localStorage.setItem('token', data.token);
};
\`\`\`

However, I'm concerned about security implications of storing tokens in localStorage. What are the alternatives and best practices?`,
    author: "john_dev",
    votes: 15,
    views: 234,
    tags: ["react", "jwt", "authentication", "security"],
    createdAt: "2 hours ago",
    isAnswered: true
  };

  // Mock data for answers
  const answers = [
    {
      id: 1,
      content: `Great question! Here are the best practices for JWT authentication in React:

## 1. Token Storage Options

**HttpOnly Cookies (Recommended)**
\`\`\`javascript
// Server sets httpOnly cookie
res.cookie('token', jwt, { 
  httpOnly: true, 
  secure: true, 
  sameSite: 'strict' 
});
\`\`\`

**Memory Storage**
\`\`\`javascript
// Store in React state/context
const [token, setToken] = useState(null);
\`\`\`

## 2. Implementation Example

\`\`\`javascript
// Auth context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const login = async (credentials) => {
    const response = await api.post('/login', credentials);
    setUser(response.data.user);
    // Token is set as httpOnly cookie by server
  };
  
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
\`\`\`

This approach is much more secure than localStorage!`,
      author: "security_expert",
      votes: 23,
      createdAt: "1 hour ago",
      isAccepted: true
    },
    {
      id: 2,
      content: `I'd also recommend using a library like \`@auth0/auth0-react\` or \`firebase/auth\` for production applications. They handle all the security concerns for you.

Here's a quick example with Auth0:

\`\`\`javascript
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};
\`\`\`

Much simpler and more secure than rolling your own!`,
      author: "auth_guru",
      votes: 12,
      createdAt: "30 minutes ago",
      isAccepted: false
    }
  ];

  const handleVote = (type, targetType, targetId = null) => {
    if (targetType === 'question') {
      setQuestionVote(prev => {
        if (type === 'up' && prev !== 1) return 1;
        if (type === 'down' && prev !== -1) return -1;
        return 0;
      });
    } else if (targetType === 'answer') {
      setAnswerVotes(prev => ({
        ...prev,
        [targetId]: (() => {
          const current = prev[targetId] || 0;
          if (type === 'up' && current !== 1) return 1;
          if (type === 'down' && current !== -1) return -1;
          return 0;
        })()
      }));
    }
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    if (newAnswer.trim()) {
      // Here you would submit the answer to your backend
      console.log('New answer:', newAnswer);
      setNewAnswer('');
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/browse" className="text-[#00BFFF] hover:text-[#0099CC] transition-colors duration-200">
            ← Back to Questions
          </Link>
        </motion.div>

        {/* Question */}
        <motion.div 
          className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Vote Section */}
            <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 min-w-[120px]">
              <div className="flex lg:flex-col items-center space-x-2 lg:space-x-0 lg:space-y-2">
                <button
                  onClick={() => handleVote('up', 'question')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    questionVote === 1 ? 'bg-[#00BFFF] text-white' : 'text-gray-400 hover:text-[#00BFFF] hover:bg-gray-800'
                  }`}
                >
                  <ArrowUp className="w-6 h-6" />
                </button>
                <span className="text-2xl font-bold text-white">{question.votes + questionVote}</span>
                <button
                  onClick={() => handleVote('down', 'question')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    questionVote === -1 ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-red-400 hover:bg-gray-800'
                  }`}
                >
                  <ArrowDown className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 text-gray-400">
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{question.views}</span>
                </div>
                <button className="flex items-center space-x-1 hover:text-[#00BFFF] transition-colors duration-200">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">Save</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-red-400 transition-colors duration-200">
                  <Flag className="w-4 h-4" />
                  <span className="text-sm">Flag</span>
                </button>
              </div>
            </div>

            {/* Question Content */}
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
                {question.title}
              </h1>
              
              <div className="prose prose-invert max-w-none mb-6">
                <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {question.description}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
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

              {/* Question Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-400 pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Asked {question.createdAt}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span>Asked by</span>
                  <Link to={`/user/${question.author}`} className="text-[#00BFFF] hover:text-[#0099CC] font-medium">
                    {question.author}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Answers Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            {answers.length} Answer{answers.length !== 1 ? 's' : ''}
          </h2>

          <div className="space-y-6">
            {answers.map((answer, index) => (
              <motion.div
                key={answer.id}
                className={`bg-gray-900/30 backdrop-blur-sm border rounded-xl p-6 ${
                  answer.isAccepted ? 'border-green-500/50 bg-green-500/5' : 'border-gray-800/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Vote Section */}
                  <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 min-w-[120px]">
                    <div className="flex lg:flex-col items-center space-x-2 lg:space-x-0 lg:space-y-2">
                      <button
                        onClick={() => handleVote('up', 'answer', answer.id)}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          answerVotes[answer.id] === 1 ? 'bg-[#00BFFF] text-white' : 'text-gray-400 hover:text-[#00BFFF] hover:bg-gray-800'
                        }`}
                      >
                        <ArrowUp className="w-5 h-5" />
                      </button>
                      <span className="text-xl font-bold text-white">
                        {answer.votes + (answerVotes[answer.id] || 0)}
                      </span>
                      <button
                        onClick={() => handleVote('down', 'answer', answer.id)}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          answerVotes[answer.id] === -1 ? 'bg-red-500 text-white' : 'text-gray-400 hover:text-red-400 hover:bg-gray-800'
                        }`}
                      >
                        <ArrowDown className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {answer.isAccepted && (
                      <div className="flex items-center space-x-1 text-green-400">
                        <Check className="w-5 h-5" />
                        <span className="text-sm font-medium">Accepted</span>
                      </div>
                    )}
                  </div>

                  {/* Answer Content */}
                  <div className="flex-1">
                    <div className="prose prose-invert max-w-none mb-4">
                      <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                        {answer.content}
                      </div>
                    </div>

                    {/* Answer Meta */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-gray-400 pt-4 border-t border-gray-700">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Answered {answer.createdAt}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>by</span>
                        <Link to={`/user/${answer.author}`} className="text-[#00BFFF] hover:text-[#0099CC] font-medium">
                          {answer.author}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Add Answer Form */}
        <motion.div 
          className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white mb-4">Your Answer</h3>
          <form onSubmit={handleSubmitAnswer}>
            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Write your answer here... You can use Markdown formatting."
              rows={8}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF] transition-colors duration-200 resize-vertical mb-4"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={!newAnswer.trim()}
                className="px-6 py-3 bg-gradient-to-r from-[#00BFFF] to-[#8A2BE2] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,191,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post Your Answer
              </button>
              <p className="text-gray-400 text-sm flex items-center">
                By posting your answer, you agree to our terms of service.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default QuestionDetail;