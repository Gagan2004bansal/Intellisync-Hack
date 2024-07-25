// src/components/BookFinder.js
import React, { useState } from 'react';

const BookFinder = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        if (searchTerm) {
            // Fetch books from an API or any data source
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
            const data = await response.json();
            setSearchResults(data.items || []);
        }
    };

    return (
        <div className="w-full sm:w-9/12 mx-auto p-5 h-90b overflow-x-scroll mb-0">
            <div className="container mx-auto">
                <div className="text-center mt-5">
                    <h1 className="text-3xl font-bold">Book Finder</h1>
                    <div className="mt-4 flex justify-center">
                        <div className="input-group flex w-full sm:w-8/12 md:w-6/12">
                            <input
                                type="text"
                                className="form-control w-full px-4 py-2 border-2 border-black rounded-l-md bg-gray-100 text-black"
                                placeholder="Search Books!..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                className="btn btn-primary bg-purple-500 text-white px-4 py-2 rounded-r-md"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-center text-2xl font-semibold">Search Result</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                        {searchResults
                            .filter((book) => book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail)
                            .map((book) => (
                                <div key={book.id} className="card p-4 border rounded shadow-lg">
                                    <img
                                        src={book.volumeInfo.imageLinks.thumbnail}
                                        alt={`${book.volumeInfo.title} cover`}
                                        className="w-full h-48 object-cover mb-4"
                                    />
                                    <h3 className="text-lg font-bold">{book.volumeInfo.title}</h3>
                                    <p className="text-sm">{book.volumeInfo.authors?.join(', ')}</p>
                                    <p className="text-sm">{book.volumeInfo.publishedDate}</p>
                                    <a
                                        href={book.volumeInfo.previewLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-500 mt-2 inline-block"
                                    >
                                        Read Book
                                    </a>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookFinder;
