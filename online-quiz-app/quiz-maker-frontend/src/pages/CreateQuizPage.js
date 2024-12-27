import React, { useState } from 'react';
import axios from 'axios';

const CreateQuizPage = () => {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([{ questionText: '', options: ['', '', '', ''], correctAnswer: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/quiz', { title, questions })
      .then(res => {
        console.log('Quiz created:', res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Quiz</h2>
      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {questions.map((q, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Question Text"
            value={q.questionText}
            onChange={(e) => {
              const updatedQuestions = [...questions];
              updatedQuestions[index].questionText = e.target.value;
              setQuestions(updatedQuestions);
            }}
          />
          {q.options.map((opt, optIndex) => (
            <input
              key={optIndex}
              type="text"
              placeholder={`Option ${optIndex + 1}`}
              value={opt}
              onChange={(e) => {
                const updatedQuestions = [...questions];
                updatedQuestions[index].options[optIndex] = e.target.value;
                setQuestions(updatedQuestions);
              }}
            />
          ))}
          <input
            type="text"
            placeholder="Correct Answer"
            value={q.correctAnswer}
            onChange={(e) => {
              const updatedQuestions = [...questions];
              updatedQuestions[index].correctAnswer = e.target.value;
              setQuestions(updatedQuestions);
            }}
          />
        </div>
      ))}
      <button type="submit">Create Quiz</button>
    </form>
  );
};

export default CreateQuizPage;
