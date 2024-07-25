import React from 'react';
import { FaImage } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import axios from 'axios';
import { useState, useRef } from 'react';
import './custom.css';

const Publish = () => {

    const inputFile = useRef(null);

    const onButtonClick = () => {
        inputFile.current.click();
    };

    const maxCharacters = 15000;
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [data, setData] = useState({ title1: '', content: '' });

    const handleTitle = (event) => {
        const inputVal = event.target.value;
        setTitle(inputVal);
        setData((prevData) => ({ ...prevData, title1: inputVal }));
    }

    const handleChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxCharacters) {
            setValue(inputValue);
            setData((prevData) => ({ ...prevData, content: inputValue }));
        }
    };

    async function submitHandler() {
        try {
            if (title.length > 0 && value.length > 0) {
                const response = await axios.post("http://localhost:3000/publish", data);

                console.log(response);

                toast.success("Posted!");
                setTitle('');
                setValue('');
                setData({ title1: '', content: '' });
            } else {
                toast.error("Can't Publish");
            }
        } catch (error) {
            toast.error("Network Error! try again later");
        }
    }

    return (
        <div>
            <div>
                <div className='flex flex-col items-center justify-center ninety-vh relative overflow-y-scroll scrollbar-hide '>
                    <div className='flex bg-black min-h-96 rounded-lg p-2 md:p-4 gap-x-4 items-start justify-center drop-shadow-2xl shadow-xl '>
                        {/* <div className='bg-black w-24 h-24 rounded-t-full rounded-br-full absolute top-[-20px] right-[-20px] text-white flex items-center justify-center text-2xl font-bold border-2  border-white shadow-lg'><TfiWrite /></div> */}
                        <div className='bg-white p-2 rounded-full flex items-center justify-center text-2xl'>
                            <CgProfile />
                        </div>
                        <div className='w-full flex flex-col gap-2 md:gap-0 md:flex-row'>
                            <form className='flex flex-col gap-x-2 items-end gap-y-6'>
                                <input title={title} onChange={handleTitle} className='w-full rounded-md px-2 py-2 bg-slate-900 text-lg font-serif text-white' placeholder='Title' />
                                <textarea value={value} onChange={handleChange} maxLength={maxCharacters} className='min-h-96 bg-slate-900 min-w-24 md:min-w-72 lg:min-w-96 text-white px-2 py-2 text-lg font-serif' placeholder='Tell your story...' name='content' />
                                <input type='file' id='file' ref={inputFile} style={{ display: 'none' }} />
                            </form>
                            <div className='flex items-end gap-x-2'>
                                <div className=' cursor-pointer bg-black text-white rounded-md text-lg px-4 py-2 ml-2' onClick={onButtonClick}><FaImage /></div>
                                <button className='bg-sky-400 hover:bg-sky-600  px-10 rounded-md h-10 text-white w-full text-lg' onClick={submitHandler}>Publish</button>
                            </div>
                        </div>
                    </div>
                    {maxCharacters - value.length <= 30 && (
                        <div className='text-red-500 mt-4'>
                            {maxCharacters - value.length} characters remaining
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Publish
