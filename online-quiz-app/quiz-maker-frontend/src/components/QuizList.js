// src/components/QuizList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuizList.css';

const QuizList = () => {
  // State to hold the list of quizzes
  const [quizzes, setQuizzes] = useState([]);

  // Fetch quizzes from the backend API
  useEffect(() => {
    axios.get('http://localhost:5000/api/quiz') // Adjust URL if needed
      .then((response) => {
        setQuizzes(response.data); // Assuming response is an array of quizzes
      })
      .catch((error) => {
        console.error('Error fetching quizzes:', error);
      });
  }, []);

  return (
    <div className="quiz-list">
      <h2>Available Quizzes</h2>
      <ul className="quiz-items">
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <li key={quiz._id} className="quiz-item">
              <a href={`/quiz/${quiz._id}`} className="quiz-link">
                <h3>{quiz.title}</h3>
                <p>{quiz.description}</p>
              </a>
            </li>
          ))
        ) : (
          <p>No quizzes available at the moment.</p>
        )}
      </ul>
    </div>
  );
};

export default QuizList;
