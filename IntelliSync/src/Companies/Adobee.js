import React from 'react'
import { Adobe } from '../Data/Adobe';
import List from '../Components/List';

const Adobee = () => {
    return (
        <div>
            <div className='w-full sm:w-9/12  mx-auto p-5 h-90b overflow-x-scroll'>
                <p className='font-extrabold text-4xl my-3'>Adobe</p>
                <div>
                    {Adobe.map((problem, index) => (
                        <List key={index} {...problem} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Adobee
