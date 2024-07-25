import React from "react";
// import { Link } from 'react-router-dom';
import "./custom.css";
// import { FaSearch } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import compiler from "../images/compiler.png"
import chatbot from "../images/chatbot.png"
import questionmark from "../images/question.png"
import road from "../images/road.png"
import article from "../images/article.png"
import code from "../images/code.png"


const Home = () => {
    const name = "IntelliSync";


    return (
        <>
            <div className="w-full sm:w-9/12 mx-auto p-5 h-90b overflow-y-scroll scrollbar-hide">
                <div className="flex flex-col h-90b">
                    <div className="">
                        <p className="font-extrabold text-3xl">
                            Welcome To, <span className="text-purple-600">{name}</span>
                        </p>
                        <div className="w-full bg-gray-300 h-1 mt-2"></div>
                    </div>


                    <div classname="head ">
                        <div className="heading flex flex-col justify-center items-center text-center text-5xl font-bold py-4 font-sans mt-[8vw]">
                            <div>
                                <span className="text-purple-600 mr-4">Developer's</span>
                                Hub : Your Ultimate
                            </div>
                            <div>
                                Source for All Things Tech
                            </div>
                        </div>


                        <div className="flex flex-col items-center text-center px-4 md:px-6 lg:px-8 mt-4">
                            <p className="text-lg md:text-base lg:text-sm mb-2">
                                Unlock a world of tech innovation with in-depth articles, <span className="text-purple-600 font-semibold">comprehensive guides</span>, and <span className="text-purple-600 font-semibold">community</span>
                            </p>
                            <p className="text-lg md:text-base lg:text-sm mb-2">
                                <span className="text-purple-600 font-semibold"> driven insights. Elevate your development journey</span> without any cost
                            </p>
                            <p className="text-lg md:text-base lg:text-sm">
                                because our platform is entirely free!
                            </p>
                            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 mt-[2vw]">
                                Get Started!
                            </button></div>


                    </div>

                    <div className="sections px-4 py-8 mt-[4vw]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* First Line of Boxes */}
                            <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center flex flex-col items-center">
                                <img src={compiler} alt="Placeholder Image" className="w-24 h-24 object-cover mb-6" />
                                <p className="font-semibold mb-4 text-xl">Compiler</p>
                                <p>The compiler's tokenization and syntax parsing ensure efficient code generation.</p>
                            </div>
                            <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center flex flex-col items-center">
                                <img src={questionmark} alt="Placeholder Image" className="w-24 h-24 object-cover mb-6" />
                                <p className="text-xl font-semibold mb-4">Quizzes</p>
                                <p>Assessment metrics and response analytics provide insights into quiz performance.</p>
                            </div>
                            <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center flex flex-col items-center">
                                <img src={road} alt="Placeholder Image" className="w-24 h-24 object-cover mb-6" />
                                <p className="text-xl font-semibold mb-4">Roadmap</p>
                                <p>Key objectives and timelines define the roadmap's structure and progression.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {/* Second Line of Boxes */}
                            <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center flex flex-col items-center">
                                <img src={chatbot} alt="Placeholder Image" className="w-24 h-24 object-cover mb-6" />
                                <p className="text-xl font-semibold mb-4">Chatbot</p>
                                <p>Dialogue management and response generation drive the chatbot's interactions.</p>
                            </div>
                            <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center flex flex-col items-center">
                                <img src={article} alt="Placeholder Image" className="w-28 h-28 object-cover mb-6" />
                                <p className="text-xl font-semibold mb-4">Blogs</p>
                                <p>In-depth exploration and critical evaluation drive the article's content.</p>
                            </div>
                            <div className="bg-gray-200 p-8 rounded-lg shadow-md text-center flex flex-col items-center">
                                <img src={code} alt="Placeholder Image" className="w-24 h-24 object-cover mb-6" />
                                <p className="text-xl font-semibold mb-4">Code</p>
                                <p>Efficient data management and algorithm design underpin the approach.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-3xl font-bold mt-8">
                        <span className="text-purple-600 mr-1">Transform</span> Your
                        <span className="text-purple-600 ml-2">Developer</span> Journey with
                        Comprehensive Free Guides and Roadmaps
                    </div>


                    <div className="my-3 mt-[7vw] flex flex-wrap items-center justify-center gap-y-4">
                        <p className="my-3 mx-4 bg-black text-white font-bold border px-5 py-2 w-fit border-gray-500 rounded-md">
                            -- We Provide Roadmaps For Beginners --
                        </p>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-5 gap-y-2 w-full px-4">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="mx-4 mt-4 w-full lg:w-[550px] h-auto rounded-md drop-shadow-lg relative z-10"
                                alt=""
                            />
                            <div className="flex flex-col lg:py-6 lg:w-1/2 lg:pl-12 text-center lg:text-left">
                                <div className="flex flex-col mb-10 lg:items-start items-center">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="6" cy="6" r="3"></circle>
                                            <circle cx="6" cy="18" r="3"></circle>
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg font-medium mb-3">
                                            Software Engineering Roadmap
                                        </h2>
                                        <p className="leading-relaxed text-base mb-4">
                                            This roadmap is designed to guide engineering students through the fundamentals of software development, covering programming languages, data structures, algorithms, and software design principles. It provides a solid foundation for building a successful career in software engineering.
                                        </p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                                            Learn More
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="my-3 mt-7 flex flex-wrap items-center justify-center gap-y-4">
                        <p className="my-3 mx-4 bg-black text-white font-bold border px-5 py-3 w-fit border-gray-500 rounded-md">
                            -- We Help in MNC's --
                        </p>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-5 gap-y-4 w-full px-4">
                            <div className="flex flex-col lg:py-6 lg:w-1/2 lg:pr-12 text-center lg:text-left">
                                <div className="flex flex-col mb-10 lg:items-start items-center">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="6" cy="6" r="3"></circle>
                                            <circle cx="6" cy="18" r="3"></circle>
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg font-medium mb-3">
                                            A Testament to Our Curriculum
                                        </h2>
                                        <p className="leading-relaxed text-base mb-4">
                                            Our rigorous curriculum, coupled with industry-aligned training, has empowered our students to excel in competitive job markets.
                                        </p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                                            Learn More
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-10 lg:items-start items-center">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg font-medium mb-3">
                                            Nurturing Future Tech Leaders
                                        </h2>
                                        <p className="leading-relaxed text-base mb-4">
                                            The numerous placements in FAANG companies are a testament to our commitment to delivering exceptional education.
                                        </p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                                            Learn More
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <img
                                src="https://imageio.forbes.com/specials-images/imageserve/5da63b70db40260006202a39/faangs/960x0.png?format=png&width=960"
                                alt=""
                                className="mx-4 mt-4 w-full md:w-[400px] h-auto md:h-[300px]  rounded-md drop-shadow-lg"
                            />
                        </div>
                    </div>



                    <div className="my-3 mt-7 flex flex-wrap items-center justify-center gap-y-4">
                        <p className="my-3 mx-auto bg-black text-white font-bold border px-7 py-2 w-fit border-gray-500 rounded-md">
                            -- We Provide Our Inbuilt Compiler --
                        </p>
                        <div className="flex flex-col lg:flex-row gap-x-5 items-center justify-center w-full px-4">
                            <img
                                src="https://code.visualstudio.com/assets/updates/1_64/github-commit-signing-prs.gif"
                                alt=""
                                className="w-full md:w-[600px] md:h-[400px] h-auto object-cover rounded-md drop-shadow-lg"
                            ></img>
                            <div className="flex flex-col flex-wrap lg:py-6 lg:w-2/3 lg:pl-12 lg:text-left text-center">
                                <div className="flex flex-col mb-10 lg:items-start items-center">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="6" cy="6" r="3"></circle>
                                            <circle cx="6" cy="18" r="3"></circle>
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                            Unrestricted Coding Freedom
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Experience coding without limitations. Our platform offers
                                            a robust, built-in compiler accessible to all users, free
                                            of charge
                                        </p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                                            Learn More
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-10 lg:items-start items-center">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                            Accelerate Learning with Instant Feedback
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Our free, integrated compiler provides real-time results,
                                            helping you learn and improve faster.
                                        </p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                                            Learn More
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="my-3 mt-7 flex flex-wrap items-center justify-center gap-y-4">
                        <p className="my-3 mx-auto bg-black text-white font-bold border px-7 py-2 w-fit border-gray-500 rounded-md">
                            -- Inbuilt Chatbot For any Queries --
                        </p>
                        <div className="flex flex-col lg:flex-row gap-x-5 items-center justify-center w-full px-4">
                            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                                <div className="flex flex-col mb-10 lg:items-start items-center">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle cx="6" cy="6" r="3"></circle>
                                            <circle cx="6" cy="18" r="3"></circle>
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                            Personalized Learning Support at Your Fingertips
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Experience a truly customized learning experience with our
                                            intelligent chatbot.
                                        </p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                                            Learn More
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-10 lg:items-start items-center">
                                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            className="w-6 h-6"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                                            Uninterrupted Learning with AI Assistance
                                        </h2>
                                        <p className="leading-relaxed text-base">
                                            Our platform offers a dedicated AI chatbot available 24/7,
                                            ready to assist you with any query related to your
                                            learning journey.
                                        </p>
                                        <a className="mt-3 text-indigo-500 inline-flex items-center">
                                            Learn More
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                className="w-4 h-4 ml-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <img
                                alt=""
                                src="https://cdna.artstation.com/p/assets/images/images/047/673/434/original/puja-kumari-chatbot-1.gif?1648147657"
                                className="w-full md:w-[500px] md:h-[300px] h-auto object-cover rounded-md drop-shadow-lg mt-4 lg:mt-0"
                            ></img>
                        </div>
                    </div>


                    <div className="bg-black text-white w-[100] py-4 mt-6">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col items-center text-center">
                                <p className="text-xl font-extrabold flex items-center gap-x-1 mb-1">
                                    IntelliSync <FaCopyright /> 2024
                                </p>
                                <p className="text-sm mb-2">All Rights Reserved.</p>
                                <div className="flex gap-4 mt-2 text-2xl">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                        <FaTwitter />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                        <FaGithub />
                                    </a>
                                </div>
                                <div className="mt-4 text-sm">
                                    <a href="/about" className="hover:underline mx-2">About Us</a> |
                                    <a href="/contact" className="hover:underline mx-2">Contact</a> |
                                    <a href="/privacy" className="hover:underline mx-2">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Home;