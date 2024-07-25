import React from 'react';
import { Link } from 'react-router-dom';

const Companies = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center p-5'>
            <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
            <h1 className='text-purple-500 text-3xl font-extrabold my-1'>Company Wise Questions</h1>
            <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
            <div className='w-full sm:w-4/12 mx-auto p-5 h-90b overflow-x-scroll'>
                {['microsoft', 'adobe', 'amazon', 'goldman', 'apple'].map(company => (
                    <Link
                        key={company}
                        to={`/${company}`}
                        className='block text-center bg-white bg-opacity-90 text-gray-800 font-extrabold text-2xl my-5 py-6 px-8 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300'
                    >
                        {company.charAt(0).toUpperCase() + company.slice(1).replace(/-/g, ' ')}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Companies;
