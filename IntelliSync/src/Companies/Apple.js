import React from 'react';
import { AppleData } from '../Data/AppleData';
import List from '../Components/List';

const Apple = () => {
    return (
        <div>
            <div className='w-full sm:w-9/12  mx-auto p-5 h-90b overflow-x-scroll'>
                <p className='font-extrabold text-4xl my-3'>Apple</p>
                <div>
                    {AppleData.map((problem, index) => (
                        <List key={index} {...problem} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Apple
