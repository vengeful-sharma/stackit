import React from 'react';
import Header from './components/Header'; // adjust the path if needed

function App() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome to StackIt</h1>
        {/* Add content below */}
      </main>
    </div>
  );
}

export default App;
