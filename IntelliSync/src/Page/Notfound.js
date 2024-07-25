import React from 'react'

const Notfound = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center h-90b scrollbar-hide'>
                <div className='bg-black rounded-xl px-8 py-4'>
                    <div className='text-[25px] font-bold text-white'>404 Error</div>
                    <div className='text-red-500 text-[15px] font-bold'>Page Not Found</div>
                </div>
            </div>
        </div>
    )
}

export default Notfound
