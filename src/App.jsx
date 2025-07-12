import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/pages/Home';
import BrowseQuestions from './app/pages/BrowseQuestion';
import AskQuestion from './app/pages/AskQuestion';
import QuestionDetail from './app/pages/QuestionDetails';
import Tags from './app/pages/Tags';
import Login from './app/pages/Login';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import BackToTop from './app/components/BackToTop';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D0D0D] text-white font-poppins">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<BrowseQuestions />} />
            <Route path="/ask" element={<AskQuestion/>} />
            <Route path="/question/:id" element={<QuestionDetail/>} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer/>
        <BackToTop />

      
       
      </div>
    </Router>
  );
}

export default App;
