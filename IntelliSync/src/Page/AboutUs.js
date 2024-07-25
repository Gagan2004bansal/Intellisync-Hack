import React from 'react';
import { FaCopyright } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const AboutUs = () => {
    return (
        <div className='w-full sm:w-9/12 mx-auto p-5 h-90b overflow-x-scroll'>
            <div>
                <div className='mb-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
                <div className='font-extrabold text-2xl'>Welcome to Intellisync, where knowledge meets innovation! 🚀</div>
                <div className='mt-1 w-full px-2 rounded-xl h-1 bg-gray-500'></div>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl'>About Intellisync</h1>
                <p className='font-medium mt-1'>At <span className='text-red-700 font-extrabold'>Intellisync</span>, we believe in empowering minds through seamless synchronization of knowledge and technology. Our platform is more than just a learning hub—it's your digital compass for navigating the vast landscape of tutorials, roadmaps, blogs, notes, and beyond.</p>
            </div>
            <div className='my-5'>
                <h1 className='font-bold text-xl'>Why Intellisync?</h1>
                <p className='font-medium mt-1'>🎓 <span className='text-sky-700 font-bold'>Tutorials</span>: Dive into a rich library of tutorials crafted to cater to every learning style. From coding wizards to design enthusiasts, we've got you covered.</p>
                <p className='font-medium mt-1'>🚀 <span className='text-sky-700 font-bold'>Roadmaps</span>: Chart your course to success with our curated roadmaps. Whether you're a beginner or an expert, our guided paths ensure you reach your destination efficiently.</p>
                <p className='font-medium mt-1'>📚 <span className='text-sky-700 font-bold'>Blogs</span>: Stay updated with the latest tech innovations shaping the future. Explore our insights into new technologies, their features, and applications to stay ahead and enhance your operations.</p>
                <p className='font-medium mt-1'>🗒️ <span className='text-sky-700 font-bold'>Notes</span>: Jot down your insights, discoveries, and aha moments with our intuitive note-taking feature. Your ideas, organized and accessible whenever inspiration strikes.</p>
                <p className='font-medium mt-1'>🌐 <span className='text-sky-700 font-bold'>And Much More</span>: <span className='text-red-700 font-extrabold'>Intellisync</span> is not just a platform; it's a dynamic ecosystem. Stay tuned for regular updates, challenges, and exciting features that keep your learning experience fresh and engaging.</p>
            </div>

            <div className='my-5'>
                <p className='font-medium mt-1'>Behind the scenes, <span className='text-red-700 font-extrabold'>Intellisync</span> a visionary in the realm of educational technology. With a passion for making learning accessible and enjoyable, Our team's commitment to excellence is woven into every aspect of <span className='text-red-700 font-extrabold'>Intellisync</span>.</p>
                <br />
                <p className='font-medium mt-1'>Join us at <span className='text-red-700 font-extrabold'>Intellisync</span> and embark on a journey where education meets innovation. Your path to knowledge has never been more interactive, more personalized, and more exciting. Welcome to a brighter, smarter future with <span className='text-red-700 font-extrabold'>Intellisync! </span> ✨</p>
            </div>

            <div className='flex flex-col items-center'>
                <p className='text-center font-extrabold flex items-center gap-x-1'>IntelliSync <FaCopyright /> 2024</p>
                <div className='flex gap-2 mt-2 text-2xl cursor-pointer'>
                    <FaInstagram />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaGithub />
                </div>
            </div>

        </div>
    )
}

export default AboutUs
