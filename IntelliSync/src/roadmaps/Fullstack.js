import React, { useState } from 'react';

const Fullstack = () => {

    const [mode, setMode] = useState('light');

    function clickHandler() {
        if (mode === 'light') {
            setMode('dark');
        }
        else {
            setMode('light');
        }
    }

    // const iframeSrc = `https://www.taskade.com/embed/N3ngnquVXh94uB8x?as=list&share=view&view=gWsrri7EB5X55FXK&theme=${mode}&coverImageType=none`;

    return (
        <div className='w-full sm:w-9/12  mx-auto p-5 h-90b overflow-x-scroll mb-0'>
            <button className='bg-sky-400 py-1 px-3 mb-2 rounded-md text-white hover:bg-sky-500' onClick={clickHandler}>Change Mode</button>
            {/* <iframe className='rounded-xl shadow-xl' width="100%" height="95%" scrolling="yes" frameborder="no" src={iframeSrc}></iframe> */}
        </div>
    )
}

export default Fullstack
