import React, { useState } from 'react';
import './custom.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify'

const Login = () => {

    const navigate = useNavigate();

    const [info, setInfo] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (event) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
    }

    async function submitHandler(event) {
        event.preventDefault();
        try {
            const response = await axios.post("https://intellisync-hack-backend.onrender.com/", info);

            if (response.data.success === true) {
                toast.success("Login Successfully");
                // localStorage.setItem("token", response.data.token);
                navigate('/home');
                setInfo({
                    email: '',
                    password: '',
                });
            }
            else {
                toast.error("Email or password doesn't match");
            }


        } catch (error) {
            console.error("Error during signup:", error);
            toast.error("Error during login. Please try again later.");
        }
    }

    return (
        <>
            <div className='hvh flex items-center justify-center text-white'>
                <div className='flex flex-col bg-black p-10 rounded-md drop-shadow-md lg:w-3/12 '>
                    <div className='flex items-center pt-2'>
                        <h1 className='text-3xl font-bold'>IntelliSync</h1>
                    </div>
                    <div className='mt-5 mb-5'>
                        <p className='font-semibold font-serif text-lg'>Elevate your online presence</p>
                        <p className='text-lg text-sky-500 font-bold'>User Login</p>
                    </div>
                    <div>
                        <form onSubmit={submitHandler}>
                            <div className='flex flex-col py-1'>
                                <label htmlFor="email" className='font-bold'>
                                    Email
                                </label>
                                <input type='email' onChange={changeHandler} required placeholder='Enter email...' id='email' className='pl-3 rounded-md bg-slate-500 text-white py-1' name="email" />
                            </div>
                            <div className='flex flex-col py-1'>
                                <label htmlFor="password" className='font-bold'>
                                    Password
                                </label>
                                <input type='password' onChange={changeHandler} required placeholder='Enter email...' id='password' className='pl-3 rounded-md bg-slate-500 text-white py-1' name='password' />
                            </div>
                            <div>
                                <button type='submit' className='bg-sky-400 w-full mt-4 py-2 rounded-md font-bold hover:bg-sky-500'>Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='mt-5'>
                        <p className='text-slate-300 px-4 py-2 opacity-75'>Don't have an Account ? <Link to='/signup'><span className='text-sky-400'>Sign up here</span></Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
