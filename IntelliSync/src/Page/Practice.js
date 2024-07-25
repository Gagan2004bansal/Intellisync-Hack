import React from 'react';
import { Link } from 'react-router-dom';
import './custom.css';

const Practice = () => {
    return (
        <div className='w-full sm:w-9/12  mx-auto p-5 h-90b overflow-x-scroll mb-0 scrollbar-hide'>
            <div className='flex flex-row'>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-16 mx-auto">
                        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                            <h1 class="sm:text-3xl text-[25px] md:text-[40px] font-bold title-font mb-2 text-gray-900">Practice Arena</h1>
                            <p class="lg:w-1/2 w-full leading-relaxed text-purple-500 font-extrabold text-[20px]">Practice makes perfect. Learn, build, master.</p>
                        </div>
                        <div class="flex flex-wrap -m-4">
                            {/* <!-- Compiler Service --> */}
                            <div class="xl:w-1/3 md:w-1/2 p-4">
                                <Link to='/companies'>
                                    <div class="border-4 border-gray-500 p-6 rounded-lg bg-black">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <h2 class="text-lg text-white font-medium title-font mb-2">Companies Wise Question</h2>
                                        <p class="leading-relaxed text-base text-white opacity-60">Write, Compile, and Execute Code Instantly. Enjoy fast, reliable, and efficient compilation to streamline your coding process.</p>
                                    </div>
                                </Link>
                            </div>

                            {/* <!-- Core Subjects --> */}
                            <div class="xl:w-1/3 md:w-1/2 p-4">
                                <Link to="/core">
                                    <div class="border-4 border-black border-opacity-60 p-6 rounded-lg bg-white">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Comprehensive Core Subjects</h2>
                                        <p class="leading-relaxed text-base"> Dive deep into essential cs subjects such as Algo, Data Structures, Operating Systems, Computer Networks, Databases, and more.</p>
                                    </div>
                                </Link>
                            </div>

                            {/* <!-- DSA Sheets --> */}
                            <div class="xl:w-1/3 md:w-1/2 p-4">
                                <Link to="/sheet">
                                    <div class="border-4 border-gray-500 p-6 rounded-lg bg-black">
                                        <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <h2 class="text-lg text-white font-medium title-font mb-2">DSA Practice Sheets</h2>
                                        <p class="leading-relaxed text-base text-white opacity-60">Tackle a wide variety of problems and enhance your algorithmic thinking and problem-solving abilities.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='text-[25px] md:text-[40px] font-semibold text-center'>Best Free Tutorials in Market</div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-16 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {/* <!-- DSA Playlist --> */}
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-4 border-black border-opacity-60 rounded-lg overflow-hidden bg-white">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://media.licdn.com/dms/image/D5622AQES3mxq38i5Bw/feedshare-shrink_800/0/1679999565760?e=2147483647&v=beta&t=FSHlXKGdlDRIrvk51LzfR9IWkQOdX4UYq8NWDmgHWms" alt="DSA Playlist" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">DSA Playlist</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Take You Forward</h1>
                                    <p class="leading-relaxed mb-3">Sharpen your problem-solving skills with this comprehensive Data Structures and Algorithms playlist. Covering all essential topics, this playlist will help you master DSA concepts with practical examples and problem-solving sessions.</p>
                                    <div class="flex items-center flex-wrap">
                                        <a href="https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&feature=shared" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- DBMS Playlist --> */}
                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-4 border-white rounded-lg overflow-hidden bg-black">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ytimg.com/vi/TYo_CUnIWP8/maxresdefault.jpg" alt="DBMS Playlist" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">DBMS Playlist</h2>
                                    <h1 class="title-font text-lg font-medium text-white mb-3">CodeHelp - by Love Babbar</h1>
                                    <p class="leading-relaxed mb-3 text-white opacity-60">Master Database Management Systems with this detailed playlist. From relational databases to SQL queries, this series covers all the essential topics you need to become proficient in DBMS.</p>
                                    <div class="flex items-center flex-wrap">
                                        <a href="https://youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU&feature=shared" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 md:w-1/3">
                            <div class="h-full border-4 border-black border-opacity-60 rounded-lg overflow-hidden bg-white">
                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/6332598ffef6dfd662b7b03e2f51dffd.jpeg" alt="Java Playlist" />
                                <div class="p-6">
                                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Java Playlist</h2>
                                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Apna College</h1>
                                    <p class="leading-relaxed mb-3">Learn Java programming with this comprehensive playlist from Apna College. Covering basic to advanced concepts, this series is perfect for anyone looking to master Java development.</p>
                                    <div class="flex items-center flex-wrap">
                                        <a href="https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&feature=shared" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Practice
