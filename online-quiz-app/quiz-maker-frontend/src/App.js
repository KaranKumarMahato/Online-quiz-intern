// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import QuizPage from './pages/QuizPage';
import QuizDetailsPage from './pages/QuizDetailsPage'; // Example for another page

const App = () => {
  return (
    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<QuizPage />} />
        <Route path="/quiz/:id" element={<QuizDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

