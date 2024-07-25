import React from 'react'
import List from '../Components/List';
import { Ama } from '../Data/Ama';

const Amazon = () => {
    return (
        <div>
            <div className='w-full sm:w-9/12  mx-auto p-5 h-90b overflow-x-scroll'>
                <p className='font-extrabold text-4xl my-3'>Amazon</p>
                <div>
                    {Ama.map((problem, index) => (
                        <List key={index} {...problem} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Amazon
