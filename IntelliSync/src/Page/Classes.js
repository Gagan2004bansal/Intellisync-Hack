import React from 'react';
import imgSrc1 from '../images/appStore.jpeg';
import imgSrc2 from '../images/playStore.png'

const Classes = () => {

    return (
        <div className='w-full sm:w-9/12 mx-auto p-5 h-90b overflow-x-scroll mb-0 scrollbar-hide'>
            <div>
                <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
                <div className='font-extrabold text-2xl'>Skill Up for Free: Your Gateway to Limitless Learning</div>
                <div className='mt-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
            </div>
            <div>
                <div className='sm:hidden'>
                    <div className='flex flex-col bg-black text-white mt-10 p-4 rounded-md shadow-md'>
                        <div className='text-xl mb-1 font-bold'>Downlaod our App</div>
                        <p>To Watch Tutorials & Online Classes</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div>
                            <img className='mix-blend-darken h-[100px]' src={imgSrc1} alt="appStore" />
                        </div>
                        <div>
                            <img className='h-[100px]' src={imgSrc2} alt="appStore" />
                        </div>
                    </div>
                </div>
                <div className='hidden sm:block'>
                    Classes
                </div>
            </div>
        </div>
    )
}

export default Classes
