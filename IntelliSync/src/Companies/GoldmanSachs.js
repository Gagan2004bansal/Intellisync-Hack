import React from 'react';
import { Goldman } from '../Data/Goldman';
import List from '../Components/List';

const GoldmanSachs = () => {
    return (
        <div>
            <div className='w-full sm:w-9/12  mx-auto p-5 h-90b overflow-x-scroll'>
                <p className='font-extrabold text-4xl my-3'>Goldman Sachs</p>
                <div>
                    {Goldman.map((problem, index) => (
                        <List key={index} {...problem} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default GoldmanSachs
