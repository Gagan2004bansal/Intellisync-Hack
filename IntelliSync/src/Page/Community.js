import React from 'react'
import { Link } from 'react-router-dom';

const Community = () => {
    return (
        <div className='w-full sm:w-9/12 mx-auto p-5 h-90b overflow-x-scroll mb-0 scrollbar-hide'>
            <div>
                <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
                <div className='font-extrabold text-4xl text-center text-purple-500 '>Connecting Tech Minds: Your Community, Your Code</div>
                <div className='mt-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
                <div className='flex flex-col items-center justify-center mt-10'>
                    <Link to='/publish'> <div className='text-xl font-medium text-white hover:text-slate-100 bg-black px-10 py-4 rounded-md'>Publish your Article</div></Link>
                    <Link to='/article'><div className='text-lg font-semibold mt-4 hover:underline'>View Article</div></Link>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Community;