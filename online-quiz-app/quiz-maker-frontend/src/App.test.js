import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuizPage component', () => {
  render(<App />);
  const quizPageElement = screen.getByText(/quiz/i); // Adjust the text to match something on your QuizPage
  expect(quizPageElement).toBeInTheDocument();
});
