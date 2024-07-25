import React from 'react';
import Form from './Form';
import { Link } from 'react-router-dom';
import './custom.css'

const Signup = () => {
    return (
        <div>
            <div>
                <div className='hvh flex items-center justify-center overflow-y-scroll'>
                    <div className='p-5 sm:w-8/12 lg:w-4/12'>
                        <div className='bg-black rounded-lg text-white'>
                            <div>
                                <div className='flex items-center pl-4 pt-2'>
                                    <h1 className='text-3xl font-bold'>IntelliSync</h1>
                                </div>
                                <p className='pl-4 pt-2 text-2xl font-semibold opacity-75'>Create Your Account</p>
                                <p className=' text-slate-300 px-4 py-2 opacity-75'>Start your website in seconds.
                                    Already have an account? <Link to='/'><span className='text-sky-400'>Login here</span></Link>
                                </p>
                            </div>
                            <div className='p-4'>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
