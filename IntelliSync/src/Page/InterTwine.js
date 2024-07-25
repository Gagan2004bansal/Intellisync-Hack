import React, { useState } from 'react';
import { quizzes } from './quizzes'; // Import the quiz data

const InterTwine = () => {
  const [category, setCategory] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory && selectedCategory !== category) {
      setCategory(selectedCategory);
      setQuestionIndex(0);
      setScore(0);
      setAnswers({});
      setFinished(false);
    }
  };

  const handleAnswerChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value
    });
  };

  const handleSubmit = () => {
    if (!category) return;

    const correctAnswers = quizzes[category].filter(
      (question, index) => answers[index] === question.correct_answer
    ).length;
    setScore(correctAnswers);
    setFinished(true);
  };

  const handleNextQuestion = () => {
    if (questionIndex < (quizzes[category]?.length || 0) - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const currentQuestion = category && quizzes[category] ? quizzes[category][questionIndex] : null;

  return (
    <div className='w-full sm:w-9/12 mx-auto p-5 h-90b overflow-y-scroll scrollbar-hide flex flex-col items-center justify-center'>
      <div className="quiz-container">
        <div>
          <h1 className='text-4xl font-bold text-center mb-2 text-black'>InterTwine Quiz</h1>
          {!category && (
            <div className="category-selection flex flex-col items-center justify-center mt-6">
              <select onChange={handleCategoryChange} value="" className='text-white px-4 py-2 rounded-md'>
                <option value="" disabled>Select a category</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="javascript">JavaScript</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="sql">SQL</option>
                <option value="python">Python</option>
                <option value="linux">Linux</option>
              </select>
            </div>
          )}
        </div>
        {category && !finished && currentQuestion && (
          <div className="quiz-slider flex items-center justify-center">
            <div className="quiz-question">
              <h2 className='text-center text-xl font-semibold'>{category.toUpperCase()} Quiz</h2>
              <p className='mt-10'>Question {questionIndex + 1} of {quizzes[category]?.length}</p>
              <p className='mt-4 font-bold'>{currentQuestion.question}</p>
              <div className="options-container my-2">
                {Object.entries(currentQuestion.answers).map(([key, value]) => (
                  <div key={key} className="option">
                    <input
                      type="radio"
                      id={`${key}-${questionIndex}`}
                      name={questionIndex}
                      value={key}
                      checked={answers[questionIndex] === key}
                      onChange={handleAnswerChange}
                    />
                    <label className='pl-2' htmlFor={`${key}-${questionIndex}`} onClick={() => handleAnswerChange({ target: { name: questionIndex, value: key } })}>
                      {value}
                    </label>
                  </div>
                ))}
              </div>
              <div className="navigation-buttons flex justify-between items-center mt-8">
                <button onClick={handlePrevQuestion} disabled={questionIndex === 0} className='bg-purple-400 hover:bg-purple-500 cursor px-2 py-1 rounded-md text-white'>
                  Previous
                </button>
                <button onClick={handleNextQuestion} className='bg-purple-400 hover:bg-purple-500 cursor px-2 py-1 rounded-md text-white'>
                  {questionIndex === (quizzes[category]?.length || 0) - 1 ? 'Submit' : 'Next'}
                </button>
              </div>
            </div>
          </div>
        )}
        {finished && (
          <div className="mt-10 quiz-result flex flex-col items-center justify-center">
            <h2 className='text-xl '>Quiz Finished</h2>
            <p className='text-red-500 font-bold text-lg'>Your score: {score} out of {10}</p>
            <p className=''>
              {score > 8 ? 'Congratulations! You did great!' : 'Try again to improve your score.'}
            </p>
            <button className='bg-black drop-shadow-md px-6 py-2 mt-10 rounded-md text-white' onClick={() => setCategory(null)}>
              Select Another Category
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterTwine;
