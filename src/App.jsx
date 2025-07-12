import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './app/components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0D0D0D] text-white font-poppins">
        <Header />
        
      
      </div>
    </Router>
  );
}

export default App;