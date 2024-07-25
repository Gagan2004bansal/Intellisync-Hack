import React from 'react';
import { THEORY_QUESTIONS } from './TheoryQuestions'; // Import theory questions data
import { useState } from 'react';
import './Material.css';

const Materail = () => {

    const [selectedCategory, setSelectedCategory] = useState(Object.keys(THEORY_QUESTIONS)[0]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const questions = THEORY_QUESTIONS[selectedCategory];

    return (
        <div>
            <div className='w-full sm:w-9/12 mx-auto p-5 h-90b overflow-x-scroll mb-0 scrollbar-hide'>
                <div className="theory-questions-container">
                    <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
                    <h1 className='text-[40px] font-bold text-purple-500'>Theory Questions</h1>
                    <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
                    <div className="category-selector text-white mt-4">
                        <select onChange={handleCategoryChange} className='bg-white text-black rounded-md text-2xl drop-shadow-md' value={selectedCategory}>
                            {Object.keys(THEORY_QUESTIONS).map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="questions-list">
                        {questions.map((item) => (
                            <div key={item.id} className="question-block">
                                <p><strong>Question {item.id}:</strong> {item.question}</p>
                                <p><strong>Answer:</strong> {item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Materail
