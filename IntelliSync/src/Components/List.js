import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ problem_link, problem_name }) => {
    return (
        <div className='flex flex-col flex-wrap justify-between my-2 border p-1 rounded-md sm:flex-row  sm:px-3'>
            <div className='font-medium'>{problem_name}</div>
            <Link to={problem_link}><p className='text-red-400 hover:text-red-600'>Link</p></Link>
        </div >
    )
}

export default List
