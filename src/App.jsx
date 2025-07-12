import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import BrowseQuestions from './pages/BrowseQuestions';
import AskQuestion from './pages/AskQuestion';
import QuestionDetail from './pages/QuestionDetail';
import Tags from './pages/Tags';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D0D0D] text-white font-poppins">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<BrowseQuestions />} />
            <Route path="/ask" element={<AskQuestion />} />
            <Route path="/question/:id" element={<QuestionDetail />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;