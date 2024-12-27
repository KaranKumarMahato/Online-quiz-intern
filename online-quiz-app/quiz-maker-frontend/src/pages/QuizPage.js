// src/pages/QuizPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizList from '../components/QuizList'; // Import the QuizList component

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/quiz') // Fetch quizzes from the backend
      .then(res => setQuizzes(res.data)) // Set the quizzes in state
      .catch(err => console.log(err)); // Log any errors
  }, []);

  return (
    <div>
      <h1>Available Quizzes</h1>
      {/* Render the QuizList component and pass quizzes as props */}
      <QuizList quizzes={quizzes} />
    </div>
  );
};

export default QuizPage;
