import React from 'react';

const Core = () => {
    const courses = [
        {
            id: 1,
            title: "Computer Networks",
            description: "Computer networking is like having a group of friends who all have phones and can call or text each other. In computer networking, instead of phones, we have computers and instead of phone lines, we use cables, Wi-Fi, or other methods to connect them. When computers are connected to a network, they can share information and resources, like files, printers, and internet connections.",
            link: "/cn",
            iconPath: (<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>),
        },
        {
            id: 2,
            title: "Operating Systems",
            description: "An operating system is software that manages computer hardware. The hardware must provide appropriate mechanisms to ensure the correct operation of the computer system and to prevent user programs from interfering with the proper operation of the system. A more common definition is that the operating system is the one program running at all times on the computer (usually called the kernel), with all else being application programs.",
            link: "/os",
            iconPath: (
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            ),
        },
        {
            id: 3,
            title: "DBMS",
            description: "A Database Management System (DBMS) is a software system that is designed to manage and organize data in a structured manner. It allows users to create, modify, and query a database, as well as manage the security and access controls for that database.A database is a collection of interrelated data which helps in the efficient retrieval, insertion, and deletion of data from the database and organizes the data in the form of tables, views, schemas, reports, etc.",
            link: "/dbms",
            iconPath: (
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
            ),
        },
        {
            id: 4,
            title: "Linux",
            description: "The Linux Operating System is a type of operating system that is similar to Unix, and it is built upon the Linux Kernel. The Linux Kernel is like the brain of the operating system because it manages how the computer interacts with its hardware and resources. It makes sure everything works smoothly and efficiently. But the Linux Kernel alone is not enough to make a complete operating system. To create a full and functional system, the Linux Kernel is combined with a collection of software packages and utilities, which are together called Linux distributions.",
            link: "/linux",
            iconPath: (
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            ),
        },
    ];

    return (
        <section className="text-gray-600 body-font h-90b overflow-y-scroll scrollbar-hide">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                {courses.map((course) => (
                    <div key={course.id} className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-black opacity-40 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{course.id}</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                                {course.iconPath}
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{course.title}</h2>
                                <p className="leading-relaxed">{course.description}</p>
                                <a href={course.link} className="mt-4 inline-flex text-indigo-500 border-b-2 border-indigo-500 py-1 px-2 text-sm font-medium hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Core;